# Online_store

Educational online store built with **HTML**, **SCSS** and **vanilla JavaScript (ES6 modules)**.  
The app renders products from a JSON file, allows users to filter and search items, add them to the cart, and view a simple cart/history flow.

---

## Features

- **Product catalogue**
  - Product data loaded from `src/products.json`
  - Product cards with image, title, price and key attributes

- **Filtering & search**
  - Filter products by category/attributes (based on JSON data)
  - Text search by product name
  - Combined filtering + search on the “All items” page

- **Shopping cart**
  - Add and remove items
  - Change quantity
  - Cart state is stored in `localStorage`, so it persists after reload

- **History page**
  - Simple view for previously added items / orders (educational implementation)

---

## Tech stack

- **HTML5** – separate pages for main, catalogue and history
- **SCSS** – variables, mixins and main stylesheet compiled to CSS
- **JavaScript (ES6 modules)** – rendering, filters, cart and state
- **localStorage** – client-side persistence for cart data  

This is a static frontend project – there is **no backend**.

---

## Project structure

```text
Online_store/
├── html/
│   ├── main-page.html      # entry page (home)
│   ├── all-items.html      # full catalogue
│   └── history.html        # history / orders page
├── images/                 # product and UI images
├── src/
│   ├── main.js             # bootstrap, common initialisation
│   ├── productList.js      # product list rendering logic
│   ├── filter.js           # filters and search logic
│   ├── cart.js             # cart logic + localStorage
│   └── products.json       # source data for products
├── style/
│   ├── css/                # compiled CSS
│   ├── _mixins.scss        # SCSS mixins
│   ├── _variables.scss     # SCSS variables (colors, spacing, etc.)
│   └── main.scss           # main SCSS entry file
└── README.md

How to run the project locally (VS Code + Live Server)

The easiest way to open the store in a browser is to use the Live Server extension in VS Code.

1. Clone or download the repository

Using Git:
git clone https://github.com/Dmytro0702/Online_store.git
cd Online_store
Or download the ZIP from GitHub and extract it, then open the extracted folder.

2. Open the project folder in VS Code

In VS Code, choose File → Open Folder…

Select the Online_store folder.

3. Install the “Live Server” extension (if you do not have it):

Open the Extensions panel in VS Code.

Search for Live Server by Ritwick Dey.

Install the extension and reload VS Code if required.

4. Open the main page of the store

In the Explorer panel, open the html folder.

Right-click on main-page.html.

5. Start Live Server

In the context menu, select “Open with Live Server”.

6. Use the app in the browser

Your default browser will open automatically at a URL similar to:
http://127.0.0.1:5500/html/main-page.html
From the main page you can:

-navigate to the All items page (all-items.html),

-open the History page (history.html),

-test filters, search and cart behaviour.

Whenever you change HTML, JS or SCSS/CSS, Live Server automatically reloads the page in the browser.
