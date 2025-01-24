"use client";

import { Bar } from "react-chartjs-2";
import "@/lib/chart-config";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const data = {
  labels: ["Race 1", "Race 2", "Race 3", "Race 4", "Race 5"],
  datasets: [
    {
      label: "ART Grand Prix",
      data: [25, 23, 28, 36, 44],
      backgroundColor: "rgba(255, 51, 102, 0.8)",
      borderColor: "#FF3366",
      borderWidth: 2,
    },
    {
      label: "PREMA Racing",
      data: [18, 24, 26, 30, 44],
      backgroundColor: "rgba(51, 102, 255, 0.8)",
      borderColor: "#3366FF",
      borderWidth: 2,
    },
  ],
};

export function TeamPointsChart() {
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
            beginAtZero: true,
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

  return <Bar data={data} options={options} />;
}