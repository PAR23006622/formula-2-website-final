"use client";

import { Line } from "react-chartjs-2";
import "@/lib/chart-config";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const data = {
  labels: Array.from({ length: 24 }, (_, i) => `Race ${i + 1}`),
  datasets: [
    {
      label: "Pourchaire",
      data: [25, 44, 58, 83, 95, 108, 120, 138, 156, 171, 189, 201, 220, 235, 250, 268, 280, 295, 310, 325, 340, 355, 370, 385],
      borderColor: "#FF3366",
      backgroundColor: "rgba(255, 51, 102, 0.1)",
      fill: true,
      tension: 0.4,
    },
    {
      label: "Vesti",
      data: [18, 36, 52, 71, 89, 96, 110, 125, 140, 155, 170, 185, 200, 215, 230, 245, 260, 275, 290, 305, 320, 335, 350, 365],
      borderColor: "#3366FF",
      backgroundColor: "rgba(51, 102, 255, 0.1)",
      fill: true,
      tension: 0.4,
    },
  ],
};

export function PointsProgressChart() {
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
              maxRotation: 45,
              minRotation: 45,
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

  return (
    <div className="w-full h-full">
      <Line data={data} options={options} />
    </div>
  );
}