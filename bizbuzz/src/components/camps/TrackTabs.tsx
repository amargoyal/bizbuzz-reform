"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type Tab = {
  id: string;
  label: string;
  note?: string;
  /** Hash prefixes that belong to this tab, such as "vl-" for its session anchors. */
  prefixes?: string[];
  content: ReactNode;
};

/**
 * Tabs for tracks that ran side by side. The address bar keeps the choice
 * (#venturelab), so links and the back button land on the right track.
 */
export function TrackTabs({ tabs, label }: { tabs: Tab[]; label: string }) {
  const [active, setActive] = useState(tabs[0].id);
  const pendingScroll = useRef<string | null>(null);
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const fromUrl = () => {
      const hash = window.location.hash.replace("#", "");
      const query = new URLSearchParams(window.location.search).get("tab");
      const wanted = tabs.find(
        (t) => t.id === hash || t.id === query || (t.prefixes ?? []).some((p) => hash.startsWith(p)),
      );
      if (wanted) {
        setActive(wanted.id);
        if (hash && hash !== wanted.id) pendingScroll.current = hash;
      }
    };
    fromUrl();
    window.addEventListener("hashchange", fromUrl);
    return () => window.removeEventListener("hashchange", fromUrl);
  }, [tabs]);

  useEffect(() => {
    if (!pendingScroll.current) return;
    const el = document.getElementById(pendingScroll.current);
    pendingScroll.current = null;
    el?.scrollIntoView();
  }, [active]);

  const select = (id: string, focus = false) => {
    setActive(id);
    history.replaceState(null, "", `#${id}`);
    if (focus) refs.current[id]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    const last = tabs.length - 1;
    let next = -1;
    if (e.key === "ArrowRight") next = index === last ? 0 : index + 1;
    if (e.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next >= 0) {
      e.preventDefault();
      select(tabs[next].id, true);
    }
  };

  return (
    <div className="tracktabs">
      <div role="tablist" aria-label={label} className="segmented tracktabs__list">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              refs.current[t.id] = el;
            }}
            role="tab"
            type="button"
            id={`tab-${t.id}`}
            aria-selected={active === t.id}
            aria-controls={`panel-${t.id}`}
            tabIndex={active === t.id ? 0 : -1}
            onClick={() => select(t.id)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            {t.label}
            {t.note && <span className="tracktabs__note">{t.note}</span>}
          </button>
        ))}
      </div>
      {tabs.map((t) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`panel-${t.id}`}
          aria-labelledby={`tab-${t.id}`}
          hidden={active !== t.id}
          className="tracktabs__panel"
        >
          {t.content}
        </div>
      ))}
    </div>
  );
}
