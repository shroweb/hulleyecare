export function TrustBar() {
  return (
    <div className="border-y border-ink/10 bg-background">
      <div className="container-page py-4 flex flex-wrap items-center justify-between gap-y-2 gap-x-10 text-[10.5px] uppercase tracking-[0.18em] font-semibold">
        <div className="flex items-center gap-7 text-ink/65">
          <span>NHS approved</span>
          <span className="h-3 w-px bg-ink/20 shrink-0" />
          <span>GOC registered</span>
          <span className="h-3 w-px bg-ink/20 shrink-0" />
          <span>Independent</span>
        </div>
        <div className="flex items-center gap-7 text-ink/40">
          <span>Hull, HU8 8TE</span>
          <span className="h-3 w-px bg-ink/15 shrink-0" />
          <span>Mon–Fri 9:30–5:30</span>
        </div>
      </div>
    </div>
  );
}
