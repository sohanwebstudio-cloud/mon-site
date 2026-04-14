import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/prestations/sur-mesure",
  },
};

export default function SurMesureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
