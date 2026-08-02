import Link from "next/link";
import { services, site } from "@/lib/site";
import { Roof } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">
              <span
                className="brand__mark"
                style={{ boxShadow: "none" }}
                aria-hidden="true"
              >
                <Roof size={22} style={{ stroke: "#fff" }} />
              </span>
              <strong>{site.name}</strong>
            </div>
            <p className="footer__blurb">
              Couvreur et charpentier à Arpajon. Zinguerie, rénovation de toiture
              et interventions d&apos;urgence dans toute l&apos;Essonne.
            </p>
          </div>

          <div>
            <div className="footer__h">Navigation</div>
            <div className="footer__col">
              <Link href="/">Accueil</Link>
              <Link href="/services">Services</Link>
              <Link href="/realisations">Réalisations</Link>
              <Link href="/a-propos">À Propos</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <div className="footer__h">Services</div>
            <div className="footer__col">
              {services.map((s) => (
                <Link key={s.slug} href={`/services#${s.slug}`}>
                  {s.title}
                  {s.titleAccent ? ` ${s.titleAccent}` : ""}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="footer__h">Contact</div>
            <div className="footer__col footer__col--contact">
              <a href={site.phoneHref} className="strong">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} style={{ wordBreak: "break-all" }}>
                {site.email}
              </a>
              <span>
                {site.address[0]}
                <br />
                {site.address[1]}
              </span>
              <span>
                {site.hours[0]}
                <br />
                {site.hours[1]}
              </span>
            </div>
          </div>
        </div>

        <div className="footer__bar">
          <span>
            © {new Date().getFullYear()} {site.name} — Tous droits réservés.{" "}
            <span style={{ color: "#4B5563" }}>·</span> Site par{" "}
            <a
              href="https://mdnishath.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="strong"
            >
              Md Nishath
            </a>
          </span>
          <div className="footer__bar-links">
            <Link href="/mentions-legales">Mentions Légales</Link>
            <Link href="/confidentialite">Politique de confidentialité</Link>
            <Link href="/contact">Plan du site</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
