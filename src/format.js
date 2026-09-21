export function formatTime(value) {
  if (!value) return "-";
  return new Date(value).toLocaleTimeString();
}
export function formatMs(value) {
  if (value === null || value === undefined) return "-";
  return `${value} ms`;
}

export function formatDateTime(value) {
  if (!value) return "-";
  const date = new Date(value);
  return `${date.getMonth()}/${date.getDate()} ${date.toLocaleTimeString()}`;
}
