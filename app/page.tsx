import { WelcomeSection } from "@/components/home/welcome-section";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { FeaturedCharts } from "@/components/home/featured-charts";
import { RecentResults } from "@/components/dashboard/recent-results";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      <WelcomeSection />
      <StatsCards />
      <FeaturedCharts />
      <RecentResults />
    </div>
  );
}

export const metadata = {
    title: 'Formula 2 Analytics',
    description: 'Stay ahead in the fast-paced world of Formula 2 racing with Formula 2 Insights. Explore in-depth analysis, race predictions, and the latest news from the grid. Discover driver stats, team performance reviews, and expert commentary. Join our community of racing enthusiasts and delve into the excitement of every turn and lap.',
    viewport: 'width=device-width, initial-scale=1',
};