"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Migrate", href: "/migrate" },
  { label: "Work", href: "/work" },
  { label: "Study", href: "/study" },
  { label: "Visit", href: "/visit" },
  { label: "Coaching", href: "/coaching" },
  { label: "Holiday Packages", href: "/holiday-packages" },
  { label: "Office Locations", href: "/office-locations" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm w-full overflow-x-hidden">
      <div className="border-b border-slate-100 bg-slate-50">
        <div className="container mx-auto px-4 py-2 flex justify-end gap-6 text-sm max-w-6xl w-full min-w-0">
          <a
            href="tel:+918939138886"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            +91 8939138886
          </a>
          <a
            href="mailto:Info@passxglobal.com"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            Info@passxglobal.com
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl w-full min-w-0">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="PassX Global - Immigration and Visa Consultants"
            width={160}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>
        <nav className="hidden md:flex gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/contact-us"
            className="hidden sm:inline-flex px-4 py-2 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
          >
            Contact us
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {mobileOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 z-[60] bg-black/50"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="md:hidden fixed inset-x-0 top-0 z-[70] bg-white shadow-xl max-h-[100dvh] overflow-y-auto">
            <div className="flex items-center justify-between px-4 py-4 border-b border-slate-200">
              <Link href="/" onClick={() => setMobileOpen(false)}>
                <Image
                  src="/logo.png"
                  alt="PassX Global"
                  width={120}
                  height={48}
                  className="h-10 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="p-2 text-slate-600 hover:text-slate-900"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col px-4 py-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-slate-600 hover:text-slate-900 font-medium border-b border-slate-100 last:border-0"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact-us"
                onClick={() => setMobileOpen(false)}
                className="py-3 text-slate-900 font-semibold mt-2"
              >
                Contact us
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
