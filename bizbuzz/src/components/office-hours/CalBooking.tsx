"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { CAL_LINKS, CONTACT_EMAIL } from "@/lib/site";

type Mode = keyof typeof CAL_LINKS;
type Load = "waiting" | "loading" | "ready" | "slow" | "failed";

const MODES: { value: Mode; label: string; when: string; text: string }[] = [
  {
    value: "online",
    label: "Online",
    when: "Weekdays on Google Meet",
    text: "A 1-on-1 video session. The Meet link arrives by email once the team confirms your booking.",
  },
  {
    value: "inPerson",
    label: "In person",
    when: "Weekends at a Naperville library",
    text: "Meet us at a Naperville library such as 95th Street Library or Nichols Library. The exact location arrives by email once the team confirms your booking.",
  },
];

/** How long to wait for Cal.com before offering other ways to book. */
const SLOW_MS = 12000;

/**
 * The live Cal.com calendar. It loads only when it scrolls near the screen,
 * so the rest of the page stays fast. Switching format remounts the embed
 * because Cal.com caches the event type on first load. If Cal.com is slow or
 * blocked (school networks and ad blockers sometimes do this), the page says
 * so and offers the direct link and email instead of an empty box.
 */
export default function CalBooking() {
  const [mode, setMode] = useState<Mode>("online");
  const [load, setLoad] = useState<Load>("waiting");
  const holder = useRef<HTMLDivElement>(null);
  const current = MODES.find((m) => m.value === mode)!;
  const started = load !== "waiting";
  const directLink = `https://cal.com/${CAL_LINKS[mode]}`;

  // Start loading once the calendar is within 600px of the viewport.
  useEffect(() => {
    const el = holder.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLoad("loading");
          io.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Theme the embed and listen for Cal.com's ready and failed events.
  useEffect(() => {
    if (!started) return;
    let alive = true;
    getCalApi()
      .then((cal) => {
        if (!alive) return;
        cal("ui", {
          theme: "light",
          cssVarsPerTheme: { light: { "cal-brand": "#030037" }, dark: { "cal-brand": "#ffc629" } },
          hideEventTypeDetails: false,
        });
        cal("on", { action: "linkReady", callback: () => alive && setLoad("ready") });
        cal("on", { action: "linkFailed", callback: () => alive && setLoad("failed") });
      })
      .catch(() => alive && setLoad("failed"));
    return () => {
      alive = false;
    };
  }, [started]);

  // If nothing has rendered after a while, offer the fallbacks.
  useEffect(() => {
    if (load !== "loading") return;
    const t = window.setTimeout(() => setLoad("slow"), SLOW_MS);
    return () => window.clearTimeout(t);
  }, [load, mode]);

  const choose = (value: Mode) => {
    if (value === mode) return;
    setMode(value);
    if (started) setLoad("loading");
  };

  return (
    <div className="booking">
      <div className="booking__controls">
        <div className="segmented" role="group" aria-label="Meeting format">
          {MODES.map((m) => (
            <button key={m.value} type="button" aria-pressed={mode === m.value} onClick={() => choose(m.value)}>
              {m.label}
            </button>
          ))}
        </div>
        <div className="booking__about" aria-live="polite">
          <p className="booking__when">{current.when}</p>
          <p>{current.text}</p>
        </div>
      </div>

      {(load === "slow" || load === "failed") && (
        <div className="booking__notice" role="status">
          <strong>
            {load === "failed" ? "The calendar couldn't load here." : "The calendar is taking longer than usual."}
          </strong>
          <p>
            You can <a href={directLink} target="_blank" rel="noopener noreferrer">book on Cal.com directly</a>
            <span className="visually-hidden"> (opens in a new tab)</span>, or{" "}
            <a href={`mailto:${CONTACT_EMAIL}?subject=Office%20hours`}>email us</a> and we&apos;ll find a time.
          </p>
        </div>
      )}

      <div className="booking__frame" ref={holder} aria-busy={load === "loading" || undefined}>
        {load !== "ready" && (
          <p className="booking__loading" aria-hidden={started ? undefined : true}>
            {load === "failed" ? "Calendar unavailable" : "Loading the calendar…"}
          </p>
        )}
        {started && (
          <Cal
            key={mode}
            className="booking__cal"
            calLink={CAL_LINKS[mode]}
            style={{ width: "100%", height: "100%", minHeight: 640, overflow: "hidden" }}
            config={{ layout: "month_view", theme: "light" }}
          />
        )}
      </div>

      <div className="booking__help">
        <a href={directLink} target="_blank" rel="noopener noreferrer">
          Open the {mode === "online" ? "online" : "in-person"} calendar on Cal.com
          <Icon name="external" />
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
        <p>
          Having trouble booking? <a href={`mailto:${CONTACT_EMAIL}?subject=Office%20hours`}>Email us</a> and we&apos;ll
          find a time for you.
        </p>
      </div>
    </div>
  );
}
