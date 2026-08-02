import Link from "next/link";
import { site } from "@/lib/site";
import { Arrow } from "./Icons";

export default function CtaBand({
  title = "Un projet de toiture à Arpajon ?",
  text = "Visite sur place, devis écrit sous 24 h, sans engagement.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta">
      <div className="wrap cta__inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta__actions">
          <Link href="/contact" className="btn btn--ink">
            Demander un devis
            <Arrow size={17} />
          </Link>
          <a href={site.phoneHref} className="btn btn--outline-light">
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
