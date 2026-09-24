"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "./Icon";

/**
 * YouTube video that loads only when someone presses play, so the page stays
 * fast and no third-party cookies load for people who never watch it.
 */
export function VideoEmbed({ id, title, poster }: { id: string; title: string; poster: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="video">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button type="button" className="video__play" onClick={() => setPlaying(true)}>
          <Image src={poster} alt="" fill sizes="(max-width: 900px) 100vw, 640px" />
          <span className="video__button">
            <Icon name="play" />
            <span>Play video<span className="visually-hidden">: {title}</span></span>
          </span>
        </button>
      )}
    </div>
  );
}
