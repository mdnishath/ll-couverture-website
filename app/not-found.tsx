import Link from "next/link";
import { Arrow } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="sec sec--grey" style={{ paddingTop: 120 }}>
      <div className="wrap" style={{ maxWidth: 720, textAlign: "center" }}>
        <span className="eyebrow" style={{ justifyContent: "center" }}>
          Erreur 404
        </span>
        <h1
          style={{
            margin: "18px 0 14px",
            fontSize: "clamp(34px, 5vw, 52px)",
            lineHeight: 1.08,
            letterSpacing: "-.035em",
            fontWeight: 800,
          }}
        >
          Cette page a glissé du toit
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--muted)" }}>
          La page demandée n&apos;existe pas ou a été déplacée.
        </p>
        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: 32,
          }}
        >
          <Link href="/" className="btn btn--primary">
            Retour à l&apos;accueil
            <Arrow size={18} />
          </Link>
          <Link href="/contact" className="btn btn--ghost">
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
