type LogoProps = {
  large?: boolean;
  className?: string;
};

export function Logo({ large = false, className = "" }: LogoProps) {
  return (
    <span
      className={`inline-flex items-baseline font-black tracking-tight select-none ${
        large
          ? "text-4xl sm:text-5xl lg:text-6xl"
          : "text-lg sm:text-xl"
      } ${className}`}
      aria-label="Stuick"
      role="img"
    >
      {/* "Stu" — heavy white */}
      <span className="text-zinc-100">Stu</span>

      {/* "i" — dotless-i with lightning bolt replacing the dot */}
      <span
        className="relative text-yellow-400"
        style={{ display: "inline-block", lineHeight: 1 }}
      >
        {/* U+0131 — dotless i, leaves space for the bolt */}
        ı
        <svg
          aria-hidden="true"
          viewBox="0 0 7 10"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            fill: "#facc15",
            width: "0.42em",
            height: "0.52em",
            left: "50%",
            top: "0.08em",
            transform: "translateX(-50%)",
          }}
        >
          {/*
            Lightning bolt polygon in a 7×10 grid:
            top-right → mid-left → notch-right → bottom-tip → upper-right → notch-left
          */}
          <polygon points="5,0 0,6 3.5,6 2,10 7,4 3.5,4" />
        </svg>
      </span>

      {/* "ck" — same yellow accent */}
      <span className="text-yellow-400">ck</span>
    </span>
  );
}
