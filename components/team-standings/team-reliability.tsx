"use client";

import { Line } from "react-chartjs-2";
import "@/lib/chart-config";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const data = {
  labels: ["Race 1", "Race 2", "Race 3", "Race 4", "Race 5"],
  datasets: [
    {
      label: "ART Grand Prix",
      data: [100, 95, 98, 92, 96],
      borderColor: "#FF3366",
      backgroundColor: "rgba(255, 51, 102, 0.1)",
      fill: true,
      tension: 0.4,
    },
    {
      label: "PREMA Racing",
      data: [98, 96, 94, 95, 93],
      borderColor: "#3366FF",
      backgroundColor: "rgba(51, 102, 255, 0.1)",
      fill: true,
      tension: 0.4,
    },
  ],
};

export function TeamReliability() {
  const { theme } = useTheme();
  const [options, setOptions] = useState({});

  useEffect(() => {
    const updateOptions = () => {
      const textColor = theme === 'dark' ? '#fff' : '#000';
      const gridColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';

      setOptions({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top' as const,
            labels: {
              color: textColor,
              padding: 20,
              font: {
                size: window.innerWidth <= 640 ? 10 : 12,
              },
            },
          },
        },
        scales: {
          y: {
            min: 80,
            max: 100,
            grid: {
              color: gridColor,
              drawBorder: false,
            },
            ticks: {
              color: textColor,
              font: {
                size: window.innerWidth <= 640 ? 8 : 10,
              },
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: textColor,
              font: {
                size: window.innerWidth <= 640 ? 8 : 10,
              },
            },
          },
        },
      });
    };

    const handleResize = () => {
      updateOptions();
    };

    updateOptions();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [theme]);

  return <Line data={data} options={options} />;
}