"use client";

import { useState } from "react";
import Link from "next/link";
import ApplicationLogo from "./ApplicationLogo";
import ArrowButton from "./ArrowButton";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/over-ons", label: "Over Ons" },
    { href: "/diensten", label: "Diensten" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-cream">
      {/* Desktop Header */}
      <header className="hidden md:flex items-center justify-between px-6 lg:px-8 py-4 max-w-7xl mx-auto">
        <ApplicationLogo height="40px" />
        <ul className="flex items-center gap-10 lg:gap-14">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-charcoal-light hover:text-charcoal transition-colors duration-300 uppercase tracking-[0.15em] text-xs font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-rust after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <ArrowButton text="Afspraak" href="/contact" />
      </header>

      {/* Mobile Header */}
      <header className="flex md:hidden items-center justify-between px-6 py-4">
        <div className="z-50">
          <ApplicationLogo height="36px" />
        </div>

        <button
          className="z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
          >
            <path
              d={mobileMenuOpen
                ? "M2 2L22 14M2 14L22 2"
                : "M0 1V0H24V1H0ZM0 16V15H24V16H0ZM0 8.5V7.5H24V8.5H0Z"
              }
              stroke="#2C2C2C"
              strokeWidth={mobileMenuOpen ? "2" : "0"}
              fill={mobileMenuOpen ? "none" : "#2C2C2C"}
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 w-full h-full bg-cream z-40 transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <nav className="h-full p-6 pt-28">
            <ul className="flex flex-col items-center justify-start gap-8 text-charcoal">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-3xl uppercase tracking-[0.1em] font-medium hover:text-rust transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-10">
                <ArrowButton
                  text="Afspraak"
                  href="/contact"
                  onclick={() => setMobileMenuOpen(false)}
                />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
