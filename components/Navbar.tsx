"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/#work",       label: "Work"       },
  { href: "/#about",      label: "About"      },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact",    label: "Contact"    },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const isCaseStudy = pathname.startsWith("/case-studies");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[200] h-[58px] flex items-center justify-between px-[52px] transition-all duration-300 ${
        scrolled
          ? "bg-paper/95 backdrop-blur-[18px] border-b border-black/10"
          : "bg-paper/90 backdrop-blur-[12px] border-b border-black/[0.06]"
      }`}
    >
      <Link
        href="/"
        className="font-display text-[20px] font-medium text-ink tracking-[-0.01em] no-underline"
      >
        Dhananjay<span className="text-accent">.</span>
      </Link>

      <nav className="flex items-center gap-9">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="font-body text-[12px] font-medium text-ink-3 no-underline tracking-[.06em] uppercase hover:text-ink transition-colors"
          >
            {l.label}
          </Link>
        ))}
        <a
          href="/resume/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-[11px] font-medium tracking-[.08em] uppercase text-white bg-ink px-5 py-2 rounded-[2px] no-underline hover:bg-accent transition-colors"
        >
          Resume ↗
        </a>
      </nav>
    </header>
  );
}
