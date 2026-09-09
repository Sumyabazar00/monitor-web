import { useEffect, useState } from "react";
import { getServices } from "./api.js";
import ServiceCard from "./ServiceCard.jsx";
import ServiceDetail from "./ServiceDetail.jsx";

const REFRESH_MS = 10000;

export default function App() {
  const [services, setServices] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    function load() {
      getServices()
        .then((rows) => {
          if (cancelled) return;
          setServices(rows);
          setError(null);
          setLoading(false);
        })
        .catch((problem) => {
          if (cancelled) return;
          setError(problem.message);
          setLoading(false);
        });
    }

    load();
    const timer = setInterval(load, REFRESH_MS);

    return () => {
      cancelled = true;
      clearInterval(timer);
    };
  }, []);

  const downCount = services.filter((service) => !service.last_ok).length;

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">Service Monitor</h1>
        <p className="header__subtitle">
          {loading
            ? "Ачааллаж байна..."
            : `${services.length} service · ${downCount} унтарсан`}
        </p>
      </header>

      {error ? <p className="error">{error}</p> : null}

      <div className="service-list">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            selected={service.id === selectedId}
            onSelect={setSelectedId}
          />
        ))}
      </div>

      {selectedId ? <ServiceDetail serviceId={selectedId} /> : null}
    </div>
  );
}
