# Obsidian Mountain website

A simple static site (HTML, CSS, JavaScript). No build tools needed.

## Files
- `index.html` : page layout and text (About, Contact, Square placeholder section)
- `style.css`  : colors and look (change colors at the top in `:root`)
- `script.js`  : your product list and Buy buttons (the main file to edit)

## Put it on GitHub Pages
1. Create a new GitHub repository (public).
2. Upload all three files (`index.html`, `style.css`, `script.js`) to the main branch.
3. In the repo go to **Settings > Pages**.
4. Under **Build and deployment**, set Source to "Deploy from a branch", pick `main` and the `/ (root)` folder, then Save.
5. After a minute or two your site is live at `https://YOUR-USERNAME.github.io/REPO-NAME/`.

## Adding Square when you're ready
1. In your Square Dashboard, create a Payment Link (or checkout link) for a product.
2. Open `script.js` and paste the link into that product's `squareLink`.
3. Commit the change. The "Coming soon" button becomes a working "Buy now" button.

If Square gives you an embed code for a full store, paste it into `index.html` inside
`<div id="square-embed">` (look for the "SQUARE" comments).

## Before you publish, replace these
- `YOUR-EMAIL-HERE` in `index.html`
- The About paragraph in `index.html`
- The price (`"$0"`) in `script.js`
