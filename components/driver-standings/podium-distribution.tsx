"use client";

import { Pie } from "react-chartjs-2";
import "@/lib/chart-config";
import { useChartTheme } from "@/hooks/use-chart-theme";
import { createChartOptions } from "@/lib/chart-options";

const data = {
  labels: ["Pourchaire", "Vesti", "Doohan", "Daruvala", "Hauger"],
  datasets: [
    {
      data: [8, 6, 4, 3, 2],
      backgroundColor: [
        "#FF3366",
        "#3366FF",
        "#33CC66",
        "#FF9933",
        "#9933FF",
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

export function PodiumDistributionChart() {
  const themeOptions = useChartTheme();
  const options = createChartOptions(themeOptions, 'pie');

  return (
    <div className="w-full h-full">
      <Pie data={data} options={options} />
    </div>
  );
}