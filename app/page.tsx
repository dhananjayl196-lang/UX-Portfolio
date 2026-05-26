import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

/* ─── data ─── */
const metrics = [
  { val: "7M",  sup: "+", label: "Users impacted"     },
  { val: "50",  sup: "+", label: "Dashboards designed" },
  { val: "21",  sup: "",  label: "States deployed"     },
  { val: "6",   sup: "+", label: "Years experience"    },
];

const skills = [
  "Product Design B2B SaaS","Data Visualization","Dashboard Design","Design Systems",
  "Enterprise UX","User Research","Usability Testing","Information Architecture",
  "Interaction Design","AI-assisted Design","Mobile-first Design","WCAG 2.0",
  "A/B Testing","Wireframing","High-Fidelity Prototyping","Design Tokens",
  "Stakeholder Management","Heuristic Evaluation",
];

const experience = [
  {
    company:"Convegenius.Ai", period:"Jun 2024 – Present", location:"Hyderabad (Remote)",
    role:"UI/UX Designer — User Experience & Data Visualization",
    bullets:[
      "Designed SwiftChat, a B2C EdTech platform impacting 1M+ teachers and ~30M+ students across multiple Indian states",
      "Reduced education program operational costs by ~₹2.5Cr+ per state",
      "Designed 50+ dashboards with 150+ KPIs across 21 States and 2 Union Territories",
      "Increased direct action/intervention rates by ~24% through actionable dashboard experiences",
    ],
  },
  {
    company:"Product Armor", period:"Aug 2022 – Aug 2024", location:"Hyderabad",
    role:"Design Lead",
    bullets:[
      "Redesigned enterprise web platforms and dashboard ecosystems across multiple industrial verticals",
      "Improved client engagement by ~12% and enquiry conversion rates by ~18%",
      "Led Atlas — reduced MD morning reconciliation from 45 mins to ~10 mins",
    ],
  },
  {
    company:"Apollo Tyres", period:"Aug 2020 – Aug 2022", location:"Chennai",
    role:"Designer",
    bullets:[
      "Designed AR Mould Testing Application deployed across all Apollo Manufacturing Plants",
      "Reduced mould testing time by ~12–18 minutes per cycle",
      "Designed packaging and branding for Apollo Tramplr global premium motorcycle tyre line",
    ],
  },
  {
    company:"Royal Enfield", period:"Sept 2018 – Aug 2019", location:"Chennai",
    role:"Design Intern — Thesis Project",
    bullets:["Completed thesis project and contributed to clay modeling of the Flying Flea C6"],
  },
];

const contacts = [
  { label:"Email",    val:"dhananjayl196@gmail.com",               href:"mailto:dhananjayl196@gmail.com" },
  { label:"Phone",    val:"+91 89758 96474",                        href:"tel:+918975896474" },
  { label:"LinkedIn", val:"linkedin.com/in/dhananjay-lokhande",    href:"https://www.linkedin.com/in/dhananjay-lokhande/" },
  { label:"Behance",  val:"behance.net/dhananjayl",                href:"https://www.behance.net/dhananjayl" },
];

