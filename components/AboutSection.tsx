import { heroImage } from "@/lib/site";
import { Bolt, Check, House, Shield } from "./Icons";
import Media from "./Media";

const feats = [
  {
    Icon: Check,
    t: "Devis détaillé",
    d: "Poste par poste, matériaux compris.",
  },
  {
    Icon: Shield,
    t: "Garantie décennale",
    d: "Assurance à jour, fournie au devis.",
  },
  {
    Icon: Bolt,
    t: "Urgence 7j/7",
    d: "Mise hors d'eau sous 24 h.",
  },
  {
    Icon: House,
    t: "Chantier propre",
    d: "Bâchage et évacuation inclus.",
  },
];

export default function AboutSection({
  showHead = true,
}: {
  showHead?: boolean;
}) {
  return (
    <div className="wrap about">
      <div className="about__media" data-reveal="">
        <Media
          src={heroImage}
          alt="Artisan couvreur L.L COUVERTURE sur une toiture à Arpajon"
        />
      </div>
      <div data-reveal="">
        {showHead && (
          <>
            <span className="eyebrow">À Propos</span>
            <h2>Un artisan local, joignable, qui monte lui-même sur le toit</h2>
          </>
        )}
        <p className="about__lead">
          L.L COUVERTURE intervient à Arpajon et dans un rayon de 30 km. Chaque
          devis est établi après une visite sur place — pas d&apos;estimation au
          téléphone, pas de mauvaise surprise en fin de chantier.
        </p>
        <div className="g2s">
          {feats.map(({ Icon, t, d }) => (
            <div key={t} className="feat">
              <Icon size={22} style={{ stroke: "var(--accent)" }} />
              <div>
                <div className="feat__t">{t}</div>
                <div className="feat__d">{d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
