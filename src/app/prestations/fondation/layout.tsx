import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/prestations/fondation",
  },
};

export default function FondationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
