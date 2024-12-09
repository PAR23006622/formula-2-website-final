import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Flag, Users } from "lucide-react";
import Image from "next/image";

const teams = [
  {
    name: "ART Grand Prix",
    logo: "https://res.cloudinary.com/prod-f2f3/image/upload/v1583181795/f2/global/teams/2019/Team-Logo_ART.png",
    drivers: [
      {
        name: "Victor Martins",
        photo: "https://res.cloudinary.com/prod-f2f3/c_fill,dpr_1.0,f_auto,g_auto,h_65,w_100/v1/f2/global/drivers/2024/Official%20portraits/01_Martins_24"
      },
      {
        name: "Zak O'Sullivan",
        photo: "https://res.cloudinary.com/prod-f2f3/c_fill,dpr_1.0,f_auto,g_auto,h_65,w_100/v1/f2/global/drivers/2024/Official%20portraits/S427tfzh1Ds_568_ZHRKiMK9"
      }
    ],
    base: "France",
    achievements: { wins: 3, podiums: 8, poles: 4 }
  },
  {
    name: "PREMA Racing",
    logo: "https://res.cloudinary.com/prod-f2f3/image/upload/v1583181799/f2/global/teams/2019/Team-Logo_PREMA.png",
    drivers: [
      {
        name: "Oliver Bearman",
        photo: "https://res.cloudinary.com/prod-f2f3/c_fill,dpr_1.0,f_auto,g_auto,h_65,w_100/v1/f2/global/drivers/2024/Official%20portraits/03_Bearman"
      },
      {
        name: "Andrea Kimi Antonelli",
        photo: "https://res.cloudinary.com/prod-f2f3/c_fill,dpr_1.0,f_auto,g_auto,h_65,w_100/v1/f2/global/drivers/2024/Official%20portraits/04_Antonelli"
      }
    ],
    base: "Italy",
    achievements: { wins: 2, podiums: 6, poles: 3 }
  },
  {
    name: "MP Motorsport",
    logo: "https://res.cloudinary.com/prod-f2f3/image/upload/v1646052400/f2/global/teams/logos/Team-Logo_MPMotorsport022.png",
    drivers: [
      {
        name: "Dennis Hauger",
        photo: "https://res.cloudinary.com/prod-f2f3/c_fill,dpr_1.0,f_auto,g_auto,h_65,w_100/v1/f2/global/drivers/2024/Official%20portraits/Be34Gazcwq0U0A9617_N3RRCsNh"
      },
      {
        name: "Franco Colapinto",
        photo: "https://res.cloudinary.com/prod-f2f3/c_fill,dpr_1.0,f_auto,g_auto,h_65,w_100/v1/f2/global/drivers/2024/Official%20portraits/Fornaroli_0U0A9128_kswUet7T"
      }
    ],
    base: "Netherlands",
    achievements: { wins: 1, podiums: 4, poles: 2 }
  },
  {
    name: "Campos Racing",
    logo: "https://res.cloudinary.com/prod-f2f3/image/upload/v1641289263/f2/global/teams/logos/Team-Logo_Campos.png",
    drivers: [
      {
        name: "Pepe Martí",
        photo: "https://res.cloudinary.com/prod-f2f3/c_fill,dpr_1.0,f_auto,g_auto,h_65,w_100/v1/f2/global/drivers/2024/Official%20portraits/21_Marti"
      },
      {
        name: "Kush Maini",
        photo: "https://res.cloudinary.com/prod-f2f3/c_fill,dpr_1.0,f_auto,g_auto,h_65,w_100/v1/f2/global/drivers/2024/Official%20portraits/09_Maini"
      }
    ],
    base: "Spain",
    achievements: { wins: 0, podiums: 3, poles: 1 }
  },
  {
    name: "DAMS",
    logo: "https://res.cloudinary.com/prod-f2f3/image/upload/v1705935667/f2/global/teams/logos/Team-Logo_DAMS_LucasOil-024.png",
    drivers: [
      {
        name: "Jak Crawford",
        photo: "https://res.cloudinary.com/prod-f2f3/c_fill,dpr_1.0,f_auto,g_auto,h_65,w_100/v1/f2/global/drivers/2024/Official%20portraits/07_Crawford"
      },
      {
        name: "Juan Manuel Correa",
        photo: "https://res.cloudinary.com/prod-f2f3/c_fill,dpr_1.0,f_auto,g_auto,h_65,w_100/v1/f2/global/drivers/2024/Official%20portraits/16_Cordeel"
      }
    ],
    base: "France",
    achievements: { wins: 0, podiums: 2, poles: 0 }
  },
  {
    name: "Hitech Pulse-Eight",
    logo: "https://res.cloudinary.com/prod-f2f3/image/upload/v1583181796/f2/global/teams/2019/Team-Logo_Hitech.png",
    drivers: [
      {
        name: "Gabriele Minì",
        photo: "https://res.cloudinary.com/prod-f2f3/c_fill,dpr_1.0,f_auto,g_auto,h_65,w_100/v1/f2/global/drivers/2024/Official%20portraits/M4nvbew_s11LLwviqbv0"
      },
      {
        name: "Paul Aron",
        photo: "https://res.cloudinary.com/prod-f2f3/c_fill,dpr_1.0,f_auto,g_auto,h_65,w_100/v1/f2/global/drivers/2024/Official%20portraits/17_Aron"
      }
    ],
    base: "United Kingdom",
    achievements: { wins: 0, podiums: 2, poles: 1 }
  },
  {
    name: "Virtuosi Racing",
    logo: "https://res.cloudinary.com/prod-f2f3/image/upload/v1709139290/f2/global/teams/logos/Team-Logo_VirtuosiRacing_2.png",
    drivers: [
      {
        name: "Zane Maloney",
        photo: "https://res.cloudinary.com/prod-f2f3/c_fill,dpr_1.0,f_auto,g_auto,h_65,w_100/v1/f2/global/drivers/2024/Official%20portraits/BrR89230Weqvnqin93_u11LRRbd"
      },
      {
        name: "Isack Hadjar",
        photo: "https://res.cloudinary.com/prod-f2f3/c_fill,dpr_1.0,f_auto,g_auto,h_65,w_100/v1/f2/global/drivers/2024/Official%20portraits/20_Hadjar"
      }
    ],
    base: "United Kingdom",
    achievements: { wins: 0, podiums: 1, poles: 0 }
  },
  {
    name: "Trident",
    logo: "https://res.cloudinary.com/prod-f2f3/image/upload/v1583181799/f2/global/teams/2019/Team-Logo_Trident.png",
    drivers: [
      {
        name: "Roman Staněk",
        photo: "https://res.cloudinary.com/prod-f2f3/c_fill,dpr_1.0,f_auto,g_auto,h_65,w_100/v1/f2/global/drivers/2024/Official%20portraits/Eus3zftcbov78buzb_0U0A6_y18DPIZh"
      },
      {
        name: "Richard Verschoor",
        photo: "https://res.cloudinary.com/prod-f2f3/c_fill,dpr_1.0,f_auto,g_auto,h_65,w_100/v1/f2/global/drivers/2024/Official%20portraits/V3rwcgvwcoo_0U0A7662_BENB"
      }
    ],
    base: "Italy",
    achievements: { wins: 0, podiums: 1, poles: 0 }
  },
  {
    name: "Van Amersfoort Racing",
    logo: "https://res.cloudinary.com/prod-f2f3/image/upload/v1641054871/f2/global/teams/logos/Team-Logo_VAR.png",
    drivers: [
      {
        name: "Rafael Villagómez",
        photo: "https://res.cloudinary.com/prod-f2f3/c_fill,dpr_1.0,f_auto,g_auto,h_65,w_100/v1/f2/global/drivers/2024/Official%20portraits/15_Villagomez"
      },
      {
        name: "Enzo Fittipaldi",
        photo: "https://res.cloudinary.com/prod-f2f3/c_fill,dpr_1.0,f_auto,g_auto,h_65,w_100/v1/f2/global/drivers/2024/Official%20portraits/B3rewrzgvqtz3TT_0U4TNmB"
      }
    ],
    base: "Netherlands",
    achievements: { wins: 0, podiums: 0, poles: 0 }
  },
  {
    name: "Rodin Motorsport",
    logo: "https://res.cloudinary.com/prod-f2f3/image/upload/v1704797929/f2/global/teams/logos/Team-Logo_RodinMotorsport.png",
    drivers: [
      {
        name: "Zak O'Sullivan",
        photo: "https://res.cloudinary.com/prod-f2f3/c_fill,dpr_1.0,f_auto,g_auto,h_65,w_100/v1/f2/global/drivers/2024/Official%20portraits/S427tfzh1Ds_568_ZHRKiMK9"
      },
      {
        name: "Joshua Durksen",
        photo: "https://res.cloudinary.com/prod-f2f3/c_fill,dpr_1.0,f_auto,g_auto,h_65,w_100/v1/f2/global/drivers/2024/Official%20portraits/Durksen_2024-04-23_F2_Portraits_305386_aVEYJGVV"
      }
    ],
    base: "United Kingdom",
    achievements: { wins: 0, podiums: 0, poles: 0 }
  }
];

