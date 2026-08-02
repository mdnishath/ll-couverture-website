import Link from "next/link";
import { projects, wideImage } from "@/lib/site";
import { Arrow, Quote } from "./Icons";
import Media from "./Media";

export default function ProjectsSection({
  showHead = true,
}: {
  showHead?: boolean;
}) {
  return (
    <>
      {showHead && (
        <div className="sechead" data-reveal="">
          <div>
            <span className="eyebrow">Nos Réalisations</span>
            <h2>Avant / après, sans retouche</h2>
          </div>
          <Link href="/contact" className="btn btn--ghost btn--sm">
            Discuter de votre projet
            <Arrow size={16} />
          </Link>
        </div>
      )}

      <div className="g3">
        {projects.map((p) => (
          <article key={p.title} className="card-prj" data-reveal="">
            <div className="card-prj__media">
              <div className="card-prj__half">
                <Media src={p.before} alt={`${p.title} — avant travaux`} />
                <span className="tag tag--before">Avant</span>
              </div>
              <div className="card-prj__half">
                <Media src={p.after} alt={`${p.title} — après travaux`} />
                <span className="tag tag--after">Après</span>
              </div>
            </div>
            <div className="card-prj__body">
              <div className="card-prj__loc">{p.location}</div>
              <h3>{p.title}</h3>
              <p>{p.meta}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="g2wide" data-reveal="">
        <div className="wide-media">
          <Media src={wideImage} alt="Vue large d'un chantier de toiture terminé" />
        </div>
        <figure className="quote" style={{ margin: 0 }}>
          <Quote size={34} style={{ stroke: "var(--accent)" }} />
          <blockquote style={{ margin: 0 }}>
            <p>
              « Chantier annoncé en huit jours, terminé en huit jours. Tout était
              bâché, rangé, et la toiture est impeccable. »
            </p>
          </blockquote>
          <figcaption className="quote__by">
            <div className="quote__name">Sylvie M.</div>
            <div className="quote__role">Maison individuelle, Arpajon</div>
          </figcaption>
        </figure>
      </div>
    </>
  );
}
