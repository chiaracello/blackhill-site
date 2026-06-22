"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/why-blackhill", label: "Why Blackhill" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/origination-access", label: "Origination & Access" },
  { href: "/insights", label: "Insights" },
  { href: "/investors", label: "Investors" },
  { href: "/companies", label: "Companies" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur border-b border-navy-3">
      <div className="mx-auto max-w-[1280px] px-5 md:px-16 h-20 flex items-center justify-between">
        <Link href="/" aria-label="Blackhill Capital — Home">
          <Logo variant="light" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] tracking-wide text-light-blue hover:text-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="lg:hidden text-white text-sm tracking-wide border border-navy-3 rounded px-3 py-2"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-navy border-t border-navy-3 px-6 py-6 flex flex-col gap-5">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-base font-bold tracking-wide text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
