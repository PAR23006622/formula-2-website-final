import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'F2 - About',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}