import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'F2 - Driver Standings',
};

export default function DriverStandingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}