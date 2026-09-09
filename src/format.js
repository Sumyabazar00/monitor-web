export function formatTime(value) {
  if (!value) return "-";
  return new Date(value).toISOString().slice(11, 19);
}

export function formatMs(value) {
  if (value === null || value === undefined) return "-";
  return `${value} ms`;
}
