"use client";

import { ReactNode } from "react";
import { ChartDescription } from "@/components/ui/chart-description";

interface ChartContainerProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function ChartContainer({ title, description, children }: ChartContainerProps) {
  return (
    <div className="chart-card">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <ChartDescription>{description}</ChartDescription>
      <div className="chart-content">
        <div className="chart-wrapper">
          {children}
        </div>
      </div>
    </div>
  );
}