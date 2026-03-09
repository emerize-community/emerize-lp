export default function SectionDivider() {
  return (
    <div
      className="border-y border-emerald-200/70 bg-gradient-to-b from-emerald-50/60 via-emerald-100/40 to-emerald-50/60 py-12 sm:py-16"
      aria-hidden
    >
      <div className="mx-auto flex max-w-3xl items-center justify-center gap-4 px-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-emerald-300/60" />
        <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-emerald-300/60" />
      </div>
    </div>
  );
}
