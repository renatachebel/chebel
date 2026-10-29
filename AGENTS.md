# AGENTS.md

## Images

- Images shown by the site live in the legacy `public/lovable-uploads/` directory and are referenced from project data as plain string paths (e.g. `/lovable-uploads/name.jpg`). Keep those public paths stable unless every matching project-data reference is migrated at the same time.
- Project galleries lay images out in a uniform grid, so every entry in a project's `images` array should share one aspect ratio. Fit odd-ratio artwork onto a matching canvas (letterboxed, never cropped) before adding it, and give square-cropped card thumbnails a square source.

## Portfolio

- One deduplicated `projects` collection in `src/data/projects.ts` combines every data module and powers all work, lookup, and related-project views, so no persona-based exclusions hide artwork.
- The root page is the complete portfolio; former persona and all-projects URLs redirect to it to preserve existing links.
- Shared typography, monochrome colors, and quiet editorial surfaces are defined in global CSS and Tailwind tokens so all pages remain visually consistent.
