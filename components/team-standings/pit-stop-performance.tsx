"use client";

import { Bar } from "react-chartjs-2";
import "@/lib/chart-config";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const data = {
  labels: ["ART GP", "PREMA", "MP", "Virtuosi", "Carlin"],
  datasets: [
    {
      label: "Average Pit Stop Time",
      data: [3.2, 3.4, 3.5, 3.6, 3.7],
      backgroundColor: "rgba(255, 51, 102, 0.8)",
      borderColor: "#FF3366",
      borderWidth: 2,
    },
    {
      label: "Fastest Pit Stop",
      data: [2.8, 2.9, 3.0, 3.1, 3.2],
      backgroundColor: "rgba(51, 102, 255, 0.8)",
      borderColor: "#3366FF",
      borderWidth: 2,
    },
  ],
};

export function PitStopPerformance() {
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