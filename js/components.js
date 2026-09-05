/* =========================================================
   Umer Kitab Ghar — Reusable UI Components
   Header, Footer, BookCard, Stars, Toasts, Icons
   ========================================================= */

const Icons = {
  book:    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>',
  search:  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  cart:    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>',
  user:    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  menu:    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
  close:   '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  star:    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  heart:   '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/></svg>',
  heartFilled: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/></svg>',
  truck:   '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M14 9h4l4 4v4a1 1 0 0 1-1 1h-1"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>',
  shield:  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>',
  refresh: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>',
  library: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/></svg>',
  mail:    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  phone:   '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  map:     '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  send:    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>',
  trash:   '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',
  plus:    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
  minus:   '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>',
  chevron: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
  arrow:   '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  arrowLeft: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>',
  eye:     '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.06 12.35a1 1 0 0 1 0-.7 10.31 10.31 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.31 10.31 0 0 1-19.88 0"/><circle cx="12" cy="12" r="3"/></svg>',
  share:   '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98"/><path d="M15.41 6.51 8.59 10.49"/></svg>',
  bell:    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>',
  gift:    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>',
  check:   '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  facebook: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.51h-2l-.396 3.98h2.396v8.01Z"/></svg>',
  twitter: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>',
  youtube: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  whatsapp: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.008c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>',
  filter:  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
  flame:   '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  spark:   '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z"/></svg>',
  shopping: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  grid:    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>',
  trending: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
};

// ----- Stars rating component -----
function renderStars(rating) {
  const rounded = Math.round(rating);
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += `<span class="star ${i <= rounded ? 'filled' : ''}">${Icons.star}</span>`;
  }
  return html;
}

// ----- Book Card component -----
function renderBookCard(book) {
  const discount = book.originalPrice
    ? Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)
    : 0;
  const isWishlisted = Store.isWishlisted(book.id);

  const badges = [];
  if (discount > 0) badges.push(`<span class="badge badge-discount">-${discount}%</span>`);
  if (book.isBestSeller) badges.push(`<span class="badge badge-bestseller">Best Seller</span>`);
  if (book.isNewArrival) badges.push(`<span class="badge badge-new">New</span>`);

  return `
    <article class="card book-shadow-hover group cursor-pointer fade-in-up" onclick="Router.go('/book/${book.id}')">
      <div class="relative aspect-[2/3] overflow-hidden bg-brand-100">
        <img src="${book.cover}" alt="${book.title}" loading="lazy"
             class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div class="absolute top-2.5 left-2.5 flex flex-col gap-1.5">
          ${badges.join('')}
        </div>
        <button onclick="event.stopPropagation(); Store.toggleWishlist('${book.id}')"
                class="absolute top-2.5 right-2.5 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                aria-label="Add to wishlist">
          <span class="${isWishlisted ? 'text-accent-500' : 'text-brand-700'}" style="${isWishlisted ? 'fill: currentColor;' : ''}">
            ${isWishlisted ? Icons.heartFilled : Icons.heart}
          </span>
        </button>
      </div>
      <div class="p-4 flex flex-col flex-1">
        <div class="flex items-center gap-1 mb-2">
          ${renderStars(book.rating)}
          <span class="text-xs font-medium ml-1">${book.rating}</span>
          <span class="text-xs text-brand-400">(${book.reviewCount.toLocaleString()})</span>
        </div>
        <h3 class="font-serif font-semibold text-base text-brand-900 line-clamp-2 mb-1 group-hover:text-brand-600 transition-colors"
            title="${book.title}">${book.title}</h3>
        <p class="text-sm text-brand-500 mb-3 line-clamp-1">${book.author}</p>
        <div class="flex items-center justify-between mt-auto pt-3 border-t border-brand-100">
          <div class="flex items-baseline gap-2">
            <span class="font-serif font-bold text-lg text-brand-600">$${book.price.toFixed(2)}</span>
            ${book.originalPrice ? `<span class="text-xs text-brand-400 line-through">$${book.originalPrice.toFixed(2)}</span>` : ''}
          </div>
          <button onclick="event.stopPropagation(); Store.addToCart({bookId:'${book.id}', title:${JSON.stringify(book.title)}, author:${JSON.stringify(book.author)}, price:${book.price}, cover:${JSON.stringify(book.cover)}});"
                  class="btn-primary text-sm py-2 px-3">
            ${Icons.cart}
            <span class="hidden sm:inline">Add</span>
          </button>
        </div>
      </div>
    </article>
  `;
}

