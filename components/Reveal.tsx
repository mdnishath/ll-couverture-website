"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Reproduit le comportement `data-reveal` de la maquette : les blocs marqués
 * apparaissent au scroll, avec un délai en cascade et un filet de sécurité
 * si l'IntersectionObserver ne se déclenche jamais.
 * Re-scanné à chaque changement de page (navigation client).
 */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-shown])")
    );
    if (nodes.length === 0) return;

    if (typeof IntersectionObserver === "undefined") {
      nodes.forEach((n) => n.setAttribute("data-shown", ""));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute("data-shown", "");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.02 }
    );

    nodes.forEach((n, i) => {
      n.style.transitionDelay = `${Math.min(i, 5) * 70}ms`;
      io.observe(n);
    });

    const safety = window.setTimeout(() => {
      document
        .querySelectorAll("[data-reveal]:not([data-shown])")
        .forEach((n) => n.setAttribute("data-shown", ""));
    }, 4000);

    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, [pathname]);

  return null;
}
