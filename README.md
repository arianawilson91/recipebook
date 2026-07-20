# Ariana's Recipe Box 🍒

A cozy little website for my favorite recipes.

## How to add a recipe

**The easy way:** open Claude Code in this folder and say
"add my chicken alfredo recipe" and paste the recipe — Claude will add it
to the site (and redeploy it if it's live).

**The hands-on way:** open `js/recipes.js` and copy the template comment at
the top of the file. Paste a new entry into the `RECIPES` array and fill it in.
Categories and filter buttons update automatically.

To add a photo, drop the image file into the `images/` folder and set the
recipe's `image` field to `"images/your-photo.jpg"`.

## Running it locally

Just open `index.html` in a browser — no installs, no build step.

## Structure

- `index.html` — home page (card grid + category filters)
- `recipe.html` — single recipe page (with print button)
- `js/recipes.js` — **all the recipes live here**
- `js/app.js` / `js/recipe.js` — page logic
- `css/style.css` — cozy cookbook theme + print styles
- `images/` — recipe photos
