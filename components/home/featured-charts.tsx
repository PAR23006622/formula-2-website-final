"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line, Radar } from "react-chartjs-2";
import "@/lib/chart-config";
import { chartColors, chartBackgrounds } from "@/lib/chart-utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const pointsData = {
  labels: ["Race 1", "Race 2", "Race 3", "Race 4", "Race 5", "Race 6"],
  datasets: [
    {
      label: "Pourchaire",
      data: [25, 44, 58, 83, 95, 108],
      borderColor: chartColors.primary,
      backgroundColor: chartBackgrounds.primary,
      fill: true,
      tension: 0.4,
    },
    {
      label: "Vesti",
      data: [18, 36, 52, 71, 89, 96],
      borderColor: chartColors.secondary,
      backgroundColor: chartBackgrounds.secondary,
      fill: true,
      tension: 0.4,
    },
  ],
};

const performanceData = {
  labels: ["Qualifying", "Race Pace", "Overtaking", "Tire Management", "Wet Performance"],
  datasets: [
    {
      label: "Pourchaire",
      data: [95, 90, 85, 92, 88],
      borderColor: chartColors.primary,
      backgroundColor: chartBackgrounds.primary,
    },
    {
      label: "Vesti",
      data: [88, 92, 90, 85, 86],
      borderColor: chartColors.secondary,
      backgroundColor: chartBackgrounds.secondary,
    },
  ],
};

export function FeaturedCharts() {
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
    <div className="chart-grid">
      <Card className="chart-card">
        <CardHeader>
          <CardTitle>Championship Progress</CardTitle>
        </CardHeader>
        <CardContent className="chart-content">
          <div className="chart-wrapper">
            <Line data={pointsData} options={options} />
          </div>
        </CardContent>
      </Card>
      
      <Card className="chart-card">
        <CardHeader>
          <CardTitle>Driver Performance Analysis</CardTitle>
        </CardHeader>
        <CardContent className="chart-content">
          <div className="chart-wrapper">
            <Radar data={performanceData} options={options} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}