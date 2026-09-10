"use client";

import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="bg-[#0F284C] border border-[#7A9EB8] border-opacity-20 rounded-lg p-8 flex flex-col space-y-4 hover:border-[#6700ED] hover:border-opacity-60 transition-colors">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#6700ED] bg-opacity-40">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-[#7A9EB8] text-sm leading-relaxed">{description}</p>
    </div>
  );
}
