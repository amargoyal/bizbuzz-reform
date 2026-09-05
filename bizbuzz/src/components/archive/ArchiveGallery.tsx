import Image from "next/image";

export default function ArchiveGallery({ images, title }: { images: string[]; title: string }) {
  return (
    <div className="bb-data-grid">
      {images.map((src, index) => (
        <a key={src} href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}`} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} photo ${index + 1}`}>
          <div style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden", borderRadius: "var(--radius-md)" }}>
            <Image src={src} alt={`${title}, photo ${index + 1}`} fill sizes="(max-width: 720px) 90vw, 33vw" style={{ objectFit: "cover" }} />
          </div>
        </a>
      ))}
    </div>
  );
}
