import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

const metrics = [
  { val: "7M+",      label: "Users impacted"           },
  { val: "6+",       label: "Years design experience"  },
  { val: "12+",      label: "B2C, B2B & SaaS products" },
  { val: "Pan India", label: "Stakeholders served"     },
];

const skills = [
  "Product Design B2B SaaS", "Data Visualization", "Dashboard Design", "Design Systems",
  "Enterprise UX", "User Research", "Usability Testing", "Information Architecture",
  "Interaction Design", "AI-assisted Design", "Mobile-first Design", "WCAG 2.0",
  "A/B Testing", "Wireframing", "High-Fidelity Prototyping", "Design Tokens",
  "Stakeholder Management", "Heuristic Evaluation",
];

const experience = [
  {
    company: "Convegenius.Ai", period: "Jun 2024 – Present", location: "Hyderabad (Remote)",
    role: "UI/UX Designer — User Experience & Data Visualization",
    bullets: [
      "Designed SwiftChat, a B2C EdTech platform impacting 1M+ teachers and ~30M+ students across multiple Indian states",
      "Reduced education program operational costs by ~₹2.5Cr+ per state",
      "Designed 50+ dashboards with 150+ KPIs across 21 States and 2 Union Territories",
      "Increased direct action/intervention rates by ~24% through actionable dashboard experiences",
    ],
  },
  {
    company: "Product Armor", period: "Aug 2022 – Aug 2024", location: "Hyderabad",
    role: "Design Lead",
    bullets: [
      "Redesigned enterprise web platforms and dashboard ecosystems across multiple industrial verticals",
      "Improved client engagement by ~12% and enquiry conversion rates by ~18%",
      "Led Atlas — reduced MD morning reconciliation from 45 mins to ~10 mins",
    ],
  },
  {
    company: "Apollo Tyres", period: "Aug 2020 – Aug 2022", location: "Chennai",
    role: "Designer",
    bullets: [
      "Designed AR Mould Testing Application deployed across all Apollo Manufacturing Plants",
      "Reduced mould testing time by ~12–18 minutes per cycle",
      "Designed packaging and branding for Apollo Tramplr global premium motorcycle tyre line",
    ],
  },
  {
    company: "Royal Enfield", period: "Sept 2018 – Aug 2019", location: "Chennai",
    role: "Design Intern — Thesis Project",
    bullets: ["Completed thesis project and contributed to clay modeling of the Flying Flea C6"],
  },
];

const contacts = [
  { label: "Email",    val: "dhananjayl196@gmail.com",            href: "mailto:dhananjayl196@gmail.com" },
  { label: "Phone",    val: "+91 89758 96474",                     href: "tel:+918975896474" },
  { label: "LinkedIn", val: "linkedin.com/in/dhananjay-lokhande", href: "https://www.linkedin.com/in/dhananjay-lokhande/" },
  { label: "Behance",  val: "behance.net/dhananjayl",             href: "https://www.behance.net/dhananjayl" },
];