// ----- Header -----
function renderHeader() {
  const cartCount = Store.cartCount();
  const wishlistCount = Store.wishlist.length;

  return `
    <header class="sticky top-0 z-50 w-full" id="site-header">
      <div class="bg-brand-700 text-white py-2">
        <div class="container-mw flex items-center justify-between gap-3">
          <div class="flex items-center gap-4 sm:gap-6">
            <div class="flex items-center gap-2" title="Email us">
              <span class="text-amber-300 shrink-0">${Icons.mail}</span>
              <a href="mailto:newbookstore@umer.shop" class="font-medium tracking-wide hover:text-amber-200 transition-colors text-sm">
                newbookstore@umer.shop
              </a>
            </div>
            <div class="hidden sm:flex items-center gap-2" title="Call us">
              <span class="text-emerald-300 shrink-0">${Icons.phone}</span>
              <a href="tel:+923166870173" class="font-medium tracking-wide hover:text-emerald-200 transition-colors text-sm">
                0316 6870173
              </a>
            </div>
            <div class="hidden sm:flex items-center gap-2" title="Chat on WhatsApp">
              <span class="text-green-400 shrink-0">${Icons.whatsapp}</span>
              <a href="https://wa.me/923166870173" target="_blank" rel="noopener noreferrer" class="font-medium tracking-wide hover:text-green-200 transition-colors text-sm">
                0316 6870173
              </a>
            </div>
          </div>
          <div class="flex items-center gap-2 text-white/90">
            <span class="hidden lg:inline text-amber-300">🚚</span>
            <span class="text-xs sm:text-sm font-medium">
              <span class="hidden sm:inline">Free shipping on orders over $50</span>
              <span class="sm:hidden">🚚 Free over $50</span>
            </span>
          </div>
        </div>
      </div>
      <div class="container-mw">
        <div class="flex h-16 sm:h-20 items-center justify-between gap-4">
          <button onclick="Router.go('/')" class="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div class="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-brand-600 to-accent-600 flex items-center justify-center shadow-md text-white">
              ${Icons.book}
            </div>
            <div class="flex flex-col leading-none">
              <span class="font-serif font-bold text-lg sm:text-xl text-brand-900">Umer Kitab Ghar</span>
              <span class="text-[10px] sm:text-xs text-brand-400 mt-0.5 hidden sm:block">umerkitabghar.site</span>
            </div>
          </button>

          <nav class="hidden lg:flex items-center gap-1">
            <button class="nav-link ${Router.isActive('/') ? 'active' : ''}" onclick="Router.go('/')">Home</button>
            <button class="nav-link ${Router.isActive('shop') ? 'active' : ''}" onclick="Router.go('/shop')">Shop</button>
            <div class="relative group" id="categories-dropdown">
              <button class="nav-link ${Router.isActive('categories') ? 'active' : ''} flex items-center gap-1" onclick="Router.go('/categories')">
                Categories
                <span class="transition-transform group-hover:rotate-180">${Icons.chevron}</span>
              </button>
              <div class="absolute top-full left-0 mt-1 w-[640px] bg-white border border-brand-100 shadow-xl rounded-xl p-3 grid grid-cols-2 gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all" style="z-index: 60;">
                ${CATEGORIES.map(cat => `
                  <button onclick="Router.go('/shop?category=${cat.id}')"
                          class="flex items-start gap-3 p-3 rounded-lg hover:bg-brand-50 text-left transition-colors">
                    <div class="w-10 h-10 rounded-md bg-gradient-to-br ${cat.color} flex items-center justify-center shrink-0 shadow-sm text-lg">${cat.icon}</div>
                    <div class="min-w-0">
                      <div class="font-medium text-sm text-brand-900">${cat.name}</div>
                      <div class="text-xs text-brand-400 line-clamp-1">${cat.description}</div>
                    </div>
                  </button>
                `).join('')}
              </div>
            </div>
            <button class="nav-link ${Router.isActive('bestsellers') ? 'active' : ''}" onclick="Router.go('/bestsellers')">Best Sellers</button>
            <button class="nav-link ${Router.isActive('about') ? 'active' : ''}" onclick="Router.go('/about')">About Us</button>
            <button class="nav-link ${Router.isActive('contact') ? 'active' : ''}" onclick="Router.go('/contact')">Contact Us</button>
          </nav>

          <div class="flex items-center gap-1 sm:gap-2">
            <button onclick="toggleSearch()" class="p-2 sm:p-2.5 rounded-md hover:bg-brand-100 transition-colors text-brand-700" aria-label="Search">
              ${Icons.search}
            </button>
            <button onclick="Router.go('/shop')" class="relative p-2 sm:p-2.5 rounded-md hover:bg-brand-100 transition-colors text-brand-700 hidden sm:block" aria-label="Wishlist">
              ${Icons.heart}
              ${wishlistCount > 0 ? `<span class="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">${wishlistCount}</span>` : ''}
            </button>
            <button onclick="Router.go('/cart')" class="relative p-2 sm:p-2.5 rounded-md hover:bg-brand-100 transition-colors text-brand-700" aria-label="Cart">
              ${Icons.cart}
              ${cartCount > 0 ? `<span class="absolute -top-0.5 -right-0.5 w-5 h-5 bg-accent-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">${cartCount}</span>` : ''}
            </button>
            <button onclick="Router.go('/account')" class="p-2 sm:p-2.5 rounded-md hover:bg-brand-100 transition-colors text-brand-700 hidden sm:block" aria-label="Account">
              ${Icons.user}
            </button>
            <button onclick="toggleMobileMenu()" class="p-2 sm:p-2.5 rounded-md hover:bg-brand-100 transition-colors text-brand-700 lg:hidden" aria-label="Menu">
              ${Icons.menu}
            </button>
          </div>
        </div>

        <div id="search-bar" class="hidden overflow-hidden border-t border-brand-100 bg-white">
          <div class="container-mw py-4 flex gap-2">
            <input type="text" id="search-input" placeholder="Search by book name, author, or category..." class="input flex-1 h-12 text-base" />
            <button onclick="doSearch()" class="btn-primary h-12 px-6">${Icons.search}<span class="ml-1">Search</span></button>
            <button onclick="toggleSearch()" class="btn-outline h-12 px-4">${Icons.close}</button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-backdrop" class="backdrop" onclick="closeMobileMenu()"></div>
      <div id="mobile-menu" class="mobile-menu">
        <div class="p-5 border-b border-brand-100 flex items-center justify-between">
          <div class="flex items-center gap-2 font-serif text-xl">
            ${Icons.book} Umer Kitab Ghar
          </div>
          <button onclick="closeMobileMenu()" class="p-2 rounded-md hover:bg-brand-100">${Icons.close}</button>
        </div>
        <div class="p-4">
          <nav class="flex flex-col gap-1">
            ${[
              { label: 'Home', path: '/' },
              { label: 'Shop', path: '/shop' },
              { label: 'Categories', path: '/categories' },
              { label: 'Best Sellers', path: '/bestsellers' },
              { label: 'About Us', path: '/about' },
              { label: 'Contact Us', path: '/contact' },
            ].map(item => `
              <button onclick="Router.go('${item.path}'); closeMobileMenu();" class="px-4 py-3 text-left rounded-md transition-colors text-sm font-medium ${Router.isActive(item.path.slice(1) || '/') ? 'bg-brand-600 text-white' : 'text-brand-800 hover:bg-brand-100'}">
                ${item.label}
              </button>
            `).join('')}
          </nav>
          <div class="mt-6 pt-6 border-t border-brand-100">
            <h4 class="text-xs font-semibold uppercase tracking-wider text-brand-400 mb-3">Shop by Category</h4>
            <div class="grid grid-cols-2 gap-2">
              ${CATEGORIES.map(cat => `
                <button onclick="Router.go('/shop?category=${cat.id}'); closeMobileMenu();" class="text-left px-3 py-2 text-sm rounded-md hover:bg-brand-100 text-brand-700">
                  ${cat.name}
                </button>
              `).join('')}
            </div>
          </div>
          <div class="mt-6 pt-6 border-t border-brand-100 flex items-center gap-3">
            <button onclick="Router.go('/account'); closeMobileMenu();" class="btn-outline flex-1 text-sm py-2">${Icons.user} Account</button>
            <button onclick="Router.go('/cart'); closeMobileMenu();" class="btn-outline flex-1 text-sm py-2">${Icons.cart} Cart (${cartCount})</button>
          </div>
        </div>
      </div>
    </header>
  `;
}

