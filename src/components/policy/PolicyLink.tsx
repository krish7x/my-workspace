import Link from "next/link";

interface PolicyLinkProps {
  href: string;
  children: React.ReactNode;
}

export function PolicyLink({ href, children }: PolicyLinkProps) {
  return (
    <Link
      href={href}
      className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
    >
      {children}
    </Link>
  );
}
