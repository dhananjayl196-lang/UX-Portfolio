const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dhananjay-lokhande/" },
  { label: "Behance",  href: "https://www.behance.net/dhananjayl" },
  { label: "Email",    href: "mailto:dhananjayl196@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="bg-paper-2 border-t border-black/10 px-[52px] py-[26px] flex justify-between items-center">
      <span className="font-body text-[12px] text-ink-3">© 2025 Dhananjay Lokhande</span>
      <div className="flex gap-6">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="font-body text-[12px] text-ink-3 no-underline hover:text-ink transition-colors"
          >
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
