/* =========================================================
   Umer Kitab Ghar — Main App Entry Point
   Wires up the router with page renderers and renders shell
   ========================================================= */

function renderShell() {
  // Header
  document.getElementById('header').innerHTML = renderHeader();
  // Footer
  document.getElementById('footer').innerHTML = renderFooter();
  // Toasts
  document.getElementById('toasts').innerHTML = renderToasts();

  // Add sticky header scroll behavior
  window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    if (!header) return;
    const inner = header.querySelector('.container-mw');
    if (window.scrollY > 20) {
      inner.classList.add('header-shadow');
    } else {
      inner.classList.remove('header-shadow');
    }
  });
}

function renderMain(html) {
  const main = document.getElementById('main');
  main.innerHTML = html;

  // Hook into post-render page initializers
  if (typeof window.pageAfterRender === 'function') {
    window.pageAfterRender();
    window.pageAfterRender = null;
  }
}

// Register all routes
Router.register('/', () => renderMain(Pages.home()));
Router.register('/shop', (params, query) => {
  renderMain(Pages.shop(params, query));
  window.pageAfterRender = () => initShopFilters(query);
});
Router.register('/categories', () => renderMain(Pages.categories()));
Router.register('/bestsellers', () => renderMain(Pages.bestsellers()));
Router.register('/about', () => renderMain(Pages.about()));
Router.register('/contact', () => renderMain(Pages.contact()));
Router.register('/book/:id', (params) => renderMain(Pages.book(params)));
Router.register('/cart', () => renderMain(Pages.cart()));
Router.register('/checkout', () => renderMain(Pages.checkout()));
Router.register('/account', () => renderMain(Pages.account()));

// Re-render shell whenever cart/wishlist changes (updates count badges)
Store.subscribe(() => {
  renderShell();
  // Don't re-render the current page on every notify — toasts already update separately
});

// Initial render
document.addEventListener('DOMContentLoaded', () => {
  renderShell();
  Router.init();
});

// Expose globally
window.renderShell = renderShell;
window.renderMain = renderMain;

