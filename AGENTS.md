# AGENTS.md

## Images

- Images shown by the site live in `public/lovable-uploads/` and are referenced from project data as plain string paths (e.g. `/lovable-uploads/name.jpg`). Lovable Asset pointers (`/__l5e/assets-v1/...`) are not served by the editor's dev server — it answers those paths with the app's HTML, so the pictures show as broken in the live preview even though the published site serves them.
- Project galleries lay images out in a uniform grid, so every entry in a project's `images` array should share one aspect ratio. Fit odd-ratio artwork onto a matching canvas (letterboxed, never cropped) before adding it, and give square-cropped card thumbnails a square source.

## Personas

- Ilumina-only projects live in `src/data/ilumina-video-projects.ts`. Every other project belongs to Infinita and goes in one of the arrays combined in `src/data/projects.ts`.
- A new Ilumina-only slug must also be added to the exclusion lists in `src/pages/Infinita.tsx` and `src/components/project/RelatedProjects.tsx`; without both, the project leaks onto Infinita pages.
