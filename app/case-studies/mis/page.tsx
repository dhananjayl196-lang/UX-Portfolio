// MIS Case Study — page.tsx
// Complete: Nav + Hero + S01–S09 + Footer
// Fonts: Syne (display), Inter (body)
// Brand: #00418F | Brand-light: #E6F2FF

import Image from "next/image";
import { Syne, Inter } from "next/font/google";
import VideoPlayer from "./VideoPlayer";
import SideNav from "./SideNav";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center px-3 py-1 text-xs font-bold rounded-full"
      style={{ background: "#fff", border: "1.5px solid #003070", color: "#003070" }}
    >
      {children}
    </span>
  );
}

function HoverCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`border border-zinc-200 transition-colors hover:border-[#00418F] ${className}`}>
      {children}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mt-1">
      {items.map((item) => (
        <li key={item} className="flex gap-2 items-start text-sm text-zinc-700">
          <span className="flex-shrink-0" style={{ color: "#00418F", lineHeight: "1.6" }}>&#x2022;</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function FigmaPlaceholder({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="border-2 border-dashed border-zinc-200 bg-zinc-50 flex flex-col items-center justify-center gap-3 py-14 m-5 text-center">
      <div>
        <p className="text-sm font-semibold text-zinc-700">{title}</p>
        <p className="text-xs text-zinc-600 mt-1">{subtitle}</p>
      </div>
    </div>
  );
}

export default function MISCaseStudy() {
  return (
    <main
      className={`${syne.variable} ${inter.variable} bg-white text-zinc-900`}
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >

      {/* ══════════════════════════════════════════════════════════
          NAV
      ══════════════════════════════════════════════════════════ */}
      <SideNav />

      {/* ══════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
      <section id="top" className="pt-[90px] pb-20 bg-white border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-8 pt-12">
          <div className="flex items-center gap-3 mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-600">UX / Product Design</span>
            <span className="text-zinc-300">&middot;</span>
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-600">Government Education Platform</span>
            <span className="text-zinc-300">&middot;</span>
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-600">2025</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6 max-w-5xl"
            style={{ color: "#00418F", fontFamily: "var(--font-syne), sans-serif" }}>
            Redesigning the tools that help India&apos;s educators lead, teach, and manage with confidence.
          </h1>
          <p className="text-xl text-zinc-700 mb-12 max-w-2xl leading-relaxed italic"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            A UX redesign of India&apos;s government school Management Information System, serving Principals and Admins across 12 states and 3 Union Territories.
          </p>
        </div>
        <div className="bg-zinc-800" style={{ lineHeight: 0 }}>
          <Image src="/images/mis-context.png" alt="MIS redesign – hands holding MacBook showing the dashboard" width={1440} height={960} className="w-full block" priority />
        </div>
        <div className="bg-zinc-800" style={{ lineHeight: 0 }}>
          <Image src="/images/mis-hero.png" alt="MIS redesign – dashboard view on MacBook Pro" width={1440} height={960} className="w-full block" />
        </div>
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-zinc-100">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-zinc-600 mb-2">Client</p>
              <p className="text-sm font-semibold text-zinc-900 leading-snug">State Education Departments &amp; School Principals</p>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-zinc-600 mb-2">Duration</p>
              <p className="text-sm font-semibold text-zinc-900">3–6 months</p>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-zinc-600 mb-2">My Role</p>
              <p className="text-sm font-semibold text-zinc-900 leading-snug">UX / Product Designer – End to end</p>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-zinc-600 mb-2">Platform</p>
              <p className="text-sm font-semibold text-zinc-900">Web &middot; Desktop-first &middot; Government</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          S01 — PROJECT INTRODUCTION
      ══════════════════════════════════════════════════════════ */}
      <section id="s01" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-600 flex-shrink-0">01 Project Introduction</span>
            <div className="flex-1 h-px bg-zinc-100" />
          </div>
          <h2 className="text-4xl font-bold text-zinc-950 leading-tight mb-4 max-w-3xl">About the project</h2>
          <p className="text-base text-zinc-700 leading-relaxed mb-12 max-w-2xl">
            MIS (Management Information System) is a centralised digital platform used by the education ecosystem across India to manage large-scale data across six critical domains.
          </p>
          <div className="flex flex-wrap gap-2 mb-14">
            {["School", "Teacher", "Student", "Academics", "Administration", "Infrastructure"].map((label) => (
              <Pill key={label}>{label}</Pill>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
            <HoverCard className="p-6">
              <div className="text-4xl font-bold text-zinc-950 mb-2">12 states</div>
              <p className="text-sm font-medium text-zinc-600 mb-1">+ 3 Union Territories</p>
              <p className="text-xs text-zinc-600 leading-relaxed">Currently running MIS in production</p>
            </HoverCard>
            <HoverCard className="p-6">
              <div className="text-4xl font-bold text-zinc-950 mb-2">2 roles</div>
              <p className="text-sm font-medium text-zinc-600 mb-1">Principal &amp; Admin</p>
              <p className="text-xs text-zinc-600 leading-relaxed">Each with distinct workflows and needs</p>
            </HoverCard>
            <HoverCard className="p-6">
              <div className="text-4xl font-bold text-zinc-950 mb-2">5 lac+</div>
              <p className="text-sm font-medium text-zinc-600 mb-1">Users affected</p>
              <p className="text-xs text-zinc-600 leading-relaxed">Redesign directly shapes how a large base works every day</p>
            </HoverCard>
          </div>
          <div className="mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-600 mb-5">Current product</p>
            <div className="grid grid-cols-2 gap-5">
              <HoverCard>
                <Image src="/images/Landing-screen.png" alt="Current MIS – Landing Screen" width={900} height={600} className="w-full block" />
                <p className="text-xs text-center py-3 text-zinc-500 font-medium border-t border-zinc-100 bg-zinc-50">Landing Screen</p>
              </HoverCard>
              <HoverCard>
                <Image src="/images/Form-screen.png" alt="Current MIS – Detail & Edit Screen" width={900} height={600} className="w-full block" />
                <p className="text-xs text-center py-3 text-zinc-500 font-medium border-t border-zinc-100 bg-zinc-50">Detail &amp; Edit Screen</p>
              </HoverCard>
            </div>
          </div>
          <div className="border-t border-zinc-100 pt-10 mb-10">
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-600 mb-4">My role on the project</p>
            <p className="text-base text-zinc-700 leading-relaxed max-w-2xl mb-5">
              I led UX end to end from the initial audit and research synthesis, through persona development and user flows, to final interaction design and handoff. Working closely with Engineering, a Product Manager, and DTU fellows embedded in schools on the ground.
            </p>
            <div className="flex flex-wrap gap-2">
              {["UX / Product Designer (me)", "Engineering", "Product Manager", "DTU Fellows (on-ground)"].map((role) => (
                <Pill key={role}>{role}</Pill>
              ))}
            </div>
          </div>
          <div className="border-t border-zinc-100 pt-10">
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-600 mb-4">Scope of this redesign</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {["Student Management module", "Employee Management module", "Transfer & Deputation workflows", "Home screen / Role-based dashboard", "Grade Progression flow", "Approval & notification system"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-zinc-600">
                  <div className="w-1.5 h-1.5 flex-shrink-0 rounded-full" style={{ background: "#00418F" }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          S02 — THE PROBLEM
      ══════════════════════════════════════════════════════════ */}
      <section id="s02" className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-600 flex-shrink-0">02 The Problem</span>
            <div className="flex-1 h-px bg-zinc-200" />
          </div>
          <h2 className="text-4xl font-bold text-zinc-950 leading-tight mb-6 max-w-3xl">
            A system designed for data, used by people who needed workflows
          </h2>
          <div className="bg-white border border-zinc-200 p-7 mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-600 mb-3">Problem Statement</p>
            <p className="text-base text-zinc-700 leading-relaxed max-w-3xl">
              The MIS system demonstrates significant usability and accessibility{" "}
              <span className="font-medium text-zinc-900">gaps across core heuristics</span>, primarily due to its{" "}
              <span className="font-medium text-zinc-900">CRUD-driven architecture</span> and lack of workflow orientation. This results in{" "}
              <span className="font-medium text-zinc-900">high cognitive load</span>,{" "}
              <span className="font-medium text-zinc-900">inefficient task execution</span>, and{" "}
              <span className="font-medium text-zinc-900">limited adaptability to diverse user roles</span>. There is an opportunity to redesign the system into a purpose-driven, workflow-oriented platform that supports users in completing tasks efficiently, reduces errors, and adapts to role-specific needs.
            </p>
          </div>
          <div className="mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-600 mb-5">What triggered the redesign</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <HoverCard className="p-5">
                <p className="text-sm font-semibold text-zinc-900 mb-1">Heuristic audit</p>
                <p className="text-xs text-zinc-700 leading-relaxed">A structured evaluation against Nielsen&apos;s 10 heuristics flagged multiple failures.</p>
              </HoverCard>
              <HoverCard className="p-5">
                <p className="text-sm font-semibold text-zinc-900 mb-1">Field observations</p>
                <p className="text-xs text-zinc-700 leading-relaxed">User kept parallel record and found it difficult to navigate across the product for completion of daily tasks.</p>
              </HoverCard>
            </div>
          </div>
          <div className="mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-600 mb-5">Six systemic issues at the root</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { num: "01", tag: "Root cause", title: "CRUD-centric architecture", desc: "Built for data management, not task completion." },
                { num: "02", tag: "High impact", title: "No workflow modelling", desc: "Critical processes reduced to table actions with no step guidance." },
                { num: "03", tag: "High impact", title: "Cognitive overload by design", desc: "No visual hierarchy. Everything looked equally important." },
                { num: "04", tag: "High impact", title: "Cluttered UI", desc: "Lack of design consistency and high information clutter." },
              ].map((item) => (
                <HoverCard key={item.num} className="p-5">
                  <div className="flex items-start justify-between mb-2 gap-3">
                    <p className="text-xs font-bold text-zinc-600">{item.num}</p>
                    <Pill>{item.tag}</Pill>
                  </div>
                  <p className="text-sm font-semibold text-zinc-900 mb-1">{item.title}</p>
                  <p className="text-xs text-zinc-700">{item.desc}</p>
                </HoverCard>
              ))}
            </div>
          </div>
          <blockquote className="border-l-4 pl-7 py-2 my-10" style={{ borderColor: "#00418F" }}>
            <p className="text-2xl italic leading-relaxed" style={{ color: "#00418F", fontFamily: "var(--font-syne), sans-serif" }}>
              &ldquo;Users weren&apos;t failing because they lacked skill. They were failing because the system gave them no guidance, no feedback, and no way to recover when things went wrong.&rdquo;
            </p>
          </blockquote>
          <div className="border-t border-zinc-200 pt-10">
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-600 mb-5">Success matrix</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Faster task completion", desc: "For Principals and Admins handling daily and periodic workflows" },
                { title: "Higher system adoption", desc: "Reduce dependency on Excel and paper-based workarounds" },
                { title: "Fewer errors & less support load", desc: "Reduce backend corrections and reliance on external help" },
              ].map((item) => (
                <HoverCard key={item.title} className="p-6 text-center">
                  <p className="text-sm font-semibold text-zinc-900 mb-1">{item.title}</p>
                  <p className="text-xs text-zinc-700">{item.desc}</p>
                </HoverCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          S03 — HEURISTIC AUDIT
      ══════════════════════════════════════════════════════════ */}
      <section id="s03" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-600 flex-shrink-0">03 Heuristic Audit</span>
            <div className="flex-1 h-px bg-zinc-100" />
          </div>
          <h2 className="text-4xl font-bold text-zinc-950 leading-tight mb-4 max-w-3xl">
            The system failed on the fundamentals. All ten of them.
          </h2>
          <blockquote className="border-l-4 pl-6 py-1 mb-12" style={{ borderColor: "#00418F" }}>
            <p className="text-xl italic leading-relaxed" style={{ color: "#00418F", fontFamily: "var(--font-syne), sans-serif" }}>
              &ldquo;Before designing a solution, we needed to understand exactly where and why the system was breaking down. The audit gave us the evidence. The field gave us the human cost.&rdquo;
            </p>
          </blockquote>
          <div className="mb-10">
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-600 mb-5">Audit summary – Top 4 by impact</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Visibility of system status", tag: "Critical", desc: "No feedback, no states. Users never knew if an action worked." },
                { title: "Error prevention", tag: "Critical", desc: "No validation, no guardrails. Bad data entered freely." },
                { title: "Match with real world", tag: "Critical", desc: "CRUD labels mismatched how users think about their work." },
                { title: "Recognition over recall", tag: "High", desc: "No hints or help. Users had to memorise everything." },
              ].map((item) => (
                <HoverCard key={item.title} className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <p className="text-sm font-semibold text-zinc-900">{item.title}</p>
                    <Pill>{item.tag}</Pill>
                  </div>
                  <p className="text-xs text-zinc-700">{item.desc}</p>
                </HoverCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          S04 — PERSONA STUDY
      ══════════════════════════════════════════════════════════ */}
      <section id="s04" className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-600 flex-shrink-0">04 Persona Study</span>
            <div className="flex-1 h-px bg-zinc-200" />
          </div>
          <h2 className="text-4xl font-bold text-zinc-950 leading-tight mb-4 max-w-3xl">Two roles, two realities.</h2>
          <blockquote className="border-l-4 pl-6 py-1 mb-3" style={{ borderColor: "#00418F" }}>
            <p className="text-xl italic leading-relaxed" style={{ color: "#00418F", fontFamily: "var(--font-syne), sans-serif" }}>
              &ldquo;MIS is not my primary job. It is an interruption layered over an already overloaded schedule.&rdquo;
            </p>
          </blockquote>
          <p className="text-xs text-zinc-600 mb-10 pl-7">Ramesh P., School Principal</p>
          <p className="text-sm text-zinc-700 mb-10">
            Personas built from field observations, user walkthroughs, and stakeholder interviews across 2 primary roles in scope.
          </p>
          {/* Persona 1 */}
          <div className="mb-6">
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-600 mb-4">Principal</p>
            <div className="bg-white border border-zinc-200 overflow-hidden hover:border-[#00418F] transition-colors">
              <div className="p-6 flex items-start gap-5">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0" style={{ background: "#E6F2FF", color: "#00418F" }}>RP</div>
                <div className="flex-1">
                  <p className="text-base font-semibold text-zinc-900">Ramesh P. - School Principal</p>
                  <p className="text-xs text-zinc-700 mt-0.5 mb-3">Age 42 &middot; Government School &middot; Moderate tech literacy</p>
                  <div className="flex flex-wrap gap-2">
                    <Pill>Task-driven</Pill><Pill>Interrupted workflows</Pill><Pill>MIS is secondary to teaching duties</Pill>
                  </div>
                </div>
              </div>
              <div className="px-6 py-3 border-t border-zinc-100 text-sm text-zinc-700 italic" style={{ background: "#E6F2FF" }}>
                Handles bi-weekly record searches, periodic transfers and admissions, and annual grade progressions. All while managing a full school. Every task is a context switch.
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                <div className="p-4" style={{ background: "#E6F2FF" }}>
                  <p className="text-xs font-bold tracking-wider uppercase text-zinc-600 mb-3">Key pains</p>
                  <ul className="space-y-2">
                    {["Cannot save progress in case of unavoidable interruptions", "System does not help in quick task completions and errors", "Has to maintain multiple records in excel.", "Lots of errors and missing data during bulk uploads.", "Stressed due to last minute task completions and keeping track of all update"].map((pain) => (
                      <li key={pain} className="flex gap-2 items-start text-sm text-zinc-700"><span style={{ color: "#00418F", lineHeight: "1.6" }}>&#x2022;</span><span>{pain}</span></li>
                    ))}
                  </ul>
                </div>
                <div className="p-4" style={{ background: "#E6F2FF" }}>
                  <p className="text-xs font-bold tracking-wider uppercase text-zinc-600 mb-3">Core needs</p>
                  <ul className="space-y-2">
                    {["Perform regular tasks with ease and less time", "Spend less time on data entry", "Have minimum error and correction cycles"].map((need) => (
                      <li key={need} className="flex gap-2 items-start text-sm text-zinc-700"><span style={{ color: "#00418F", lineHeight: "1.6" }}>&#x2022;</span><span>{need}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Persona 2 */}
          <div className="mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-600 mb-4">Admin - District Data Operator</p>
            <div className="bg-white border border-zinc-200 overflow-hidden hover:border-[#00418F] transition-colors">
              <div className="p-6 flex items-start gap-5">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0" style={{ background: "#E6F2FF", color: "#00418F" }}>SA</div>
                <div className="flex-1">
                  <p className="text-base font-semibold text-zinc-900">Sunita A. - District Data Operator</p>
                  <p className="text-xs text-zinc-700 mt-0.5 mb-3">Age 32 &middot; District Office &middot; High tech literacy (Excel-heavy)</p>
                  <div className="flex flex-wrap gap-2">
                    <Pill>Scale &amp; control</Pill><Pill>Bulk operations</Pill><Pill>Manages data across multiple schools</Pill>
                  </div>
                </div>
              </div>
              <div className="px-6 py-3 border-t border-zinc-100 text-sm text-zinc-700 italic" style={{ background: "#E6F2FF" }}>
                Reviews and approves data across an entire district. Bi-weekly bulk actions, periodic transfer processing, and annual dataset validation. Scale is the defining constraint.
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                <div className="p-4" style={{ background: "#E6F2FF" }}>
                  <p className="text-xs font-bold tracking-wider uppercase text-zinc-600 mb-3">Key pains</p>
                  <ul className="space-y-2">
                    {["Repetitive data entry task causes fatigue", "Has to maintain multiple records in excel.", "Difficulty in keeping track of all update", "Using alternative application for communicating rejection reason."].map((pain) => (
                      <li key={pain} className="flex gap-2 items-start text-sm text-zinc-700"><span style={{ color: "#00418F", lineHeight: "1.6" }}>&#x2022;</span><span>{pain}</span></li>
                    ))}
                  </ul>
                </div>
                <div className="p-4" style={{ background: "#E6F2FF" }}>
                  <p className="text-xs font-bold tracking-wider uppercase text-zinc-600 mb-3">Core needs</p>
                  <ul className="space-y-2">
                    {["Managing data of entire district with ease.", "Taking informed decision of approval and rejection with ease", "Avoiding delays in major task initiation", "Keeping a track of the data & task completion with ease"].map((need) => (
                      <li key={need} className="flex gap-2 items-start text-sm text-zinc-700"><span style={{ color: "#00418F", lineHeight: "1.6" }}>&#x2022;</span><span>{need}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Cross-persona */}
          <div className="border-t border-zinc-200 pt-10">
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-600 mb-5">Cross-persona insights</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "No holistic overview", desc: "No system-wide view meant both personas worked blind." },
                { title: "Step-by-step guidance needed", desc: "Every workflow needed a guide. No one knew where to start." },
                { title: "Excel as a crutch", desc: "Both fell back on Excel for what MIS couldn't handle." },
                { title: "Large data, daily frustration", desc: "High-volume tasks with no bulk tools killed productivity." },
              ].map((item) => (
                <HoverCard key={item.title} className="p-5 bg-white">
                  <p className="text-sm font-semibold text-zinc-900 mb-1">{item.title}</p>
                  <p className="text-xs text-zinc-700">{item.desc}</p>
                </HoverCard>
              ))}
            </div>
          </div>
          <blockquote className="border-l-4 pl-6 py-1 mt-10" style={{ borderColor: "#00418F" }}>
            <p className="text-xl italic leading-relaxed" style={{ color: "#00418F", fontFamily: "var(--font-syne), sans-serif" }}>
              &ldquo;Admins needed control and visibility at scale, but the system limited them to repetitive, row-level interactions without a holistic view.&rdquo;
            </p>
          </blockquote>
          <p className="text-xs text-zinc-600 mt-2 pl-7">Sunita A., District Data Operator</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          S05 — INSIGHTS & DESIGN PRINCIPLES
      ══════════════════════════════════════════════════════════ */}
      <section id="s05" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-600 flex-shrink-0">05 Insights &amp; Design Principles</span>
            <div className="flex-1 h-px bg-zinc-100" />
          </div>
          <h2 className="text-4xl font-bold text-zinc-950 leading-tight mb-4 max-w-3xl">
            What the research told us. And where it pointed.
          </h2>
          <blockquote className="border-l-4 pl-6 py-1 mb-12" style={{ borderColor: "#00418F" }}>
            <p className="text-xl italic leading-relaxed" style={{ color: "#00418F", fontFamily: "var(--font-syne), sans-serif" }}>
              &ldquo;The audit told us what was broken. The personas told us who was suffering. Together, they made it clear what needed to change and why.&rdquo;
            </p>
          </blockquote>
          <div className="mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-600 mb-5">Key insights</p>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {[
                { id: "I-01", title: "The system thinks in data. Users think in tasks.", pills: ["Heuristic audit", "Both personas"] },
                { id: "I-02", title: "Users work in interruptions, not in focus.", pills: ["Principal persona", "Field observation"] },
                { id: "I-03", title: "Scale without tools creates exhaustion, not efficiency.", pills: ["Admin persona", "Field observation"] },
              ].map((item) => (
                <HoverCard key={item.id} className="p-5 bg-white">
                  <div className="grid gap-3 items-start" style={{ gridTemplateColumns: "32px 1fr" }}>
                    <span className="text-xs font-bold text-zinc-600 pt-0.5">{item.id}</span>
                    <div className="flex flex-col justify-between min-h-[72px]">
                      <p className="text-sm font-semibold text-zinc-900 mb-2">{item.title}</p>
                      <div className="flex flex-wrap gap-1.5">{item.pills.map((pill) => <Pill key={pill}>{pill}</Pill>)}</div>
                    </div>
                  </div>
                </HoverCard>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { id: "I-04", title: "No feedback = no trust = no adoption.", pills: ["Heuristic audit", "Both personas"] },
                { id: "I-05", title: "One interface for all roles meant a good fit for none.", pills: ["Heuristic audit", "Both personas"] },
              ].map((item) => (
                <HoverCard key={item.id} className="p-5 bg-white">
                  <div className="grid gap-3 items-start" style={{ gridTemplateColumns: "32px 1fr" }}>
                    <span className="text-xs font-bold text-zinc-600 pt-0.5">{item.id}</span>
                    <div className="flex flex-col justify-between min-h-[72px]">
                      <p className="text-sm font-semibold text-zinc-900 mb-2">{item.title}</p>
                      <div className="flex flex-wrap gap-1.5">{item.pills.map((pill) => <Pill key={pill}>{pill}</Pill>)}</div>
                    </div>
                  </div>
                </HoverCard>
              ))}
              <div />
            </div>
          </div>
          {/* Design Principles — no icons */}
          <div className="border-t border-zinc-100 pt-10">
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-600 mb-5">Design principles</p>
            <div className="grid grid-cols-3 gap-4">
              <HoverCard className="p-5 bg-white">
                <p className="text-sm font-semibold text-zinc-900 mb-3">Shift from CRUD to workflow-driven experience</p>
                <BulletList items={["Guided step-based flows", "Clear task entry points", "Process-based navigation"]} />
              </HoverCard>
              <HoverCard className="p-5 bg-white">
                <p className="text-sm font-semibold text-zinc-900 mb-3">Reduce cognitive load through information hierarchy</p>
                <BulletList items={["Reconstructed info hierarchy", "Priority of information", "Smart defaults & auto-fills"]} />
              </HoverCard>
              <HoverCard className="p-5 bg-white">
                <p className="text-sm font-semibold text-zinc-900 mb-3">Improve action clarity &amp; discoverability</p>
                <BulletList items={["Action priority", "Clear affordance", "Constant system feedback", "Status visibility across modules"]} />
              </HoverCard>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          S07 — DESIGN DECISIONS (06 in nav)
      ══════════════════════════════════════════════════════════ */}
      <section id="s07" className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-600 flex-shrink-0">06 Design Decisions</span>
            <div className="flex-1 h-px bg-zinc-200" />
          </div>
          <h2 className="text-4xl font-bold text-zinc-950 leading-tight mb-4 max-w-3xl">Where research became interface</h2>
          <blockquote className="border-l-4 pl-6 py-1 mb-12" style={{ borderColor: "#00418F" }}>
            <p className="text-xl italic leading-relaxed" style={{ color: "#00418F", fontFamily: "var(--font-syne), sans-serif" }}>
              &ldquo;Every screen had one job. Remove an obstacle. Each decision maps back to a real pain, a real user, and a real workflow.&rdquo;
            </p>
          </blockquote>

          {/* Principal experience */}
          <div className="mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-600 mb-6">Principal experience</p>
            <div className="space-y-8">

              {/* P-01 */}
              <div className="bg-white border border-zinc-200 hover:border-[#00418F] transition-colors">
                <div className="p-5 border-b border-zinc-100 flex items-center justify-between gap-3">
                  <div><p className="text-xs font-bold text-zinc-600 tracking-widest uppercase mb-1">P-01</p><p className="text-base font-semibold text-zinc-900">Principal dashboard</p></div>
                  <Pill>Improved Discoverability</Pill>
                </div>
                <div className="m-5 border border-zinc-200">
                  <Image src="/images/p-01.png" alt="Principal dashboard – Home screen, school-level view" width={1200} height={750} className="w-full block" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-zinc-100">
                  <div className="p-5 border-r border-zinc-100">
                    <p className="text-xs font-bold tracking-wider uppercase text-zinc-600 mb-2">Problem</p>
                    <BulletList items={["Lack of context", "Data heavy table", "Lack of flexibility for frequent tasks", "Lack of system feedback"]} />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold tracking-wider uppercase text-zinc-600 mb-2">Design decision</p>
                    <BulletList items={["High level overview", "Task based flexibility", "Better Discoverability"]} />
                  </div>
                </div>
                <div className="px-5 pb-5 pt-3 flex flex-wrap gap-2">
                  <Pill>Pending tasks widget</Pill><Pill>Notification-led entry points</Pill><Pill>School snapshot</Pill>
                </div>
              </div>

              {/* P-02 */}
              <div className="bg-white border border-zinc-200 hover:border-[#00418F] transition-colors">
                <div className="p-5 border-b border-zinc-100 flex items-center justify-between gap-3">
                  <div><p className="text-xs font-bold text-zinc-600 tracking-widest uppercase mb-1">P-02</p><p className="text-base font-semibold text-zinc-900">Student transfer flow</p></div>
                  <Pill>Workflow-driven experience</Pill>
                </div>
                <VideoPlayer
                  videoSrc="/videos/student-transfer.webm"
                  fallbackSlides={[
                    { step: "Step 01", title: "Initiate through Quick Action", src: "/images/student-transfer/step-01.png" },
                    { step: "Step 02", title: "Select Transfer type In/Out", src: "/images/student-transfer/step-02.png" },
                    { step: "Step 03", title: "Step by Step guided process", src: "/images/student-transfer/step-03.png" },
                    { step: "Step 04", title: "No need of any physical records", src: "/images/student-transfer/step-04.png" },
                    { step: "Step 05", title: "Easy admit process", src: "/images/student-transfer/step-05.png" },
                    { step: "Step 06", title: "Freedom to choose in edge cases", src: "/images/student-transfer/step-06.png" },
                  ]}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-zinc-100">
                  <div className="p-5 border-r border-zinc-100">
                    <p className="text-xs font-bold tracking-wider uppercase text-zinc-600 mb-2">Problem</p>
                    <BulletList items={["No step guidance", "Lack of system feedback", "Fragmented flow for transfer"]} />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold tracking-wider uppercase text-zinc-600 mb-2">Design decision</p>
                    <BulletList items={["Guided step-by-step flow with progress and confirmations at each stage"]} />
                  </div>
                </div>
                <div className="px-5 pb-5 pt-3 flex flex-wrap gap-2">
                  <Pill>Step progress indicator</Pill><Pill>Confirmation state</Pill>
                </div>
              </div>

              {/* P-03 — Grade progression — VIDEO */}
              <div className="bg-white border border-zinc-200 hover:border-[#00418F] transition-colors">
                <div className="p-5 border-b border-zinc-100 flex items-center justify-between gap-3">
                  <div><p className="text-xs font-bold text-zinc-600 tracking-widest uppercase mb-1">P-03</p><p className="text-base font-semibold text-zinc-900">Grade progression</p></div>
                  <Pill>System feedback &amp; state visibility</Pill>
                </div>
                {/* Video player with fallback slideshow */}
                <VideoPlayer
                  videoSrc="/videos/grade-progression.webm"
                  fallbackSlides={[
                    { step: "Step 01", title: "Dashboard alert surfaces deadline", src: "/images/grade-progression/step-01.png" },
                    { step: "Step 02", title: "Principal initiates grade progression", src: "/images/grade-progression/step-02.png" },
                    { step: "Step 03", title: "Bulk status setting across students", src: "/images/grade-progression/step-03.png" },
                    { step: "Step 04", title: "Delegate to teacher", src: "/images/grade-progression/step-04.png" },
                    { step: "Step 05", title: "Confirmation & submission", src: "/images/grade-progression/step-05.png" },
                  ]}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-zinc-100">
                  <div className="p-5 border-r border-zinc-100">
                    <p className="text-xs font-bold tracking-wider uppercase text-zinc-600 mb-2">Problem</p>
                    <BulletList items={["No notification system", "No status indicators", "Lack of bulk action", "Increased work load during peak time of the year"]} />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold tracking-wider uppercase text-zinc-600 mb-2">Design decision</p>
                    <BulletList items={["Progression surfaces as a dashboard alert with deadline and direct entry. Impossible to miss."]} />
                  </div>
                </div>
                <div className="px-5 pb-5 pt-3 flex flex-wrap gap-2">
                  <Pill>Deadline tracker</Pill><Pill>Delegate to teacher</Pill><Pill>Bulk status setting</Pill>
                </div>
              </div>

              {/* P-04 */}
              <div className="bg-white border border-zinc-200 hover:border-[#00418F] transition-colors">
                <div className="p-5 border-b border-zinc-100 flex items-center justify-between gap-3">
                  <div><p className="text-xs font-bold text-zinc-600 tracking-widest uppercase mb-1">P-04</p><p className="text-base font-semibold text-zinc-900">New admission</p></div>
                  <Pill>Guided task flow</Pill>
                </div>
                <VideoPlayer
                  videoSrc="/videos/new-admission.webm"
                  fallbackSlides={[
                    { step: "Step 01", title: "Single & Bulk admission", src: "/images/new-admission/Step-01.png" },
                    { step: "Step 02", title: "Guided step by step flow", src: "/images/new-admission/Step-02.png" },
                    { step: "Step 03", title: "Bulk admission & status overview", src: "/images/new-admission/Step-03.png" },
                    { step: "Step 04", title: "Admission status overview", src: "/images/new-admission/Step-04.png" },
                  ]}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-zinc-100">
                  <div className="p-5 border-r border-zinc-100">
                    <p className="text-xs font-bold tracking-wider uppercase text-zinc-600 mb-2">Problem</p>
                    <BulletList items={["Interrupted Principals had no way to find or resume workflows", "High mid-flow drop-off and incomplete data", "High clutter of input fields", "Lack of guided flow", "Lack of guided bulk action for addition"]} />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold tracking-wider uppercase text-zinc-600 mb-2">Design decision</p>
                    <BulletList items={["Task saving in pending and one click resume", "Progressive disclosure of optional input", "Bulk CSV upload with flagging discrepancies", "Guided task flow with mandatory vs optional split"]} />
                  </div>
                </div>
                <div className="px-5 pb-5 pt-3 flex flex-wrap gap-2">
                  <Pill>Pending task save</Pill><Pill>Progressive disclosure</Pill><Pill>Bulk CSV upload</Pill>
                </div>
              </div>

              {/* P-05 */}
              <div className="bg-white border border-zinc-200 hover:border-[#00418F] transition-colors">
                <div className="p-5 border-b border-zinc-100 flex items-center justify-between gap-3">
                  <div><p className="text-xs font-bold text-zinc-600 tracking-widest uppercase mb-1">P-05</p><p className="text-base font-semibold text-zinc-900">Bulk action</p></div>
                  <Pill>Ease of use</Pill>
                </div>
                <VideoPlayer
                  slidesOnly
                  fallbackSlides={[
                    { step: "Step 01", title: "Bulk edit to reduce manual task", src: "/images/bulk-edit/Step-01.png" },
                    { step: "Step 02", title: "Flexible and easy to edit", src: "/images/bulk-edit/Step-02.png" },
                    { step: "Step 03", title: "Clear system feedback", src: "/images/bulk-edit/Step-03.png" },
                  ]}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-zinc-100">
                  <div className="p-5 border-r border-zinc-100">
                    <p className="text-xs font-bold tracking-wider uppercase text-zinc-600 mb-2">Problem</p>
                    <BulletList items={["Manual repetition of regular tasks.", "Lack of flexibility and ease of use."]} />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold tracking-wider uppercase text-zinc-600 mb-2">Design decision</p>
                    <BulletList items={["Selective bulk action feature.", "Simplified update flow."]} />
                  </div>
                </div>
                <div className="px-5 pb-5 pt-3 flex flex-wrap gap-2">
                  <Pill>Bulk Action</Pill><Pill>Reduce task time</Pill>
                </div>
              </div>

            </div>
          </div>

          {/* Admin experience */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-600 mb-6">Admin experience</p>
            <div className="space-y-8">

              {/* A-01 */}
              <div className="bg-white border border-zinc-200 hover:border-[#00418F] transition-colors">
                <div className="p-5 border-b border-zinc-100 flex items-center justify-between gap-3">
                  <div><p className="text-xs font-bold text-zinc-600 tracking-widest uppercase mb-1">A-01</p><p className="text-base font-semibold text-zinc-900">District overview</p></div>
                  <Pill>Reduce cognitive load</Pill>
                </div>
                <div className="m-5">
                  <Image
                    src="/images/a-01.png"
                    alt="District overview – District-level dashboard, Admin view"
                    width={1200}
                    height={750}
                    className="w-full block"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-zinc-100">
                  <div className="p-5 border-r border-zinc-100">
                    <p className="text-xs font-bold tracking-wider uppercase text-zinc-600 mb-2">Problem</p>
                    <BulletList items={["No district-level view. Admins navigated school-by-school.", "Lack of continuation of interrupted tasks.", "Lack of high level overview of the district", "Manual repetition of regular tasks.", "Fragmented flow for approvals"]} />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold tracking-wider uppercase text-zinc-600 mb-2">Design decision</p>
                    <BulletList items={["One screen aggregates all schools, data completeness, approvals, and escalations.", "Easy accessible entry points for regular tasks (notifications)", "Visibility of pending tasks"]} />
                  </div>
                </div>
                <div className="px-5 pb-5 pt-3 flex flex-wrap gap-2">
                  <Pill>Schools at a glance</Pill><Pill>Quick Actions</Pill><Pill>Escalation surface</Pill><Pill>Approval notifications</Pill>
                </div>
              </div>

              {/* A-02 */}
              <div className="bg-white border border-zinc-200 hover:border-[#00418F] transition-colors">
                <div className="p-5 border-b border-zinc-100 flex items-center justify-between gap-3">
                  <div><p className="text-xs font-bold text-zinc-600 tracking-widest uppercase mb-1">A-02</p><p className="text-base font-semibold text-zinc-900">Teacher deputation</p></div>
                  <Pill>System feedback &amp; state visibility</Pill>
                </div>
                <VideoPlayer
                  videoSrc="/videos/teachers-deputation.webm"
                  fallbackSlides={[
                    { step: "Step 01", title: "Overview of all deputation requests", src: "/images/Teacher-deputation/Step-01.png" },
                    { step: "Step 02", title: "Clear details of requests", src: "/images/Teacher-deputation/Step-02.png" },
                    { step: "Step 03", title: "Assistance for right choice", src: "/images/Teacher-deputation/Step-03.png" },
                    { step: "Step 04", title: "Easy work flow and clear system feedback", src: "/images/Teacher-deputation/Step-04.png" },
                  ]}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-zinc-100">
                  <div className="p-5 border-r border-zinc-100">
                    <p className="text-xs font-bold tracking-wider uppercase text-zinc-600 mb-2">Problem</p>
                    <BulletList items={["Offline deputation requests", "Lack of deputation overview", "Lack of information priority for decision making"]} />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold tracking-wider uppercase text-zinc-600 mb-2">Design decision</p>
                    <BulletList items={["Holistic deputation overview", "An end to end online deputation flow"]} />
                  </div>
                </div>
                <div className="px-5 pb-5 pt-3 flex flex-wrap gap-2">
                  <Pill>Deputation monitoring</Pill><Pill>Extend or end deputation</Pill>
                </div>
              </div>

              {/* A-03 */}
              <div className="bg-white border border-zinc-200 hover:border-[#00418F] transition-colors">
                <div className="p-5 border-b border-zinc-100 flex items-center justify-between gap-3">
                  <div><p className="text-xs font-bold text-zinc-600 tracking-widest uppercase mb-1">A-03</p><p className="text-base font-semibold text-zinc-900">Approval &amp; rejection</p></div>
                  <Pill>Action clarity &amp; discoverability</Pill>
                </div>
                <VideoPlayer
                  slidesOnly
                  fallbackSlides={[
                    { step: "Step 01", title: "Bulk action", src: "/images/Approval-flow/Step-01.png" },
                    { step: "Step 02", title: "Clear system feedback", src: "/images/Approval-flow/Step-02.png" },
                    { step: "Step 03", title: "Providing rejection reason", src: "/images/Approval-flow/Step-03.png" },
                  ]}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-zinc-100">
                  <div className="p-5 border-r border-zinc-100">
                    <p className="text-xs font-bold tracking-wider uppercase text-zinc-600 mb-2">Problem</p>
                    <BulletList items={["Approvals scattered across modules.", "No single view of what was pending.", "Rejection reason gap"]} />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold tracking-wider uppercase text-zinc-600 mb-2">Design decision</p>
                    <BulletList items={["Unified queue with bulk actions", "Structured rejection reasons", "Single entry point from overview dashboard"]} />
                  </div>
                </div>
                <div className="px-5 pb-5 pt-3 flex flex-wrap gap-2">
                  <Pill>Unified queue</Pill><Pill>Bulk approve / reject</Pill><Pill>Structured rejection reasons</Pill>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          S08 — DESIGN SYSTEM (07 in nav)
      ══════════════════════════════════════════════════════════ */}
      <section id="s08" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-600 flex-shrink-0">07 Design System</span>
            <div className="flex-1 h-px bg-zinc-100" />
          </div>
          <h2 className="text-4xl font-bold text-zinc-950 leading-tight mb-4 max-w-3xl">
            A system built for clarity, scale, and inclusion
          </h2>
          <blockquote className="border-l-4 pl-6 py-1 mb-10" style={{ borderColor: "#00418F" }}>
            <p className="text-xl italic leading-relaxed" style={{ color: "#00418F", fontFamily: "var(--font-syne), sans-serif" }}>
              &ldquo;UX4G is India&apos;s government-first design system. WCAG-compliant by default, scalable across platforms, and customisable to context. It delivers consistent, accessible experiences for every citizen-facing product. Components not covered by UX4G were extended and built to integrate seamlessly within the system.&rdquo;
            </p>
          </blockquote>
          <div className="border border-zinc-200 mb-10">
            <Image
              src="/images/Designsystem.png"
              alt="MIS Design System – Colour system, Typography, Spacing, Iconography, Core components"
              width={1200}
              height={750}
              className="w-full block"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <HoverCard className="p-6 bg-white">
              <p className="text-sm font-semibold text-zinc-900 mb-2">Aesthetics &amp; Consistency</p>
              <p className="text-xs text-zinc-700">Flat, dense, and scannable. Built for data.</p>
            </HoverCard>
            <HoverCard className="p-6 bg-white">
              <p className="text-sm font-semibold text-zinc-900 mb-2">Design language</p>
              <p className="text-xs text-zinc-700">Creating a coherent design experience.</p>
            </HoverCard>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          S09 — IMPACT & LEARNINGS (08 in nav)
      ══════════════════════════════════════════════════════════ */}
      <section id="s09" className="py-24 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-600 flex-shrink-0">08 Impact &amp; Learnings</span>
            <div className="flex-1 h-px bg-zinc-200" />
          </div>
          <h2 className="text-4xl font-bold text-zinc-950 leading-tight mb-4 max-w-3xl">
            What changed. And what comes next.
          </h2>
          <blockquote className="border-l-4 pl-6 py-1 mb-12" style={{ borderColor: "#00418F" }}>
            <p className="text-xl italic leading-relaxed" style={{ color: "#00418F", fontFamily: "var(--font-syne), sans-serif" }}>
              &ldquo;Designing for 5 lac+ users across 12 states is a responsibility. The numbers are promising. But the real measure is whether a Principal in a rural school can now do their job without fear of the system.&rdquo;
            </p>
          </blockquote>

          {/* Impact metrics */}
          <div className="mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-600 mb-6">Impact - early signals post-launch</p>
            <div className="grid grid-cols-2 gap-4">
              <HoverCard className="p-6 bg-white">
                <div className="text-5xl font-bold mb-3" style={{ color: "#00418F" }}>71<span className="text-3xl">%</span></div>
                <p className="text-base font-semibold text-zinc-900">Increase in data completion</p>
              </HoverCard>
              <HoverCard className="p-6 bg-white">
                <div className="text-5xl font-bold mb-3" style={{ color: "#00418F" }}>3.4<span className="text-3xl">x</span></div>
                <p className="text-base font-semibold text-zinc-900">Increase in Adoption</p>
              </HoverCard>
              <HoverCard className="p-6 bg-white">
                <div className="text-5xl font-bold mb-3" style={{ color: "#00418F" }}>89<span className="text-3xl">%</span></div>
                <p className="text-base font-semibold text-zinc-900">Increase in task completion rate</p>
              </HoverCard>
              <HoverCard className="p-6 bg-white">
                <div className="text-5xl font-bold mb-3" style={{ color: "#00418F" }}>62<span className="text-3xl">%</span></div>
                <p className="text-base font-semibold text-zinc-900">Reduced time to completion of regular tasks</p>
              </HoverCard>
            </div>
          </div>

          {/* Reflection block */}
          <div className="p-8 md:p-12" style={{ background: "#00418F" }}>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#fff" }}>Reflection</p>
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: "#fff" }}>
              At government scale, guided experience is important. The core design problem was never visual. It was trust. Every workflow restructured, every confirmation state introduced, and every task made resumable was a deliberate choice to respect users doing critical public work under real constraints. The gap between a clear interaction and a confusing one carries a real human cost. That accountability reshapes how you design.
            </p>
            <ul className="space-y-3" style={{ color: "#E6F2FF" }}>
              {[
                "Real-world constraints like a Principal stepping away mid-task, an Admin reconciling data across forty schools, a teacher deputised without a digital paper trail, are not edge cases. They are the norm.",
                "Observing users in their actual environment, not in a controlled setting, revealed pain points that no audit could surface alone.",
                "The gap between what a system expects and what a user actually does is where task-based redesign begins.",
              ].map((point) => (
                <li key={point} className="flex gap-3 items-start text-lg leading-relaxed">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ background: "#E6F2FF" }} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════════ */}
      <footer className="py-12 border-t border-zinc-800" style={{ background: "#001f45" }}>
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-sm mb-1">MIS Redesign - UX Case Study</p>
            <p className="text-xs text-zinc-700">Government Education Platform &middot; 12 states &middot; 5 lac+ users &middot; 2025</p>
          </div>
          <div className="flex items-center gap-4">
            <Pill>UX / Product Design</Pill>
            <Pill>Research</Pill>
            <Pill>Systems thinking</Pill>
          </div>
        </div>
      </footer>

    </main>
  );
}
