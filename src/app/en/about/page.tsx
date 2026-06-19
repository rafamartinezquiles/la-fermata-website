import type { Metadata } from "next";
import AboutPageClient from "./about-page-client";

export const metadata: Metadata = {
  title: "About Us — La Fermata De Gasperi 43",
  description:
    "Our story: pizza al tegamino and al mattone, farinata and traditional cuisine in Turin. Discover who we are and our specialties.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
