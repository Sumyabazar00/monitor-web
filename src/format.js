export function formatTime(value) {
  if (!value) return "-";
  return new Date(value).toLocaleTimeString();
}
export function formatMs(value) {
  if (value === null || value === undefined) return "-";
  return `${value} ms`;
}
