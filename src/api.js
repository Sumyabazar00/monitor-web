const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

// Every response goes through here. A non-2xx status is a failure, and the
// caller has to be able to tell. We never quietly return an empty list.
async function request(path) {
  const response = await fetch(`${API_URL}${path}`);

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText} on ${path}`);
  }

  return response.json();
}

export function getServices() {
  return request("/api/services");
}

export function getChecks(serviceId) {
  return request(`/api/services/${serviceId}/checks`);
}

export function getUptime(serviceId) {
  return request(`/api/services/${serviceId}/uptime`);
}
