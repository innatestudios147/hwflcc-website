# Hopefield Wind Farm Local Community Company — website

Static website for the Hopefield Wind Farm Local Community Company (HWFLCC), hosted on Netlify.
Design based on the Lovable "green horizon" concept; content migrated from the previous WordPress site.

## Pages

| URL | Source file |
| --- | --- |
| `/` | `src/pages/index.html` |
| `/our-strategy/` | `src/pages/our-strategy.html` |
| `/apply/` | `src/pages/apply.html` |
| `/gallery/` | `src/pages/gallery.html` |
| `/contact-us/` | `src/pages/contact-us.html` (Netlify Forms, form name `contact`) |
| `/contact-us/thank-you/` | `src/pages/thank-you.html` |
| `/privacy-policy/` | `src/pages/privacy-policy.html` |
| 404 | `src/pages/404.html` |

The shared header and footer live in `src/layout.html`. Styles are in `public/assets/css/site.css`, scripts in `public/assets/js/site.js`.

## Editing

1. Edit the page in `src/pages/`. Each file starts with a small JSON block (title, description, path).
2. Push to `main` — Netlify rebuilds and publishes automatically.

Placeholders you can use inside pages:

- `{{icon:name}}` — inline icon (names are listed in `ICONS` in `build.mjs`)
- `{{img:/assets/img/file.jpg|Alt text|sizes=…;cls=…}}` — responsive image served through Netlify Image CDN

## Build

```bash
node build.mjs            # builds to dist/
SKIP_ASSETS=1 node build.mjs   # offline build without fetching photos
```

The logo, favicons, photos and funding application PDF are committed under `public/`. `assets.json` is a fallback only: if one of those files is ever missing, the build downloads it from the old site or the live Netlify site, and fails rather than publish with a missing file.

To replace the funding PDF, overwrite `public/downloads/HWFLCC-Application-for-Funding.pdf` and push.

## Contact form

Submissions appear in Netlify under **Project → Forms → contact**. Set up email notifications there (Forms → Form notifications) so new messages reach the right inbox.
