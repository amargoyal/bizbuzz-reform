const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** "2025-08-02" to "August 2, 2025". Parsed by hand so time zones never shift the day. */
export function formatISODate(iso: string, opts: { year?: boolean } = {}) {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  const base = `${MONTHS[m - 1]} ${d}`;
  return opts.year === false ? base : `${base}, ${y}`;
}

/** "2024-07-24" and "2024-07-25" to "July 24–25, 2024". Across months: "March 16 to April 26, 2025". */
export function formatISORange(start: string, end?: string) {
  if (!end || end === start) return formatISODate(start);
  const [sy, sm] = start.split("-");
  const [ey, em, ed] = end.split("-");
  if (sy === ey && sm === em) return `${formatISODate(start, { year: false })}–${Number(ed)}, ${ey}`;
  if (sy === ey) return `${formatISODate(start, { year: false })} to ${formatISODate(end)}`;
  return `${formatISODate(start)} to ${formatISODate(end)}`;
}

/** "June 12th, 2024" to "June 12, 2024". */
export function cleanDate(text: string) {
  return text.replace(/(\d+)(st|nd|rd|th)\b/g, "$1");
}

/** "1st Place" to "1st". */
export function placeShort(placement: string) {
  return placement.replace(/\s*place\s*/i, "");
}

export function money(n: number) {
  return `$${n.toLocaleString("en-US")}`;
}

/** Initials for people without a photo. */
export function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