// =========================================================
// Shop Page Filters Logic
// =========================================================
function initShopFilters(initialQuery) {
  const state = {
    selectedCategories: initialQuery.category ? [initialQuery.category] : [],
    selectedAuthors: [],
    priceRange: [0, 50],
    sortBy: 'popularity',
    searchQuery: initialQuery.q || '',
  };

  // Build filter panel HTML
  function filterPanelHTML() {
    return `
      <div class="space-y-6">
        <div>
          <h4 class="font-semibold text-sm uppercase tracking-wider mb-3 text-brand-900 flex items-center gap-2">${Icons.search} Search</h4>
          <input type="text" id="filter-search" value="${state.searchQuery}" placeholder="Search books..." class="input h-10" oninput="shopState.searchQuery = this.value; applyFilters()" />
        </div>
        <div>
          <h4 class="font-semibold text-sm uppercase tracking-wider mb-3 text-brand-900">Categories</h4>
          <div class="space-y-2.5 max-h-72 overflow-y-auto pr-1">
            ${CATEGORIES.map(cat => `
              <div class="flex items-center gap-2.5">
                <input type="checkbox" id="cat-${cat.id}" ${state.selectedCategories.includes(cat.id) ? 'checked' : ''} onchange="toggleCategoryFilter('${cat.id}')" class="accent-brand-600 w-4 h-4" />
                <label for="cat-${cat.id}" class="text-sm cursor-pointer text-brand-700 hover:text-brand-900 flex-1 flex items-center justify-between">
                  <span>${cat.name}</span>
                  <span class="text-xs text-brand-400">${getBooksByCategory(cat.id).length}</span>
                </label>
              </div>
            `).join('')}
          </div>
        </div>
        <div>
          <h4 class="font-semibold text-sm uppercase tracking-wider mb-3 text-brand-900">Price Range</h4>
          <div class="px-2">
            <input type="range" min="0" max="50" step="1" value="${state.priceRange[1]}" oninput="shopState.priceRange = [shopState.priceRange[0], +this.value]; document.getElementById('price-max').textContent = '$' + this.value + (this.value == 50 ? '+' : ''); applyFilters()" class="w-full accent-brand-600" />
            <div class="flex justify-between text-sm text-brand-400 mt-2">
              <span>$${state.priceRange[0]}</span>
              <span id="price-max">$${state.priceRange[1]}${state.priceRange[1] === 50 ? '+' : ''}</span>
            </div>
          </div>
        </div>
        <div>
          <h4 class="font-semibold text-sm uppercase tracking-wider mb-3 text-brand-900">Authors</h4>
          <div class="space-y-2.5 max-h-72 overflow-y-auto pr-1">
            ${getAllAuthors().map(author => `
              <div class="flex items-center gap-2.5">
                <input type="checkbox" id="author-${author.replace(/[^a-zA-Z]/g, '')}" ${state.selectedAuthors.includes(author) ? 'checked' : ''} onchange="toggleAuthorFilter(${JSON.stringify(author)})" class="accent-brand-600 w-4 h-4" />
                <label for="author-${author.replace(/[^a-zA-Z]/g, '')}" class="text-sm cursor-pointer text-brand-700 hover:text-brand-900">${author}</label>
              </div>
            `).join('')}
          </div>
        </div>
        ${activeFilterCount(state) > 0 ? `<button onclick="clearShopFilters()" class="btn-outline w-full text-sm py-2">${Icons.close} Clear All Filters (${activeFilterCount(state)})</button>` : ''}
      </div>
    `;
  }

  function activeFilterCount(s) {
    return s.selectedCategories.length + s.selectedAuthors.length +
           (s.priceRange[0] > 0 || s.priceRange[1] < 50 ? 1 : 0) +
           (s.searchQuery ? 1 : 0);
  }

  function filterAndSort() {
    let result = [...BOOKS];
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase();
      result = result.filter(b =>
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q) ||
        b.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    if (state.selectedCategories.length > 0) {
      result = result.filter(b => state.selectedCategories.includes(b.category));
    }
    if (state.selectedAuthors.length > 0) {
      result = result.filter(b => state.selectedAuthors.includes(b.author));
    }
    result = result.filter(b => b.price >= state.priceRange[0] && b.price <= state.priceRange[1]);
    switch (state.sortBy) {
      case 'price-asc':  result.sort((a,b) => a.price - b.price); break;
      case 'price-desc': result.sort((a,b) => b.price - a.price); break;
      case 'rating':     result.sort((a,b) => b.rating - a.rating); break;
      case 'newest':     result.sort((a,b) => b.year - a.year); break;
      default:           result.sort((a,b) => b.reviewCount - a.reviewCount); break;
    }
    return result;
  }

  function renderBooks() {
    const books = filterAndSort();
    document.getElementById('book-count').textContent = books.length;
    const mobileCount = document.getElementById('mobile-count');
    if (mobileCount) mobileCount.textContent = books.length;

    const grid = document.getElementById('book-grid');
    if (books.length === 0) {
      grid.innerHTML = `<div class="col-span-full text-center py-20 bg-white border border-dashed border-brand-200 rounded-2xl">
        <p class="text-brand-400 text-lg mb-4">No books match your filters.</p>
        <button onclick="clearShopFilters()" class="btn-primary">Clear filters and try again</button>
      </div>`;
    } else {
      grid.innerHTML = books.map(b => renderBookCard(b)).join('');
    }

    // Active filter chips
    const chips = document.getElementById('active-chips');
    const chipArray = [];
    state.selectedCategories.forEach(c => {
      const cat = getCategoryById(c);
      if (cat) chipArray.push(`<span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-100 text-brand-700 text-xs rounded-full">${cat.name}<button onclick="toggleCategoryFilter('${c}')" aria-label="Remove">${Icons.close}</button></span>`);
    });
    state.selectedAuthors.forEach(a => {
      chipArray.push(`<span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-100 text-brand-700 text-xs rounded-full">${a}<button onclick="toggleAuthorFilter(${JSON.stringify(a)})" aria-label="Remove">${Icons.close}</button></span>`);
    });
    if (state.searchQuery) {
      chipArray.push(`<span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-100 text-brand-700 text-xs rounded-full">"${state.searchQuery}"<button onclick="shopState.searchQuery=''; applyFilters();" aria-label="Remove">${Icons.close}</button></span>`);
    }
    chips.innerHTML = chipArray.join('');
  }

  // Expose helpers globally for inline event handlers
  window.shopState = state;
  window.applyFilters = function() {
    state.sortBy = document.getElementById('sort-select').value;
    renderBooks();
    // Re-render filter panels to update counts and clear button
    document.getElementById('filter-content-desktop').innerHTML = filterPanelHTML();
    const mobile = document.getElementById('filter-content-mobile');
    if (mobile) mobile.innerHTML = filterPanelHTML();
  };
  window.toggleCategoryFilter = function(catId) {
    if (state.selectedCategories.includes(catId)) {
      state.selectedCategories = state.selectedCategories.filter(c => c !== catId);
    } else {
      state.selectedCategories.push(catId);
    }
    applyFilters();
  };
  window.toggleAuthorFilter = function(author) {
    if (state.selectedAuthors.includes(author)) {
      state.selectedAuthors = state.selectedAuthors.filter(a => a !== author);
    } else {
      state.selectedAuthors.push(author);
    }
    applyFilters();
  };
  window.clearShopFilters = function() {
    state.selectedCategories = [];
    state.selectedAuthors = [];
    state.priceRange = [0, 50];
    state.searchQuery = '';
    state.sortBy = 'popularity';
    document.getElementById('sort-select').value = 'popularity';
    applyFilters();
  };
  window.openMobileFilters = function() {
    document.getElementById('mobile-filters').classList.add('open');
    document.getElementById('mobile-filters-backdrop').classList.add('open');
  };
  window.closeMobileFilters = function() {
    document.getElementById('mobile-filters').classList.remove('open');
    document.getElementById('mobile-filters-backdrop').classList.remove('open');
  };

  // Initial render
  document.getElementById('filter-content-desktop').innerHTML = filterPanelHTML();
  document.getElementById('filter-content-mobile').innerHTML = filterPanelHTML();
  // Sync sort select with state
  if (state.sortBy) document.getElementById('sort-select').value = state.sortBy;
  renderBooks();
}

