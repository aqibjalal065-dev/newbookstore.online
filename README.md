# 📚 Umer Kitab Ghar — Online Bookstore Website

A modern, professional, premium, and fully responsive online bookstore built with **pure HTML, CSS, and vanilla JavaScript** — no build step required.

🌐 **Domain:** [umerkitabghar.site](https://umerkitabghar.site)
📍 **Address:** Shop no 10, Sp Chowk, opp. Khawar Centre Mall of Cantt, Adali Colony, Multan 60050, Pakistan
📞 **Phone:** 0316 6870173
📧 **Email:** newbookstore@umer.shop
🟢 **WhatsApp:** 0316 6870173

---

## ✨ Features

### Pages (all client-side routed via hash)
- 🏠 **Home** — Hero, search bar, categories grid, featured books, best sellers, new arrivals, why choose us, newsletter
- 🛒 **Shop** — Filters (category, price, author, popularity), sorting, active filter chips, mobile filter modal
- 📖 **Book Detail** — Large cover, rating, price with discount, quantity selector, Add to Cart, Buy Now, tabbed Description / Details / Reviews, related books
- 🛒 **Cart** — Quantity selectors, promo codes (`BOOK10` = 10% off, `WELCOME20` = 20% off), free shipping threshold, full order summary
- 💳 **Checkout** — Customer info, shipping methods, payment method (Card / PayPal / Apple Pay)
- 📚 **Categories** — All 10 categories with sample book covers
- 🔥 **Best Sellers** — Top 3 podium + grid of bestsellers
- ℹ️ **About Us** — Story, stats, values
- ✉️ **Contact Us** — Contact form, business hours, FAQ accordion
- 👤 **Account** — Sign in / Sign up tabs

### Highlights
- 🎨 **Premium book-inspired palette** — deep teal + warm gold (modern, fresh look)
- ✒️ **Typography** — Playfair Display serif headings + Inter body (Google Fonts)
- 📱 **Fully responsive** — Mobile menu, mobile filter modal, touch-friendly targets
- 🔍 **SEO-optimized** — Rich metadata, Open Graph, Twitter cards, JSON-LD `BookStore` schema, semantic HTML
- 💾 **Persistent cart + wishlist** — localStorage
- 🟢 **WhatsApp integration** — Click-to-chat + WhatsApp contact card on Contact page
- 📚 **30 real books** across all 10 categories with covers, ratings, ISBNs, descriptions

---

## 🚀 Quick Start

### Run locally
Open `index.html` in your browser. Or serve with any static file server:

```bash
# Python
python3 -m http.server 8000

# Node (npx)
npx serve
```

### Deploy on Vercel
This site is a **static site** — Vercel auto-detects it instantly.

1. Push this project to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repo
4. Click **Deploy** — done in 60 seconds ✅

The included `vercel.json` configures SPA rewrites so any path serves `index.html` (no 404 errors).

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| HTML | Semantic HTML5 |
| CSS | Tailwind CSS (CDN) + custom CSS variables |
| JavaScript | Vanilla ES6 (no framework, no bundler) |
| Fonts | Inter + Playfair Display (Google Fonts) |
| Routing | Hash-based (`/#/shop`, `/#/book/b001`, etc.) |
| State | localStorage + simple pub/sub |

---

## 📁 Project Structure

```
umer-kitab-ghar/
├── index.html              # Main entry point
├── vercel.json             # Vercel SPA routing config
├── README.md
├── css/
│   └── style.css          # Custom premium theme (deep teal + gold)
└── js/
    ├── data.js            # All 30 books + 10 categories
    ├── store.js            # Cart, wishlist, toasts (localStorage)
    ├── router.js           # Hash-based router
    ├── components.js       # Header, footer, book card, icons, toasts
    ├── pages.js            # All page renderers
    └── app.js              # Entry point — wires everything up
```

---

## 🎨 Customization

### Change book data
Edit `js/data.js` — the `BOOKS` array contains all titles, authors, prices, covers, ratings, and descriptions.

### Change theme colors
Edit CSS variables at the top of `css/style.css` and the `tailwind.config` block inside `index.html`.

### Change contact info
- Header: `renderHeader()` in `js/components.js`
- Footer: `renderFooter()` in `js/components.js`
- Contact page: `contact()` in `js/pages.js`

---

## 📜 License

MIT — free to use for personal and commercial projects.

---

**Built with ❤️ for [umerkitabghar.site](https://umerkitabghar.site)** — Multan, Pakistan
