import type { Metadata } from "next";
import { playfair, dmSans } from "@/lib/fonts";
import { restaurantInfo } from "@/lib/restaurant-info";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "La Fermata De Gasperi 43 | Pizzeria Torino",
    template: "%s | La Fermata De Gasperi 43",
  },
  description: restaurantInfo.metaDescription,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: restaurantInfo.name,
  description: restaurantInfo.metaDescription,
  address: {
    "@type": "PostalAddress",
    streetAddress: restaurantInfo.address.street,
    addressLocality: "Torino",
    postalCode: "10129",
    addressRegion: "TO",
    addressCountry: "IT",
  },
  telephone: restaurantInfo.phoneLink.replace("tel:", ""),
  url: restaurantInfo.googleMapsUrl,
  servesCuisine: ["Pizza", "Italian", "Farinata"],
  priceRange: "$$",
  openingHoursSpecification: restaurantInfo.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.day,
    opens: h.pranzo.split("–")[0],
    closes: h.cena.split("–")[1],
  })),
  hasMenu: {
    "@type": "Menu",
    url: "/menu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="flex min-h-full flex-col bg-[#FAF6F0]"
        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
