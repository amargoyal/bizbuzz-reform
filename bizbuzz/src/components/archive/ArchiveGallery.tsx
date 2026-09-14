"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BASE_PATH } from "@/lib/site";

export default function ArchiveGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const modal = dialog.current;
    return () => modal?.close();
  }, []);

  function move(step: number) {
    setActive((index) => (index + step + images.length) % images.length);
  }

  if (!images.length) return null;

  return (
    <>
      <div className="bb-data-grid">
        {images.map((src, index) => (
          <button key={src} type="button" className="bb-gallery-thumb" aria-label={`View ${title} photo ${index + 1}`}
            onClick={(event) => {
              opener.current = event.currentTarget;
              setActive(index);
              dialog.current?.showModal();
            }}>
            <Image src={src} alt={`${title}, photo ${index + 1}`} fill sizes="(max-width: 720px) 90vw, 33vw" style={{ objectFit: "cover" }} />
            <span className="bb-gallery-zoom" aria-hidden="true">View photo</span>
          </button>
        ))}
      </div>
      <dialog ref={dialog} className="bb-gallery-dialog" aria-label={`${title} photos`}
        onClose={() => opener.current?.focus()}
        onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
          if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
        }}>
        <div className="bb-gallery-viewer">
          <div className="bb-gallery-toolbar">
            <p role="status">Photo {active + 1} of {images.length}</p>
            <button type="button" autoFocus onClick={() => dialog.current?.close()}>Close</button>
          </div>
          <div className="bb-gallery-image">
            <Image src={images[active]} alt={`${title}, photo ${active + 1}`} fill sizes="95vw" style={{ objectFit: "contain" }} />
          </div>
          <p className="bb-caption">{title}</p>
          <div className="bb-gallery-toolbar">
            <button type="button" disabled={images.length < 2} onClick={() => move(-1)}>Previous</button>
            <a href={`${BASE_PATH}${images[active]}`} target="_blank" rel="noopener noreferrer">Open original</a>
            <button type="button" disabled={images.length < 2} onClick={() => move(1)}>Next</button>
          </div>
        </div>
      </dialog>
    </>
  );
}
