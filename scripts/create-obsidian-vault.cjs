const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const repoRoot = path.resolve(__dirname, '..');
const vaultRoot = path.join(repoRoot, 'Website Content');
const compiledData = fs.mkdtempSync(path.join(os.tmpdir(), 'chebel-content-'));
const tsc = path.join(repoRoot, 'node_modules', '.bin', 'tsc');
const dataFiles = [
  'src/data/types.ts',
  'src/data/video-projects.ts',
  'src/data/photography-projects.ts',
  'src/data/installation-projects.ts',
  'src/data/performance-projects.ts',
  'src/data/performance-installation-projects.ts',
  'src/data/generative-art-projects.ts',
  'src/data/ilumina-video-projects.ts',
  'src/data/projects.ts',
];

execFileSync(tsc, [
  ...dataFiles,
  '--outDir', compiledData,
  '--module', 'commonjs',
  '--target', 'ES2020',
  '--moduleResolution', 'node',
  '--skipLibCheck',
], { cwd: repoRoot, stdio: 'inherit' });

const { projects } = require(path.join(compiledData, 'projects.js'));

const sourceBySlug = {
  'sintography': 'src/data/generative-art-projects.ts',
  'the-wedding-of-the-sun-and-the-moon': 'src/data/video-projects.ts',
  'devir-mulher': 'src/data/video-projects.ts',
  'quebranto': 'src/data/video-projects.ts',
  'premio-sim-tv-globo': 'src/data/video-projects.ts',
  'music-videos': 'src/data/video-projects.ts',
  'artist-videos': 'src/data/video-projects.ts',
  'bodies-of-water': 'src/data/photography-projects.ts',
  'tea-in-alishan': 'src/data/photography-projects.ts',
  'china-oddities': 'src/data/photography-projects.ts',
  'temple-of-reflections': 'src/data/installation-projects.ts',
  'fluvial': 'src/data/performance-installation-projects.ts',
  'rainbow-road': 'src/data/performance-installation-projects.ts',
  'alma-da-selva-amazonia-mapping': 'src/data/ilumina-video-projects.ts',
  'ancestresses': 'src/data/ilumina-video-projects.ts',
  'nature-of-movement': 'src/data/ilumina-video-projects.ts',
  'fanta-konate': 'src/data/ilumina-video-projects.ts',
};