export default function TeamsDrivers() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">Formula 2 Teams & Drivers 2024</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <Card key={team.name} className="chart-card h-auto hover:shadow-[0_0_30px_rgba(0,144,208,0.3)] dark:hover:shadow-[0_0_30px_rgba(0,144,208,0.15)] transition-all duration-300">
            <CardHeader className="text-center">
              <div className="relative w-[140px] h-[79px] mx-auto mb-4">
                <Image
                  src={team.logo}
                  alt={`${team.name} logo`}
                  fill
                  className="object-contain rounded-lg"
                  sizes="140px"
                  priority
                />
              </div>
              <CardTitle className="text-xl">{team.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="h-4 w-4 text-primary" />
                    <p className="text-sm font-medium text-muted-foreground">Drivers</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {team.drivers.map((driver) => (
                      <div key={driver.name} className="text-center">
                        <div className="relative w-[100px] h-[65px] mx-auto mb-2">
                          <Image
                            src={driver.photo}
                            alt={driver.name}
                            fill
                            className="object-cover rounded-lg"
                            sizes="100px"
                            priority
                          />
                        </div>
                        <p className="text-sm font-medium">{driver.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Flag className="h-4 w-4 text-primary" />
                    <p className="text-sm font-medium text-muted-foreground">Base</p>
                  </div>
                  <p className="text-sm ml-6">{team.base}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="h-4 w-4 text-primary" />
                    <p className="text-sm font-medium text-muted-foreground">2023 Achievements</p>
                  </div>
                  <div className="ml-6 grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Wins</p>
                      <p className="text-lg font-semibold">{team.achievements.wins}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Podiums</p>
                      <p className="text-lg font-semibold">{team.achievements.podiums}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Poles</p>
                      <p className="text-lg font-semibold">{team.achievements.poles}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}