"use client";

import { useState } from "react";
import {
  AreaChart,
  Area,
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
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data}>
          {isHovering && (
            <>
              <CartesianGrid strokeDasharray="3 3" stroke="#1E3A5F" vertical={false} />
              <XAxis dataKey="name" stroke="#7A9EB8" style={{ fontSize: "12px" }} />
              <YAxis stroke="#7A9EB8" style={{ fontSize: "12px" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#071C3B",
                  border: "1px solid #7A9EB8",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />
            </>
          )}
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#715FD5" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#715FD5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#715FD5"
            strokeWidth={2}
            fill="url(#colorGradient)"
            dot={isHovering ? { fill: "#715FD5", r: 4 } : false}
            activeDot={isHovering ? { r: 6 } : false}
            isAnimationActive={true}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
