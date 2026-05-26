import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import PDFViewer from "@/components/PDFViewer";

export const metadata: Metadata = {
  title: "Atlas — Enterprise MES Dashboard | Dhananjay Lokhande",
  description:
    "How I collapsed 45 minutes of daily reconciliation into a 10-minute glanceable decision surface for a 100%-automated pharma packaging plant.",
};

const impacts = [
  {
    value: "~75%",
    metric: "Reduction in TTD",
    detail:
      "Time to decision dropped from ~60 minutes of morning reconciliation calls to ~10 minutes of dashboard scan + targeted drill-down.",
    icon: "⚡",
  },
  {
    value: "≥80%",
    metric: "Decisions via Atlas",
    detail:
      "Lifted the share of weekly decisions backed by Atlas data from ad-hoc reconciliation to data-driven action.",
    icon: "📊",
  },
  {
    value: "7:30 AM",
    metric: "Ritual anchor",
    detail:
      "Atlas is anchored to the MD's existing 7:30 AM status check — it becomes the first app he opens, ahead of email.",
    icon: "🎯",
  },
];

const tags = ["Enterprise UX", "Dashboard Design", "Data Visualization", "B2B SaaS"];

export default function AtlasPage() {
  return (
    <div className="pt-[58px] bg-paper">

      {/* ── Back ── */}
      <div className="max-w-[1200px] mx-auto px-[52px] pt-10 pb-0">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-body text-[12px] font-medium text-ink-3 no-underline hover:text-ink transition-colors tracking-[.04em] uppercase"
        >
          ← All Work
        </Link>
      </div>

      {/* ── Hero ── */}
      <AnimateIn className="max-w-[1200px] mx-auto px-[52px] pt-10 pb-16">
        {/* Tags */}
        <div className="flex gap-2 flex-wrap mb-6">
          {tags.map((t, i) => (
            <span key={t}
              className={`font-body text-[10px] font-medium tracking-[.08em] uppercase px-3 py-1.5 rounded-[2px] ${
                i === 0 ? "bg-green text-white" : "bg-black/06 text-ink-2 border border-black/[.12]"
              }`}>
              {t}
            </span>
          ))}
          <span className="font-body text-[10px] font-medium text-ink-3 tracking-[.06em] uppercase self-center ml-1">
            Product Armor · 2022–2024
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-display font-normal text-ink tracking-[-0.04em] leading-[1.0] mb-6"
          style={{ fontSize: "clamp(40px,6vw,76px)" }}
        >
          Atlas — Enterprise<br />
          <em className="italic text-accent">MES Dashboard</em>
        </h1>

        {/* Summary */}
        <p className="font-body text-[18px] font-light text-ink-2 max-w-[680px] leading-[1.75] mb-10">
          Collapsed 45 minutes of manual morning reconciliation into a single, glanceable decision surface
          for the Managing Director of a 100%-automated pharma packaging plant —
          replacing eight fragmented vertical reports with one trusted screen.
        </p>

        {/* Meta row */}
        <div className="flex gap-10 flex-wrap border-t border-black/08 pt-8">
          {[
            { label: "Role",     value: "UI/UX Designer" },
            { label: "Timeline", value: "2 Months" },
            { label: "Client",   value: "Product Armor" },
            { label: "Domain",   value: "Pharmaceutical SaaS" },
            { label: "Tools",    value: "Figma · FigJam · Claude MCP" },
          ].map((m) => (
            <div key={m.label}>
              <div className="font-body text-[10px] font-medium text-ink-3 tracking-[.1em] uppercase mb-1">{m.label}</div>
              <div className="font-body text-[14px] font-medium text-ink">{m.value}</div>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* ── Hero Image ── */}
      <AnimateIn direction="none" className="max-w-[1200px] mx-auto px-[52px] mb-20">
        <div className="relative w-full rounded-[6px] overflow-hidden border border-black/08 shadow-[0_8px_48px_rgba(0,0,0,0.10)]"
          style={{ height: "clamp(340px,50vw,620px)" }}>
          <Image
            src="/images/atlas-hero.png"
            alt="Atlas Dashboard — Decision Surface"
            fill
            className="object-cover object-top"
            priority
          />
          {/* subtle label */}
          <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-[8px] text-white/80 font-body text-[11px] tracking-[.06em] uppercase px-3 py-1.5 rounded-[2px]">
            Atlas · Decision Surface
          </div>
        </div>
      </AnimateIn>

      {/* ── Impact Metrics ── */}
      <section className="bg-paper-2 border-y border-black/08">
        <div className="max-w-[1200px] mx-auto px-[52px] py-16">
          <AnimateIn>
            <div className="flex items-center gap-3 mb-10">
              <span className="block w-6 h-px bg-ink-3" />
              <span className="font-body text-[11px] font-medium text-ink-3 tracking-[.14em] uppercase">Impact</span>
            </div>
            <h2 className="font-display font-normal tracking-[-0.03em] text-ink leading-[1.05] mb-10"
              style={{ fontSize: "clamp(28px,4vw,42px)" }}>
              Design to compress<br /><em className="italic text-accent">decision time</em>
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-3 gap-3">
            {impacts.map((imp, i) => (
              <AnimateIn key={imp.metric} delay={i * 0.1}>
                <div className="bg-green rounded-[4px] p-7 flex flex-col h-full">
                  <div className="font-body text-[11px] font-medium text-white/50 tracking-[.1em] uppercase mb-4">
                    0{i + 1}
                  </div>
                  <div className="font-display font-normal text-white leading-none tracking-[-0.04em] mb-2"
                    style={{ fontSize: "clamp(28px,3.5vw,42px)" }}>
                    {imp.value}
                  </div>
                  <div className="font-body text-[14px] font-medium text-white mb-4">{imp.metric}</div>
                  <p className="font-body text-[13px] font-light text-white/65 leading-[1.65] mt-auto">{imp.detail}</p>

                  <div className="border-t border-white/20 pt-4 mt-6">
                    <span className="font-body text-[11px] text-green-lt/60 tracking-[.06em] uppercase">
                      {["Plant Intelligence", "Correlation Engine", "Drift Surfacing"][i]}
                    </span>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Context ── */}
      <section className="bg-paper">
        <div className="max-w-[1200px] mx-auto px-[52px] py-16">
          <div className="grid grid-cols-2 gap-16">
            <AnimateIn>
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-6 h-px bg-ink-3" />
                <span className="font-body text-[11px] font-medium text-ink-3 tracking-[.14em] uppercase">The Problem</span>
              </div>
              <p className="font-body text-[16px] font-light text-ink-2 leading-[1.8]">
                The MD at Product Armor spent <strong className="text-ink font-medium">45 minutes every morning</strong> reconciling
                numbers across 8 vertical reports before making a single business decision.
                Machine-level telemetry was arriving at someone who needed variance, not sensor readings.
              </p>
              <blockquote className="mt-6 pl-5 border-l-2 border-accent">
                <p className="font-display italic text-[17px] text-ink-2 leading-[1.65]">
                  &ldquo;I don&apos;t need more data. I need one definition of every number — with the drift surfaced before it becomes a crisis.&rdquo;
                </p>
                <cite className="block mt-2 font-body text-[12px] not-italic text-ink-3 tracking-[.08em] uppercase">
                  Mr. Harsha · MD, Product Armor
                </cite>
              </blockquote>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-6 h-px bg-ink-3" />
                <span className="font-body text-[11px] font-medium text-ink-3 tracking-[.14em] uppercase">The Solution</span>
              </div>
              <p className="font-body text-[16px] font-light text-ink-2 leading-[1.8]">
                A <strong className="text-ink font-medium">glanceable decision surface</strong> — not a reporting wall.
                Atlas surfaces cross-vertical drifts as correlated stories, ranks them by impact,
                and gives the MD one trusted screen to start every morning.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                {[
                  { label: "Exception-first", desc: "Surface only deviations — healthy KPIs don't need real estate" },
                  { label: "Variance over absolutes", desc: "↓12% vs last week matters more than ₹2.4 Cr" },
                  { label: "Cross-vertical correlation", desc: "Sales + Quality + Production = one connected story" },
                ].map((p) => (
                  <div key={p.label} className="flex gap-3 items-start">
                    <span className="text-accent flex-shrink-0 mt-0.5 text-[13px]">—</span>
                    <div>
                      <span className="font-body text-[13px] font-medium text-ink">{p.label}</span>
                      <span className="font-body text-[13px] font-light text-ink-3"> — {p.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Full Case Study PDF ── */}
      <section className="bg-paper-2 border-t border-black/08">
        <div className="max-w-[1200px] mx-auto px-[52px] py-16">
          <AnimateIn>
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-6 h-px bg-ink-3" />
              <span className="font-body text-[11px] font-medium text-ink-3 tracking-[.14em] uppercase">Full Case Study</span>
            </div>
            <h2 className="font-display font-normal tracking-[-0.03em] text-ink leading-[1.05] mb-8"
              style={{ fontSize: "clamp(26px,3.5vw,38px)" }}>
              Deep dive — <em className="italic text-accent">research to outcome</em>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <PDFViewer
              src="/case-studies/Case%20Study.pdf"
              title="Atlas Case Study — Product Armor 2024"
            />
          </AnimateIn>
        </div>
      </section>

      {/* ── Nav ── */}
      <div className="max-w-[1200px] mx-auto px-[52px] py-12 flex justify-between items-center border-t border-black/08">
        <Link href="/#work"
          className="font-body text-[12px] font-medium text-ink-3 no-underline hover:text-ink transition-colors tracking-[.04em] uppercase">
          ← All Case Studies
        </Link>
        <p className="font-body text-[13px] text-ink-3">More case studies coming soon</p>
      </div>

    </div>
  );
}
