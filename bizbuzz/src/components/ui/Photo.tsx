import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

type Props = {
  src: string;
  alt: string;
  caption?: ReactNode;
  /** CSS aspect ratio, for example "4 / 3". */
  ratio?: string;
  sizes: string;
  priority?: boolean;
  /** CSS object-position for the crop. */
  position?: string;
  className?: string;
};

/** A photo in a fixed-ratio frame, with an optional caption underneath. */
export function Photo({ src, alt, caption, ratio = "4 / 3", sizes, priority, position, className }: Props) {
  const frameStyle = { "--ratio": ratio } as CSSProperties;
  const frame = (
    <div className="photo__frame" style={frameStyle}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={position ? { objectPosition: position } : undefined}
      />
    </div>
  );
  if (!caption) return <div className={["photo", className].filter(Boolean).join(" ")}>{frame}</div>;
  return (
    <figure className={["photo", className].filter(Boolean).join(" ")}>
      {frame}
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
