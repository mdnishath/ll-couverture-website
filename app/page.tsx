import Link from "next/link";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { Arrow, Bolt, Check, Shield, ShieldCheck } from "@/components/Icons";
import Media from "@/components/Media";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesGrid from "@/components/ServicesGrid";
import { heroImage } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section id="accueil" className="hero">
        <div className="hero__grid-bg" aria-hidden="true" />
        <div className="hero__glow" aria-hidden="true" />
        <div className="wrap hero__inner">
          <div>
            <div className="pills">
              <span className="pill">
                <Check size={14} style={{ stroke: "var(--accent)" }} />
                Artisan Qualifié
              </span>
              <span className="pill">
                <Bolt size={14} style={{ stroke: "var(--accent)" }} />
                Intervention Rapide
              </span>
              <span className="pill">
                <Shield size={14} style={{ stroke: "var(--accent)" }} />
                Garantie Décennale
              </span>
            </div>

            <h1>
              Une toiture qui tient, <span>un travail qui se voit.</span>
            </h1>

            <p className="hero__lead">
              Couverture, zinguerie et charpente à Arpajon et dans toute
              l&apos;Essonne. Diagnostic honnête, chantier propre, finitions
              soignées — de la simple fuite à la réfection complète.
            </p>

            <div className="hero__actions">
              <Link href="/contact" className="btn btn--primary">
                Obtenir un Devis
                <Arrow size={18} />
              </Link>
              <Link href="/realisations" className="btn btn--ghost">
                Voir nos réalisations
              </Link>
            </div>

            <div className="hero__stats">
              <div>
                <div className="hero__stat-n">
                  12<span>+</span>
                </div>
                <div className="hero__stat-l">ans d&apos;expérience</div>
              </div>
              <div>
                <div className="hero__stat-n">
                  480<span>+</span>
                </div>
                <div className="hero__stat-l">chantiers livrés</div>
              </div>
              <div>
                <div className="hero__stat-n">
                  24<span>h</span>
                </div>
                <div className="hero__stat-l">délai d&apos;urgence</div>
              </div>
            </div>
          </div>

          <div className="hero__media">
            <div className="hero__frame">
              <Media
                src={heroImage}
                alt="Chantier de toiture terminé par L.L COUVERTURE"
                priority
              />
            </div>

            <div className="hero__card">
              <div className="hero__card-head">
                <span className="hero__card-ico">
                  <ShieldCheck size={20} style={{ stroke: "var(--accent)" }} />
                </span>
                <div style={{ lineHeight: 1.2 }}>
                  <div style={{ fontSize: 15, fontWeight: 800 }}>
                    Devis gratuit
                  </div>
                  <div
                    style={{
                      fontSize: 12.5,
                      color: "var(--muted)",
                      fontWeight: 600,
                      marginTop: 3,
                    }}
                  >
                    Réponse sous 24h
                  </div>
                </div>
              </div>
              <div className="hero__card-rule" />
              <div
                style={{
                  fontSize: 12.5,
                  color: "var(--ink-2)",
                  lineHeight: 1.5,
                }}
              >
                Déplacement et estimation sans engagement dans un rayon de 30 km
                autour d&apos;Arpajon.
              </div>
            </div>

            <div className="hero__badge">
              <span className="dot-pulse" />
              <div style={{ lineHeight: 1.2 }}>
                <div style={{ fontSize: 13.5, fontWeight: 700 }}>
                  Urgence fuite
                </div>
                <div
                  style={{
                    fontSize: 11.5,
                    color: "var(--muted-2)",
                    marginTop: 3,
                  }}
                >
                  Intervention 7j/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Services ---------------- */}
      <section id="services" className="sec sec--white">
        <div className="wrap">
          <div className="sechead" data-reveal="">
            <div>
              <span className="eyebrow">Nos Services</span>
              <h2>Tout ce qui protège votre maison, du faîtage à la gouttière</h2>
            </div>
            <p>
              Une équipe unique pour l&apos;ensemble du chantier — pas de
              sous-traitance, pas d&apos;intermédiaire.
            </p>
          </div>
          <ServicesGrid />
        </div>
      </section>

      {/* ---------------- Réalisations ---------------- */}
      <section id="realisations" className="sec sec--grey">
        <div className="wrap">
          <ProjectsSection />
        </div>
      </section>

      {/* ---------------- À propos ---------------- */}
      <section id="apropos" className="sec sec--white">
        <AboutSection />
      </section>

      {/* ---------------- Contact ---------------- */}
      <section id="contact" className="sec sec--grey">
        <ContactSection />
      </section>
    </>
  );
}
