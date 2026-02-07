export interface NavItem {
    label: string;
    href: string;
    children?: { label: string; href: string }[];
}

export const NAV_ITEMS: NavItem[] = [
    {
        label: "Migrate",
        href: "/migrate",
        children: [
            { label: "Canada", href: "/migrate/canada" },
            { label: "Australia", href: "/migrate/australia" },
            { label: "Germany", href: "/migrate/germany" },
        ],
    },
    {
        label: "Work",
        href: "/work",
        children: [
            { label: "Search Overseas Jobs", href: "/work" },
            { label: "Job Search Services", href: "/work" },
            { label: "Resume Writing", href: "/work" },
            { label: "LinkedIn Optimization", href: "/work" },
            { label: "Resume Marketing", href: "/work" },
            { label: "Post a Job", href: "/work" },
        ],
    },
    {
        label: "Study",
        href: "/study",
        children: [
            { label: "Graduates", href: "/study" },
            { label: "Professionals", href: "/study" },
            { label: "Parents", href: "/study" },
        ],
    },
    { label: "Visit", href: "/visit" },
    {
        label: "Coaching",
        href: "/coaching",
        children: [
            { label: "IELTS-General", href: "/coaching" },
            { label: "IELTS-Academic", href: "/coaching" },
            { label: "PTE-Academic", href: "/coaching" },
            { label: "PTE-Core", href: "/coaching" },
            { label: "German Language", href: "/coaching" },
            { label: "Free Demo Session", href: "/coaching" },
        ],
    },
    { label: "Holiday Packages", href: "/holiday-packages" },
    { label: "Office Locations", href: "/office-locations" },
];
