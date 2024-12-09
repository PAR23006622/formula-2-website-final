"use client";

import { PolarArea } from "react-chartjs-2";
import "@/lib/chart-config";
import { useChartTheme } from "@/hooks/use-chart-theme";
import { createChartOptions } from "@/lib/chart-options";

const data = {
  labels: ["Feature Race Wins", "Sprint Race Wins", "Pole Positions", "Fastest Laps", "Points Finishes"],
  datasets: [
    {
      data: [4, 3, 5, 6, 15],
      backgroundColor: [
        "rgba(255, 51, 102, 0.8)",
        "rgba(51, 102, 255, 0.8)",
        "rgba(51, 204, 102, 0.8)",
        "rgba(255, 153, 51, 0.8)",
        "rgba(153, 51, 255, 0.8)",
      ],
      borderColor: [
        "#FF3366",
        "#3366FF",
        "#33CC66",
        "#FF9933",
        "#9933FF",
      ],
      borderWidth: 2,
    },
  ],
};

export function PointsDistributionChart() {
  const themeOptions = useChartTheme();
  const options = createChartOptions(themeOptions, 'polarArea');

  return (
    <div className="w-full h-full">
      <PolarArea data={data} options={options as any} />
    </div>
  );
}
