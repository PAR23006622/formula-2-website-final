"use client";

import { Pie } from "react-chartjs-2";
import "@/lib/chart-config";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const data = {
  labels: ["ART GP", "PREMA", "MP", "Virtuosi", "Carlin"],
  datasets: [
    {
      data: [3, 2, 1, 0, 0],
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

export function RaceWinsDistribution() {
  const { theme } = useTheme();
  const [options, setOptions] = useState({});

  useEffect(() => {
    const updateOptions = () => {
      const textColor = theme === 'dark' ? '#fff' : '#000';
      
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
      });
    };

    const handleResize = () => {
      updateOptions();
    };

    updateOptions();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [theme]);

  return <Pie data={data} options={options} />;
}