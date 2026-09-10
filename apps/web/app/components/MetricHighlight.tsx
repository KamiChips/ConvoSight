"use client";

interface MetricHighlightProps {
  value: string;
  label: string;
}

export default function MetricHighlight({
  value,
  label,
}: MetricHighlightProps) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 min-w-[150px] py-8">
      <p
        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        className="text-5xl md:text-6xl font-bold text-white mb-4"
      >
        {value}
      </p>
      <p
        style={{ fontFamily: "var(--font-outfit)" }}
        className="text-[#7A9EB8] text-sm md:text-base text-center font-normal mb-6"
      >
        {label}
      </p>
    </div>
  );
}
