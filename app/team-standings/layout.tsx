import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'F2 - Team Standings',
};

export default function TeamStandingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}