"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { Check, ChevronDown, Search } from "lucide-react";
import clsx from "clsx";

interface CountryDropdownProps {
    value: string;
    onChange: (value: string) => void;
    options: string[];
    error?: string;
}

export function CountryDropdown({ value, onChange, options, error }: CountryDropdownProps) {
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

    // Filter options based on search
    const filteredOptions = useMemo(() => {
        if (!searchQuery) return options;
        const lowerQuery = searchQuery.toLowerCase();
        return options.filter((option) =>
            option.toLowerCase().includes(lowerQuery)
        );
    }, [searchQuery, options]);

    const handleSelect = (option: string) => {
        onChange(option);
        setIsOpen(false);
        setSearchQuery("");
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={clsx(
                    "flex items-center justify-between w-full px-3 py-2.5 border-b border-slate-300 bg-transparent text-left transition-colors focus:outline-none",
                    error ? "border-red-500" : "focus:border-slate-900",
                    !value && "text-slate-400"
                )}
            >
                <span className={clsx("block truncate", !value && "text-slate-400", value && "text-slate-900")}>
                    {value || "Choose a Country"}
                </span>
                <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 z-50 mt-1 w-full bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden flex flex-col max-h-60">
                    {/* Search Input */}
                    <div className="sticky top-0 p-2 bg-white border-b border-slate-100">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                ref={searchInputRef}
                                type="text"
                                placeholder="Search country..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Options List */}
                    <div className="flex-1 overflow-y-auto p-1">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option) => (
                                <button
                                    key={option}
                                    type="button"
                                    onClick={() => handleSelect(option)}
                                    className={clsx(
                                        "flex items-center w-full px-3 py-2 text-left text-sm rounded-md transition-colors hover:bg-slate-50",
                                        value === option && "bg-blue-50 text-blue-700"
                                    )}
                                >
                                    <span className="flex-1 truncate">{option}</span>
                                    {value === option && <Check className="w-4 h-4 ml-auto" />}
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
