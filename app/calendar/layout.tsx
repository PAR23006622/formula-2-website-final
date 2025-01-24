import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'F2 - Race Calendar',
};

export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}