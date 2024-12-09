import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'F2 - Teams & Drivers',
};

export default function TeamsDriversLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}