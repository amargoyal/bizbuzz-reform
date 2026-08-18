/**
 * next/image does not apply basePath to the src it hands the loader, so on a
 * project-path host like GitHub Pages every /public image would 404. Prefix it
 * here; absolute URLs are left alone.
 */
export default function imageLoader({ src }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return src.startsWith("/") ? `${basePath}${src}` : src;
}
