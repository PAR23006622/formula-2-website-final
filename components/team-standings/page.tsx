import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartDescription } from "@/components/ui/chart-description";
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

export default function TeamStandings() {
  return (
    <>
      <StructuredData data={generateWebsiteSchema()} />
      <div className="container mx-auto px-4 py-6 space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">Team Standings & Analytics</h1>
        
        <div className="chart-grid">
          <Card className="chart-card">
            <CardHeader>
              <CardTitle>Constructor Points Progress</CardTitle>
              <ChartDescription>
                Track how teams accumulate championship points throughout the season. Steeper lines indicate periods of stronger performance and more rapid point accumulation.
              </ChartDescription>
            </CardHeader>
            <CardContent className="chart-content">
              <div className="chart-wrapper">
                <ConstructorPointsChart />
              </div>
            </CardContent>
          </Card>

          <Card className="chart-card">
            <CardHeader>
              <CardTitle>Team Performance Analysis</CardTitle>
              <ChartDescription>
                A radar chart comparing teams across five key areas: car development, race strategy, pit stops, reliability, and driver management. Larger covered areas indicate stronger overall team performance.
              </ChartDescription>
            </CardHeader>
            <CardContent className="chart-content">
              <div className="chart-wrapper">
                <TeamPerformanceRadar />
              </div>
            </CardContent>
          </Card>

          <Card className="chart-card">
            <CardHeader>
              <CardTitle>Pit Stop Performance</CardTitle>
              <ChartDescription>
                Compare average and fastest pit stop times across teams. Lower bars indicate quicker pit stops, showcasing team efficiency in the pit lane.
              </ChartDescription>
            </CardHeader>
            <CardContent className="chart-content">
              <div className="chart-wrapper">
                <PitStopPerformance />
              </div>
            </CardContent>
          </Card>

          <Card className="chart-card">
            <CardHeader>
              <CardTitle>Team Reliability</CardTitle>
              <ChartDescription>
                Visualizes the reliability percentage of each team&#39;s cars over races. Higher percentages indicate better reliability and fewer technical issues.
              </ChartDescription>
            </CardHeader>
            <CardContent className="chart-content">
              <div className="chart-wrapper">
                <TeamReliability />
              </div>
            </CardContent>
          </Card>

          <Card className="chart-card">
            <CardHeader>
              <CardTitle>Qualifying Performance</CardTitle>
              <ChartDescription>
                Shows teams&#39; average qualifying positions. Lower positions (closer to 1) indicate better qualifying performance and grid position advantages.
              </ChartDescription>
            </CardHeader>
            <CardContent className="chart-content">
              <div className="chart-wrapper">
                <QualifyingPerformance />
              </div>
            </CardContent>
          </Card>

          <Card className="chart-card">
            <CardHeader>
              <CardTitle>Race Wins Distribution</CardTitle>
              <ChartDescription>
                A pie chart showing the distribution of race wins among teams. Each slice represents a team&#39;s proportion of total wins this season.
              </ChartDescription>
            </CardHeader>
            <CardContent className="chart-content">
              <div className="chart-wrapper">
                <RaceWinsDistribution />
              </div>
            </CardContent>
          </Card>

          <Card className="chart-card">
            <CardHeader>
              <CardTitle>Points Per Race</CardTitle>
              <ChartDescription>
                Compare points scored by teams in each race. Higher bars indicate stronger race performances and more points accumulated.
              </ChartDescription>
            </CardHeader>
            <CardContent className="chart-content">
              <div className="chart-wrapper">
                <TeamPointsChart />
              </div>
            </CardContent>
          </Card>

          <Card className="chart-card">
            <CardHeader>
              <CardTitle>Podiums Distribution</CardTitle>
              <ChartDescription>
                Shows how podium finishes are distributed among teams. Each segment represents a team&#39;s share of total podium positions achieved.
              </ChartDescription>
            </CardHeader>
            <CardContent className="chart-content">
              <div className="chart-wrapper">
                <PodiumsDistribution />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}