export default function Home() {
  return (
    <div className="pt-[58px]">

      {/* HERO — white background */}
      <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: "#FFFFFF" }}>

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(34,83,149,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(34,83,149,.04) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 flex-1 max-w-[1200px] mx-auto w-full px-[52px] pt-[90px] pb-[60px] flex flex-col justify-center">

          <p className="font-body text-[15px] font-medium text-ink-3 mb-1">Hello,</p>
          <p className="font-body text-[15px] font-medium text-ink-3 mb-4">I am</p>

          <h1
            className="font-display font-semibold text-ink leading-[1.0] tracking-[-0.03em] mb-8"
            style={{ fontSize: "clamp(48px,7.5vw,92px)" }}
          >
            Dhananjay Lokhande
          </h1>

          <p
            className="font-body font-normal text-ink-2 max-w-[580px] leading-[1.78] mb-10"
            style={{ fontSize: "clamp(15px,1.4vw,17px)" }}
          >
            I am a UX | Product Designer with a background in B2C applications, SaaS platforms and
            Dashboard designs. Proven impact across products serving{" "}
            <strong className="text-ink font-medium">7M+ users</strong> through improved usability,
            clear interaction, accessibility and AI assisted design.
          </p>

          <div className="flex gap-3.5 flex-wrap">
            <a
              href="#work"
              className="font-body text-[12px] font-medium tracking-[.08em] uppercase text-white px-7 py-3.5 rounded-[2px] no-underline transition-colors"
              style={{ background: "#225395" }}
            >
              View Work
            </a>
            <a
              href="#contact"
              className="font-body text-[12px] font-medium tracking-[.08em] uppercase text-ink border border-black/20 px-7 py-3.5 rounded-[2px] no-underline hover:border-black/50 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Metrics bar — brand color #225395 */}
        <div className="relative z-10 grid grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`px-[52px] py-8 ${i < 3 ? "border-r border-white/10" : ""}`}
              style={{ background: "#225395" }}
            >
              <div
                className="font-display font-semibold text-white leading-none mb-2"
                style={{ fontSize: "clamp(28px,3.2vw,40px)" }}
              >
                {m.val}
              </div>
              <div className="font-body text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.65)" }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORK — white background */}
      <section id="work" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto px-[52px] py-24">

          <AnimateIn className="mb-14">
            <p
              className="font-body font-medium text-ink-3 tracking-[.14em] uppercase mb-4"
              style={{ fontSize: "14px" }}
            >
              Selected Work
            </p>
            <h2
              className="font-display font-semibold tracking-[-0.03em] text-ink leading-[1.05]"
              style={{ fontSize: "clamp(36px,5vw,54px)" }}
            >
              Case <em className="italic text-accent">Studies</em>
            </h2>
          </AnimateIn>

          {/* Atlas card */}
          <AnimateIn delay={0.05}>
            <Link
              href="/case-studies/atlas"
              className="cs-card block relative rounded-[4px] overflow-hidden no-underline"
              style={{ height: 520 }}
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 z-[3]" style={{ background: "#225395" }} />

              {/* Hero image */}
              <div className="cs-card-img absolute inset-0">
                <Image
                  src="/images/atlas-hero.png"
                  alt="Atlas Dashboard Decision Surface"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 z-[1]"
                style={{ background: "linear-gradient(to top,rgba(8,8,24,.95) 0%,rgba(8,8,24,.58) 44%,rgba(8,8,24,.15) 76%,transparent 100%)" }}
              />

              {/* Card content */}
              <div className="absolute inset-0 z-[2] p-11 flex flex-col justify-between">

                {/* TOP — tag pills + index */}
                <div className="flex justify-between items-start">
                  <div className="flex gap-2 flex-wrap">
                    {["Enterprise UX", "Decision Surface", "Data Visualisation"].map((t) => (
                      <span
                        key={t}
                        className="font-body text-[11px] font-medium tracking-[.06em] uppercase text-white px-3.5 py-1.5 rounded-full"
                        style={{ background: "#225395" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span
                    className="font-display font-normal leading-none tracking-[-0.04em]"
                    style={{ fontSize: 52, color: "rgba(255,255,255,0.08)" }}
                  >
                    01
                  </span>
                </div>

                {/* BOTTOM */}
                <div>
                  {/* Impact pills — horizontal single row, appear on hover */}
                  <div className="cs-card-outcomes flex flex-row flex-nowrap gap-2 mb-4">
                    {[
                      { val: "~78%",   label: "time-to-decision drop" },
                      { val: "35 min", label: "recovered daily" },
                      { val: "5",      label: "verticals unified" },
                    ].map((o) => (
                      <div
                        key={o.val}
                        className="font-body text-[12px] font-medium text-ink bg-white px-3.5 py-1.5 rounded-full flex items-center gap-1.5 whitespace-nowrap"
                      >
                        <strong className="text-[13px] font-semibold">{o.val}</strong>
                        <span className="font-normal text-ink-2">{o.label}</span>
                      </div>
                    ))}
                  </div>

                  <p className="font-body text-[11px] font-medium tracking-[.1em] uppercase mb-2" style={{ color: "rgba(255,255,255,0.45)" }}>
                    Product Armor &middot; 2022&ndash;2024
                  </p>

                  <h3
                    className="font-display font-semibold text-white tracking-[-0.03em] leading-[1.08]"
                    style={{ fontSize: "clamp(24px,3.2vw,38px)" }}
                  >
                    Atlas &mdash; Enterprise decision surface
                  </h3>

                  <p
                    className="cs-card-desc font-body font-medium leading-[1.68] max-w-[620px]"
                    style={{ fontSize: "15px", color: "rgba(255,255,255,0.68)" }}
                  >
                    Reduced time to decision by 45 mins of manual morning reconciliation into a single,
                    glanceable decision surface for the Managing Director of a 100% automated pharma
                    packaging company by replacing eight fragmented vertical reports with one trusted
                    screen and correlation based smart storytelling.
                  </p>

                  <div className="cs-card-cta flex items-center gap-2.5 mt-5">
                    <span className="font-body text-[11px] font-medium text-white tracking-[.1em] uppercase">View Case Study</span>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm"
                      style={{ background: "#225395" }}
                    >
                      &#8594;
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </AnimateIn>

          {/* Coming soon */}
          <AnimateIn delay={0.1} className="mt-1">
            <div className="h-[160px] rounded-[4px] border-[1.5px] border-dashed border-black/18 flex flex-col items-center justify-center gap-1.5">
              <p className="font-body text-[13px] font-medium text-ink-3">More case studies coming soon</p>
              <p className="font-body text-[12px] text-black/30">SwiftChat &middot; S-MIS &middot; Apollo AR App</p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ABOUT — #E7EFFE accent background */}
      <section id="about" style={{ background: "#E7EFFE" }}>
        <div className="max-w-[1200px] mx-auto px-[52px] py-24 grid grid-cols-2 gap-20 items-start">

          <AnimateIn>
            <p className="font-body text-[11px] font-medium text-ink-3 tracking-[.14em] uppercase mb-4">About</p>
            <h2
              className="font-display font-semibold tracking-[-0.03em] text-ink leading-[1.05] mb-7"
              style={{ fontSize: "clamp(36px,4.5vw,52px)" }}
            >
              Background &amp;<br /><em className="italic text-accent">Skills</em>
            </h2>
            <p
              className="font-body font-normal text-ink-2 leading-[1.82] mb-10"
              style={{ fontSize: "16px" }}
            >
              I design solutions that make complex data &amp; tasks easy, from enterprise SaaS platforms
              for end to end automation to EdTech platforms serving millions across India. My work lives
              at the intersection of user research, information architecture, simple interaction design
              &amp; AI assisted deployments.
            </p>

            {[
              { school: "National Institute of Design, Gandhinagar", deg: "Masters in Industrial Design",        yr: "2016 – 2020" },
              { school: "Pimpri Chinchwad College of Engineering",   deg: "Bachelors in Mechanical Engineering",  yr: "2010 – 2014" },
            ].map((e, i) => (
              <div key={e.school} className={`py-[18px] border-t border-black/[.14] ${i === 1 ? "border-b" : ""}`}>
                <div className="font-body text-[14px] font-medium text-ink mb-0.5">{e.school}</div>
                <div className="font-body text-[13px] font-normal text-ink-2">{e.deg}</div>
                <div className="font-body text-[11px] text-ink-3 mt-0.5">{e.yr}</div>
              </div>
            ))}

            <div className="mt-8">
              <p className="font-body text-[11px] font-medium text-ink-3 tracking-[.14em] uppercase mb-3">Tools</p>
              <p className="font-body text-[14px] font-medium text-ink-2 leading-[2]">
                Figma &middot; FigJam &middot; Figma Make &middot; Claude MCP &middot; Stitch &middot; Adobe Suite &middot; Jira &middot; Notebook LM &middot; Slack
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <p className="font-body text-[11px] font-medium text-ink-3 tracking-[.14em] uppercase mb-6">Core Competencies</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="skill-chip font-body text-[12px] font-medium text-ink bg-white border border-black/[.14] px-3.5 py-1.5 rounded-full cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-9 pt-8 border-t border-black/10">
              <p className="font-body text-[11px] font-medium text-ink-3 tracking-[.14em] uppercase mb-3">Certifications</p>
              <p className="font-body text-[14px] font-normal text-ink-3 leading-[2.1]">
                Interaction Design Foundation<br />
                Design Thinking &middot; AI for Designers &middot; User Experience &middot; User Journey Mapping
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* EXPERIENCE — white background */}
      <section id="experience" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto px-[52px] py-24">
          <AnimateIn>
            <p className="font-body text-[11px] font-medium text-ink-3 tracking-[.14em] uppercase mb-4">Experience</p>
            <h2
              className="font-display font-semibold tracking-[-0.03em] text-ink leading-[1.05] mb-12"
              style={{ fontSize: "clamp(36px,4.5vw,52px)" }}
            >
              Where I&apos;ve <em className="italic text-accent">Worked</em>
            </h2>
          </AnimateIn>

          {experience.map((e, i) => (
            <AnimateIn
              key={e.company}
              delay={i * 0.08}
              className={`grid grid-cols-[210px_1fr] gap-[52px] py-10 border-t border-black/08 ${i === experience.length - 1 ? "border-b" : ""}`}
            >
              <div>
                <div className="font-body text-[14px] font-medium text-ink mb-1">{e.company}</div>
                <div className="font-body text-[12px] font-normal text-ink-3 mb-0.5">{e.period}</div>
                <div className="font-body text-[12px] font-normal text-black/30">{e.location}</div>
              </div>
              <div>
                <div className="font-body text-[15px] font-medium text-ink mb-3.5">{e.role}</div>
                <ul className="flex flex-col gap-2.5">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-3 font-body text-[14px] font-normal text-ink-2 leading-[1.65]">
                      <span className="flex-shrink-0 mt-0.5" style={{ color: "#225395" }}>—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* CONTACT — #E7EFFE accent background */}
      <section id="contact" style={{ background: "#E7EFFE" }}>
        <div className="max-w-[1200px] mx-auto px-[52px] py-24">
          <div className="grid grid-cols-2 gap-20 items-start">

            <AnimateIn>
              <p className="font-body text-[11px] font-medium text-ink-3 tracking-[.14em] uppercase mb-4">Contact</p>
              <h2
                className="font-display font-semibold tracking-[-0.03em] text-ink leading-[1.05]"
                style={{ fontSize: "clamp(36px,4.5vw,52px)" }}
              >
                Let&apos;s work<br /><em className="italic text-accent">together</em>
              </h2>
              <p className="font-body text-[16px] font-normal text-ink-2 leading-[1.75] mt-5">
                Open to full-time roles, freelance projects, and consulting.
                If you&apos;re working on a complex product that needs thoughtful UX,
                I&apos;d love to hear about it.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.1} className="flex flex-col gap-0.5">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="c-link flex justify-between items-center px-5 py-[18px] bg-white rounded-[2px] border border-transparent no-underline mb-0.5"
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="font-body text-[10px] font-medium tracking-[.1em] uppercase text-ink-3">{c.label}</span>
                    <span className="font-body text-[14px] font-normal text-ink">{c.val}</span>
                  </div>
                  <span className="c-arrow font-body text-[16px] text-ink-3">&#8599;</span>
                </a>
              ))}
            </AnimateIn>
          </div>
        </div>
      </section>

    </div>
  );
}
