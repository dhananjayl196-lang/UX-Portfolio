"use client";
import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const el = document.getElementById("cur");
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      el.style.left = e.clientX + "px";
      el.style.top  = e.clientY + "px";
    };
    document.addEventListener("mousemove", onMove);
    const targets = document.querySelectorAll("a, button, .cs-card, [data-cursor]");
    targets.forEach((t) => {
      t.addEventListener("mouseenter", () => el.classList.add("big"));
      t.addEventListener("mouseleave", () => el.classList.remove("big"));
    });
    return () => document.removeEventListener("mousemove", onMove);
  }, []);
  return <div className="cursor" id="cur" />;
}
