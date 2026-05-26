import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Atlas — Enterprise MES Dashboard | Dhananjay Lokhande",
  description:
    "How I reduced time to decision by 45 minutes of manual morning reconciliation into a single, glanceable decision surface for a 100%-automated pharma packaging plant.",
};

const impacts = [
  {
    value: "~75%",
    metric: "Reduction in TTD",
    detail: "Time to decision drop from ~60 minutes of morning reconciliation calls to ~10 minutes of dashboard scan + targeted drill-down.",
    tag: "Plant Intelligence",
  },
  {
    value: "80%",
    metric: "Decisions via Atlas",
    detail: "Lift the share of weekly decisions by 80% action backed by Atlas data. From ad-hoc reconciliation to data-driven action.",
    tag: "Correlation Engine",
  },
  {
    value: "7:30 AM",
    metric: "Become go-to platform",
    detail: "Anchored to the MD's existing 7:30 AM status check ritual — Atlas becomes the first app he opens, ahead of email.",
    tag: "Drift Surfacing",
  },
];

const tags = ["Enterprise UX", "Decision Surface", "Data Visualisation", "B2B SaaS"];

export default function AtlasPage() {
  return (
    <div className="pt-[58px]" style={{ background: "#FFFFFF" }}>

      {/* Back link */}
      <div className="max-w-[1200px] mx-auto px-[52px] pt-10">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-body text-[12px] font-medium text-ink-3 no-underline hover:text-ink transition-colors tracking-[.04em] uppercase"
        >
          &#8592; All Work
        </Link>
      </div>

      {/* Hero */}
      <AnimateIn className="max-w-[1200px] mx-auto px-[52px] pt-10 pb-16">

        {/* Tag pills — white bg, black text, hover becomes #225395 */}
        <div className="flex gap-2 flex-wrap mb-6">
          {tags.map((t, i) => (
            <span
              key={t}
              className="cs-tag-pill font-body text-[11px] font-medium tracking-[.06em] uppercase px-3.5 py-1.5 rounded-full border cursor-default"
              style={
                i === 0
                  ? { background: "#225395", color: "#FFFFFF", borderColor: "#225395" }
                  : { background: "#FFFFFF", color: "#111111", borderColor: "rgba(17,17,17,.18)" }
              }
            >
              {t}
            </span>
          ))}
          <span className="font-body text-[10px] font-medium text-ink-3 tracking-[.06em] uppercase self-center ml-1">
            Product Armor &middot; 2022&ndash;2024
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-display font-semibold text-ink tracking-[-0.03em] leading-[1.0] mb-6"
          style={{ fontSize: "clamp(40px,6vw,72px)" }}
        >
          Atlas &mdash; Enterprise<br />
          <em className="italic" style={{ color: "#225395" }}>decision surface</em>
        </h1>

        {/* Summary */}
        <p
          className="font-body font-normal text-ink-2 max-w-[680px] leading-[1.75] mb-10"
          style={{ fontSize: "17px" }}
        >
          Reduced time to decision by 45 mins of manual morning reconciliation into a single,
          glanceable decision surface for the Managing Director of a 100% automated pharma packaging
          company by replacing eight fragmented vertical reports with one trusted screen and
          correlation based smart storytelling.
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

      {/* Hero image */}
      <AnimateIn direction="none" className="max-w-[1200px] mx-auto px-[52px] mb-20">
        <div
          className="relative w-full rounded-[6px] overflow-hidden border border-black/08"
          style={{ height: "clamp(320px,48vw,600px)", boxShadow: "0 8px 48px rgba(0,0,0,0.10)" }}
        >
          <Image
            src="/images/atlas-hero.png"
            alt="Atlas Dashboard Decision Surface"
            fill
            className="object-cover object-top"
            priority
          />
          <div
            className="absolute bottom-4 left-4 font-body text-[11px] tracking-[.06em] uppercase px-3 py-1.5 rounded-[2px]"
            style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", color: "rgba(255,255,255,0.8)" }}
          >
            Atlas &middot; Decision Surface
          </div>
        </div>
      </AnimateIn>

      {/* Impact metrics — #225395 cards */}
      <section style={{ background: "#E7EFFE", borderTop: "1px solid rgba(34,83,149,.12)", borderBottom: "1px solid rgba(34,83,149,.12)" }}>
        <div className="max-w-[1200px] mx-auto px-[52px] py-16">
          <AnimateIn>
            <p className="font-body text-[11px] font-medium text-ink-3 tracking-[.14em] uppercase mb-4">Impact</p>
            <h2
              className="font-display font-semibold tracking-[-0.03em] text-ink leading-[1.05] mb-10"
              style={{ fontSize: "clamp(28px,4vw,42px)" }}
            >
              Design to compress<br />
              <em className="italic" style={{ color: "#225395" }}>decision time</em>
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-3 gap-4">
            {impacts.map((imp, i) => (
              <AnimateIn key={imp.metric} delay={i * 0.1}>
                <div
                  className="rounded-[4px] p-7 flex flex-col h-full"
                  style={{ background: "#225395" }}
                >
                  <div
                    className="font-body text-[11px] font-medium tracking-[.1em] uppercase mb-4"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    0{i + 1}
                  </div>
                  <div
                    className="font-display font-semibold text-white leading-none tracking-[-0.03em] mb-3"
                    style={{ fontSize: "clamp(28px,3.2vw,42px)" }}
                  >
                    {imp.value}
                  </div>
                  <div className="font-body text-[15px] font-medium text-white mb-4">
                    {imp.metric}
                  </div>
                  <p
                    className="font-body text-[14px] font-normal leading-[1.7] mt-auto"
                    style={{ color: "rgba(255,255,255,0.72)" }}
                  >
                    {imp.detail}
                  </p>
                  <div className="border-t pt-4 mt-6" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                    <span
                      className="font-body text-[11px] tracking-[.06em] uppercase"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      {imp.tag}
                    </span>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto px-[52px] py-16">
          <div className="grid grid-cols-2 gap-16">
            <AnimateIn>
              <p className="font-body text-[11px] font-medium text-ink-3 tracking-[.14em] uppercase mb-5">The Problem</p>
              <p className="font-body text-[16px] font-normal text-ink-2 leading-[1.8]">
                The MD at Product Armor spent{" "}
                <strong className="text-ink font-medium">45 minutes every morning</strong> reconciling
                numbers across 8 vertical reports before making a single business decision.
                Machine-level telemetry was arriving at someone who needed variance, not sensor readings.
              </p>
              <blockquote className="mt-6 pl-5" style={{ borderLeft: "2px solid #225395" }}>
                <p className="font-display italic text-[17px] text-ink-2 leading-[1.65]">
                  &ldquo;I don&apos;t need more data. I need one definition of every number &mdash; with the drift surfaced before it becomes a crisis.&rdquo;
                </p>
                <cite className="block mt-2 font-body text-[12px] not-italic text-ink-3 tracking-[.08em] uppercase">
                  Mr. Harsha &middot; MD, Product Armor
                </cite>
              </blockquote>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <p className="font-body text-[11px] font-medium text-ink-3 tracking-[.14em] uppercase mb-5">The Solution</p>
              <p className="font-body text-[16px] font-normal text-ink-2 leading-[1.8]">
                A <strong className="text-ink font-medium">glanceable decision surface</strong> &mdash; not
                a reporting wall. Atlas surfaces cross-vertical drifts as correlated stories, ranks
                them by impact, and gives the MD one trusted screen to start every morning.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                {[
                  { label: "Exception-first",            desc: "Surface only deviations — healthy KPIs don't need real estate" },
                  { label: "Variance over absolutes",    desc: "12% drop vs last week matters more than the absolute number" },
                  { label: "Cross-vertical correlation", desc: "Sales + Quality + Production = one connected story" },
                ].map((p) => (
                  <div key={p.label} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 mt-0.5 text-[13px]" style={{ color: "#225395" }}>—</span>
                    <div>
                      <span className="font-body text-[13px] font-medium text-ink">{p.label}</span>
                      <span className="font-body text-[13px] font-normal text-ink-3"> &mdash; {p.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Deep Dive CTA */}
      <section style={{ background: "#E7EFFE", borderTop: "1px solid rgba(34,83,149,.12)" }}>
        <div className="max-w-[1200px] mx-auto px-[52px] py-16">
          <AnimateIn>
            <p className="font-body text-[11px] font-medium text-ink-3 tracking-[.14em] uppercase mb-3">Deep Dive</p>
            <h2
              className="font-display font-semibold tracking-[-0.03em] text-ink leading-[1.05] mb-8"
              style={{ fontSize: "clamp(26px,3.5vw,38px)" }}
            >
              Full case study &mdash;{" "}
              <em className="italic" style={{ color: "#225395" }}>research to outcome</em>
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.05}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 bg-white rounded-[4px] border border-black/10">
              <div className="flex-1">
                <p className="font-body text-[15px] font-medium text-ink mb-1.5">
                  Atlas Case Study &mdash; Product Armor 2024
                </p>
                <p className="font-body text-[13px] font-normal text-ink-3 leading-[1.65]">
                  Full documentation of research, strategy, design decisions and outcomes &mdash;
                  from the MD&apos;s morning problem to a correlated decision surface.
                </p>
              </div>
              <a
                href="/case-studies/atlas-case-study.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[12px] font-medium tracking-[.08em] uppercase text-white px-7 py-3.5 rounded-[2px] no-underline transition-colors whitespace-nowrap"
                style={{ background: "#225395" }}
              >
                View Case Study
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Bottom nav */}
      <div className="max-w-[1200px] mx-auto px-[52px] py-12 flex justify-between items-center border-t border-black/08">
        <Link
          href="/#work"
          className="font-body text-[12px] font-medium text-ink-3 no-underline hover:text-ink transition-colors tracking-[.04em] uppercase"
        >
          &#8592; All Case Studies
        </Link>
        <p className="font-body text-[13px] font-normal text-ink-3">More case studies coming soon</p>
      </div>

    </div>
  );
}
