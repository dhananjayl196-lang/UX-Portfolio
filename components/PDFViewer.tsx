"use client";
import { useState } from "react";

interface Props { src: string; title?: string; }

export default function PDFViewer({ src, title = "Case Study PDF" }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full rounded-[4px] overflow-hidden border border-black/10 bg-paper-2">
      <div className="flex items-center justify-between px-5 py-3 border-b border-black/[.08] bg-paper-2">
        <span className="font-body text-[12px] text-ink-3 tracking-[.06em] uppercase">{title}</span>
        <a href={src} target="_blank" rel="noopener noreferrer"
          className="font-body text-[11px] text-accent tracking-[.06em] uppercase no-underline hover:underline">
          Open full screen
        </a>
      </div>
      {!loaded && (
        <div className="flex items-center justify-center h-[200px] bg-paper-2">
          <span className="font-body text-[13px] text-ink-3">Loading PDF</span>
        </div>
      )}
      <iframe src={src} title={title}
        style={{ width: "100%", height: "100vh", border: "none", display: loaded ? "block" : "none" }}
        onLoad={() => setLoaded(true)}
      />
      <div className="flex items-center justify-between px-5 py-3 border-t border-black/[.08] bg-paper-2">
        <span className="font-body text-[12px] text-ink-3">Scroll to read the full case study</span>
        <a href={src} download
          className="font-body text-[11px] text-accent tracking-[.06em] uppercase no-underline hover:underline">
          Download PDF
        </a>
      </div>
    </div>
  );
}
