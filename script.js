/* ===========================================================
   Obsidian Mountain - script.js

   What this file does:
     1. Holds your product list (the only part you normally need to edit).
     2. Builds a product card on the page for each product.
     3. Turns on a Buy button for any product that has a Square link.
     4. Fills in the copyright year in the footer.

   No frameworks, no build step. It works as-is on GitHub Pages.
   =========================================================== */


/* -----------------------------------------------------------
   1. YOUR PRODUCTS  (edit this list)

   Each product has:
     name        - what shows on the card
     description - one or two lines about it
     price       - text shown on the card, e.g. "$8"
     image       - optional photo path, e.g. "images/pepper-musk.jpg"
                   (leave "" to show a placeholder box)
     squareLink  - >>> SQUARE GOES HERE <<<
                   When you're ready to sell, create a Payment Link (or checkout
                   link) in your Square Dashboard and paste the URL between the
                   quotes. Leave it as "" and the button stays on "Coming soon".

   To add another soap, copy one whole { ... }, block, paste it below the
   last one, and change the text. Keep the comma between blocks.
   ----------------------------------------------------------- */
const PRODUCTS = [
  {
    name: "Pepper Musk",
    description: "Warm, spiced, and dark. The first bar from Obsidian Mountain.",
    price: "$0",            // <-- change to your real price, e.g. "$8"
    image: "",
    squareLink: ""          // <-- paste your Square link here when ready
  }
  // , { name: "Next Soap", description: "...", price: "$8", image: "", squareLink: "" }
];


/* -----------------------------------------------------------
   2. BUILD THE PRODUCT CARDS
   Runs once the page has finished loading.
   ----------------------------------------------------------- */
function renderProducts() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;            // safety: do nothing if the grid isn't on the page

  PRODUCTS.forEach(function (product) {
    // Outer card
    const card = document.createElement("div");
    card.className = "card";

    // Photo area: real image if provided, otherwise a placeholder box
    const photo = document.createElement("div");
    photo.className = "photo";
    if (product.image) {
      const img = document.createElement("img");
      img.src = product.image;
      img.alt = product.name;
      photo.appendChild(img);
    } else {
      photo.textContent = "photo coming soon";
    }
    card.appendChild(photo);

    // Name, price, description
    const title = document.createElement("h3");
    title.textContent = product.name;
    card.appendChild(title);

    const price = document.createElement("p");
    price.className = "price";
    price.textContent = product.price;
    card.appendChild(price);

    const desc = document.createElement("p");
    desc.textContent = product.description;
    card.appendChild(desc);

    // Buy button: live if there is a Square link, disabled if not
    card.appendChild(makeBuyButton(product));

    grid.appendChild(card);
  });
}


/* -----------------------------------------------------------
   3. THE BUY BUTTON
   If the product has a squareLink, the button opens Square's
   checkout page in a new tab. Square handles the payment, so
   no card info ever touches this website.
   ----------------------------------------------------------- */
function makeBuyButton(product) {
  const button = document.createElement("a");
  button.className = "btn";

  if (product.squareLink) {
    // >>> Square link found: turn the button on <<<
    button.textContent = "Buy now";
    button.href = product.squareLink;
    button.target = "_blank";
    button.rel = "noopener";
  } else {
    // No link yet: show a disabled button
    button.textContent = "Coming soon";
    button.className = "btn disabled";
    button.href = "#shop";
    button.addEventListener("click", function (event) {
      event.preventDefault();   // don't jump anywhere
    });
  }
  return button;
}


/* -----------------------------------------------------------
   4. FOOTER YEAR
   Keeps the copyright year current automatically.
   ----------------------------------------------------------- */
function setYear() {
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
}


/* -----------------------------------------------------------
   START: run everything when the page is ready
   ----------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  renderProducts();
  setYear();
});
