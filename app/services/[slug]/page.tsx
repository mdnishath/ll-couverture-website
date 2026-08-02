import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import { Arrow, Check, Phone } from "@/components/Icons";
import Media from "@/components/Media";
import { jsonLdScript } from "@/lib/jsonld";
import {
  getService,
  serviceHref,
  serviceLabel,
  services,
  site,
} from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) return {};

  return {
    title: svc.metaTitle,
    description: svc.metaDescription,
    alternates: { canonical: serviceHref(svc.slug) },
    openGraph: {
      title: svc.metaTitle,
      description: svc.metaDescription,
      url: serviceHref(svc.slug),
      images: [svc.image],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) notFound();

  const others = services.filter((s) => s.slug !== svc.slug);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: svc.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="svc-hero">
        <div className="hero__grid-bg" aria-hidden="true" />
        <div className="hero__glow" aria-hidden="true" />
        <div className="wrap svc-hero__inner">
          <div>
            <nav className="crumbs" aria-label="Fil d'Ariane">
              <Link href="/">Accueil</Link>
              <span aria-hidden="true">·</span>
              <Link href="/services">Services</Link>
              <span aria-hidden="true">·</span>
              <span style={{ color: "var(--ink)" }}>{svc.title}</span>
            </nav>
            <span className="eyebrow">Nos Services</span>
            <h1>{svc.h1}</h1>
            <p className="svc-hero__lead">{svc.lead}</p>
            <div className="svc-hero__actions">
              <Link href="/contact" className="btn btn--primary">
                Demander un devis
                <Arrow size={18} />
              </Link>
              <a href={site.phoneHref} className="btn btn--ghost">
                <Phone size={17} />
                {site.phone}
              </a>
            </div>
          </div>
          <div className="svc-hero__media">
            <Media
              src={svc.image}
              alt={`${svc.title} — chantier réalisé par L.L COUVERTURE`}
              priority
            />
          </div>
        </div>
      </section>

      {/* ---------------- Détail de la prestation ---------------- */}
      <section className="sec sec--white">
        <div className="wrap">
          <div className="about about--even">
            <div className="prose" data-reveal="">
              {svc.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div data-reveal="">
              <span className="eyebrow">La prestation</span>
              <h2
                style={{
                  margin: "18px 0 22px",
                  fontSize: "clamp(26px, 3vw, 34px)",
                  lineHeight: 1.15,
                  letterSpacing: "-.03em",
                  fontWeight: 800,
                  color: "var(--ink)",
                }}
              >
                Ce que comprend l&apos;intervention
              </h2>
              <ul className="checklist" style={{ gridTemplateColumns: "1fr" }}>
                {svc.includes.map((it) => (
                  <li key={it}>
                    <Check size={19} style={{ stroke: "var(--accent)" }} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Diagnostic ---------------- */}
      <section className="sec sec--grey">
        <div className="wrap">
          <div className="contact-head" data-reveal="" style={{ maxWidth: 680 }}>
            <span className="eyebrow">Diagnostic</span>
            <h2>{svc.signsTitle}</h2>
          </div>
          <div className="g4">
            {svc.signs.map((s) => (
              <div key={s.t} className="stat" data-reveal="">
                <div className="feat__t" style={{ fontSize: 16.5 }}>
                  {s.t}
                </div>
                <div
                  className="feat__d"
                  style={{ fontSize: 14.5, marginTop: 10 }}
                >
                  {s.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Déroulé ---------------- */}
      <section className="sec sec--ink">
        <div className="wrap">
          <div
            className="contact-head"
            data-reveal=""
            style={{ maxWidth: 680, marginBottom: 56 }}
          >
            <span className="eyebrow">Déroulé</span>
            <h2 style={{ color: "#fff" }}>Comment nous procédons</h2>
          </div>
          <div className="g3">
            {svc.steps.map((s, i) => (
              <div
                key={s.t}
                className={`step${i === 0 ? " step--first" : ""}`}
                data-reveal=""
              >
                <div className="step__n">{String(i + 1).padStart(2, "0")}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="sec sec--white">
        <div className="wrap">
          <div className="contact-head" data-reveal="" style={{ maxWidth: 680 }}>
            <span className="eyebrow">Questions fréquentes</span>
            <h2>Ce qu&apos;on nous demande le plus souvent</h2>
          </div>
          <div className="faq" data-reveal="">
            {svc.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Autres services ---------------- */}
      <section className="sec sec--grey">
        <div className="wrap">
          <div className="contact-head" data-reveal="" style={{ maxWidth: 680 }}>
            <span className="eyebrow">Nos autres services</span>
            <h2>Nous intervenons aussi sur</h2>
          </div>
          <div className="related" data-reveal="">
            {others.map((s) => (
              <Link key={s.slug} href={serviceHref(s.slug)}>
                <span>{serviceLabel(s)}</span>
                <Arrow size={17} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Besoin d'un devis pour ${svc.title.toLowerCase()} ?`}
        text="Visite sur place, devis écrit sous 24 h, sans engagement."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(faqJsonLd) }}
      />
    </>
  );
}
