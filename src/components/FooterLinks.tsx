"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FooterLink {
    label: string;
    href: string;
}

interface FooterLinksProps {
    links: Record<string, FooterLink[]>;
}

export function FooterLinks({ links }: FooterLinksProps) {
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

    const toggleSection = (heading: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [heading]: !prev[heading],
        }));
    };

    const linkGroups = Object.entries(links);

    return (
        <div className="grid gap-4 md:gap-12 md:grid-cols-2 lg:grid-cols-4 min-w-0">
            {linkGroups.map(([heading, groupLinks]) => (
                <div key={heading} className="border-b border-slate-800 md:border-none last:border-none">
                    <button
                        onClick={() => toggleSection(heading)}
                        className="flex w-full items-center justify-between py-4 md:py-0 md:cursor-default"
                    >
                        <h3 className="font-bold text-white mb-0 md:mb-4">{heading}</h3>
                        <span className="md:hidden text-slate-400">
                            {openSections[heading] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </span>
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out md:block ${openSections[heading] ? "max-h-[1000px] opacity-100 mb-4" : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
                            }`}
                    >
                        <ul className="space-y-2 pb-2 md:pb-0">
                            {groupLinks.map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-white transition-colors break-words block py-1 md:py-0 text-sm md:text-base"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}
