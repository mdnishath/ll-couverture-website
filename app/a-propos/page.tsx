import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import CtaBand from "@/components/CtaBand";
import { Check, Clock, Shield } from "@/components/Icons";
import Media from "@/components/Media";
import PageBanner from "@/components/PageBanner";
import { towns, wideImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos — artisan couvreur à Arpajon",
  description:
    "L.L COUVERTURE, couvreur et charpentier à Arpajon : 12 ans d'expérience, 480 chantiers livrés, garantie décennale et intervention dans un rayon de 30 km.",
  alternates: { canonical: "/a-propos" },
};

const stats = [
  { n: "12", suf: "+", l: "ans sur les toits de l'Essonne" },
  { n: "480", suf: "+", l: "chantiers livrés" },
  { n: "30", suf: "km", l: "rayon d'intervention" },
  { n: "24", suf: "h", l: "délai d'urgence" },
];

const steps = [
  {
    n: "01",
    t: "Visite & diagnostic",
    d: "Montée sur toiture, relevé des surfaces, état de la charpente et des évacuations. Photos à l'appui.",
  },
  {
    n: "02",
    t: "Devis détaillé",
    d: "Chiffrage poste par poste sous 24 h : matériaux, main d'œuvre, échafaudage et évacuation.",
  },
  {
    n: "03",
    t: "Chantier",
    d: "Bâchage, protection des abords, avancement communiqué chaque soir. Le site est rangé quotidiennement.",
  },
  {
    n: "04",
    t: "Réception",
    d: "Visite de fin de chantier ensemble, remise des attestations et de la garantie décennale.",
  },
];

const guarantees = [
  {
    Icon: Shield,
    t: "Assurance décennale",
    d: "Attestation à jour jointe à chaque devis, valable sur l'ensemble des travaux de couverture et de charpente.",
  },
  {
    Icon: Check,
    t: "Matériaux tracés",
    d: "Tuiles, zinc et bois de charpente de fournisseurs français, références indiquées sur le devis.",
  },
  {
    Icon: Clock,
    t: "Délais tenus",
    d: "Date de démarrage et durée annoncées par écrit ; en cas d'intempérie, un nouveau créneau sous 72 h.",
  },
];

export default function AProposPage() {
  return (
    <>
      <PageBanner
        crumb="À Propos"
        eyebrow="À Propos"
        title="Un artisan local, joignable, qui monte lui-même sur le toit"
      />

      <section className="sec sec--white">
        <AboutSection showHead={false} />
      </section>

      {/* ---------------- Chiffres ---------------- */}
      <section className="sec sec--grey">
        <div className="wrap">
          <div className="g4" data-reveal="">
            {stats.map((s) => (
              <div key={s.l} className="stat">
                <div className="stat__n">
                  {s.n}
                  <span>{s.suf}</span>
                </div>
                <div className="stat__l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Histoire ---------------- */}
      <section className="sec sec--white">
        <div className="wrap">
          <div className="contact-head" data-reveal="" style={{ maxWidth: 680 }}>
            <span className="eyebrow">Notre histoire</span>
            <h2>D&apos;un premier chantier à Arpajon à une équipe de couvreurs</h2>
          </div>
          <div className="about about--even">
            <div className="prose" data-reveal="">
              <p>
                L.L COUVERTURE est née d&apos;un constat simple : sur une
                toiture, la différence ne se voit pas le jour de la livraison,
                elle se voit dix ans plus tard. Nous avons donc bâti
                l&apos;entreprise autour d&apos;une seule règle — faire les
                choses dans l&apos;ordre, avec les bons matériaux, même quand
                personne ne regarde sous les tuiles.
              </p>
              <p>
                Depuis, nous intervenons chaque semaine à Arpajon et dans les
                communes voisines : pavillons des années 70 à réisoler, longères
                à charpente ancienne, petits collectifs et bâtiments agricoles.
                Chaque chantier commence par une visite, un relevé et un devis
                écrit poste par poste.
              </p>
              <p>
                L&apos;équipe est volontairement restée petite. Le couvreur qui
                monte sur votre toit est celui qui a chiffré le devis et qui vous
                rappellera si un détail doit être ajusté — pas de sous-traitance
                en cascade, pas d&apos;interlocuteur qui change en cours de
                route.
              </p>
            </div>
            <div className="story-media" data-reveal="">
              <Media src={wideImage} alt="L'équipe L.L COUVERTURE au travail" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Méthode ---------------- */}
      <section className="sec sec--ink">
        <div className="wrap">
          <div
            className="contact-head"
            data-reveal=""
            style={{ maxWidth: 680, marginBottom: 56 }}
          >
            <span className="eyebrow">Notre méthode</span>
            <h2 style={{ color: "#fff" }}>Quatre étapes, aucune surprise</h2>
          </div>
          <div className="g4">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className={`step${i === 0 ? " step--first" : ""}`}
                data-reveal=""
              >
                <div className="step__n">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Garanties & zone ---------------- */}
      <section className="sec sec--white">
        <div className="wrap">
          <div className="about about--even">
            <div data-reveal="">
              <span className="eyebrow">Garanties</span>
              <h2
                style={{
                  margin: "18px 0 22px",
                  fontSize: "clamp(30px, 3.6vw, 40px)",
                  lineHeight: 1.12,
                  letterSpacing: "-.03em",
                  fontWeight: 800,
                  color: "var(--ink)",
                }}
              >
                Ce que couvre notre travail
              </h2>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                {guarantees.map(({ Icon, t, d }) => (
                  <div key={t} className="guar">
                    <Icon size={20} style={{ stroke: "var(--accent)" }} />
                    <div>
                      <div className="guar__t">{t}</div>
                      <div className="guar__d">{d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div data-reveal="">
              <span className="eyebrow">Zone d&apos;intervention</span>
              <h2
                style={{
                  margin: "18px 0 22px",
                  fontSize: "clamp(30px, 3.6vw, 40px)",
                  lineHeight: 1.12,
                  letterSpacing: "-.03em",
                  fontWeight: 800,
                  color: "var(--ink)",
                }}
              >
                Arpajon et 30 km alentour
              </h2>
              <p
                style={{
                  margin: "0 0 24px",
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "var(--ink-2)",
                }}
              >
                Nous intervenons quotidiennement dans les communes suivantes.
                Votre ville n&apos;y figure pas ? Appelez-nous, nous vérifions le
                secteur.
              </p>
              <div className="chips">
                {towns.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
