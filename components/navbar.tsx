"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/editorial", label: "Editorial" },
  { href: "/editorial#auction", label: "Auction" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <nav
        className="flex items-center justify-between px-5 py-4 md:px-10 lg:px-16"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-serif text-xl md:text-2xl tracking-wider uppercase text-foreground"
          aria-label="Solange — Home"
        >
          Solange
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center w-11 h-11 text-foreground"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 top-[65px] bg-background z-40"
          role="dialog"
          aria-modal="true"
        >
          <ul className="flex flex-col items-center justify-center h-full gap-10" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-3xl tracking-wider uppercase text-foreground hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
