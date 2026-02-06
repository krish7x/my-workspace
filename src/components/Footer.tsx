import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterData {
  footerLinks: Record<string, FooterLink[]>;
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
  const linkGroups = Object.entries(data.footerLinks);

  return (
    <footer className="bg-slate-900 text-slate-300 w-full overflow-x-hidden">
      <div className="container mx-auto px-4 py-16 max-w-6xl w-full min-w-0">
        <Link href="/" className="inline-block mb-12">
          <Image
            src="/logo.png"
            alt="PassX Global - Immigration and Visa Consultants"
            width={160}
            height={60}
            className="h-10 w-auto opacity-90"
          />
        </Link>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 min-w-0">
          {linkGroups.map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-bold text-white mb-4">{heading}:</h3>
              <ul className="space-y-2">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors break-words"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-slate-700">
          <h3 className="font-bold text-white mb-4">FOLLOW US</h3>
          <div className="flex gap-4">
            {data.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700">
          <h3 className="font-bold text-white mb-4">SUBSCRIBE NEWSLETTER</h3>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md w-full min-w-0">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 min-w-0 px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
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

        <p className="mt-8 text-sm text-slate-500">
          © {new Date().getFullYear()} Passx, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
