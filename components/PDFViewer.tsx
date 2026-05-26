"use client";
import { useState } from "react";

interface Props { src: string; title?: string; }

export default function PDFViewer({ src, title = "Case Study PDF" }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full rounded-[4px] overflow-hidden border border-black/10 bg-paper-2">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-black/08 bg-paper-2">
        <span className="font-body text-[12px] font-500 text-ink-3 tracking-[.06em] uppercase">
          {title}
        </span>
        <a
          href={src}
          download
          className="font-body text-[11px] font-500 text-accent tracking-[.06em] uppercase hover:text-accent-dk transition-colors no-underline flex items-center gap-1.5"
        >
          ↓ Download PDF
        </a>
      </div>

      {/* Loading skeleton */}
      {!loaded && (
        <div className="flex items-center justify-center h-[120px] bg-paper-2">
          <span className="font-body text-[13px] text-ink-3">Loading PDF…</span>
        </div>
      )}

      {/* Embed */}
      <iframe
        src={`${src}#view=FitH&toolbar=0`}
        title={title}
        className="pdf-frame"
        style={{ height: "90vh", display: loaded ? "block" : "none" }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