// =========================================================
// Book Detail Page Helpers
// =========================================================
window.changeDetailQty = function(delta) {
  const span = document.getElementById('detail-qty');
  let qty = parseInt(span.textContent, 10) || 1;
  qty = Math.max(1, qty + delta);
  span.textContent = qty;
};
window.addBookToCart = function(bookId) {
  const book = getBookById(bookId);
  if (!book) return;
  const qty = parseInt(document.getElementById('detail-qty').textContent, 10) || 1;
  Store.addToCart({
    bookId: book.id,
    title: book.title,
    author: book.author,
    price: book.price,
    cover: book.cover,
  }, qty);
};
window.buyBookNow = function(bookId) {
  addBookToCart(bookId);
  Router.go('/checkout');
};
window.shareBook = async function(bookId) {
  const book = getBookById(bookId);
  if (!book) return;
  const url = window.location.href;
  try {
    if (navigator.share) {
      await navigator.share({ title: book.title, text: `Check out ${book.title} by ${book.author}`, url });
    } else {
      await navigator.clipboard.writeText(url);
      Store.addToast('Link copied to clipboard!', 'success');
    }
  } catch (e) { /* ignore */ }
};
window.switchTab = function(tabName, btn) {
  // Hide all tabs
  ['description', 'details', 'reviews'].forEach(t => {
    const el = document.getElementById('tab-' + t);
    if (el) el.classList.add('hidden');
  });
  // Show selected tab
  const target = document.getElementById('tab-' + tabName);
  if (target) target.classList.remove('hidden');
  // Update tab button states
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
};

// =========================================================
// Cart Page Helpers
// =========================================================
let appliedPromo = null;
window.applyPromo = function() {
  const input = document.getElementById('promo-input');
  if (!input) return;
  const code = input.value.toUpperCase().trim();
  if (!code) return;
  let discount = 0;
  if (code === 'BOOK10') discount = 0.10;
  else if (code === 'WELCOME20') discount = 0.20;
  if (discount > 0) {
    appliedPromo = { code, discount };
    Store.addToast(`Promo ${code} applied! ${(discount * 100)}% off your order.`, 'success');
    updateCartTotals();
  } else {
    Store.addToast('Invalid promo code. Try BOOK10 or WELCOME20.', 'error');
  }
  input.value = '';
};
window.removePromo = function() {
  appliedPromo = null;
  updateCartTotals();
};
function updateCartTotals() {
  const subtotal = Store.cartTotal();
  const discount = appliedPromo ? subtotal * appliedPromo.discount : 0;
  const shipping = (subtotal - discount) > 50 ? 0 : 5.99;
  const tax = (subtotal - discount) * 0.08;
  const total = subtotal - discount + shipping + tax;
  const totalEl = document.getElementById('cart-total');
  if (totalEl) totalEl.textContent = '$' + total.toFixed(2);
  const promoArea = document.getElementById('promo-area');
  if (promoArea) {
    if (appliedPromo) {
      promoArea.innerHTML = `
        <div class="flex items-center justify-between bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2.5">
          <span class="text-sm font-medium text-emerald-700">${appliedPromo.code} (${appliedPromo.discount * 100}% off)</span>
          <button onclick="removePromo()" class="text-emerald-700 hover:text-emerald-900" aria-label="Remove promo">${Icons.close}</button>
        </div>
        <div class="flex justify-between text-sm text-emerald-700 mt-3"><span>Discount (${appliedPromo.code})</span><span class="font-medium">-$${discount.toFixed(2)}</span></div>
      `;
    } else {
      promoArea.innerHTML = `
        <label class="text-sm font-medium text-brand-900 mb-2 flex items-center gap-1.5">${Icons.gift} Promo Code</label>
        <div class="flex gap-2">
          <input type="text" id="promo-input" placeholder="Try BOOK10" class="input h-10" />
          <button onclick="applyPromo()" class="btn-outline shrink-0">Apply</button>
        </div>
      `;
    }
  }
}

// =========================================================
// Checkout Helpers
// =========================================================
window.togglePaymentFields = function() {
  const selected = document.querySelector('input[name="payment"]:checked');
  if (!selected) return;
  const cardFields = document.getElementById('card-fields');
  if (cardFields) {
    cardFields.style.display = selected.value === 'card' ? 'block' : 'none';
    // Make card inputs required only if card selected
    cardFields.querySelectorAll('input').forEach(inp => {
      inp.required = selected.value === 'card';
    });
  }
};
window.placeOrder = function() {
  Store.addToast('Order placed successfully! Confirmation sent to your email.', 'success');
  Store.clearCart();
  setTimeout(() => Router.go('/'), 1500);
};
