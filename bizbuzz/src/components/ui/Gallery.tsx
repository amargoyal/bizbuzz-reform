"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { Icon } from "./Icon";

export type GalleryImage = { src: string; alt: string; caption?: string; position?: string };

type Props = {
  images: GalleryImage[];
  /** Name read out by screen readers, for example "Session 3 photos". */
  label: string;
  /** Show this many thumbnails; the last one opens the rest. */
  limit?: number;
  /** Minimum thumbnail width in px. */
  thumb?: number;
  sizes?: string;
  className?: string;
};

/**
 * Thumbnail grid that opens a full-screen photo viewer.
 * Keyboard: arrows move, Home/End jump, Escape closes. Touch: swipe.
 */
export function Gallery({ images, label, limit, thumb = 220, sizes, className }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const touchX = useRef<number | null>(null);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const count = images.length;
  const shown = limit && limit < count ? images.slice(0, limit) : images;
  const hidden = count - shown.length;

  const show = useCallback((i: number, opener: HTMLElement) => {
    openerRef.current = opener;
    setIndex(i);
    setOpen(true);
  }, []);

  const move = useCallback((step: number) => setIndex((i) => (i + step + count) % count), [count]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => {
      setOpen(false);
      openerRef.current?.focus();
    };
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); move(1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); move(-1); }
    else if (e.key === "Home") { e.preventDefault(); setIndex(0); }
    else if (e.key === "End") { e.preventDefault(); setIndex(count - 1); }
  };

  const current = images[index];
  const style = { "--thumb": `${thumb}px` } as CSSProperties;

  return (
    <>
      <ul className={["gallery", className].filter(Boolean).join(" ")} style={style} aria-label={label}>
        {shown.map((img, i) => {
          const isLast = hidden > 0 && i === shown.length - 1;
          return (
            <li key={img.src + i}>
              <button
                type="button"
                className="gallery__item"
                onClick={(e) => show(i, e.currentTarget)}
                aria-label={isLast ? `View all ${count} photos` : `Open photo ${i + 1} of ${count}: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt=""
                  fill
                  sizes={sizes ?? `(max-width: 600px) 50vw, ${thumb * 1.5}px`}
                  style={img.position ? { objectPosition: img.position } : undefined}
                />
                {isLast && <span className="gallery__more" aria-hidden="true">+{hidden + 1} photos</span>}
              </button>
            </li>
          );
        })}
      </ul>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={label}
        onKeyDown={onKeyDown}
        onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
      >
        {open && current && (
          <>
            <div className="lightbox__bar">
              <span aria-live="polite">
                Photo {index + 1} of {count}
              </span>
              <button type="button" className="icon-btn" onClick={() => setOpen(false)} aria-label="Close photo viewer" autoFocus>
                <Icon name="close" />
              </button>
            </div>
            <div className="lightbox__stage">
              <button type="button" className="icon-btn prev" onClick={() => move(-1)} aria-label="Previous photo">
                <Icon name="left" />
              </button>
              <div
                className="lightbox__img"
                onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
                onTouchEnd={(e) => {
                  if (touchX.current === null) return;
                  const dx = e.changedTouches[0].clientX - touchX.current;
                  if (Math.abs(dx) > 40) move(dx < 0 ? 1 : -1);
                  touchX.current = null;
                }}
              >
                <Image key={current.src} src={current.src} alt={current.alt} fill sizes="100vw" quality={80} />
                {/* Load the neighbours at the same size so paging feels instant. */}
                {count > 1 &&
                  [images[(index + 1) % count], images[(index - 1 + count) % count]].map((img) => (
                    <Image
                      key={"pre" + img.src}
                      src={img.src}
                      alt=""
                      fill
                      sizes="100vw"
                      quality={80}
                      loading="eager"
                      aria-hidden="true"
                      style={{ opacity: 0, pointerEvents: "none" }}
                    />
                  ))}
              </div>
              <button type="button" className="icon-btn next" onClick={() => move(1)} aria-label="Next photo">
                <Icon name="right" />
              </button>
            </div>
            <p className="lightbox__caption">{current.caption ?? current.alt}</p>
          </>
        )}
      </dialog>
    </>
  );
}
