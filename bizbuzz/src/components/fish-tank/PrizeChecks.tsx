import { PRIZES } from "@/data/fishTank";

/**
 * Fish Tank winners get giant cardboard checks signed by BizBuzz NFP.
 * The prize list borrows that look.
 */
export function PrizeChecks({ years }: { years: string }) {
  return (
    <ol className="checks" aria-label={`Prize money by place, ${years}`}>
      {PRIZES.map((p, i) => (
        <li key={p.place} className={`check${i === 0 ? " check--first" : ""}`}>
          <div className="check__top">
            <span className="check__org">BizBuzz NFP</span>
            <span className="check__memo">Fish Tank · {p.place} place</span>
          </div>
          <div className="check__row">
            <span className="check__label">Pay to the order of</span>
            <span className="check__payee">{p.place} place team</span>
            <span className="check__amount num">${p.amount}</span>
          </div>
          <div className="check__words">
            <span>{p.words} and 00/100</span>
            <span className="check__dollars">dollars</span>
          </div>
        </li>
      ))}
    </ol>
  );
}
