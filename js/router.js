/* =========================================================
   Umer Kitab Ghar — Hash-Based Router
   Routes: #/, #/shop, #/categories, #/bestsellers, #/book/:id,
   #/cart, #/checkout, #/about, #/contact, #/account
   ========================================================= */

const Router = {
  routes: [],
  current: null,

  init() {
    // If user opens a direct URL like /shop or /book/b001 (no hash),
    // convert it to hash-based route so our router can handle it.
    const fullUrl = window.location;
    if (!fullUrl.hash || fullUrl.hash === '#') {
      const path = fullUrl.pathname;
      // Skip if it's just "/" (home page) — no conversion needed
      if (path && path !== '/' && !path.startsWith('/?')) {
        // Preserve query string if present
        const query = fullUrl.search || '';
        // Replace the URL with hash version (no extra history entry)
        const newHash = '#' + path + query;
        history.replaceState(null, '', fullUrl.origin + '/' + newHash);
      }
    }
    window.addEventListener('hashchange', () => this.handle());
    this.handle();
  },

  // Register a route handler: pattern like 'book/:id' (no leading #)
  register(pattern, handler) {
    this.routes.push({ pattern, handler });
  },

  // Get current route info
  parse() {
    let hash = window.location.hash.slice(1) || '/';
    if (hash[0] !== '/') hash = '/' + hash;
    const parts = hash.split('?');
    const path = parts[0];
    const queryStr = parts[1] || '';
    const query = {};
    if (queryStr) {
      queryStr.split('&').forEach(pair => {
        const [k, v] = pair.split('=');
        if (k) query[decodeURIComponent(k)] = decodeURIComponent(v || '');
      });
    }
    return { path, query };
  },

  // Match route and call handler with params + query
  handle() {
    const { path, query } = this.parse();
    let matched = false;
    for (const route of this.routes) {
      const params = this.matchRoute(route.pattern, path);
      if (params !== null) {
        this.current = { path, query, params, pattern: route.pattern };
        route.handler(params, query);
        matched = true;
        break;
      }
    }
    if (!matched) {
      // Default to home
      this.current = { path: '/', query, params: {}, pattern: '/' };
      const home = this.routes.find(r => r.pattern === '/');
      if (home) home.handler({}, query);
    }
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  // Match pattern against path, return params or null
  matchRoute(pattern, path) {
    const pParts = pattern.split('/').filter(Boolean);
    const pathParts = path.split('/').filter(Boolean);
    if (pParts.length !== pathParts.length) return null;
    const params = {};
    for (let i = 0; i < pParts.length; i++) {
      if (pParts[i].startsWith(':')) {
        params[pParts[i].slice(1)] = decodeURIComponent(pathParts[i]);
      } else if (pParts[i] !== pathParts[i]) {
        return null;
      }
    }
    return params;
  },

  // Navigate to a path
  go(path) {
    if (!path.startsWith('/')) path = '/' + path;
    window.location.hash = path;
    // hashchange event will trigger handle()
  },

  // Get current path for nav highlighting
  isActive(pattern) {
    if (!this.current) return false;
    if (pattern === '/') return this.current.path === '/';
    // For non-root patterns, check if current path starts with pattern's first segment
    const seg = pattern.split('/')[1];
    return this.current.path.split('/')[1] === seg;
  },
};

window.Router = Router;
