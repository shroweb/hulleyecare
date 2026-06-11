const items = [
  "Never rushed",
  "Same team every visit",
  "Non-tolerance lens guarantee",
  "Free adjustments between visits",
];

export function ServicePromises() {
  return (
    <div className="border-t border-ink/10 pt-8 flex flex-wrap gap-x-10 gap-y-2">
      {items.map((label) => (
        <span key={label} className="text-xs text-ink/45 uppercase tracking-widest font-semibold">
          {label}
        </span>
      ))}
    </div>
  );
}
