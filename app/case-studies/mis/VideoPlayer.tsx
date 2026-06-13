"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

export interface FallbackSlide {
  step: string;
  title: string;
  src: string;
}

interface VideoPlayerProps {
  videoSrc?: string;
  fallbackSlides: FallbackSlide[];
  slideIntervalMs?: number;
  slidesOnly?: boolean;
}

const DEFAULT_INTERVAL = 3000;
const FADE_DURATION = 400;

export default function VideoPlayer({
  videoSrc,
  fallbackSlides,
  slideIntervalMs = DEFAULT_INTERVAL,
  slidesOnly = false,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showSlides, setShowSlides] = useState(slidesOnly);
  const [videoFailed, setVideoFailed] = useState(slidesOnly);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visible, setVisible] = useState(true);

  // ── Safely pause the video, swallowing any AbortError ─────────────────
  const safePause = useCallback(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.pause();
    setIsPaused(true);
  }, []);

  // ── Safely play the video, swallowing AbortError from async promise ────
  const safePlay = useCallback(() => {
    const vid = videoRef.current;
    if (!vid) return;
    const promise = vid.play();
    if (promise !== undefined) {
      promise.catch((err) => {
        // AbortError is expected when the element is removed mid-play — ignore it
        if (err.name !== "AbortError") console.error(err);
      });
    }
    setIsPaused(false);
  }, []);

  // ── Pause video on unmount to prevent AbortError ───────────────────────
  useEffect(() => {
    return () => {
      safePause();
    };
  }, [safePause]);

  // ── Resume video when switching back from slides ───────────────────────
  useEffect(() => {
    if (showSlides || videoFailed) return;
    safePlay();
  }, [showSlides, videoFailed, safePlay]);

  // ── Auto-advance slides ────────────────────────────────────────────────
  const goToSlide = useCallback((index: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrentSlide(index);
      setVisible(true);
    }, FADE_DURATION);
  }, []);

  useEffect(() => {
    if (!showSlides) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % fallbackSlides.length;
        setVisible(false);
        setTimeout(() => {
          setCurrentSlide(next);
          setVisible(true);
        }, FADE_DURATION);
        return prev; // hold current until fade completes
      });
    }, slideIntervalMs);
    return () => clearInterval(timer);
  }, [showSlides, fallbackSlides.length, slideIntervalMs]);

  function handleMouseEnter() {
    if (showSlides) return;
    safePause();
  }

  function handleMouseLeave() {
    if (showSlides) return;
    safePlay();
  }

  function handleError() {
    setVideoFailed(true);
    setShowSlides(true);
  }

  // ── Toggle: pause video BEFORE switching to slides ─────────────────────
  function handleToggle() {
    if (showSlides) {
      // Switching to video — slides → video
      setShowSlides(false);
      setCurrentSlide(0);
      setVisible(true);
    } else {
      // Switching to slides — pause first, then unmount video
      safePause();
      setShowSlides(true);
      setCurrentSlide(0);
      setVisible(true);
    }
  }

  const slide = fallbackSlides[currentSlide];

  return (
    <div className="mx-5 mb-0">

      {/* ── Content area ──────────────────────────────────────────────── */}
      {showSlides ? (
        <div className="relative border border-zinc-200" style={{ background: "#f4f4f5", aspectRatio: "16/9", overflow: "hidden" }}>

          {/* Step + title pill */}
          <div className="absolute top-4 left-4 z-10">
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold"
              style={{ background: "#00418F", color: "#fff" }}
            >
              <span>{slide.step}</span>
              <span className="opacity-50">·</span>
              <span>{slide.title}</span>
            </span>
          </div>

          {/* Dot navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
            {fallbackSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className="w-1.5 h-1.5 rounded-full transition-colors"
                style={{ background: i === currentSlide ? "#00418F" : "#d4d4d8" }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Fading image */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transition: `opacity ${FADE_DURATION}ms ease-in-out`,
              width: "100%",
              height: "100%",
              position: "relative",
            }}
          >
            <Image
              src={slide.src}
              alt={`${slide.step} – ${slide.title}`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      ) : (
        <div
          className="relative cursor-pointer border border-zinc-200"
          style={{ background: "transparent", maxHeight: "560px", overflow: "hidden" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isPaused && (
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
              <span
                className="text-xs font-semibold px-3 py-1.5 rounded-full shadow"
                style={{ background: "rgba(0,0,0,0.65)", color: "#fff", letterSpacing: "0.05em" }}
              >
                Paused
              </span>
            </div>
          )}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            onError={handleError}
            className="w-full block"
            style={{ background: "transparent" }}
          >
            <source src={videoSrc} type="video/webm" />
          </video>
        </div>
      )}

      {/* ── Toggle ────────────────────────────────────────────────────── */}
      {!slidesOnly && (
        <div className="flex justify-end items-center gap-2 py-2">
          <span className="text-xs font-medium" style={{ color: !showSlides ? "#00418F" : "#a1a1aa" }}>
            Video
          </span>
          <button
            onClick={handleToggle}
            className="relative w-9 h-5 rounded-full transition-colors flex-shrink-0 focus:outline-none"
            style={{ background: showSlides ? "#00418F" : "#d4d4d8" }}
            aria-label={showSlides ? "Switch to video" : "Switch to slides"}
          >
            <span
              className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-200"
              style={{ left: showSlides ? "calc(100% - 18px)" : "2px" }}
            />
          </button>
          <span className="text-xs font-medium" style={{ color: showSlides ? "#00418F" : "#a1a1aa" }}>
            Slides
          </span>
        </div>
      )}

    </div>
  );
}
