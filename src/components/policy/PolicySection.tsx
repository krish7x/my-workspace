interface PolicySectionProps {
  heading?: string;
  children: React.ReactNode;
}

export function PolicySection({ heading, children }: PolicySectionProps) {
  return (
    <section className="space-y-4">
      {heading && (
        <h2 className="text-xl md:text-2xl font-bold text-slate-900">{heading}</h2>
      )}
      {children}
    </section>
  );
}
