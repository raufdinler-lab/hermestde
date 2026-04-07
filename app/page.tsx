import type { Metadata } from "next";
import { HermestPage } from "./hermest-page";

export const metadata: Metadata = {
  title: "Hermest Hair Clinic",
  description:
    "Haartransplantation in der Türkei mit Unique FUE / DHI, ALL-IN SAFETY PROTOCOL und All-Inclusive-Paketen.",
};

export default function Home() {
  return <HermestPage />;
}
