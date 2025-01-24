"use client";

import { PolarArea } from "react-chartjs-2";
import "@/lib/chart-config";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const data = {
  labels: ["ART GP", "PREMA", "MP", "Virtuosi", "Carlin"],
  datasets: [
    {
      data: [8, 6, 4, 3, 2],
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

export function PodiumsDistribution() {
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
            position: window.innerWidth <= 640 ? 'bottom' : 'right',
            labels: {
              color: textColor,
              padding: 20,
              font: {
                size: window.innerWidth <= 640 ? 10 : 12,
              },
            },
          },
          tooltip: {
            titleColor: '#fff',
            bodyColor: '#fff',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: 12,
            cornerRadius: 8,
          },
        },
        scales: {
          r: {
            grid: {
              color: gridColor,
              circular: true,
            },
            ticks: {
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

  return <PolarArea data={data} options={options} />;
}