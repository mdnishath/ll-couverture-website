import { site } from "@/lib/site";
import ContactForm from "./ContactForm";
import { Clock, Mail, Phone, Pin } from "./Icons";

export default function ContactSection({
  showHead = true,
}: {
  showHead?: boolean;
}) {
  return (
    <div className="wrap">
      {showHead && (
        <div className="contact-head" data-reveal="">
          <span className="eyebrow">Contact</span>
          <h2>Demandez votre devis gratuit</h2>
          <p>
            Décrivez votre projet en quelques lignes — nous rappelons sous 24 h
            ouvrées.
          </p>
        </div>
      )}

      <div className="contact-grid">
        <ContactForm />

        <div className="infocard" data-reveal="">
          <h3>Nous joindre directement</h3>
          <div className="infocard__list">
            <div className="infocard__row">
              <span className="infocard__ico">
                <Phone size={19} style={{ stroke: "var(--accent)" }} />
              </span>
              <div>
                <div className="infocard__k">Téléphone</div>
                <a href={site.phoneHref} className="infocard__v">
                  {site.phone}
                </a>
              </div>
            </div>

            <div className="infocard__row">
              <span className="infocard__ico">
                <Mail size={19} style={{ stroke: "var(--accent)" }} />
              </span>
              <div>
                <div className="infocard__k">Email</div>
                <a
                  href={`mailto:${site.email}`}
                  className="infocard__v infocard__v--sm"
                >
                  {site.email}
                </a>
              </div>
            </div>

            <div className="infocard__row">
              <span className="infocard__ico">
                <Pin size={19} style={{ stroke: "var(--accent)" }} />
              </span>
              <div>
                <div className="infocard__k">Adresse</div>
                <div className="infocard__v infocard__v--txt">
                  {site.address[0]}
                  <br />
                  {site.address[1]}
                </div>
              </div>
            </div>

            <div className="infocard__row">
              <span className="infocard__ico">
                <Clock size={19} style={{ stroke: "var(--accent)" }} />
              </span>
              <div>
                <div className="infocard__k">Horaires</div>
                <div className="infocard__v infocard__v--txt">
                  {site.hours[0]}
                  <br />
                  {site.hours[1]}
                </div>
              </div>
            </div>
          </div>

          <div className="infocard__alert">
            <span className="dot-pulse" />
            <div>
              Fuite en cours ? Appelez directement — nous intervenons en urgence,
              week-end compris.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
