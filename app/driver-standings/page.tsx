import { Metadata } from 'next';
import { ChartContainer } from "@/components/driver-standings/chart-container";
import { PointsProgressChart } from "@/components/driver-standings/points-progress";
import { PodiumDistributionChart } from "@/components/driver-standings/podium-distribution";
import { PerformanceRadarChart } from "@/components/driver-standings/performance-radar";
import { PointsDistributionChart } from "@/components/driver-standings/points-distribution";
import { SectorTimesChart } from "@/components/driver-standings/sector-times";
import { PitStopTimesChart } from "@/components/driver-standings/pit-stop-times";
import { OvertakesChart } from "@/components/driver-standings/overtakes";
import { AveragePositionChart } from "@/components/driver-standings/average-position";
import { StructuredData } from "@/components/seo/structured-data";
import { generateWebsiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: 'Driver Standings & Analytics',
  description: 'Comprehensive Formula 2 driver statistics, performance analysis, and championship standings. Track driver progress, compare performances, and analyze race data.',
  openGraph: {
    title: 'F2 Driver Standings & Analytics',
    description: 'Track Formula 2 driver performance, standings, and detailed race analytics.',
  }
};

export default function DriverStandings() {
  return (
    <>
      <StructuredData data={generateWebsiteSchema()} />
      <div className="container mx-auto px-4 py-6 space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">Driver Standings & Analytics</h1>
        
        <div className="chart-grid">
          <ChartContainer title="Championship Points Progress">
            <PointsProgressChart />
          </ChartContainer>
          
          <ChartContainer title="Average Position Per Race">
            <AveragePositionChart />
          </ChartContainer>
          
          <ChartContainer title="Sector Times Analysis">
            <SectorTimesChart />
          </ChartContainer>
          
          <ChartContainer title="Pit Stop Performance">
            <PitStopTimesChart />
          </ChartContainer>
          
          <ChartContainer title="Overtakes Per Race">
            <OvertakesChart />
          </ChartContainer>
          
          <ChartContainer title="Driver Performance Analysis">
            <PerformanceRadarChart />
          </ChartContainer>
          
          <ChartContainer title="Podium Finishes Distribution">
            <PodiumDistributionChart />
          </ChartContainer>
          
          <ChartContainer title="Points Scoring Categories">
            <PointsDistributionChart />
          </ChartContainer>
        </div>
      </div>
    </>
  );
}