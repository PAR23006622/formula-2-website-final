import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import { locationToCountryCode } from "@/lib/country-codes";
import { StructuredData } from "@/components/seo/structured-data";
import { generateWebsiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: '2024 Race Calendar',
  description: 'Complete Formula 2 2024 race calendar. View upcoming races, venues, dates, and track information for the entire F2 championship season.',
  openGraph: {
    title: 'F2 2024 Race Calendar',
    description: 'View the complete 2024 Formula 2 championship calendar and race schedule.',
  }
};

const races = [
  {
    round: 1,
    place: "Sakhir",
    dates: "29 February - 2 March",
  },
  {
    round: 2,
    place: "Jeddah",
    dates: "7-9 March",
  },
  {
    round: 3,
    place: "Melbourne",
    dates: "22-24 March",
  },
  {
    round: 4,
    place: "Imola",
    dates: "17-19 May",
  },
  {
    round: 5,
    place: "Monte Carlo",
    dates: "23-26 May",
  },
  {
    round: 6,
    place: "Barcelona",
    dates: "21-23 June",
  },
  {
    round: 7,
    place: "Spielberg",
    dates: "28-30 June",
  },
  {
    round: 8,
    place: "Silverstone",
    dates: "5-7 July",
  },
  {
    round: 9,
    place: "Budapest",
    dates: "19-21 July",
  },
  {
    round: 10,
    place: "Spa-Francorchamps",
    dates: "26-28 July",
  },
  {
    round: 11,
    place: "Monza",
    dates: "30 August - 1 September",
  },
  {
    round: 12,
    place: "Baku",
    dates: "13-15 September",
  },
  {
    round: 13,
    place: "Lusail",
    dates: "29 November - 1 December",
  },
  {
    round: 14,
    place: "Yas Island",
    dates: "6-8 December",
  },
];

export default function CalendarPage() {
  return (
    <>
      <StructuredData data={generateWebsiteSchema()} />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">2024 Formula 2 Race Calendar</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {races.map((race) => {
            const countryCode = locationToCountryCode[race.place];
            return (
              <Card key={race.round} className="chart-card h-auto">
                <CardHeader className="pb-0">
                  <CardTitle className="text-xl text-center">Round {race.round}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="relative w-full rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden" style={{ paddingBottom: "66.67%" }}>
                    <Image
                      src={`https://flagcdn.com/w640/${countryCode}.png`}
                      alt={`${race.place} flag`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 justify-center">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-lg font-medium">{race.place}</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{race.dates}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}