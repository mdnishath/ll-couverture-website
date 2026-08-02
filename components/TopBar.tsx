import { site } from "@/lib/site";
import { Clock, Phone, Pin } from "./Icons";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap topbar__inner">
        <div className="topbar__group">
          <span className="topbar__item">
            <Phone size={14} style={{ stroke: "var(--accent)" }} />
            <a href={site.phoneHref} className="topbar__strong">
              {site.phone}
            </a>
          </span>
          <span className="topbar__item">
            <Clock size={14} style={{ stroke: "var(--accent)" }} />
            <span>Horaires : Lun-Ven 07:00-19:00</span>
          </span>
        </div>
        <div className="topbar__item">
          <Pin size={14} style={{ stroke: "var(--accent)" }} />
          <span>{site.area}</span>
        </div>
      </div>
    </div>
  );
}
