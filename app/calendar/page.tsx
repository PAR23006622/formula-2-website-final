"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import { locationToCountryCode } from "@/lib/country-codes";
import { useState } from "react";

interface RaceCardProps {
  round: number;
  place: string;
  dates: string;
}

const RaceCard = ({ round, place, dates }: RaceCardProps) => {
  const [imgSrc, setImgSrc] = useState(`https://flagcdn.com/w640/${locationToCountryCode[place]}.png`);

  return (
    <Card className="chart-card h-full hover:shadow-[0_0_30px_rgba(0,144,208,0.3)] dark:hover:shadow-[0_0_30px_rgba(0,144,208,0.15)] transition-all duration-300">
      <CardHeader className="text-center pb-2">
        <CardTitle>Round {round}</CardTitle>
      </CardHeader>
      <div className="relative w-full px-4">
        <div className="relative w-full aspect-[3/2]">
          {locationToCountryCode[place] && (
            <Image
              src={imgSrc}
              alt={`${place} flag`}
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority
              onError={() => {
                setImgSrc(`https://flagcdn.com/${locationToCountryCode[place]}.svg`);
              }}
            />
          )}
        </div>
      </div>
      <CardContent className="space-y-4 text-center mt-4">
        <div className="flex items-center justify-center gap-2">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="text-lg font-medium">{place}</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Calendar className="h-4 w-4 text-primary" />
          <span className="text-sm text-muted-foreground">{dates}</span>
        </div>
      </CardContent>
    </Card>
  );
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
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">2024 Formula 2 Race Calendar</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {races.map((race) => (
          <RaceCard key={race.round} {...race} />
        ))}
      </div>
    </div>
  );
}