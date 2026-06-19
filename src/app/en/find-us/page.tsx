import type { Metadata } from "next";
import FindUsPageClient from "./find-us-page-client";

export const metadata: Metadata = {
  title: "Find Us — La Fermata De Gasperi 43",
  description:
    "Find us at Corso Alcide De Gasperi 43, Turin. Opening hours, map and directions to reach us. Call to book: 011 305 4718.",
};

export default function FindUsPage() {
  return <FindUsPageClient />;
}
