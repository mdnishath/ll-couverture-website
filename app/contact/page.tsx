import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Contact — devis gratuit sous 24 h",
  description:
    "Demandez votre devis gratuit à L.L COUVERTURE : 06 41 26 02 59, 77 rue de l'Hermitage, 91290 Arpajon. Réponse sous 24 h ouvrées.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        crumb="Contact"
        eyebrow="Contact"
        title="Demandez votre devis gratuit"
        text="Décrivez votre projet en quelques lignes — nous rappelons sous 24 h ouvrées."
      />

      <section className="sec sec--grey">
        <ContactSection showHead={false} />
      </section>
    </>
  );
}
