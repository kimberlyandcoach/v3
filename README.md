# Kimberly & Coach — Keynote Website

Static site (HTML/CSS/JS, no build step) ready for GitHub Pages.

## Publish on GitHub Pages
1. Create a new GitHub repository (e.g. `kimberlyandcoach-site`).
2. Upload **the contents of this folder** (index.html, assets/, .nojekyll, README.md) to the repo root.
3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
4. Your site appears at `https://<username>.github.io/<repo>/` within a minute or two.

### Custom domain (kimberlyandcoach.com)
Settings → Pages → Custom domain → enter `kimberlyandcoach.com` (GitHub creates a CNAME file), then point your DNS to GitHub Pages per GitHub's docs.

## Before going live
- **Speaking reel:** replace the `.reel` block in `index.html` with your YouTube/Vimeo embed.
- **Testimonials:** add approved quotes in the commented section under "The Collaboration Hack".
- **Booking email:** set `BOOKING_EMAIL` in `assets/js/main.js` (currently coach@kimberlyandcoach.com). The forms open the visitor's email app; swap in Formspree/Netlify Forms or your mailing-list provider for true submissions.
- Confirm workshop/virtual offers and booking inclusions.
