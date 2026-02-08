import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterCategory {
  title: string;
  links: FooterLink[];
}

interface FooterData {
  footerLinks: FooterCategory[]; // Changed from Record<string, FooterLink[]>
  social: FooterLink[];
  legal: FooterLink[];
}

function getFooterData(): FooterData {
  const p = path.join(process.cwd(), "content", "footer.json");
  const raw = fs.readFileSync(p, "utf8");
  return JSON.parse(raw);
}

export function Footer() {
  const data = getFooterData();

  const iconMap: Record<string, any> = {
    Linkedin: Linkedin,
    Facebook: Facebook,
    Instagram: Instagram,
    Youtube: Youtube,
    "X-twitter": Twitter,
  };

  return (
    <footer className="bg-slate-900 text-slate-300 w-full border-t border-slate-800">
      <div className="container mx-auto px-4 py-12 max-w-7xl w-full min-w-0">

        {/* Top Section: Logo & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 border-b border-slate-800 pb-12">
          <Link href="/" className="inline-block">
            <Image
              src="/logo-white.png"
              alt="PassX Global - Immigration and Visa Consultants"
              width={160}
              height={60}
              className="h-auto w-40 opacity-90"
            />
          </Link>

          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center w-full md:w-auto">
            {/* Newsletter */}
            <form className="flex gap-2 w-full sm:max-w-xs">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            <div className="flex gap-3">
              {data.social.map((s) => {
                const Icon = iconMap[s.label];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-800 rounded-full hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 group"
                    aria-label={s.label}
                  >
                    {Icon ? (
                      <Icon className="w-4 h-4" />
                    ) : (
                      <span className="text-xs font-medium">{s.label}</span>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Links Section - Text Based Inline */}
        <div className="space-y-4 text-sm leading-loose break-words">
          {data.footerLinks.map((category, idx) => (
            <div key={idx} className="block">
              <span className="font-bold text-white mr-2">{category.title} :</span>
              {category.links.map((link: any, linkIdx: number) => (
                <span key={linkIdx} className="inline text-slate-400">
                  <Link
                    href={link.href}
                    className="hover:text-amber-500 transition-colors mx-1"
                  >
                    {link.label}
                  </Link>
                  {linkIdx < category.links.length - 1 && (
                    <>{" "}<span className="text-slate-600">|</span>{" "}</>
                  )}
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom Legal Section */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Passx Global. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            {data.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
