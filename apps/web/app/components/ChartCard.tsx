"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChartCardProps {
  title: string;
  data: Array<{
    name: string;
    value: number;
  }>;
}

export default function ChartCard({ title, data }: ChartCardProps) {
  return (
    <div className="bg-[#0F1B35] border border-[#1E3A5F] rounded-lg p-6 w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <div className="flex space-x-2">
          {[8, 12, 16].map((size) => (
            <div
              key={size}
              className="w-2 h-2 rounded-full bg-[#4CAF50]"
              style={{ opacity: 0.3 + (size - 8) / 16 }}
            />
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#1E3A5F"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            stroke="#7A9EB8"
            style={{ fontSize: "12px" }}
          />
          <YAxis stroke="#7A9EB8" style={{ fontSize: "12px" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#0F1B35",
              border: "1px solid #1E3A5F",
              borderRadius: "8px",
              color: "#fff",
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#715FD5"
            strokeWidth={2}
            dot={{ fill: "#715FD5", r: 4 }}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
