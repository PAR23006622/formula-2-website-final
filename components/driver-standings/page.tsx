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
  description: 'Comprehensive Formula 2 driver statistics, performance analysis, and championship standings.',
};

export default function DriverStandings() {
  return (
    <>
      <StructuredData data={generateWebsiteSchema()} />
      <div className="container mx-auto px-4 py-6 space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">Driver Standings & Analytics</h1>
        
        <div className="chart-grid">
          <ChartContainer 
            title="Championship Points Progress" 
            description="Track each driver's point accumulation throughout the season. Steeper lines indicate periods of stronger performance and faster point scoring."
          >
            <PointsProgressChart />
          </ChartContainer>
          
          <ChartContainer 
            title="Average Position Per Race" 
            description="Shows drivers' average finishing positions across races. Lower positions (closer to 1) indicate better performance and consistency."
          >
            <AveragePositionChart />
          </ChartContainer>
          
          <ChartContainer 
            title="Sector Times Analysis" 
            description="Compare drivers' performance in each track sector. Lower times (shorter bars) indicate faster sector completion and better pace."
          >
            <SectorTimesChart />
          </ChartContainer>
          
          <ChartContainer 
            title="Pit Stop Performance" 
            description="Analyze pit stop durations compared to the average. Lower times indicate more efficient pit stops and better team coordination."
          >
            <PitStopTimesChart />
          </ChartContainer>
          
          <ChartContainer 
            title="Overtakes Per Race" 
            description="Number of successful overtaking maneuvers per race. Higher bars show more aggressive and successful racing strategies."
          >
            <OvertakesChart />
          </ChartContainer>
          
          <ChartContainer 
            title="Driver Performance Analysis" 
            description="Radar chart comparing drivers across five key skills: qualifying pace, race pace, overtaking ability, tire management, and wet weather performance."
          >
            <PerformanceRadarChart />
          </ChartContainer>
          
          <ChartContainer 
            title="Podium Finishes Distribution" 
            description="Shows the distribution of podium finishes among drivers. Larger segments indicate more frequent top-three finishes."
          >
            <PodiumDistributionChart />
          </ChartContainer>
          
          <ChartContainer 
            title="Points Scoring Categories" 
            description="Breakdown of points earned across different categories: feature races, sprint races, pole positions, and fastest laps."
          >
            <PointsDistributionChart />
          </ChartContainer>
        </div>
      </div>
    </>
  );
}