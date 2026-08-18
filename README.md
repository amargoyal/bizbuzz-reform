# BizBuzz — redesign preview

A shareable copy of the BizBuzz NFP site built from the `redesign/v3` branch of
the main repository. It is published as a static export on GitHub Pages so the
redesign can be reviewed at a URL without touching the production site at
bizbuzz.it.

BizBuzz is a free entrepreneurship program for students in grades 3–8. The site
is built with Next.js and lives in the `bizbuzz/` folder.

## Running it

```
cd bizbuzz
npm install
npm run dev
```

Then open http://localhost:3000.

## How the preview is published

Every push to `main` runs `.github/workflows/deploy.yml`, which builds a static
export and publishes it to GitHub Pages. Two things differ from the production
build, both because Pages is a plain static host serving from a `/<repo>` path:

- `NEXT_PUBLIC_BASE_PATH` is set to the repository name, and `next.config.mjs`
  feeds it to `basePath` plus a custom image loader, since `next/image` does not
  apply `basePath` to `/public` sources on its own.
- The per-year URL redirects (`/camps-2025` and friends) are not carried over —
  static hosting cannot serve them. Those seasons live on the year switcher at
  `/camps` and `/fish-tank`.

## Contact

Questions or want to get involved? Email us at bizbuzznfp@gmail.com.
