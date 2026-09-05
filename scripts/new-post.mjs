#!/usr/bin/env node
// Scaffold a post file: npm run new-post "Some Title"
// Creates src/content/posts/YYYY-MM-slug.md and refuses to overwrite.

import { writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const title = process.argv[2];

if (!title) {
  console.error('Usage: npm run new-post "Post Title"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .normalize('NFKD')
  .replace(/[\u0300-\u036f]/g, '') // strip accents
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '');

if (!slug) {
  console.error(`Could not derive a slug from "${title}".`);
  process.exit(1);
}

const now = new Date();
const yyyy = now.getFullYear();
const mm = String(now.getMonth() + 1).padStart(2, '0');
const dd = String(now.getDate()).padStart(2, '0');

const dir = join('src', 'content', 'posts');
const filename = `${yyyy}-${mm}-${slug}.md`;
const path = join(dir, filename);

if (existsSync(path)) {
  console.error(`${path} already exists. Not overwriting.`);
  process.exit(1);
}

// Escape double quotes so a title containing them stays valid YAML.
const yamlTitle = title.replace(/"/g, '\\"');

const body = `---
title: "${yamlTitle}"
description: ""
pubDate: ${yyyy}-${mm}-${dd}
tags: []
draft: true
---

`;

mkdirSync(dir, { recursive: true });
writeFileSync(path, body, 'utf8');

console.log(`Created ${path}`);
console.log(`URL will be /posts/${slug}/ once draft: false`);