function toggleSearch() {
  const bar = document.getElementById('search-bar');
  if (bar.classList.contains('hidden')) {
    bar.classList.remove('hidden');
    document.getElementById('search-input').focus();
  } else {
    bar.classList.add('hidden');
  }
}

function doSearch() {
  const q = document.getElementById('search-input').value.trim();
  if (q) {
    Router.go('/shop?q=' + encodeURIComponent(q));
    toggleSearch();
  }
}

function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.add('open');
  document.getElementById('mobile-backdrop').classList.add('open');
}

function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('mobile-backdrop').classList.remove('open');
}

// ----- Footer -----
function renderFooter() {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: 'Categories', path: '/categories' },
    { label: 'Best Sellers', path: '/bestsellers' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return `
    <footer class="mt-auto bg-brand-900 text-white">
      <div class="border-b border-white/10">
        <div class="container-mw py-12">
          <div class="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 class="font-serif text-2xl sm:text-3xl font-bold mb-2">Stay in the Loop</h3>
              <p class="text-white/70 max-w-md">Subscribe to receive updates about new arrivals, exclusive offers, and book recommendations.</p>
            </div>
            <form onsubmit="event.preventDefault(); this.reset(); Store.addToast('Thank you for subscribing!', 'success');" class="flex gap-2 max-w-md md:ml-auto w-full">
              <input type="email" required placeholder="Enter your email address" class="input bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 flex-1" />
              <button type="submit" class="btn-primary h-12 px-6">${Icons.send} Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div class="container-mw py-14">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div class="col-span-2 lg:col-span-2">
            <button onclick="Router.go('/')" class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white">${Icons.book}</div>
              <span class="font-serif font-bold text-xl">Umer Kitab Ghar</span>
            </button>
            <p class="text-white/70 text-sm leading-relaxed max-w-sm mb-6">Your trusted online destination for thousands of amazing books. Discover stories, knowledge, and inspiration from every corner of the literary world.</p>
            <div class="space-y-2 text-sm text-white/80">
              <div class="flex items-start gap-3"><span class="text-brand-300 shrink-0 mt-0.5">${Icons.map}</span> <span>Shop no 10, Sp Chowk, opp. Khawar Centre Mall of Cantt,<br/>Adali Colony, Multan 60050, Pakistan</span></div>
              <div class="flex items-center gap-3"><span class="text-brand-300 shrink-0">${Icons.phone}</span> <a href="tel:+923166870173" class="hover:text-brand-300 transition-colors">0316 6870173</a></div>
              <div class="flex items-center gap-3"><span class="text-green-400 shrink-0">${Icons.whatsapp}</span> <a href="https://wa.me/923166870173" target="_blank" rel="noopener noreferrer" class="hover:text-green-200 transition-colors">0316 6870173 (WhatsApp)</a></div>
              <div class="flex items-center gap-3"><span class="text-brand-300 shrink-0">${Icons.mail}</span> <a href="mailto:newbookstore@umer.shop" class="hover:text-brand-300 transition-colors">newbookstore@umer.shop</a></div>
            </div>
          </div>
          <div>
            <h4 class="font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul class="space-y-2.5">
              ${quickLinks.map(l => `<li><button onclick="Router.go('${l.path}')" class="text-sm text-white/70 hover:text-brand-300 text-left">${l.label}</button></li>`).join('')}
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-sm uppercase tracking-wider mb-4">Categories</h4>
            <ul class="space-y-2.5">
              ${CATEGORIES.slice(0, 6).map(c => `<li><button onclick="Router.go('/shop?category=${c.id}')" class="text-sm text-white/70 hover:text-brand-300 text-left">${c.name}</button></li>`).join('')}
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-sm uppercase tracking-wider mb-4">Customer Service</h4>
            <ul class="space-y-2.5">
              <li><a href="#" class="text-sm text-white/70 hover:text-brand-300">Privacy Policy</a></li>
              <li><a href="#" class="text-sm text-white/70 hover:text-brand-300">Terms &amp; Conditions</a></li>
              <li><a href="#" class="text-sm text-white/70 hover:text-brand-300">Shipping Policy</a></li>
              <li><a href="#" class="text-sm text-white/70 hover:text-brand-300">Returns &amp; Refunds</a></li>
              <li><a href="#" class="text-sm text-white/70 hover:text-brand-300">FAQ</a></li>
              <li><a href="#" class="text-sm text-white/70 hover:text-brand-300">Track Order</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="border-t border-white/10">
        <div class="container-mw py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-sm text-white/60 text-center md:text-left">Copyright © 2026 <span class="text-white font-medium">Umer Kitab Ghar</span>. All rights reserved.</p>
          <div class="flex items-center gap-3">
            <a href="#" aria-label="Facebook" class="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-500 flex items-center justify-center transition-colors">${Icons.facebook}</a>
            <a href="#" aria-label="Twitter" class="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-500 flex items-center justify-center transition-colors">${Icons.twitter}</a>
            <a href="#" aria-label="Instagram" class="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-500 flex items-center justify-center transition-colors">${Icons.instagram}</a>
            <a href="#" aria-label="Youtube" class="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-500 flex items-center justify-center transition-colors">${Icons.youtube}</a>
            <a href="https://wa.me/923166870173" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="w-9 h-9 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center transition-colors">${Icons.whatsapp}</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// ----- Toasts -----
function renderToasts() {
  return Store.toasts.map(t => {
    const iconColor = t.type === 'success' ? 'text-emerald-600' : t.type === 'error' ? 'text-red-600' : 'text-brand-600';
    const iconSvg = t.type === 'success' ? Icons.check : Icons.bell;
    return `
      <div class="toast">
        <span class="${iconColor} shrink-0 mt-0.5">${iconSvg}</span>
        <p class="text-sm text-brand-900 flex-1">${t.message}</p>
        <button onclick="Store.removeToast('${t.id}')" class="text-brand-400 hover:text-brand-700" aria-label="Dismiss">${Icons.close}</button>
      </div>
    `;
  }).join('');
}

window.Icons = Icons;
window.renderStars = renderStars;
window.renderBookCard = renderBookCard;
window.renderHeader = renderHeader;
window.renderFooter = renderFooter;
window.renderToasts = renderToasts;
window.toggleSearch = toggleSearch;
window.doSearch = doSearch;
window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;
