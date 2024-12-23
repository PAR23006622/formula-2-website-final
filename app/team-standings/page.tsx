import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  description: 'In-depth Formula 2 team statistics, constructor standings, and performance analysis. Compare team strategies, reliability, and race achievements.',
  openGraph: {
    title: 'F2 Team Standings & Analytics',
    description: 'Analyze Formula 2 team performance, constructor standings, and detailed statistics.',
  }
};

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