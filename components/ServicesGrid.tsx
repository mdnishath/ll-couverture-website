import { services } from "@/lib/site";
import Media from "./Media";

export default function ServicesGrid() {
  return (
    <div className="g3">
      {services.map((s) => (
        <article key={s.slug} id={s.slug} className="card-svc" data-reveal="">
          <div className="card-svc__media">
            <Media src={s.image} alt={`${s.title} — L.L COUVERTURE`} />
          </div>
          <h3>
            {s.title}
            {s.titleAccent && <span> {s.titleAccent}</span>}
          </h3>
          <p>{s.text}</p>
        </article>
      ))}
    </div>
  );
}
