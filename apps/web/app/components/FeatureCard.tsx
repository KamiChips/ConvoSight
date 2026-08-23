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
    <div className="bg-[#0F1B35] border border-[#1E3A5F] rounded-lg p-8 flex flex-col space-y-4 hover:border-[#715FD5] transition-colors">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#715FD5] bg-opacity-20">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-[#7A9EB8] text-sm leading-relaxed">{description}</p>
    </div>
  );
}
