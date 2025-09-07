"use client";

import { useEffect, useState } from "react";
import { Home as HomeIcon, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled ? "bg-black/30 backdrop-blur border-b border-white/10" : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <span className="w-8 h-8 bg-red-600 rounded flex items-center justify-center ring-1 ring-white/20">
              <HomeIcon className="h-5 w-5 text-white" />
            </span>
            <span className="text-white text-base sm:text-lg font-medium tracking-tight">
              Nelson Home Improvement LLC
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { href: "#about", label: "About" },
              { href: "#services", label: "Services" },
              { href: "#work", label: "Our Work" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors text-sm"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-white text-gray-900 hover:bg-gray-100 px-5 py-2 text-sm font-medium shadow"
            >
              Get Quote
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-white/90 hover:text-white"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile sheet */}
        {isMenuOpen && (
          <div className="lg:hidden mt-2 rounded-xl bg-black/70 ring-1 ring-white/10 backdrop-blur">
            <nav className="flex flex-col gap-2 p-4">
              {[
                { href: "#home", label: "Home" },
                { href: "#services", label: "Services" },
                { href: "#work", label: "Our Work" },
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-white/90 hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 w-full text-center rounded-full bg-white text-gray-900 hover:bg-gray-100 px-5 py-2 font-medium"
              >
                Get Quote
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
