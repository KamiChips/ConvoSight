"use client";

interface StatCardProps {
  label: string;
  value: string;
  change?: string;
  changeType?: "positive" | "neutral" | "warning";
}

export default function StatCard({
  label,
  value,
  change,
  changeType = "neutral",
}: StatCardProps) {
  const changeColor = {
    positive: "text-[#4CAF50]",
    neutral: "text-[#7A9EB8]",
    warning: "text-[#F54E00]",
  }[changeType];

  return (
    <div className="bg-[#0F1B35] border border-[#1E3A5F] rounded-lg p-6 flex-1 min-w-[150px]">
      <p className="text-[#7A9EB8] text-sm font-medium mb-3">{label}</p>
      <p className="text-4xl font-bold text-white mb-2">{value}</p>
      {change && <p className={`text-xs font-medium ${changeColor}`}>{change}</p>}
    </div>
  );
}
