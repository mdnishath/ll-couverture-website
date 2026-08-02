"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { serviceHref, serviceLabel, services, site } from "@/lib/site";
import { Arrow, Burger, Chevron, Close, Phone, Roof } from "./Icons";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSvcOpen(false);
  }, [pathname]);

  const openSvc = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setSvcOpen(true);
  };
  const closeSvc = () => {
    closeTimer.current = window.setTimeout(() => setSvcOpen(false), 120);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Le lien « Services » reste actif sur les pages de détail /services/<slug>.
  const svcActive = pathname.startsWith("/services");

  return (
    <header className="header" {...(stuck ? { "data-stuck": "" } : {})}>
      <div className="wrap header__inner">
        <Link href="/" className="brand" aria-label={`${site.name} — accueil`}>
          <span className="brand__mark">
            <Roof size={22} style={{ stroke: "#fff" }} />
          </span>
          <span className="brand__text">
            <strong className="brand__name">{site.name}</strong>
            <span className="brand__tag">{site.tagline}</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Navigation principale">
          <Link
            href="/"
            className="nav__link"
            {...(isActive("/") ? { "data-active": "" } : {})}
          >
            Accueil
          </Link>

          <div className="nav__drop" onMouseEnter={openSvc} onMouseLeave={closeSvc}>
            <Link
              href="/services"
              className="nav__link"
              aria-haspopup="true"
              aria-expanded={svcOpen}
              {...(svcActive ? { "data-active": "" } : {})}
            >
              Services
              <Chevron size={14} />
            </Link>
            {svcOpen && (
              <div className="dropdown">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={serviceHref(s.slug)}
                    {...(pathname === serviceHref(s.slug)
                      ? { "data-active": "" }
                      : {})}
                  >
                    {serviceLabel(s)}
                  </Link>
                ))}
                <Link href="/services" className="dropdown__all">
                  Tous les services
                </Link>
              </div>
            )}
          </div>

          {links.slice(1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav__link"
              {...(isActive(l.href) ? { "data-active": "" } : {})}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="header__actions">
          <a href={site.phoneHref} className="header__tel">
            <Phone size={16} />
            {site.phone}
          </a>
          <Link href="/contact" className="header__cta">
            Devis Gratuit
            <Arrow size={16} />
          </Link>
          <button
            type="button"
            className="burger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <Close size={20} /> : <Burger size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile">
          <Link href="/">Accueil</Link>
          <Link href="/services">Services</Link>
          {services.map((s) => (
            <Link key={s.slug} href={serviceHref(s.slug)} className="sub">
              {serviceLabel(s)}
            </Link>
          ))}
          <Link href="/realisations">Réalisations</Link>
          <Link href="/a-propos">À Propos</Link>
          <Link href="/contact">Contact</Link>
          <a href={site.phoneHref} className="mobile__cta">
            <Phone size={17} />
            {site.phone}
          </a>
        </div>
      )}
    </header>
  );
}
