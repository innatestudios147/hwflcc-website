// Zero-dependency static site build for hwflcc.co.za
// - Wraps every page in src/pages with src/layout.html
// - Copies public/ into dist/
// - Pulls in photos and the funding PDF listed in assets.json (if they are not already in public/)
// Run locally with:  node build.mjs   (Node 18+)

import { readFile, writeFile, mkdir, readdir, cp } from "node:fs/promises";
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(root, "src");
const PUBLIC = path.join(root, "public");
const DIST = path.join(root, "dist");
const SITE_URL = (process.env.URL || "https://hwflcc.co.za").replace(/\/$/, "");
const YEAR = new Date().getFullYear();

const ICONS = {
  wind: '<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>',
  arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  sprout: '<path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>',
  health: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>',
  education: '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  pin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  ban: '<circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/>',
  file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
  close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  turbine: '<circle cx="12" cy="9" r="1.4"/><path d="M12 10.4V22"/><path d="M9.5 22h5"/><path d="M12 7.6 12.6 2c.1-.6-.7-.8-.9-.2L10.3 7.4"/><path d="m13.3 9.6 5 2.6c.5.3 1-.4.6-.8l-4.4-3.6"/><path d="m10.8 9.9-4.6 3.3c-.5.3-.1 1.1.5.9l5-2"/>',
};

const icon = (name, extra = "") =>
  `<svg class="icon icon-${name}${extra ? " " + extra : ""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] ?? ""}</svg>`;

// Responsive image helper — uses Netlify Image CDN on deploy, plain file locally
// The source photos are 600 px wide, so there is no point asking for larger renditions.
const img = (src, alt, { sizes = "(min-width: 768px) 25vw, 50vw", cls = "", eager = false, widths } = {}) => {
  widths ??= src.includes("hero") ? [800, 1280, 1920] : [400, 600];
  const srcset = widths.map((w) => `/.netlify/images?url=${encodeURIComponent(src)}&w=${w}&q=78 ${w}w`).join(", ");
  return `<img src="${src}" srcset="${srcset}" sizes="${sizes}" alt="${alt}" class="${cls}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
};

// Line-drawn wind turbine for the inner page heroes. The rotor is its own element so CSS can spin it on the compositor.
const BLADE = "M0 0C2.4-10 3.6-30 1.3-46C.5-47.2-.7-46.8-1.1-45.6C-2.6-30-2.8-12-1.7-1.5Z";
const TURBINE = `<div class="hero-turbine" aria-hidden="true">
        <svg class="turbine-tower" viewBox="0 0 100 240" fill="currentColor"><path d="M48.4 52 46 240h8l-2.4-188z"/><rect x="45" y="46.5" width="13" height="7" rx="3"/></svg>
        <svg class="turbine-rotor" viewBox="-50 -50 100 100" fill="currentColor"><path d="${BLADE}"/><path d="${BLADE}" transform="rotate(120)"/><path d="${BLADE}" transform="rotate(240)"/><circle r="3.4"/></svg>
      </div>`;

const NAV = [
  { href: "/#about", label: "About", match: null },
  { href: "/our-strategy/", label: "Our strategy", match: "/our-strategy/" },
  { href: "/apply/", label: "Apply for funding", match: "/apply/" },
  { href: "/gallery/", label: "Gallery", match: "/gallery/" },
  { href: "/contact-us/", label: "Contact", match: "/contact-us/" },
];

function parsePage(raw, file) {
  const m = raw.match(/^<!--\s*(\{[\s\S]*?\})\s*-->\s*/);
  if (!m) throw new Error(`Missing front matter in ${file}`);
  return { meta: JSON.parse(m[1]), body: raw.slice(m[0].length) };
}

function render(template, data) {
  return template
    .replace(/\{\{icon:([a-z]+)(?::([\w-]+))?\}\}/g, (_, n, c) => icon(n, c || ""))
    .replace(/\{\{img:([^|}]+)\|([^|}]*)(?:\|([^}]*))?\}\}/g, (_, src, alt, opts) => {
      const o = {};
      for (const part of (opts || "").split(";").filter(Boolean)) {
        const [k, v] = part.split("=");
        o[k.trim()] = v === undefined ? true : v.trim();
      }
      return img(src.trim(), alt.trim(), { sizes: o.sizes, cls: o.cls || "", eager: !!o.eager });
    })
    .replace(/\{\{(\w+)\}\}/g, (_, k) => (k in data ? data[k] : `{{${k}}}`));
}

async function walkFiles(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walkFiles(p)));
    else out.push(p);
  }
  return out;
}

async function fetchAssets() {
  const manifest = JSON.parse(await readFile(path.join(root, "assets.json"), "utf8"));
  const failures = [];
  for (const asset of manifest) {
    const dest = path.join(DIST, asset.path);
    if (existsSync(dest)) continue; // committed in public/ — nothing to fetch
    const sources = [...asset.sources, `${SITE_URL}/${asset.path}`, `https://hwflcc.netlify.app/${asset.path}`];
    let ok = false;
    for (const url of sources) {
      try {
        const res = await fetch(url, { redirect: "follow", headers: { "user-agent": "hwflcc-site-build" } });
        const type = res.headers.get("content-type") || "";
        if (!res.ok || type.includes("text/html")) continue;
        const buf = Buffer.from(await res.arrayBuffer());
        if (buf.length < 1024) continue;
        await mkdir(path.dirname(dest), { recursive: true });
        await writeFile(dest, buf);
        console.log(`  ✓ ${asset.path}  ←  ${url}  (${Math.round(buf.length / 1024)} KB)`);
        ok = true;
        break;
      } catch {
        /* try next source */
      }
    }
    if (!ok && asset.optional) console.warn(`  ! skipped optional ${asset.path}`);
    else if (!ok) failures.push(asset.path);
  }
  return failures;
}

