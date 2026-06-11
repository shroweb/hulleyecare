import type { ReactNode } from "react";

export function PageHeader({
  eyebrow, title, lead, children,
}: { eyebrow?: string; title: string; lead?: string; children?: ReactNode }) {
  return (
    <div className="bg-primary text-white">
      <div className="container-page py-14 lg:py-16">
        {eyebrow && (
          <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="text-white">{title}</h1>
        {lead && (
          <p className="mt-4 text-white/60 text-base leading-relaxed max-w-xl">{lead}</p>
        )}
        {children && (
          <div className="mt-7 flex flex-wrap gap-3">{children}</div>
        )}
      </div>
    </div>
  );
}
