import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/prestations/la-vitrine",
  },
};

export default function LaVitrineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
