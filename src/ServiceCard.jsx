import { formatMs, formatTime } from "./format.js";

export default function ServiceCard({ service, selected, onSelect }) {
  const statusLabel =
    service.last_status_code === null || service.last_status_code === undefined
      ? "no response"
      : service.last_status_code;

  return (
    <button
      type="button"
      className={selected ? "service-card service-card--selected" : "service-card"}
      onClick={() => onSelect(service.id)}
    >
      <span className={service.last_ok ? "status-dot status-dot--up" : "status-dot status-dot--down"} />

      <span className="service-card__body">
        <span className="service-card__name">{service.name}</span>
        <span className="service-card__url">{service.url}</span>
        {service.last_error_text ? (
          <span className="service-card__error">{service.last_error_text}</span>
        ) : null}
      </span>

      <span className="service-card__meta">
        <span className="service-card__status">{statusLabel}</span>
        <span className="service-card__ms">{formatMs(service.last_response_ms)}</span>
        <span className="service-card__time">{formatTime(service.last_checked_at)}</span>
      </span>
    </button>
  );
}
