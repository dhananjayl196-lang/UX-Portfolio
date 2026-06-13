"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "s01", label: "01 Intro" },
  { id: "s02", label: "02 Problem" },
  { id: "s03", label: "03 Audit" },
  { id: "s04", label: "04 Personas" },
  { id: "s05", label: "05 Insights" },
  { id: "s07", label: "06 Design" },
  { id: "s08", label: "07 System" },
  { id: "s09", label: "08 Impact" },
];

export default function SideNav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="fixed left-6 top-[58px] z-[150] flex flex-col gap-1" style={{ marginTop: "32px" }}>
      {sections.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            className="flex items-center gap-2.5 group no-underline"
            style={{ textDecoration: "none" }}
          >
            {/* Indicator line */}
            <span
              className="flex-shrink-0 rounded-full transition-all duration-300"
              style={{
                width: isActive ? "20px" : "8px",
                height: "2px",
                background: isActive ? "#00418F" : "#d4d4d8",
              }}
            />
            {/* Label — only visible when active or hovered */}
            <span
              className="text-xs font-semibold transition-all duration-200 whitespace-nowrap"
              style={{
                color: isActive ? "#00418F" : "#a1a1aa",
                opacity: isActive ? 1 : 0,
                transform: isActive ? "translateX(0)" : "translateX(-4px)",
              }}
            >
              {label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
