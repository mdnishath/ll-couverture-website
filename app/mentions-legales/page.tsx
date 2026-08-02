import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site L.L COUVERTURE, couvreur à Arpajon.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

export default function MentionsPage() {
  return (
    <>
      <PageBanner
        crumb="Mentions légales"
        eyebrow="Informations"
        title="Mentions légales"
      />

      <section className="sec sec--white">
        <div className="wrap">
          <div className="prose" style={{ maxWidth: 760 }}>
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, margin: "0 0 8px" }}>
                Éditeur du site
              </h2>
              <p>
                {site.name} — couvreur et charpentier.
                <br />
                {site.address[0]}, {site.address[1]}.
                <br />
                Téléphone : <a href={site.phoneHref}>{site.phone}</a>
                <br />
                Email : <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, margin: "0 0 8px" }}>
                Hébergement
              </h2>
              <p>
                Site hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina,
                CA 91723, États-Unis.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, margin: "0 0 8px" }}>
                Propriété intellectuelle
              </h2>
              <p>
                L&apos;ensemble des contenus de ce site (textes, photographies,
                logo) est la propriété de {site.name}, sauf mention contraire.
                Toute reproduction sans autorisation écrite préalable est
                interdite.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, margin: "0 0 8px" }}>
                Assurance
              </h2>
              <p>
                {site.name} est couverte par une assurance de responsabilité
                civile décennale. L&apos;attestation en cours de validité est
                jointe à chaque devis.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, margin: "0 0 8px" }}>
                Conception
              </h2>
              <p>
                Site conçu et réalisé par{" "}
                <a
                  href="https://mdnishath.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Md Nishath
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
