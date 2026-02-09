const LIST_CLASS = "text-slate-800 leading-relaxed";

interface PolicyListProps {
  items: string[];
  ordered?: boolean;
  start?: number;
  className?: string;
}

export function PolicyList({
  items,
  ordered = false,
  start,
  className = "",
}: PolicyListProps) {
  const baseClass = ordered
    ? "list-decimal list-inside space-y-4"
    : "list-disc list-inside ml-4 space-y-2";
  const ListTag = ordered ? "ol" : "ul";

  return (
    <ListTag
      className={`${baseClass} ${LIST_CLASS} ${className}`}
      {...(ordered && start !== undefined ? { start } : {})}
    >
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ListTag>
  );
}
