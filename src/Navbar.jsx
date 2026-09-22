import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on escape key (R-32)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Core Focus", href: "#focus" },
    { label: "Background", href: "#background" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF9F6]/90 backdrop-blur-sm border-b border-[#E5E7EB]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="#about"
          className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded p-1"
        >
          <span className="font-semibold text-lg tracking-tight text-[#1A1A1A]">
            Jahns Lewi
          </span>
          <span className="text-xs text-[#4B5563] hidden sm:inline">
            IT Infrastructure & DevOps
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4B5563]" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#1A1A1A] transition-colors py-2 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center justify-center min-h-[40px] px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#0F172A] hover:bg-slate-800 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile Hamburger Toggle (44px tap target) */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2 rounded text-[#1A1A1A] hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-[#E5E7EB] bg-[#FAF9F6] px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 px-3 text-base font-medium text-[#1A1A1A] hover:bg-slate-100 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center py-3 px-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#0F172A] hover:bg-slate-800 rounded transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}