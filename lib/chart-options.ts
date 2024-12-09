import type { ChartThemeOptions } from "@/hooks/use-chart-theme";

export const createChartOptions = (
  themeOptions: ChartThemeOptions,
  type: 'line' | 'bar' | 'pie' | 'radar' | 'polarArea' = 'line'
) => {
  const baseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as 'top' | 'bottom' | 'left' | 'right' | 'center' | 'chartArea', // Ensure this is a valid type
        labels: {
          color: themeOptions.textColor,
          padding: 20,
          font: {
            size: themeOptions.fontSize.legend,
          },
        },
      },
      tooltip: {
        title: {
          color: themeOptions.textColor,
        },
        body: {
          color: themeOptions.textColor,
        },
        backgroundColor: themeOptions.backgroundColor,
        padding: 10,
        cornerRadius: 4,
      },
    },
    scales: type !== 'pie' ? {
      y: {
        grid: {
          color: themeOptions.gridColor,
          drawBorder: false,
        },
        ticks: {
          color: themeOptions.textColor,
          font: {
            size: themeOptions.fontSize.ticks,
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: themeOptions.textColor,
          font: {
            size: themeOptions.fontSize.ticks,
          },
        },
      },
      ...(type === 'radar' || type === 'polarArea' ? {
        r: {
          grid: {
            color: themeOptions.gridColor,
            circular: true,
          },
          ticks: {
            color: themeOptions.textColor,
            backdropColor: 'transparent',
            font: {
              size: themeOptions.fontSize.ticks,
            },
          },
          pointLabels: {
            color: themeOptions.textColor,
            font: {
              size: themeOptions.fontSize.labels,
            },
          },
        },
      } : {}),
    } : {},
  };

  return baseOptions;
};
