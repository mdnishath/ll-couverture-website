import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageBanner from "@/components/PageBanner";
import ServicesGrid from "@/components/ServicesGrid";

export const metadata: Metadata = {
  title: "Services — zinguerie, toiture, charpente",
  description:
    "Zinguerie, rénovation de toiture, réparation de fuite en urgence, rives, gouttières et charpente à Arpajon et dans l'Essonne.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        crumb="Services"
        eyebrow="Nos Services"
        title="Tout ce qui protège votre maison, du faîtage à la gouttière"
        text="Une équipe unique pour l'ensemble du chantier — pas de sous-traitance, pas d'intermédiaire."
      />

      <section className="sec sec--white">
        <div className="wrap">
          <ServicesGrid />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
