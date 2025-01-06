import { Metadata } from 'next';
import { ChartContainer } from "@/components/team-standings/chart-container";
import { TeamPointsChart } from "@/components/team-standings/team-points";
import { ConstructorPointsChart } from "@/components/team-standings/constructor-points";
import { TeamPerformanceRadar } from "@/components/team-standings/team-performance";
import { PitStopPerformance } from "@/components/team-standings/pit-stop-performance";
import { TeamReliability } from "@/components/team-standings/team-reliability";
import { QualifyingPerformance } from "@/components/team-standings/qualifying-performance";
import { RaceWinsDistribution } from "@/components/team-standings/race-wins";
import { PodiumsDistribution } from "@/components/team-standings/podiums";
import { StructuredData } from "@/components/seo/structured-data";
import { generateWebsiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: 'Team Standings & Analytics',
  description: 'In-depth Formula 2 team statistics, constructor standings, and performance analysis.',
};

export default function TeamStandings() {
  return (
    <>
      <StructuredData data={generateWebsiteSchema()} />
      <div className="container mx-auto px-4 py-6 space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">Team Standings & Analytics</h1>
        
        <div className="chart-grid">
          <ChartContainer 
            title="Constructor Points Progress"
            description="Track how teams accumulate championship points throughout the season. Steeper lines indicate periods of stronger performance and more rapid point accumulation. Compare team momentum and development across races."
          >
            <ConstructorPointsChart />
          </ChartContainer>

          <ChartContainer 
            title="Team Performance Analysis"
            description="A radar chart comparing teams across five key areas: car development, race strategy, pit stops, reliability, and driver management. Larger covered areas indicate stronger overall team performance. Use this to identify team strengths and weaknesses."
          >
            <TeamPerformanceRadar />
          </ChartContainer>

          <ChartContainer 
            title="Pit Stop Performance"
            description="Compare average and fastest pit stop times across teams. Lower bars indicate quicker pit stops, showcasing team efficiency in the pit lane. The difference between average and fastest times shows consistency."
          >
            <PitStopPerformance />
          </ChartContainer>

          <ChartContainer 
            title="Team Reliability"
            description="Visualizes the reliability percentage of each team's cars over races. Higher percentages indicate better reliability and fewer technical issues. Look for trends in reliability improvements or declines."
          >
            <TeamReliability />
          </ChartContainer>

          <ChartContainer 
            title="Qualifying Performance"
            description="Shows teams' average qualifying positions. Lower positions (closer to 1) indicate better qualifying performance and grid position advantages. This metric is crucial for race strategy planning."
          >
            <QualifyingPerformance />
          </ChartContainer>

          <ChartContainer 
            title="Race Wins Distribution"
            description="A pie chart showing the distribution of race wins among teams. Each slice represents a team's proportion of total wins this season. Larger slices indicate dominant teams in terms of victories."
          >
            <RaceWinsDistribution />
          </ChartContainer>

          <ChartContainer 
            title="Points Per Race"
            description="Compare points scored by teams in each race. Higher bars indicate stronger race performances and more points accumulated. This helps identify which teams perform best at specific tracks or conditions."
          >
            <TeamPointsChart />
          </ChartContainer>

          <ChartContainer 
            title="Podiums Distribution"
            description="Shows how podium finishes are distributed among teams. Each segment represents a team's share of total podium positions achieved. This metric indicates consistent high-performance across races."
          >
            <PodiumsDistribution />
          </ChartContainer>
        </div>
      </div>
    </>
  );
}