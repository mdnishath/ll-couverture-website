import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment L.L COUVERTURE traite les données transmises via le formulaire de contact.",
  alternates: { canonical: "/confidentialite" },
  robots: { index: false, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <>
      <PageBanner
        crumb="Confidentialité"
        eyebrow="Informations"
        title="Politique de confidentialité"
      />

      <section className="sec sec--white">
        <div className="wrap">
          <div className="prose" style={{ maxWidth: 760 }}>
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, margin: "0 0 8px" }}>
                Données collectées
              </h2>
              <p>
                Le formulaire de devis n&apos;enregistre rien sur ce site : il
                ouvre votre logiciel de messagerie avec les informations que vous
                avez saisies (nom, email, téléphone, service souhaité, message).
                Ces données ne nous parviennent que si vous envoyez
                effectivement l&apos;email.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, margin: "0 0 8px" }}>
                Finalité et conservation
              </h2>
              <p>
                Les informations reçues servent uniquement à répondre à votre
                demande et à établir un devis. Elles ne sont ni revendues ni
                transmises à des tiers, et sont conservées le temps nécessaire au
                suivi commercial du dossier.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, margin: "0 0 8px" }}>
                Cookies et mesure d&apos;audience
              </h2>
              <p>
                Ce site ne dépose aucun cookie publicitaire ni traceur de
                mesure d&apos;audience.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, margin: "0 0 8px" }}>
                Vos droits
              </h2>
              <p>
                Conformément au RGPD, vous pouvez demander l&apos;accès, la
                rectification ou la suppression des données vous concernant en
                écrivant à{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a> ou en appelant
                le <a href={site.phoneHref}>{site.phone}</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
