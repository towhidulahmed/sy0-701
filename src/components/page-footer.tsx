export function PageFooter() {
  return (
    <footer className="mt-8 pb-2 text-center sm:mt-10">
      <p className="text-xs text-zinc-600">© {new Date().getFullYear()} Stuick</p>
      <p className="mt-1 flex items-center justify-center gap-1.5 text-[11px] text-zinc-700">
        <span className="font-mono text-zinc-600">&lt;/&gt;</span>
        <a
          href="https://www.towhid.info"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-600 transition-colors hover:text-zinc-400"
        >
          towhid.info
        </a>
      </p>
    </footer>
  );
}
