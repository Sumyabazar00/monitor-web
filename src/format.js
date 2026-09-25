export function formatTime(value) {
  if (!value) return "-";
  return new Date(value).toLocaleTimeString();
}
export function formatMs(value) {
  if (value === undefined || value === null) {
    return "-";
  }
  
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)} s`;
  }
  
  return `${value} ms`;
}

export function formatDateTime(value) {
  if (!value) return "-";
  const date = new Date(value);
  return `${date.getMonth()}/${date.getDate()} ${date.toLocaleTimeString()}`;
}