const ensureDirectory = relativePath => fs.mkdirSync(path.join(vaultRoot, relativePath), { recursive: true });
const writeNew = (relativePath, content) => {
  const destination = path.join(vaultRoot, relativePath);
  if (fs.existsSync(destination)) {
    process.stdout.write(`Skipped existing note: ${relativePath}\n`);
    return;
  }
  fs.writeFileSync(destination, `${content.trim()}\n`, 'utf8');
  process.stdout.write(`Created: ${relativePath}\n`);
};
const yaml = value => JSON.stringify(value ?? '');
const safeFilename = value => value.replace(/[\\/:*?"<>|]/g, '—');

ensureDirectory('.obsidian');
ensureDirectory('Pages');
ensureDirectory('Projects');

writeNew('.obsidian/app.json', JSON.stringify({
  alwaysUpdateLinks: true,
  newFileLocation: 'folder',
  newFileFolderPath: 'Inbox',
  showUnsupportedFiles: true,
}, null, 2));
writeNew('.obsidian/appearance.json', JSON.stringify({ baseFontSize: 17 }, null, 2));

writeNew('Start Here.md', `
# Renata Chebel — Website Content

This Obsidian vault is the editable text companion to the portfolio website.

## How to edit

1. Open the **Website Content** folder as a vault in Obsidian.
2. Edit the prose in **Pages** or **Projects**.
3. Keep the YAML block at the top of each note, especially the \`slug\` and \`source_file\` fields.
4. When the edits are ready, tell Codex: **“Sync my Website Content Obsidian edits to the website and deploy them.”**

Edits do not publish automatically. Codex reviews the changes, transfers them into the website source, checks the layout, and deploys the update. This avoids an accidental local edit immediately changing the public site.

## Index

- [[Pages/Homepage]]
- [[Pages/Homepage Test]]
- [[Pages/About]]
- [[Pages/Shared Site Text]]
- [[Projects/01 Sintography]]
`);

writeNew('Pages/Homepage.md', `
---
route: "/"
source_file: "src/pages/Index.tsx"
status: "live"
---

# Homepage

## Section labels

- Selected work
- Archive

## Filters

- All work
- Film & Video
- Photography
- Installation
- Performance
- Generative Art

The current homepage layout remains live while the new image-led test page is evaluated.
`);

writeNew('Pages/Homepage Test.md', `
---
route: "/homepage-test"
source_file: "src/pages/HomepageTest.tsx"
status: "test"
---

# Homepage Test

## Interface text

- Work
- About
- Journal
- Contact
- Project
- Discipline
- Year
- Brazil / Worldwide

The background automatically cycles through project covers. Hovering or focusing a project title shows that project's cover.
`);

writeNew('Pages/About.md', `
---
route: "/about"
source_file: "src/pages/About.tsx"
status: "live"
---

# About

I explore the porous boundaries between nature, technology, spirituality and memory.

I am Renata Chebel, a Brazilian multimedia artist working with generative art, video, photography, projection mapping and physical installations. With a background in journalism, storytelling remains at the heart of everything I create.

My experimental practice also includes performance, soundscapes and embroidery, often dissolving the line between digital and handmade, ancestral and futuristic.

My work has been presented at the Bombay Beach Biennale, Taiwan Technology and Culture Expo, MAPP in Canada and Amazonia Mapping in Brazil. I am especially drawn to collaborative, site-specific projects that bring ancient wisdom into dialogue with emerging technologies.

## Education

- BA in Journalism — University of São Paulo, Brazil — 2003—2008
- Digital Photography — Central Saint Martins, London — 2008
- Fine Art Digital Printing — ICP, New York — 2015
- Production Design — School of Visual Arts, New York — 2013
- Spatial Poetry — Bauhaus-Universität Weimar — 2017

## Profile details

- Based in: Brazil
- Experience: 15+ years
- Mode: Collaborative
- Availability: Available worldwide
`);

writeNew('Pages/Shared Site Text.md', `
---
source_files:
  - "src/components/Navigation.tsx"
  - "src/components/Layout.tsx"
status: "live"
---

# Shared Site Text

## Navigation

- Renata Chebel
- Work
- About
- Journal
- Contact

## Footer

- Available for commissions & collaborations
- chebel@gmail.com
- Connect
- Instagram
- Substack
- Based
- Brazil · Working worldwide
`);

const renderEditorialSection = section => {
  const heading = [section.eyebrow, section.title].filter(Boolean).join(' — ');
  const parts = [`## ${heading || 'Editorial section'}`];
  if (section.body) parts.push(section.body);
  if (section.text) parts.push(section.text);
  if (section.caption) parts.push(`**Caption:** ${section.caption}`);
  if (section.imageCaptions?.length) {
    parts.push('**Image captions:**\n' + section.imageCaptions.map(caption => `- ${caption}`).join('\n'));
  }
  return parts.join('\n\n');
};

projects.forEach((project, index) => {
  const number = String(index + 1).padStart(2, '0');
  const filename = `${number} ${safeFilename(project.title)}.md`;
  const sections = project.editorialSections?.length
    ? project.editorialSections.map(renderEditorialSection).join('\n\n')
    : `## Project notes\n\n${project.details || project.description}`;
  const note = `
---
title: ${yaml(project.title)}
slug: ${yaml(project.slug)}
route: ${yaml(`/projects/${project.slug}`)}
source_file: ${yaml(sourceBySlug[project.slug] || 'src/data/projects.ts')}
year: ${yaml(project.date)}
location: ${yaml(project.location)}
disciplines: ${yaml(project.category)}
status: "live"
---

# ${project.title}

## Page introduction

${project.description}

${sections}
`;
  writeNew(path.join('Projects', filename), note);
});

fs.rmSync(compiledData, { recursive: true, force: true });
process.stdout.write(`\nObsidian vault ready: ${vaultRoot}\n`);
