# More Human website

Static site built from `project/More Human Brand Guidelines v5.dc.html`. No build step: open `index.html`, or deploy the folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).

- `index.html`: home page (brand promise hero, manifesto, pillars, how it works, The More Human Audit, who we're for, results, about, booking)
- `realtors.html`: realtor landing page (realtor line hero, the three segments, what we heard, audit steps, results, booking)
- `styles.css`: v5 tokens (Night, Paper, Stone, Sunset, Lime; Archivo 900 at 125% width for display, Inter 400/600 for everything else, 2px corners)
- `site.js`: booking form handler

## Before launch

Search for `tofill` in the HTML. Every orange dashed box is a gap the guidelines say must be filled with real information. Nothing is made up:

1. Audit duration, deliverables, setup time, price, after-care (home `#audit`)
2. Client quotes and results with real figures (`[X]` placeholders)
3. Founder names, roles and portraits
4. Photography (striped blocks are labelled with the shot to take)
5. Proof strip under each hero
6. Booking form: add `data-endpoint="https://…"` to each `<form data-booking-form>` (Formspree, HubSpot, CRM webhook), or replace the form with a booking link
7. Vector logo masters. The wordmark is currently live type.
