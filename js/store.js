/* =========================================================
   Umer Kitab Ghar — State Store (Cart, Wishlist, Toasts)
   Pure vanilla JS with localStorage persistence
   ========================================================= */

const Store = {
  cart: [],
  wishlist: [],
  toasts: [],
  listeners: [],

  // ---- Persistence ----
  load() {
    try {
      const saved = JSON.parse(localStorage.getItem('newbookstore-state') || '{}');
      this.cart = saved.cart || [];
      this.wishlist = saved.wishlist || [];
    } catch (e) {
      this.cart = [];
      this.wishlist = [];
    }
  },

  save() {
    try {
      localStorage.setItem('newbookstore-state', JSON.stringify({
        cart: this.cart,
        wishlist: this.wishlist,
      }));
    } catch (e) { /* ignore */ }
  },

  // ---- Pub/Sub ----
  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  },

  notify() {
    this.listeners.forEach(l => l());
  },

  // ---- Cart ----
  addToCart(item, quantity = 1) {
    const existing = this.cart.find(c => c.bookId === item.bookId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.cart.push({ ...item, quantity });
    }
    this.save();
    this.notify();
    this.addToast(`${item.title} added to cart`, 'success');
  },

  removeFromCart(bookId) {
    this.cart = this.cart.filter(c => c.bookId !== bookId);
    this.save();
    this.notify();
  },

  updateQuantity(bookId, quantity) {
    if (quantity <= 0) {
      this.removeFromCart(bookId);
      return;
    }
    const item = this.cart.find(c => c.bookId === bookId);
    if (item) {
      item.quantity = quantity;
      this.save();
      this.notify();
    }
  },

  clearCart() {
    this.cart = [];
    this.save();
    this.notify();
  },

  cartCount() {
    return this.cart.reduce((sum, c) => sum + c.quantity, 0);
  },

  cartTotal() {
    return this.cart.reduce((sum, c) => sum + c.price * c.quantity, 0);
  },

  // ---- Wishlist ----
  toggleWishlist(bookId) {
    if (this.wishlist.includes(bookId)) {
      this.wishlist = this.wishlist.filter(id => id !== bookId);
    } else {
      this.wishlist.push(bookId);
      this.addToast('Added to wishlist', 'success');
    }
    this.save();
    this.notify();
  },

  isWishlisted(bookId) {
    return this.wishlist.includes(bookId);
  },

  // ---- Toasts ----
  addToast(message, type = 'info') {
    const id = Math.random().toString(36).slice(2);
    this.toasts.push({ id, message, type });
    this.notify();
    setTimeout(() => {
      this.toasts = this.toasts.filter(t => t.id !== id);
      this.notify();
    }, 3000);
  },

  removeToast(id) {
    this.toasts = this.toasts.filter(t => t.id !== id);
    this.notify();
  },
};

// Initialize from localStorage on load
Store.load();

window.Store = Store;
