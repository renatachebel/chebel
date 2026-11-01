# Renata Chebel — Artist Portfolio

Source code for [chebel.com.br](https://www.chebel.com.br), Renata Chebel's multimedia art portfolio.

## Stack

- React 18 and TypeScript
- Vite
- Tailwind CSS and shadcn/ui
- Static media stored in `public/lovable-uploads/`

The media directory keeps its historical name so existing project paths remain stable; the site does not require Lovable to build or run.

## Local development

Requirements: Node.js and npm.

```sh
npm ci
npm run dev
```

Vite serves the site at `http://localhost:8080`.

## Verification

```sh
npm run lint
npm run build
```

The production build is written to `dist/`.

## Deployment

The site can be deployed to any static host with:

- Build command: `npm run build`
- Publish directory: `dist`
- SPA fallback: all unmatched routes should serve `index.html`

`public/_redirects` supplies that fallback on hosts that support Netlify-style redirect rules. The repository contains no required environment variables or server-side services.
