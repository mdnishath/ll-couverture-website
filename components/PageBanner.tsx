import Link from "next/link";

export default function PageBanner({
  eyebrow,
  title,
  text,
  crumb,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  crumb: string;
}) {
  return (
    <section className="banner">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />
      <div className="wrap banner__inner">
        <nav className="crumbs" aria-label="Fil d'Ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">·</span>
          <span style={{ color: "var(--ink)" }}>{crumb}</span>
        </nav>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}
