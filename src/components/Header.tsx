"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { NAV_ITEMS } from "@/config/navigation";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

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

  const toggleMobileExpand = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm w-full">
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
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium flex items-center gap-1"
              >
                {item.label}
                {item.children && <ChevronDown className="w-4 h-4" />}
              </Link>
              {item.children && (
                <div className="absolute top-full left-0 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="bg-white border border-slate-100 shadow-lg rounded-xl py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
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
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col px-4 py-4">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="border-b border-slate-100 last:border-0">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => !item.children && setMobileOpen(false)}
                      className="py-3 text-slate-600 hover:text-slate-900 font-medium flex-1"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        onClick={() => toggleMobileExpand(item.label)}
                        className="p-3 text-slate-400"
                      >
                        {mobileExpanded === item.label ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    )}
                  </div>
                  {item.children && mobileExpanded === item.label && (
                    <div className="pl-4 pb-2 bg-slate-50 rounded-lg mb-2">
                      {item.children.map(child => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-sm text-slate-600 hover:text-blue-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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
