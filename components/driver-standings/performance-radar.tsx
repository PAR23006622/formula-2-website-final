"use client";

import { Radar } from "react-chartjs-2";
import "@/lib/chart-config";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const data = {
  labels: ["Qualifying", "Race Pace", "Overtaking", "Tire Management", "Wet Performance"],
  datasets: [
    {
      label: "Pourchaire",
      data: [95, 90, 85, 92, 88],
      borderColor: "#FF3366",
      backgroundColor: "rgba(255, 51, 102, 0.2)",
      borderWidth: 2,
    },
    {
      label: "Vesti",
      data: [88, 92, 90, 85, 86],
      borderColor: "#3366FF",
      backgroundColor: "rgba(51, 102, 255, 0.2)",
      borderWidth: 2,
    },
  ],
};

export function PerformanceRadarChart() {
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
          r: {
            min: 0,
            max: 100,
            beginAtZero: true,
            grid: {
              color: gridColor,
              circular: true,
            },
            ticks: {
              stepSize: 20,
              color: textColor,
              backdropColor: 'transparent',
              font: {
                size: window.innerWidth <= 640 ? 8 : 10,
              },
            },
            pointLabels: {
              color: textColor,
              font: {
                size: window.innerWidth <= 640 ? 8 : 11,
              },
            },
            angleLines: {
              color: gridColor,
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
      <Radar data={data} options={options} />
    </div>
  );
}