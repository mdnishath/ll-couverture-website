import Link from "next/link";
import { serviceHref, services } from "@/lib/site";
import { Arrow } from "./Icons";
import Media from "./Media";

export default function ServicesGrid() {
  return (
    <div className="g3">
      {services.map((s) => (
        <Link
          key={s.slug}
          id={s.slug}
          href={serviceHref(s.slug)}
          className="card-svc"
          data-reveal=""
        >
          <div className="card-svc__media">
            <Media src={s.image} alt={`${s.title} — L.L COUVERTURE`} />
          </div>
          <h3>
            {s.title}
            {s.titleAccent && <span> {s.titleAccent}</span>}
          </h3>
          <p>{s.short}</p>
          <span className="card-svc__more">
            En savoir plus
            <Arrow size={15} />
          </span>
        </Link>
      ))}
    </div>
  );
}
