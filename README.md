# Zee Steel — Website

A premium React + Vite + Tailwind website for Zee Steel (custom steel
fabrication & architectural steel solutions, Ghaziabad).

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── components/     Reusable UI pieces (Navbar, Footer, cards, forms, etc.)
├── data/           All editable content lives here — siteData.js, solutions.js, projects.js
├── layouts/        MainLayout wraps every page with the navbar/footer/contact modal
├── pages/          One file per route (Home, About, Solutions, Projects, Contact, 404)
```

## Editing content

You should almost never need to touch component/page code to update text,
products, or projects — it's all driven from `src/data/`:

- **Company details, phone/email/address** → `src/data/siteData.js`
- **The six solution categories & their product lists** → `src/data/solutions.js`
- **Projects shown on the Projects page and homepage** → `src/data/projects.js`
  - Real, confirmed projects should have `verified: true`.
  - Example/placeholder categories are `verified: false` and show an
    "Example" badge — don't flip this to `true` unless the project is real.

## Replacing placeholder images

Every image on the site is currently a styled placeholder (a dark gradient
panel with a label) rendered by `src/components/PlaceholderImage.jsx` —
built this way because real Zee Steel project photography wasn't available
yet, and it keeps the design premium without using stock photos that
aren't actually of your work.

Each placeholder has a descriptive `name` (e.g. `luxury-gate`,
`architectural-railing`, `storage-tank`, `mall-installation`) that's
already used consistently in `solutions.js` and `projects.js`. To swap in
a real photo:

1. Add the photo to `src/assets/images/`, named to match (e.g.
   `luxury-gate.jpg`).
2. In `PlaceholderImage.jsx`, replace the placeholder `<div>` with an
   `<img src={...} />` — or simplest, import the photo directly in the
   page/data file and swap `<PlaceholderImage name="luxury-gate" .../>`
   for a plain `<img>` where you want it.

Since every image slot uses this one component, you can also upgrade all
of them at once by adding a lookup map inside `PlaceholderImage.jsx` from
`name` → imported image.

## The enquiry form

`src/components/QuoteForm.jsx` does full client-side validation and shows
a success state, but does not send data anywhere yet — there's a `// TODO`
comment marking exactly where to plug in a backend endpoint or a service
like Formspree, EmailJS, or your own API route.

## Notes

- No payment/checkout functionality is included by design — this is a
  lead-generation site only.
- The Google Map on the Contact page uses the Ghaziabad address provided;
  no more precise location has been invented.
- Only the client names and project categories explicitly provided were
  used (Shipra Mall, Now North India Mall, Merry Cinema Mall, More Mall) —
  no testimonials, certifications, or stats have been fabricated.
