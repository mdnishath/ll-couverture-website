import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import TopBar from "@/components/TopBar";
import { site } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "L.L COUVERTURE — Couvreur & charpentier à Arpajon (91)",
    template: "%s | L.L COUVERTURE",
  },
  description:
    "Couverture, zinguerie et charpente à Arpajon et dans toute l'Essonne. Devis gratuit, garantie décennale, intervention d'urgence 7j/7.",
  keywords: [
    "couvreur Arpajon",
    "charpentier Essonne",
    "zinguerie 91",
    "rénovation toiture Arpajon",
    "réparation fuite toiture",
    "gouttières Essonne",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
    title: "L.L COUVERTURE — Couvreur & charpentier à Arpajon (91)",
    description:
      "Couverture, zinguerie et charpente à Arpajon et dans toute l'Essonne. Devis gratuit sous 24 h.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: site.name,
  description:
    "Couvreur et charpentier à Arpajon : zinguerie, rénovation de toiture, réparation de fuite en urgence, gouttières et charpente.",
  telephone: "+33641260259",
  email: site.email,
  url: site.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address[0],
    postalCode: "91290",
    addressLocality: "Arpajon",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  areaServed: { "@type": "AdministrativeArea", name: "Essonne (91)" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "17:00",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={archivo.variable}>
      <body>
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <Reveal />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
