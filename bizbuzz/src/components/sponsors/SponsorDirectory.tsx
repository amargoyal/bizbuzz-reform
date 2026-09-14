"use client";

import Image from "next/image";
import { useState } from "react";
import sponsors from "@/data/sponsors.json";

export default function SponsorDirectory() {
  const [year, setYear] = useState("all");
  const visible = sponsors.filter((sponsor) => year === "all" || sponsor.year === year);
  return (
    <div className="bb-stack">
      <div className="bb-filter-row">
        <label htmlFor="sponsor-year">Contributions by year</label>
        <select id="sponsor-year" value={year} onChange={(event) => setYear(event.target.value)}>
          <option value="all">All years</option>
          {["2026", "2025", "2024"].map((value) => <option key={value}>{value}</option>)}
        </select>
        <p className="bb-caption" role="status">{visible.length} contributions</p>
      </div>
      <div className="bb-sponsor-directory">
        {visible.map((sponsor) => (
          <article key={`${sponsor.name}-${sponsor.year}`} className="bb-sponsor-record">
            <div className="bb-sponsor-logo">
              <Image src={sponsor.logo} alt="" width={140} height={64} style={{ width: "auto", height: "auto", maxHeight: 64, objectFit: "contain" }} />
            </div>
            <div>
              <h3 className="bb-display-4">{sponsor.name}</h3>
              <p className="bb-caption">{sponsor.date ?? sponsor.year}</p>
              <details className="bb-details">
                <summary>About this contribution</summary>
                <p className="bb-body">{sponsor.description}</p>
              </details>
            </div>
            <div className="bb-sponsor-amount">
              <p className="bb-display-4">${sponsor.amount.toLocaleString("en-US")}</p>
              <p className="bb-caption">{sponsor.amount >= 1000 ? "Gold" : sponsor.amount >= 250 ? "Silver" : "Bronze"}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
