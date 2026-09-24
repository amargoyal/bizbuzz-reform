import type { Metadata } from "next";

type ShareImage = { url: string; width?: number; height?: number; alt: string };

/** The default preview image for links shared on social media and in messages. */
export const OG_IMAGE: ShareImage = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "BizBuzz NFP: Build Biz. Bring Buzz. Free entrepreneurship programs for students in grades 3 to 8.",
};

/**
 * Title, description, canonical address, and a matching link preview for one
 * page. Without this, every shared link would show the homepage's preview.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: ShareImage;
}): Metadata {
  const shareTitle = `${title} | BizBuzz NFP`;
  const images = [image ?? OG_IMAGE];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "BizBuzz NFP",
      locale: "en_US",
      url: path,
      title: shareTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: images.map((i) => ({ url: i.url, alt: i.alt })),
    },
  };
}
