import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TeamPointsChart } from "@/components/team-standings/team-points";
import { ConstructorPointsChart } from "@/components/team-standings/constructor-points";
import { TeamPerformanceRadar } from "@/components/team-standings/team-performance";
import { PitStopPerformance } from "@/components/team-standings/pit-stop-performance";
import { TeamReliability } from "@/components/team-standings/team-reliability";
import { QualifyingPerformance } from "@/components/team-standings/qualifying-performance";
import { RaceWinsDistribution } from "@/components/team-standings/race-wins";
import { PodiumsDistribution } from "@/components/team-standings/podiums";

export default function TeamStandings() {
  return (
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

        <Card className="chart-card h-auto">
          <CardHeader>
            <CardTitle>Current Team Standings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left py-2">Position</th>
                    <th className="text-left py-2">Team</th>
                    <th className="text-left py-2">Points</th>
                    <th className="text-left py-2">Wins</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { position: 1, team: "ART Grand Prix", points: 156, wins: 3 },
                    { position: 2, team: "PREMA Racing", points: 142, wins: 2 },
                    { position: 3, team: "MP Motorsport", points: 128, wins: 1 },
                    { position: 4, team: "Virtuosi Racing", points: 112, wins: 0 },
                    { position: 5, team: "Carlin", points: 98, wins: 0 },
                  ].map((entry) => (
                    <tr key={entry.position} className="border-t">
                      <td className="py-2">{entry.position}</td>
                      <td className="py-2">{entry.team}</td>
                      <td className="py-2">{entry.points}</td>
                      <td className="py-2">{entry.wins}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}