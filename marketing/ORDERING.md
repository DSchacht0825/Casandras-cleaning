# Casandra's Cleaning — print kit (Office Depot / Staples)

Upload the **PDF** files in `print-ready/`. Text and QR codes are vector (perfectly
sharp at any size), fonts are embedded, photos are 220–330 DPI at print size, and
every file is the exact print size **plus the standard 0.125" bleed** on each side.
If the site rejects a PDF, upload the matching `-300dpi.png` files (front + back).

| File | What to order | Trim size | File size w/ bleed | Sides |
|---|---|---|---|---|
| `flyer.pdf` | Flyers, 8.5 × 11, 80–100 lb gloss text (or 100 lb cover for a sturdier handout) | 8.5 × 11 in | 8.75 × 11.25 in | 2 |
| `door-hanger.pdf` | Door hangers, 4.25 × 11 (standard), 14pt cardstock | 4.25 × 11 in | 4.5 × 11.25 in | 2 |

When uploading:
- If asked, choose **"my file includes bleed"**. Do **not** pick "fit to page" / "scale to fit".
- Door hanger: the top ~2" is background only. The shop die-cuts the hanger hole there.
- Order **one proof first** and scan the QR code with a phone before the full run.
- Door hanger front has write-in checkboxes + a "Left by: ____" line. Use a pen.

QR codes open casandrascleaning.com tagged `utm_source=flyer` / `utm_source=doorhanger`,
so Google Analytics shows which piece brought each visitor.

To edit text: change `templates/*.html`, then run `npm install` once and `node render.js`
(or `node render.js flyer`). Requires Google Chrome and ImageMagick (`magick`).
