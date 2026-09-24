/** A short row of real numbers for one season: value first, label under it. */
export function Scoreboard({ items, label }: { items: { value: string; label: string }[]; label?: string }) {
  return (
    <dl className="scoreboard" aria-label={label}>
      {items.map((s) => (
        <div key={s.label}>
          <dt>{s.label}</dt>
          <dd>{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
