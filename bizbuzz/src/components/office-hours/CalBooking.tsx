"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import { Card } from "@/components/ds/Card";
import { Tabs } from "@/components/ds/NavBar";
import { CAL_LINKS, CONTACT_EMAIL, LINKS } from "@/lib/site";

type Mode = keyof typeof CAL_LINKS;

const MODES: { value: Mode; label: string }[] = [
  { value: "online", label: "Online (Google Meet)" },
  { value: "inPerson", label: "In person (library)" },
];

const BLURB: Record<Mode, { when: string; text: string }> = {
  online: {
    when: "Weekdays · Google Meet",
    text: "A 1-on-1 video session. The Meet link arrives in your confirmation email as soon as you book.",
  },
  inPerson: {
    when: "Weekends · Naperville libraries",
    text: "Meet us at 95th Street Library or Nichols Library. The exact location arrives with your confirmation email.",
  },
};

/**
 * The live Cal.com scheduler, themed to the BizBuzz palette. Remounting on
 * mode change (via `key`) is deliberate — the embed caches its event type on
 * first load and will not swap calendars in place.
 */
export default function CalBooking() {
  const [mode, setMode] = useState<Mode>("online");

  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#e0a400" },
          dark: { "cal-brand": "#ffc233" },
        },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-9)",
        alignItems: "center",
      }}
    >
      <Tabs items={MODES} value={mode} onChange={setMode} />

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", alignItems: "center" }}>
        <p className="bb-mono">{BLURB[mode].when}</p>
        <p className="bb-body" style={{ color: "var(--text-muted)", maxWidth: "46ch", textAlign: "center" }}>
          {BLURB[mode].text}
        </p>
      </div>

      <Card pad="var(--space-5)" style={{ width: "100%" }}>
        <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", minHeight: 620 }}>
          <Cal
            key={mode}
            calLink={CAL_LINKS[mode]}
            style={{ width: "100%", height: "100%", minHeight: 620, overflow: "hidden" }}
            config={{ layout: "month_view" }}
          />
        </div>
      </Card>

      <p className="bb-caption" style={{ textAlign: "center" }}>
        Trouble booking?{" "}
        <a href={LINKS.email} style={{ textDecoration: "underline" }}>
          Email {CONTACT_EMAIL}
        </a>{" "}
        and we will find a time for you.
      </p>
    </div>
  );
}
