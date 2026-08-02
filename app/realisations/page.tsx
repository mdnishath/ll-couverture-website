import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageBanner from "@/components/PageBanner";
import ProjectsSection from "@/components/ProjectsSection";

export const metadata: Metadata = {
  title: "Réalisations — chantiers de toiture en Essonne",
  description:
    "Avant / après de nos chantiers de couverture à Arpajon, Ollainville et Égly : réfection en tuiles, zinguerie, gouttières aluminium.",
  alternates: { canonical: "/realisations" },
};

export default function RealisationsPage() {
  return (
    <>
      <PageBanner
        crumb="Réalisations"
        eyebrow="Nos Réalisations"
        title="Avant / après, sans retouche"
        text="Quelques chantiers récents à Arpajon et dans les communes voisines, photographiés tels quels."
      />

      <section className="sec sec--grey">
        <div className="wrap">
          <ProjectsSection showHead={false} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
