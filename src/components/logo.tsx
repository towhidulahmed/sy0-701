type LogoProps = {
  large?: boolean;
  className?: string;
};

export function Logo({ large = false, className = "" }: LogoProps) {
  const iconSize = large ? "0.78em" : "0.9em";

  return (
    <span
      className={`inline-flex items-center gap-[0.18em] font-black tracking-tight select-none ${
        large
          ? "text-4xl sm:text-5xl lg:text-6xl"
          : "text-lg sm:text-xl"
      } ${className}`}
      aria-label="SecLab 30"
      role="img"
    >
      {/*
        Shield with inner check: the universal security mark.
        Cyan to match the site's primary accent (Security+ flagship color)
        and the cool dark-slate palette of the rest of the UI.
      */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.25}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-cyan-400 flex-shrink-0"
        style={{ width: iconSize, height: iconSize }}
      >
        <path d="M12 2.5 4 5.5v6.2c0 4.6 3.2 8.7 8 9.8 4.8-1.1 8-5.2 8-9.8V5.5l-8-3z" />
        <path d="m9 12 2.2 2.2L15.5 10" />
      </svg>

      {/* "Sec": heavy white */}
      <span className="text-zinc-100">Sec</span>

      {/* "Lab": cyan accent */}
      <span className="text-cyan-400">Lab</span>

      {/* "30": version tag superscript */}
      <span
        className="font-bold text-zinc-500"
        style={{
          fontSize: large ? "0.3em" : "0.5em",
          alignSelf: "flex-start",
          marginTop: large ? "0.2em" : "0.12em",
          letterSpacing: "0",
        }}
      >
        30
      </span>
    </span>
  );
}
