"use client";

import { ReactNode } from "react";

interface ChartContainerProps {
  title: string;
  children: ReactNode;
}

export function ChartContainer({ title, children }: ChartContainerProps) {
  return (
    <div className="chart-card">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="chart-content">
        <div className="chart-wrapper">
          {children}
        </div>
      </div>
    </div>
  );
}