"use client";

interface MetricHighlightProps {
  value: string;
  label: string;
}

export default function MetricHighlight({ value, label }: MetricHighlightProps) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 min-w-[150px]">
      <p className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-[#715FD5] to-[#F54E00] bg-clip-text text-transparent mb-2">
        {value}
      </p>
      <p className="text-[#7A9EB8] text-sm md:text-base text-center font-medium">
        {label}
      </p>
    </div>
  );
}
