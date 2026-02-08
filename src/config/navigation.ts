export interface NavItem {
    label: string;
    href: string;
    children?: { label: string; href: string }[];
}

export const NAV_ITEMS: NavItem[] = [
    { label: "Migrate", href: "/migrate" },
    { label: "Work", href: "/work" },
    { label: "Study", href: "/study" },
    { label: "Visit", href: "/visit" },
    { label: "Coaching", href: "/coaching" },
    { label: "Holiday Packages", href: "/holiday-packages" },

];
