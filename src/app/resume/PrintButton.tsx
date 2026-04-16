"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="rounded-full border border-border bg-foreground/5 px-4 py-2 text-sm text-foreground transition-colors hover:bg-foreground/10"
    >
      Print / Save PDF
    </button>
  );
}
