"use client";

import { Radar } from "react-chartjs-2";
import "@/lib/chart-config";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const data = {
  labels: [
    "Car Development",
    "Race Strategy",
    "Pit Stops",
    "Reliability",
    "Driver Management",
  ],
  datasets: [
    {
      label: "ART Grand Prix",
      data: [95, 88, 92, 85, 90],
      borderColor: "#FF3366",
      backgroundColor: "rgba(255, 51, 102, 0.2)",
    },
    {
      label: "PREMA Racing",
      data: [92, 90, 88, 87, 89],
      borderColor: "#3366FF",
      backgroundColor: "rgba(51, 102, 255, 0.2)",
    },
  ],
};

export function TeamPerformanceRadar() {
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

  return <Radar data={data} options={options} />;
}