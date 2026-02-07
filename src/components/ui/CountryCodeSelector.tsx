"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import { countries } from "countries-list";
import { Check, ChevronDown, Search } from "lucide-react";
import clsx from "clsx";

interface CountryCodeSelectorProps {
    value: string;
    onChange: (value: string) => void;
    error?: string;
}

// Prepare country options once
const countryOptions = Object.entries(countries)
    .map(([code, data]) => ({
        code,
        name: data.name,
        phone: `+${data.phone}`,
        flagUrl: `https://flagcdn.com/w40/${code.toLowerCase()}.png`,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

export function CountryCodeSelector({ value, onChange, error }: CountryCodeSelectorProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Focus search input when opening
    useEffect(() => {
        if (isOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isOpen]);

    // Filter countries based on search
    const filteredCountries = useMemo(() => {
        if (!searchQuery) return countryOptions;
        const lowerQuery = searchQuery.toLowerCase();
        return countryOptions.filter(
            (c) =>
                c.name.toLowerCase().includes(lowerQuery) ||
                c.phone.includes(lowerQuery) ||
                c.code.toLowerCase().includes(lowerQuery)
        );
    }, [searchQuery]);

    const selectedCountry = countryOptions.find((c) => c.phone === value) || countryOptions.find(c => c.code === "IN");

    const handleSelect = (phone: string) => {
        onChange(phone);
        setIsOpen(false);
        setSearchQuery("");
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={clsx(
                    "flex items-center gap-2 px-3 py-3 border-b border-slate-300 bg-slate-50 min-w-[5rem] hover:bg-slate-100 transition-colors focus:outline-none",
                    error && "border-red-500"
                )}
            >
                {selectedCountry ? (
                    <>
                        <div className="relative w-6 h-4 shrink-0 overflow-hidden rounded-sm border border-slate-200">
                            <Image
                                src={selectedCountry.flagUrl}
                                alt={selectedCountry.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="text-sm font-medium text-slate-700">{selectedCountry.phone}</span>
                    </>
                ) : (
                    <span className="text-sm text-slate-500">Select</span>
                )}
                <ChevronDown className="w-4 h-4 text-slate-400 ml-auto" />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 z-50 mt-1 w-72 bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden flex flex-col max-h-80">
                    {/* Search Input */}
                    <div className="sticky top-0 p-2 bg-white border-b border-slate-100">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                ref={searchInputRef}
                                type="text"
                                placeholder="Search country or code..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Country List */}
                    <div className="flex-1 overflow-y-auto p-1">
                        {filteredCountries.length > 0 ? (
                            filteredCountries.map((country) => (
                                <button
                                    key={`${country.code}-${country.phone}`}
                                    type="button"
                                    onClick={() => handleSelect(country.phone)}
                                    className={clsx(
                                        "flex items-center gap-3 w-full px-3 py-2 text-left text-sm rounded-md transition-colors hover:bg-slate-50",
                                        value === country.phone && "bg-blue-50 text-blue-700"
                                    )}
                                >
                                    <div className="relative w-6 h-4 shrink-0 overflow-hidden rounded-sm border border-slate-200">
                                        <Image
                                            src={country.flagUrl}
                                            alt={country.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <span className="flex-1 truncate">{country.name}</span>
                                    <span className="text-slate-500 ml-2">{country.phone}</span>
                                    {value === country.phone && <Check className="w-4 h-4 ml-auto" />}
                                </button>
                            ))
                        ) : (
                            <div className="p-4 text-center text-sm text-slate-500">
                                No countries found
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
