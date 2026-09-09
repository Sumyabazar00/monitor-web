import { useEffect, useState } from "react";
import { getChecks, getUptime } from "./api.js";
import { formatMs, formatTime } from "./format.js";

export default function ServiceDetail({ serviceId }) {
  const [checks, setChecks] = useState([]);
  const [uptime, setUptime] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    Promise.all([getChecks(serviceId), getUptime(serviceId)])
      .then(([checkRows, uptimeRow]) => {
        if (cancelled) return;
        setChecks(checkRows);
        setUptime(uptimeRow);
        setError(null);
      })
      .catch((problem) => {
        if (!cancelled) setError(problem.message);
      });

    return () => {
      cancelled = true;
    };
  }, [serviceId]);

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <section className="detail">
      <h2 className="detail__title">Сүүлийн шалгалтууд</h2>

      {uptime ? (
        <p className="detail__uptime">
          Сүүлийн 24 цаг: <strong>{uptime.uptime_percent ?? "-"}%</strong>{" "}
          <span className="detail__uptime-note">
            ({uptime.ok_checks}/{uptime.total_checks})
          </span>
        </p>
      ) : null}

      <table className="checks">
        <thead>
          <tr>
            <th>Цаг</th>
            <th>Status</th>
            <th>Хугацаа</th>
            <th>Алдаа</th>
          </tr>
        </thead>
        <tbody>
          {checks.map((check) => (
            <tr key={check.id}>
              <td>{formatTime(check.checked_at)}</td>
              <td>{check.status_code ?? "-"}</td>
              <td>{formatMs(check.response_ms)}</td>
              <td className="checks__error">{check.error_text ?? ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
