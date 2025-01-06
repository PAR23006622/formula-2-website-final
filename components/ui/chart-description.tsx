"use client";

import { cn } from "@/lib/utils";

interface ChartDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function ChartDescription({ children, className }: ChartDescriptionProps) {
  return (
    <p className={cn("text-sm text-muted-foreground mb-4", className)}>
      {children}
    </p>
  );
}