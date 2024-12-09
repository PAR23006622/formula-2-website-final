import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
  RadialLinearScale,
  BarElement,
  PolarAreaController,
  RadarController,
  PieController,
  LineController,
} from 'chart.js';

// Register all required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
  RadialLinearScale,
  PolarAreaController,
  RadarController,
  PieController,
  LineController
);

// Set default colors to respect system theme
ChartJS.defaults.color = 'currentColor';
ChartJS.defaults.borderColor = 'rgba(128, 128, 128, 0.2)';

// Set default font
ChartJS.defaults.font.family = 'Inter, sans-serif';

// Set default legend style
ChartJS.defaults.plugins.legend.labels.usePointStyle = true;

// Set default tooltip style
ChartJS.defaults.plugins.tooltip.backgroundColor = 'rgba(0, 0, 0, 0.8)';
ChartJS.defaults.plugins.tooltip.titleColor = '#fff';
ChartJS.defaults.plugins.tooltip.bodyColor = '#fff';
ChartJS.defaults.plugins.tooltip.padding = 12;
ChartJS.defaults.plugins.tooltip.cornerRadius = 8;
ChartJS.defaults.plugins.tooltip.displayColors = true;
ChartJS.defaults.plugins.tooltip.boxPadding = 4;

// Export configured ChartJS instance
export default ChartJS;