Deep Tech — Virtual Card

This is a small, mobile-first virtual business card built with HTML/CSS/JS.

Files added:
- `index.html` — main page
- `assets/styles.css` — responsive styles (blue / light-blue / white palette). `Deep tech` brand accent uses yellow.
- `assets/script.js` — wires the contact links and status badge. Edit contact details in this file.

Setup / usage:
1. Put your logo image at `assets/deeptechlogo.png` (PNG recommended). The `index.html` references this filename.
2. Edit `assets/script.js` and replace the placeholder email and facebook URL with your real contact info.
3. Optionally toggle the open/closed badge by changing the `data-open` attribute on the `<body>` tag in `index.html` to `true` or `false`.
   - Or, programmatically: `window.deepTech.setOpen(false)` to mark closed.

Notes:
- Gmail opens via `mailto:`; WhatsApp uses `https://wa.me/?text=` which typically redirects to the app on mobile.
- The page is intentionally compact for QR-code landing pages and is mobile-optimized.

Next steps you might want:
- Replace icons with brand SVGs or colors for each action.
- Add link to a small admin page or API that toggles `data-open` remotely.
- Add micro analytics for QR scans.
