import { ChartContainer } from "@/components/driver-standings/chart-container";
import { PointsProgressChart } from "@/components/driver-standings/points-progress";
import { PodiumDistributionChart } from "@/components/driver-standings/podium-distribution";
import { PerformanceRadarChart } from "@/components/driver-standings/performance-radar";
import { PointsDistributionChart } from "@/components/driver-standings/points-distribution";
import { SectorTimesChart } from "@/components/driver-standings/sector-times";
import { PitStopTimesChart } from "@/components/driver-standings/pit-stop-times";
import { OvertakesChart } from "@/components/driver-standings/overtakes";
import { AveragePositionChart } from "@/components/driver-standings/average-position";

export default function DriverStandings() {
  return (
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
  );
}