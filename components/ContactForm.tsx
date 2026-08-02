"use client";

import { useState, type FormEvent } from "react";
import { serviceOptions, site } from "@/lib/site";
import { Arrow, Lock } from "./Icons";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();

    const subject = `Demande de devis — ${get("service")} — ${get("name")}`;
    const body = [
      `Nom : ${get("name")}`,
      `Email : ${get("email")}`,
      `Téléphone : ${get("phone")}`,
      `Service souhaité : ${get("service")}`,
      "",
      "Message :",
      get("message"),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="formcard" data-reveal="">
      <form onSubmit={onSubmit} noValidate={false}>
        <div className="formcard__grid">
          <div>
            <label className="lbl" htmlFor="name">
              Nom complet
            </label>
            <input
              className="fld"
              id="name"
              name="name"
              type="text"
              placeholder="Jean Dupont"
              autoComplete="name"
              required
            />
          </div>
          <div>
            <label className="lbl" htmlFor="email">
              Email
            </label>
            <input
              className="fld"
              id="email"
              name="email"
              type="email"
              placeholder="jean.dupont@email.fr"
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label className="lbl" htmlFor="phone">
              Téléphone
            </label>
            <input
              className="fld"
              id="phone"
              name="phone"
              type="tel"
              placeholder="06 00 00 00 00"
              autoComplete="tel"
              required
            />
          </div>
          <div>
            <label className="lbl" htmlFor="service">
              Service souhaité
            </label>
            <select className="fld fld--select" id="service" name="service" defaultValue={serviceOptions[0]}>
              {serviceOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <label className="lbl" htmlFor="message">
            Votre message
          </label>
          <textarea
            className="fld fld--area"
            id="message"
            name="message"
            rows={5}
            placeholder="Surface approximative, type de toiture, urgence éventuelle…"
            required
          />
        </div>

        <div className="formcard__foot">
          <span className="formcard__note">
            <Lock size={16} style={{ stroke: "var(--muted-2)" }} />
            Vos données restent confidentielles.
          </span>
          <button type="submit" className="submit">
            Envoyer ma demande
            <Arrow size={17} />
          </button>
        </div>
      </form>

      {sent && (
        <p className="formcard__ok" role="status">
          Votre logiciel de messagerie vient de s&apos;ouvrir avec la demande
          pré-remplie — il ne reste qu&apos;à l&apos;envoyer. Si rien ne
          s&apos;affiche, écrivez-nous à{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> ou appelez le{" "}
          <a href={site.phoneHref}>{site.phone}</a>.
        </p>
      )}
    </div>
  );
}
