export default function Header() {
  return (
    <header className="w-full border-b border-zinc-800 bg-[#12141b]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div>
          <h1 className="text-2xl font-bold text-cyan-400">
            TraceForge
          </h1>

          <p className="text-xs text-zinc-400">
            Professional Vectorization for Print
          </p>
        </div>

        <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-black">
          Alpha 0.1
        </span>
      </div>
    </header>
  );
}