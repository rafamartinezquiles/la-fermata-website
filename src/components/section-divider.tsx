export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-8">
      <div className="h-px flex-1 max-w-[120px] bg-[#C8A96E]/40" />
      <div className="h-2.5 w-2.5 rotate-45 border border-[#C8A96E] bg-transparent" />
      <div className="h-px flex-1 max-w-[120px] bg-[#C8A96E]/40" />
    </div>
  );
}