export default function Home() {
  return (
    <div className="pt-[58px]">

      {/* ══════════════ HERO ══════════════ */}
      <section className="relative bg-paper min-h-screen flex flex-col overflow-hidden">
        {/* Grid texture */}
        <div className="absolute inset-0 grid-texture pointer-events-none" />
        {/* Accent glow */}
        <div
          className="absolute bottom-0 right-[-80px] w-[520px] h-[520px] pointer-events-none"
          style={{ background: "radial-gradient(circle at center,rgba(26,79,219,.07) 0%,transparent 70%)" }}
        />

        {/* Hero content */}
        <div className="relative z-10 flex-1 max-w-[1200px] mx-auto w-full px-[52px] pt-[100px] pb-[60px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-7 h-px bg-ink-3" />
            <span className="font-body text-[11px] font-medium text-ink-3 tracking-[.14em] uppercase">
              UX &amp; Product Designer · Pune, India
            </span>
          </div>

          {/* Name */}
          <h1 className="font-display font-normal leading-[.96] tracking-[-0.04em] text-ink mb-9"
            style={{ fontSize: "clamp(56px,8.5vw,104px)" }}>
            Dhananjay<br />
            <span className="flex items-center gap-5 flex-wrap">
              Lokhande
              <span className="font-body font-medium bg-accent text-white px-3.5 py-1.5 rounded-[2px] tracking-[.06em] uppercase"
                style={{ fontSize: "clamp(12px,1.2vw,18px)", verticalAlign: "middle" }}>
                6+ yrs
              </span>
            </span>
          </h1>

          {/* Bio */}
          <p className="font-body text-[17px] font-light text-ink-2 max-w-[540px] leading-[1.78] mb-11">
            UX / Product Designer and Data Visualization Specialist designing{" "}
            <strong className="text-ink font-medium">scalable SaaS, EdTech, Gov-Tech</strong>{" "}
            and enterprise platforms — with proven impact across products serving{" "}
            <strong className="text-ink font-medium">7M+ users</strong>.
          </p>

          {/* CTAs */}
          <div className="flex gap-3.5 flex-wrap">
            <a href="#work"
              className="font-body text-[12px] font-medium tracking-[.08em] uppercase bg-ink text-white px-7 py-3.5 rounded-[2px] no-underline hover:bg-accent transition-colors">
              View Work
            </a>
            <a href="#contact"
              className="font-body text-[12px] font-medium tracking-[.08em] uppercase text-ink border border-black/20 px-7 py-3.5 rounded-[2px] no-underline hover:border-black/50 transition-colors">
              Get in touch
            </a>
          </div>
        </div>

        {/* Metrics bar */}
        <div className="relative z-10 bg-paper-2 border-t border-black/[.12] grid grid-cols-4">
          {metrics.map((m, i) => (
            <div key={m.label}
              className={`px-[52px] py-7 ${i < 3 ? "border-r border-black/08" : ""}`}>
              <div className="font-display font-normal tracking-[-0.04em] text-ink leading-none mb-1.5"
                style={{ fontSize: "clamp(32px,3.5vw,40px)" }}>
                <span className="text-accent">{m.val}</span>{m.sup}
              </div>
              <div className="font-body text-[12px] text-ink-3">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ WORK ══════════════ */}
      <section id="work" className="bg-paper">
        <div className="max-w-[1200px] mx-auto px-[52px] py-24">

          <AnimateIn className="flex justify-between items-end mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-6 h-px bg-ink-3" />
                <span className="font-body text-[11px] font-medium text-ink-3 tracking-[.14em] uppercase">Selected Work</span>
              </div>
              <h2 className="font-display font-normal tracking-[-0.03em] text-ink leading-[1.05]"
                style={{ fontSize: "clamp(36px,5vw,54px)" }}>
                Case <em className="italic text-accent">Studies</em>
              </h2>
            </div>
            <p className="font-body text-[13px] text-ink-3 pb-1.5">01 published · more coming</p>
          </AnimateIn>

          {/* ── Atlas Card ── */}
          <AnimateIn delay={0.05}>
            <Link href="/case-studies/atlas" className="cs-card block relative rounded-[4px] overflow-hidden no-underline"
              style={{ height: 500 }}>
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-green z-[3]" />

              {/* Hero image */}
              <div className="cs-card-img absolute inset-0">
                <Image
                  src="/images/atlas-hero.png"
                  alt="Atlas Dashboard — Decision Surface"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 z-[1]"
                style={{ background: "linear-gradient(to top,rgba(8,8,8,.92) 0%,rgba(8,8,8,.52) 40%,rgba(8,8,8,.12) 75%,transparent 100%)" }} />

              {/* Content */}
              <div className="absolute inset-0 z-[2] p-11 flex flex-col justify-end">

                {/* Tags + index — top */}
                <div className="absolute top-9 left-11 right-11 flex justify-between items-start">
                  <div className="flex gap-2 flex-wrap">
                    {["Enterprise UX","Dashboard Design","Data Visualization"].map((t, i) => (
                      <span key={t}
                        className={`font-body text-[10px] font-medium tracking-[.08em] uppercase text-white px-3 py-1.5 rounded-[2px] border ${
                          i === 0
                            ? "bg-accent border-accent"
                            : "bg-white/10 border-white/18 backdrop-blur-[8px]"
                        }`}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="font-display text-[52px] font-normal text-white/[.08] leading-none tracking-[-0.04em]">01</span>
                </div>

                {/* Outcome pills — right side, appear on hover */}
                <div className="cs-card-outcomes absolute bottom-9 right-11 flex flex-col items-end gap-2">
                  {[
                    { val: "~78%", label: "time-to-decision drop" },
                    { val: "35 min", label: "recovered daily" },
                    { val: "5", label: "verticals unified" },
                  ].map((o) => (
                    <div key={o.val}
                      className="font-body text-[11px] font-medium text-green bg-green-lt px-3 py-1.5 rounded-[2px] flex items-center gap-1.5">
                      <strong className="text-[13px]">{o.val}</strong> {o.label}
                    </div>
                  ))}
                </div>

                {/* Bottom content */}
                <div>
                  <p className="font-body text-[11px] font-medium text-white/45 tracking-[.1em] uppercase mb-2.5">
                    Product Armor · 2022–2024
                  </p>
                  <h3 className="font-display font-normal text-white tracking-[-0.03em] leading-[1.08]"
                    style={{ fontSize: "clamp(28px,4vw,44px)" }}>
                    Atlas — Enterprise<br />MES Dashboard
                  </h3>
                  <p className="cs-card-desc font-body text-[15px] font-light text-white/58 leading-[1.68] max-w-[560px]">
                    Collapsed 45 minutes of manual morning reconciliation into a 10-minute glanceable
                    decision surface for the MD of a 100%-automated pharma packaging plant.
                  </p>
                  <div className="cs-card-cta flex items-center gap-2.5 mt-5">
                    <span className="font-body text-[11px] font-medium text-white tracking-[.1em] uppercase">View Case Study</span>
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-sm">→</div>
                  </div>
                </div>
              </div>
            </Link>
          </AnimateIn>

          {/* Coming soon */}
          <AnimateIn delay={0.1} className="mt-1">
            <div className="h-[160px] rounded-[4px] border-[1.5px] border-dashed border-black/18 flex flex-col items-center justify-center gap-1.5 bg-black/[.015]">
              <p className="font-body text-[13px] text-ink-3">More case studies coming soon</p>
              <p className="font-body text-[12px] text-black/30">SwiftChat · S-MIS · Apollo AR App</p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ══════════════ ABOUT ══════════════ */}
      <section id="about" className="bg-paper-2">
        <div className="max-w-[1200px] mx-auto px-[52px] py-24 grid grid-cols-2 gap-20 items-start">

          <AnimateIn>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-px bg-ink-3" />
              <span className="font-body text-[11px] font-medium text-ink-3 tracking-[.14em] uppercase">About</span>
            </div>
            <h2 className="font-display font-normal tracking-[-0.03em] text-ink leading-[1.05] mb-7"
              style={{ fontSize: "clamp(36px,4.5vw,52px)" }}>
              Background &amp;<br /><em className="italic text-accent">Skills</em>
            </h2>
            <p className="font-body text-[16px] font-light text-ink-2 leading-[1.82] mb-10">
              I design systems that make complex data <strong className="text-ink font-medium">actionable</strong> — from
              enterprise MES dashboards for manufacturing MDs to EdTech platforms serving millions across India.
              My work lives at the intersection of user research, information architecture, and precise visual design.
            </p>

            {/* Education */}
            {[
              { school: "National Institute of Design, Gandhinagar", deg: "Masters in Industrial Design",       yr: "2016 – 2020" },
              { school: "Pimpri Chinchwad College of Engineering",   deg: "Bachelors in Mechanical Engineering", yr: "2010 – 2014" },
            ].map((e, i) => (
              <div key={e.school}
                className={`py-[18px] border-t border-black/[.14] ${i === 1 ? "border-b" : ""}`}>
                <div className="font-body text-[14px] font-medium text-ink mb-0.5">{e.school}</div>
                <div className="font-body text-[13px] font-light text-ink-2">{e.deg}</div>
                <div className="font-body text-[11px] text-ink-3 mt-0.5">{e.yr}</div>
              </div>
            ))}

            <p className="font-body text-[13px] font-light text-ink-3 leading-[2] mt-8">
              <strong className="text-ink-2 font-medium">Tools —</strong>{" "}
              Figma · FigJam · Figma Make · Claude MCP · Stitch · Adobe Suite · Jira · Notebook LM · Slack
            </p>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-ink-3" />
              <span className="font-body text-[11px] font-medium text-ink-3 tracking-[.14em] uppercase">Core Competencies</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s}
                  className="skill-chip font-body text-[12px] text-ink-2 border border-black/[.16] px-3.5 py-1.5 rounded-[2px] transition-colors cursor-default">
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-9 pt-8 border-t border-black/08">
              <div className="font-body text-[11px] font-medium text-ink-3 tracking-[.14em] uppercase mb-3">Certifications</div>
              <p className="font-body text-[13px] font-light text-ink-3 leading-[2.1]">
                Interaction Design Foundation<br />
                Design Thinking · AI for Designers · User Experience · User Journey Mapping
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ══════════════ EXPERIENCE ══════════════ */}
      <section id="experience" className="bg-paper">
        <div className="max-w-[1200px] mx-auto px-[52px] py-24">
          <AnimateIn>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-px bg-ink-3" />
              <span className="font-body text-[11px] font-medium text-ink-3 tracking-[.14em] uppercase">Experience</span>
            </div>
            <h2 className="font-display font-normal tracking-[-0.03em] text-ink leading-[1.05] mb-12"
              style={{ fontSize: "clamp(36px,4.5vw,52px)" }}>
              Where I&apos;ve <em className="italic text-accent">Worked</em>
            </h2>
          </AnimateIn>

          {experience.map((e, i) => (
            <AnimateIn key={e.company} delay={i * 0.08}
              className={`grid grid-cols-[210px_1fr] gap-[52px] py-10 border-t border-black/08 ${i === experience.length - 1 ? "border-b" : ""}`}>
              <div>
                <div className="font-body text-[14px] font-medium text-ink mb-1">{e.company}</div>
                <div className="font-body text-[12px] text-ink-3 mb-0.5">{e.period}</div>
                <div className="font-body text-[12px] text-black/30">{e.location}</div>
              </div>
              <div>
                <div className="font-body text-[15px] font-medium text-ink mb-3.5">{e.role}</div>
                <ul className="flex flex-col gap-2.5">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-3 font-body text-[14px] font-light text-ink-2 leading-[1.65]">
                      <span className="text-accent flex-shrink-0 mt-0.5">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ══════════════ CONTACT ══════════════ */}
      <section id="contact" className="bg-paper-2">
        <div className="max-w-[1200px] mx-auto px-[52px] py-24">
          <div className="grid grid-cols-2 gap-20 items-start">

            <AnimateIn>
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-6 h-px bg-ink-3" />
                <span className="font-body text-[11px] font-medium text-ink-3 tracking-[.14em] uppercase">Contact</span>
              </div>
              <h2 className="font-display font-normal tracking-[-0.03em] text-ink leading-[1.05]"
                style={{ fontSize: "clamp(36px,4.5vw,52px)" }}>
                Let&apos;s work<br /><em className="italic text-accent">together</em>
              </h2>
              <p className="font-body text-[16px] font-light text-ink-2 leading-[1.75] mt-5">
                Open to full-time roles, freelance projects, and consulting.
                If you&apos;re working on a complex product that needs thoughtful UX,
                I&apos;d love to hear about it.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.1} className="flex flex-col gap-0.5">
              {contacts.map((c) => (
                <a key={c.label} href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="c-link flex justify-between items-center px-5 py-[18px] bg-white rounded-[2px] border border-transparent no-underline mb-0.5">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-body text-[10px] font-medium tracking-[.1em] uppercase text-ink-3">{c.label}</span>
                    <span className="font-body text-[14px] font-normal text-ink">{c.val}</span>
                  </div>
                  <span className="c-arrow font-body text-[16px] text-ink-3">↗</span>
                </a>
              ))}
            </AnimateIn>
          </div>
        </div>
      </section>

    </div>
  );
}