// Short content hash, used to version stylesheet and script URLs so browsers never keep a stale copy
async function fileHash(rel) {
  const buf = await readFile(path.join(PUBLIC, rel));
  return createHash("sha256").update(buf).digest("hex").slice(0, 10);
}

async function main() {
  const layout = await readFile(path.join(SRC, "layout.html"), "utf8");
  const cssVersion = await fileHash("assets/css/site.css");
  const jsVersion = await fileHash("assets/js/site.js");
  await mkdir(DIST, { recursive: true });
  if (existsSync(PUBLIC)) await cp(PUBLIC, DIST, { recursive: true });

  const pages = (await readdir(path.join(SRC, "pages"))).filter((f) => f.endsWith(".html"));
  const urls = [];

  for (const file of pages) {
    const { meta, body } = parsePage(await readFile(path.join(SRC, "pages", file), "utf8"), file);
    const nav = NAV.map((item) => {
      const current = item.match && meta.path === item.match;
      return `<a href="${item.href}"${current ? ' aria-current="page"' : ""}>${item.label}</a>`;
    }).join("\n          ");

    const data = {
      title: meta.title,
      fullTitle: meta.path === "/" ? meta.title : `${meta.title} · Hopefield Wind Farm Local Community Company`,
      description: meta.description,
      canonical: `${SITE_URL}${meta.path === "/404" ? "/" : meta.path}`,
      ogImage: `${SITE_URL}/assets/img/og-image.jpg`,
      bodyClass: meta.bodyClass || "",
      nav,
      year: String(YEAR),
      heroTurbine: TURBINE,
      cssVersion,
      jsVersion,
      robots: meta.noindex ? '<meta name="robots" content="noindex">' : "",
    };
    data.content = render(body, data);
    const html = render(layout, data);

    const outFile = meta.path === "/404" ? path.join(DIST, "404.html") : path.join(DIST, meta.path, "index.html");
    await mkdir(path.dirname(outFile), { recursive: true });
    await writeFile(outFile, html);
    if (!meta.noindex) urls.push(meta.path);
    console.log(`  • ${meta.path}`);
  }

  const today = new Date().toISOString().slice(0, 10);
  await writeFile(
    path.join(DIST, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
      .map((u) => `  <url><loc>${SITE_URL}${u}</loc><lastmod>${today}</lastmod></url>`)
      .join("\n")}\n</urlset>\n`
  );
  await writeFile(path.join(DIST, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

  if (process.env.SKIP_ASSETS) {
    console.log("Skipping remote assets (SKIP_ASSETS set).");
    return;
  }
  console.log("Fetching photos and documents…");
  const failures = await fetchAssets();
  if (failures.length) {
    // Fail the build rather than publish a site with missing photos — the previous deploy stays live.
    console.error(`\nCould not fetch: ${failures.join(", ")}\nCommit these files into public/ to remove the dependency on remote sources.`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
