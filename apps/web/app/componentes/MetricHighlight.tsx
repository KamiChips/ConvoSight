"use client";

interface MetricHighlightProps {
  value: string;
  label: string;
}

export default function MetricHighlight({ value, label }: MetricHighlightProps) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 min-w-[150px]">
      <p style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-5xl md:text-6xl font-bold text-white mb-2">
        {value}
      </p>
      <p style={{ fontFamily: "var(--font-outfit)" }} className="text-[#7A9EB8] text-sm md:text-base text-center font-medium">
        {label}
      </p>
    </div>
  );
}
