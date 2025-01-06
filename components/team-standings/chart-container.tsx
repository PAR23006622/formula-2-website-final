"use client";

import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartDescription } from "@/components/ui/chart-description";

interface ChartContainerProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function ChartContainer({ title, description, children }: ChartContainerProps) {
  return (
    <Card className="chart-card">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <ChartDescription>{description}</ChartDescription>
      </CardHeader>
      <CardContent className="chart-content">
        <div className="chart-wrapper">
          {children}
        </div>
      </CardContent>
    </Card>
  );
}