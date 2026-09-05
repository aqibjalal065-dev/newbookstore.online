/* =========================================================
   Umer Kitab Ghar — Page Renderers
   One function per route: home, shop, book, cart, checkout,
   categories, bestsellers, about, contact, account
   ========================================================= */

const Pages = {

  // ============ HOME ============
  home(params, query) {
    const featured = getFeaturedBooks().slice(0, 8);
    const bestSellers = getBestSellers().slice(0, 5);
    const newArrivals = getNewArrivals().slice(0, 4);
    const featuredCovers = getFeaturedBooks().slice(0, 3).map(b => b.cover);

    return `
      <section class="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50 border-b border-brand-100">
        <div class="absolute -top-20 -left-20 w-72 h-72 bg-brand-200/40 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-20 right-1/3 w-96 h-96 bg-accent-100/40 rounded-full blur-3xl pointer-events-none"></div>
        <div class="container-mw py-12 sm:py-16 lg:py-24 relative">
          <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div class="text-center lg:text-left fade-in-up">
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs sm:text-sm font-medium mb-5 border border-brand-200">
                ${renderStars(5).replace(/<span class="star filled">/g, '<span class="star filled" style="width:12px;height:12px;">').replace(/<span class="star">/g, '<span class="star" style="width:12px;height:12px;">')}
                <span class="ml-1">Trusted by 50,000+ readers worldwide</span>
              </div>
              <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] text-brand-900 mb-5">
                Discover Your Next <br class="hidden sm:block">
                <span class="gradient-text">Favorite Book</span> 📚
              </h1>
              <p class="text-base sm:text-lg text-brand-700 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Explore thousands of amazing books and find stories, knowledge, and inspiration. From timeless classics to modern bestsellers — your next great read is waiting.
              </p>
              <div class="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
                <button onclick="Router.go('/shop')" class="btn-primary h-12 px-7 text-base">${Icons.shopping} Shop Now</button>
                <button onclick="Router.go('/categories')" class="btn-outline h-12 px-7 text-base">${Icons.grid} Browse Categories</button>
              </div>
              <div class="grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto lg:mx-0">
                <div class="text-center lg:text-left">
                  <div class="font-serif text-2xl sm:text-3xl font-bold text-brand-900">10,000+</div>
                  <div class="text-xs sm:text-sm text-brand-500 mt-1">Books Available</div>
                </div>
                <div class="text-center lg:text-left">
                  <div class="font-serif text-2xl sm:text-3xl font-bold text-brand-900">50K+</div>
                  <div class="text-xs sm:text-sm text-brand-500 mt-1">Happy Readers</div>
                </div>
                <div class="text-center lg:text-left">
                  <div class="font-serif text-2xl sm:text-3xl font-bold text-brand-900">10</div>
                  <div class="text-xs sm:text-sm text-brand-500 mt-1">Categories</div>
                </div>
              </div>
            </div>

            <div class="relative h-[400px] sm:h-[480px] lg:h-[560px] hidden sm:block fade-in-up">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="relative w-72 sm:w-80 lg:w-96 aspect-[2/3]">
                  <div class="absolute inset-0 rounded-2xl overflow-hidden book-shadow float-animation">
                    <img src="${featuredCovers[0]}" alt="Featured book" class="w-full h-full object-cover" />
                  </div>
                  <div class="absolute inset-0 rounded-2xl overflow-hidden book-shadow -rotate-6 -translate-x-12 translate-y-4 lg:-translate-x-16 lg:translate-y-6 opacity-90" style="z-index:-1;">
                    <img src="${featuredCovers[1]}" alt="" class="w-full h-full object-cover" />
                  </div>
                  <div class="absolute inset-0 rounded-2xl overflow-hidden book-shadow rotate-6 translate-x-12 translate-y-4 lg:translate-x-16 lg:translate-y-6 opacity-90" style="z-index:-1;">
                    <img src="${featuredCovers[2]}" alt="" class="w-full h-full object-cover" />
                  </div>
                  <div class="absolute -top-6 -right-6 sm:-right-8 bg-white border border-brand-100 shadow-xl rounded-2xl p-3 sm:p-4 z-10">
                    <div class="flex items-center gap-2">
                      <div class="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">${Icons.truck}</div>
                      <div><div class="text-xs text-brand-500">Free</div><div class="text-sm font-semibold">Shipping</div></div>
                    </div>
                  </div>
                  <div class="absolute -bottom-6 -left-6 sm:-left-10 bg-white border border-brand-100 shadow-xl rounded-2xl p-3 sm:p-4 z-10">
                    <div class="flex items-center gap-2">
                      <div class="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">${Icons.star}</div>
                      <div><div class="text-xs text-brand-500">4.8/5</div><div class="text-sm font-semibold">Reader Rating</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-12 sm:py-16">
        <div class="container-mw">
          <div class="max-w-4xl mx-auto text-center fade-in-up">
            <h2 class="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-900 mb-3">Find Your Perfect Book</h2>
            <p class="text-brand-500 mb-8 max-w-xl mx-auto">Search through thousands of titles by book name, author, or category</p>
            <form onsubmit="event.preventDefault(); const q=this.querySelector('input').value.trim(); if(q) Router.go('/shop?q='+encodeURIComponent(q));" class="relative">
              <div class="relative flex flex-col sm:flex-row gap-2 sm:gap-0 bg-white border border-brand-200 rounded-2xl shadow-lg p-2 max-w-2xl mx-auto">
                <div class="relative flex-1">
                  <span class="absolute left-4 top-1/2 -translate-y-1/2 text-brand-400 pointer-events-none">${Icons.search}</span>
                  <input type="text" placeholder="Search by book name, author, or category..." class="pl-12 h-12 sm:h-14 text-base w-full border-0 bg-transparent outline-none" />
                </div>
                <button type="submit" class="btn-primary h-12 sm:h-14 px-6 sm:px-8 text-base sm:rounded-xl">${Icons.search}<span class="ml-2">Search Books</span></button>
              </div>
            </form>
            <div class="mt-6 flex flex-wrap items-center justify-center gap-2">
              <span class="text-sm text-brand-400 flex items-center gap-1.5">${Icons.trending} Popular:</span>
              ${['Atomic Habits', 'Sapiens', 'Fiction', 'Islamic Books', 'Poetry'].map(t => `
                <button onclick="Router.go('/shop?q=${encodeURIComponent(t)}')" class="px-3 py-1.5 text-sm bg-brand-100 hover:bg-brand-600 hover:text-white rounded-full transition-colors text-brand-700">${t}</button>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 sm:py-24 bg-gradient-to-b from-white to-brand-50">
        <div class="container-mw">
          <div class="text-center mb-12 fade-in-up">
            <span class="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-3">Browse by Category</span>
            <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 mb-4">Explore Our Book Categories</h2>
            <p class="text-brand-500 max-w-2xl mx-auto text-base sm:text-lg">From timeless fiction to cutting-edge technology, discover books across ten curated categories.</p>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
            ${CATEGORIES.map((cat, idx) => `
              <button onclick="Router.go('/shop?category=${cat.id}')"
                      class="group relative overflow-hidden bg-white border border-brand-100 rounded-2xl p-5 text-left hover:shadow-xl hover:-translate-y-1 transition-all fade-in-up"
                      style="animation-delay:${idx * 0.04}s;">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform text-2xl">${cat.icon}</div>
                <h3 class="font-serif font-bold text-base sm:text-lg text-brand-900 mb-1.5 group-hover:text-brand-600 transition-colors">${cat.name}</h3>
                <p class="text-xs sm:text-sm text-brand-400 mb-3 line-clamp-2">${cat.description}</p>
                <div class="flex items-center justify-between">
                  <span class="text-xs font-medium text-brand-400">${cat.bookCount.toLocaleString()} books</span>
                  <span class="text-brand-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">${Icons.arrow}</span>
                </div>
              </button>
            `).join('')}
          </div>
        </div>
      </section>

      <section class="py-16 sm:py-24">
        <div class="container-mw">
          <div class="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 fade-in-up">
            <div>
              <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold uppercase tracking-wider mb-3">${Icons.spark} Editor's Picks</div>
              <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900">Featured Books</h2>
              <p class="text-brand-500 mt-2 max-w-lg">Hand-selected titles our editors love.</p>
            </div>
            <button onclick="Router.go('/shop')" class="btn-ghost text-brand-600">View All ${Icons.arrow}</button>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            ${featured.map(b => renderBookCard(b)).join('')}
          </div>
        </div>
      </section>

      <section class="py-16 sm:py-24 bg-gradient-to-br from-brand-50 via-white to-accent-50 relative overflow-hidden">
        <div class="container-mw relative">
          <div class="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 fade-in-up">
            <div>
              <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-100 text-accent-600 text-xs font-semibold uppercase tracking-wider mb-3">${Icons.flame} Trending Now</div>
              <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900">Best Sellers</h2>
              <p class="text-brand-500 mt-2 max-w-lg">The most-loved books by our community of passionate readers.</p>
            </div>
            <button onclick="Router.go('/bestsellers')" class="btn-ghost text-brand-600">View All ${Icons.arrow}</button>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            ${bestSellers.map(b => renderBookCard(b)).join('')}
          </div>
        </div>
      </section>

      <section class="py-16 sm:py-24">
        <div class="container-mw">
          <div class="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 fade-in-up">
            <div>
              <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-3">${Icons.spark} Just Arrived</div>
              <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900">New Arrivals</h2>
              <p class="text-brand-500 mt-2 max-w-lg">Fresh stories and ideas just landed on our shelves.</p>
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            ${newArrivals.map(b => renderBookCard(b)).join('')}
          </div>
        </div>
      </section>

      <section class="py-16 sm:py-24 bg-gradient-to-b from-brand-50 to-white">
        <div class="container-mw">
          <div class="text-center mb-12 sm:mb-16 fade-in-up">
            <span class="inline-block px-3 py-1 rounded-full bg-accent-100 text-accent-600 text-xs font-semibold uppercase tracking-wider mb-3">Why Choose Us</span>
            <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 mb-4">The Umer Kitab Ghar Difference</h2>
            <p class="text-brand-500 max-w-2xl mx-auto text-base sm:text-lg">We're passionate about books and committed to delivering the very best reading experience.</p>
          </div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            ${[
              { icon: Icons.library, title: 'Wide Collection of Books', desc: 'Over 10,000 titles across 10 categories, from timeless classics to the latest releases. Whatever you\'re looking for, we have it in stock.', color: 'bg-amber-100 text-amber-700' },
              { icon: Icons.truck, title: 'Fast & Reliable Delivery', desc: 'Free express shipping on orders over $50. Most orders arrive within 2-3 business days, tracked end-to-end.', color: 'bg-emerald-100 text-emerald-700' },
              { icon: Icons.shield, title: 'Secure Payments', desc: 'Bank-grade encryption with all major credit cards, PayPal, and Apple Pay. Your transaction is always safe.', color: 'bg-rose-100 text-rose-700' },
              { icon: Icons.star, title: 'Quality Service', desc: '24/7 customer support, easy returns within 30 days, and a satisfaction guarantee on every order.', color: 'bg-purple-100 text-purple-700' },
            ].map((f, idx) => `
              <div class="group text-center bg-white border border-brand-100 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all fade-in-up" style="animation-delay:${idx * 0.08}s;">
                <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl ${f.color} mb-5 group-hover:scale-110 transition-transform">${f.icon}</div>
                <h3 class="font-serif font-bold text-lg sm:text-xl text-brand-900 mb-3">${f.title}</h3>
                <p class="text-sm text-brand-500 leading-relaxed">${f.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <section class="py-16 sm:py-24">
        <div class="container-mw">
          <div class="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-accent-700 rounded-3xl px-6 sm:px-12 lg:px-16 py-12 sm:py-16 lg:py-20 text-white fade-in-up">
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div class="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            <div class="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur text-xs sm:text-sm font-medium mb-5">${Icons.bell} Newsletter</div>
                <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">Get the latest books <br class="hidden sm:block">& special offers</h2>
                <p class="text-white/80 max-w-md text-base">Join 25,000+ subscribers and be the first to hear about new releases, exclusive discounts, and reading recommendations.</p>
              </div>
              <div>
                <form onsubmit="event.preventDefault(); this.reset(); Store.addToast('Thank you for subscribing! Check your inbox for a welcome gift.', 'success');" class="flex flex-col gap-3 max-w-md lg:ml-auto w-full">
                  <div class="relative">
                    <span class="absolute left-4 top-1/2 -translate-y-1/2 text-brand-400 pointer-events-none">${Icons.mail}</span>
                    <input type="email" required placeholder="Enter your email address" class="input h-14 pl-12 pr-4 text-base bg-white text-brand-900 border-0 shadow-lg" />
                  </div>
                  <button type="submit" class="btn-primary h-14 px-8 text-base bg-brand-900 hover:bg-brand-800">${Icons.send} Subscribe Now</button>
                  <p class="text-xs text-white/70 text-center lg:text-left">By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  // ============ SHOP ============
  shop(params, query) {
    const initialCategory = query.category || '';
    const initialQuery = query.q || '';
    // We'll render the shop with a filter UI controlled by inline JS

    return `
      <div class="container-mw py-8 sm:py-12 min-h-screen">
        <nav class="text-sm text-brand-400 mb-3">
          <button onclick="Router.go('/')" class="hover:text-brand-600">Home</button> / <span class="text-brand-900 font-medium">Shop</span>
        </nav>
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 mb-2">All Books</h1>
        <p class="text-brand-500 mb-8">Browse our complete collection of ${BOOKS.length} curated titles</p>

        <div class="flex flex-col lg:flex-row gap-8">
          <aside class="hidden lg:block w-64 shrink-0">
            <div class="sticky top-28 bg-white border border-brand-100 rounded-2xl p-5" id="filters-desktop">
              <div id="filter-content-desktop"></div>
            </div>
          </aside>

          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between gap-3 mb-6">
              <div class="flex items-center gap-3">
                <button onclick="openMobileFilters()" class="btn-outline lg:hidden text-sm py-2">${Icons.filter} Filters</button>
                <p class="text-sm text-brand-400 hidden sm:block">Showing <span id="book-count" class="font-semibold text-brand-900">0</span> books</p>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-sm text-brand-400 hidden sm:block">Sort by:</span>
                <select id="sort-select" class="input w-[160px] sm:w-[200px] py-2" onchange="applyFilters()">
                  <option value="popularity">Popularity</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>
            <div id="active-chips" class="flex flex-wrap gap-2 mb-6"></div>
            <div id="book-grid" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"></div>
          </div>
        </div>

        <div id="mobile-filters-backdrop" class="backdrop" onclick="closeMobileFilters()"></div>
        <div id="mobile-filters" class="mobile-menu">
          <div class="p-5 border-b border-brand-100 flex items-center justify-between">
            <h3 class="font-serif font-bold text-xl">Filters</h3>
            <button onclick="closeMobileFilters()" class="p-2 rounded-md hover:bg-brand-100">${Icons.close}</button>
          </div>
          <div class="p-5" id="filter-content-mobile"></div>
          <div class="p-5 pt-0">
            <button onclick="closeMobileFilters()" class="btn-primary w-full">Show <span id="mobile-count">0</span> Results</button>
          </div>
        </div>
      </div>
    `;
  },

  // ============ BOOK DETAIL ============
  book(params, query) {
    const book = getBookById(params.id);
    if (!book) {
      return `
        <div class="container-mw py-32 text-center">
          <p class="text-xl text-brand-500 mb-4">Book not found.</p>
          <button onclick="Router.go('/shop')" class="btn-primary">Browse all books</button>
        </div>
      `;
    }
    const related = getRelatedBooks(book);
    const category = getCategoryById(book.category);
    const isWishlisted = Store.isWishlisted(book.id);
    const discount = book.originalPrice
      ? Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)
      : 0;

    return `
      <div class="bg-brand-50">
        <div class="bg-brand-100/50 border-b border-brand-100">
          <div class="container-mw py-3">
            <nav class="text-sm text-brand-400 flex items-center gap-1.5 flex-wrap">
              <button onclick="Router.go('/')" class="hover:text-brand-600">Home</button>
              <span>${Icons.chevron}</span>
              <button onclick="Router.go('/shop')" class="hover:text-brand-600">Shop</button>
              ${category ? `<span>${Icons.chevron}</span><button onclick="Router.go('/shop?category=${category.id}')" class="hover:text-brand-600">${category.name}</button>` : ''}
              <span>${Icons.chevron}</span>
              <span class="text-brand-900 font-medium line-clamp-1">${book.title}</span>
            </nav>
          </div>
        </div>

        <div class="container-mw py-8 sm:py-12">
          <div class="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div class="fade-in-up">
              <div class="relative w-full max-w-md aspect-[2/3] rounded-2xl overflow-hidden book-shadow mx-auto lg:mx-0">
                <img src="${book.cover}" alt="${book.title}" class="w-full h-full object-cover" />
                <div class="absolute top-3 left-3 flex flex-col gap-2">
                  ${book.isBestSeller ? `<span class="badge badge-bestseller">Best Seller</span>` : ''}
                  ${book.isNewArrival ? `<span class="badge badge-new">New Arrival</span>` : ''}
                  ${discount > 0 ? `<span class="badge badge-discount">Save $${(book.originalPrice - book.price).toFixed(2)}</span>` : ''}
                </div>
              </div>
            </div>

            <div class="flex flex-col fade-in-up">
              ${category ? `<button onclick="Router.go('/shop?category=${category.id}')" class="self-start mb-3"><span class="badge bg-brand-100 text-brand-700">${category.name}</span></button>` : ''}
              <h1 class="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-900 mb-2 leading-tight">${book.title}</h1>
              <p class="text-brand-500 text-lg mb-4">by <span class="text-brand-600 font-medium">${book.author}</span></p>

              <div class="flex items-center gap-4 mb-6">
                <div class="flex items-center gap-1.5">
                  <div class="flex">${renderStars(book.rating)}</div>
                  <span class="font-semibold text-brand-900 ml-1">${book.rating}</span>
                  <span class="text-sm text-brand-400">(${book.reviewCount.toLocaleString()} reviews)</span>
                </div>
              </div>

              <div class="flex items-baseline gap-3 mb-6 pb-6 border-b border-brand-100">
                <span class="font-serif text-3xl sm:text-4xl font-bold text-brand-600">$${book.price.toFixed(2)}</span>
                ${book.originalPrice ? `<span class="text-lg text-brand-400 line-through">$${book.originalPrice.toFixed(2)}</span>` : ''}
                ${discount > 0 ? `<span class="badge bg-emerald-100 text-emerald-700">${discount}% OFF</span>` : ''}
              </div>

              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-sm">
                <div class="bg-brand-100/40 rounded-lg p-3"><div class="text-xs text-brand-400 mb-0.5">Pages</div><div class="font-semibold">${book.pages}</div></div>
                <div class="bg-brand-100/40 rounded-lg p-3"><div class="text-xs text-brand-400 mb-0.5">Language</div><div class="font-semibold">${book.language}</div></div>
                <div class="bg-brand-100/40 rounded-lg p-3"><div class="text-xs text-brand-400 mb-0.5">Publisher</div><div class="font-semibold line-clamp-1">${book.publisher}</div></div>
                <div class="bg-brand-100/40 rounded-lg p-3"><div class="text-xs text-brand-400 mb-0.5">Year</div><div class="font-semibold">${book.year}</div></div>
              </div>

              <div class="flex flex-col sm:flex-row gap-3 mb-4">
                <div class="flex items-center border border-brand-200 rounded-lg overflow-hidden self-start">
                  <button onclick="changeDetailQty(-1)" class="qty-btn" aria-label="Decrease">${Icons.minus}</button>
                  <span id="detail-qty" class="px-6 py-3 font-semibold min-w-[3rem] text-center">1</span>
                  <button onclick="changeDetailQty(1)" class="qty-btn" aria-label="Increase">${Icons.plus}</button>
                </div>
                <button onclick="addBookToCart('${book.id}')" class="btn-primary flex-1 h-12 text-base">${Icons.cart} Add to Cart</button>
                <button onclick="buyBookNow('${book.id}')" class="btn-outline flex-1 h-12 text-base">Buy Now</button>
              </div>

              <div class="flex gap-3 mb-8">
                <button onclick="Store.toggleWishlist('${book.id}')" class="btn-outline flex-1 sm:flex-none h-11 text-sm">
                  <span class="${isWishlisted ? 'text-accent-500' : ''}" style="${isWishlisted ? 'fill: currentColor;' : ''}">${isWishlisted ? Icons.heartFilled : Icons.heart}</span>
                  <span class="ml-2">${isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}</span>
                </button>
                <button onclick="shareBook('${book.id}')" class="btn-outline flex-1 sm:flex-none h-11 text-sm">${Icons.share} <span class="ml-2">Share</span></button>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <div class="flex items-start gap-3 p-3 bg-brand-100/40 rounded-lg"><span class="text-emerald-600 shrink-0 mt-0.5">${Icons.truck}</span><div class="text-sm"><div class="font-semibold">Free Shipping</div><div class="text-brand-400 text-xs">On orders over $50</div></div></div>
                <div class="flex items-start gap-3 p-3 bg-brand-100/40 rounded-lg"><span class="text-brand-600 shrink-0 mt-0.5">${Icons.shield}</span><div class="text-sm"><div class="font-semibold">Secure Payment</div><div class="text-brand-400 text-xs">256-bit SSL encryption</div></div></div>
                <div class="flex items-start gap-3 p-3 bg-brand-100/40 rounded-lg"><span class="text-amber-600 shrink-0 mt-0.5">${Icons.refresh}</span><div class="text-sm"><div class="font-semibold">Easy Returns</div><div class="text-brand-400 text-xs">30-day return policy</div></div></div>
              </div>

              <div>
                <div class="flex gap-1 sm:gap-2 mb-5 border-b border-brand-100">
                  <button class="tab active" onclick="switchTab('description', this)">Description</button>
                  <button class="tab" onclick="switchTab('details', this)">Details</button>
                  <button class="tab" onclick="switchTab('reviews', this)">Reviews (${book.reviewCount.toLocaleString()})</button>
                </div>
                <div id="tab-description" class="text-brand-800 leading-relaxed">
                  <p class="mb-4">${book.description}</p>
                  <p>This book represents a remarkable contribution to its field, offering readers both depth and accessibility. The author's careful craftsmanship shines through every page.</p>
                  <div class="flex flex-wrap gap-2 pt-4">
                    ${book.tags.map(t => `<span class="px-3 py-1 text-xs bg-brand-100 rounded-full text-brand-700">#${t}</span>`).join('')}
                  </div>
                </div>
                <div id="tab-details" class="hidden text-brand-800">
                  ${[
                    ['ISBN-13', book.isbn],
                    ['Publisher', book.publisher],
                    ['Publication Year', book.year],
                    ['Pages', book.pages],
                    ['Language', book.language],
                    ['Category', category ? category.name : book.category],
                  ].map(row => `<div class="flex justify-between py-2 border-b border-brand-100 last:border-0"><span class="text-brand-400">${row[0]}</span><span class="font-medium">${row[1]}</span></div>`).join('')}
                </div>
                <div id="tab-reviews" class="hidden text-brand-800">
                  <div class="flex items-center gap-6 pb-5 border-b border-brand-100 mb-5">
                    <div class="text-center"><div class="font-serif text-4xl font-bold text-brand-900">${book.rating}</div><div class="flex justify-center my-1">${renderStars(book.rating)}</div><div class="text-xs text-brand-400">${book.reviewCount.toLocaleString()} reviews</div></div>
                    <div class="flex-1 space-y-1.5">
                      ${[5,4,3,2,1].map(s => {
                        const pct = s===5?68:s===4?22:s===3?7:s===2?2:1;
                        return `<div class="flex items-center gap-2 text-xs"><span class="w-3 text-brand-400">${s}</span><span class="text-amber-500">${Icons.star}</span><div class="flex-1 h-2 bg-brand-100 rounded-full overflow-hidden"><div class="h-full bg-amber-500" style="width:${pct}%"></div></div><span class="text-brand-400 w-8 text-right">${pct}%</span></div>`;
                      }).join('')}
                    </div>
                  </div>
                  ${[
                    {name:'Sarah M.', rating:5, date:'2 weeks ago', text:"Absolutely loved this book! The author's writing style is engaging and the story stayed with me long after I finished the last page."},
                    {name:'James K.', rating:5, date:'1 month ago', text:"One of the best books I've read this year. The pacing is perfect and the characters feel incredibly real."},
                    {name:'Aisha R.', rating:4, date:'1 month ago', text:"Great read overall. Took me a few chapters to get into it but once I did I couldn't put it down."},
                  ].map(r => `
                    <div class="pb-5 border-b border-brand-100 last:border-0">
                      <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center gap-3">
                          <div class="w-9 h-9 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-semibold text-sm">${r.name.charAt(0)}</div>
                          <div><div class="font-medium text-sm">${r.name}</div><div class="text-xs text-brand-400">${r.date}</div></div>
                        </div>
                        <div class="flex">${[1,2,3,4,5].map(i => `<span class="star ${i <= r.rating ? 'filled' : ''}" style="width:14px;height:14px;">${Icons.star}</span>`).join('')}</div>
                      </div>
                      <p class="text-sm text-brand-700">${r.text}</p>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>

          ${related.length > 0 ? `
            <div class="mt-16 sm:mt-24">
              <div class="flex items-center gap-3 mb-8">
                <span class="text-brand-600">${Icons.book}</span>
                <h2 class="font-serif text-2xl sm:text-3xl font-bold text-brand-900">You May Also Like</h2>
              </div>
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                ${related.map(b => renderBookCard(b)).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  },

  // ============ CART ============
  cart() {
    if (Store.cart.length === 0) {
      const recs = getBestSellers().slice(0, 4);
      return `
        <div class="container-mw py-12 min-h-screen">
          <div class="max-w-2xl mx-auto text-center py-16 fade-in-up">
            <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-100 mb-6 text-brand-400">${Icons.cart}</div>
            <h1 class="font-serif text-3xl sm:text-4xl font-bold text-brand-900 mb-3">Your cart is empty</h1>
            <p class="text-brand-500 mb-8 max-w-md mx-auto">Looks like you haven't added any books yet. Let's fix that — your next great read is just a click away.</p>
            <div class="flex flex-col sm:flex-row gap-3 justify-center">
              <button onclick="Router.go('/shop')" class="btn-primary">${Icons.shopping} Start Shopping</button>
              <button onclick="Router.go('/bestsellers')" class="btn-outline">View Best Sellers</button>
            </div>
          </div>
          <div class="mt-16">
            <h2 class="font-serif text-2xl sm:text-3xl font-bold text-brand-900 mb-6 text-center">Popular Right Now</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              ${recs.map(b => renderBookCard(b)).join('')}
            </div>
          </div>
        </div>
      `;
    }

    const subtotal = Store.cartTotal();
    const shipping = subtotal > 50 ? 0 : 5.99;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    return `
      <div class="container-mw py-8 sm:py-12 min-h-screen">
        <nav class="text-sm text-brand-400 mb-3"><button onclick="Router.go('/')" class="hover:text-brand-600">Home</button> / <span class="text-brand-900 font-medium">Shopping Cart</span></nav>
        <h1 class="font-serif text-3xl sm:text-4xl font-bold text-brand-900 mb-2">Shopping Cart</h1>
        <p class="text-brand-500 mb-8">${Store.cart.length} ${Store.cart.length === 1 ? 'item' : 'items'} in your cart</p>

        <div class="grid lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2">
            <div class="bg-white border border-brand-100 rounded-2xl overflow-hidden">
              ${Store.cart.map(item => `
                <div class="flex gap-4 p-4 sm:p-5 border-b border-brand-100 last:border-0" id="cart-item-${item.bookId}">
                  <button onclick="Router.go('/book/${item.bookId}')" class="shrink-0 w-16 sm:w-20 h-24 sm:h-32 rounded-md overflow-hidden bg-brand-100">
                    <img src="${item.cover}" alt="${item.title}" class="w-full h-full object-cover hover:scale-105 transition-transform" />
                  </button>
                  <div class="flex-1 min-w-0 flex flex-col">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <h3 class="font-serif font-semibold text-base sm:text-lg line-clamp-2 hover:text-brand-600 cursor-pointer" onclick="Router.go('/book/${item.bookId}')">${item.title}</h3>
                        <p class="text-sm text-brand-400 mt-1">${item.author}</p>
                      </div>
                      <button onclick="Store.removeFromCart('${item.bookId}')" class="p-2 -m-2 text-brand-400 hover:text-red-600 transition-colors" aria-label="Remove">${Icons.trash}</button>
                    </div>
                    <div class="flex items-end justify-between mt-auto pt-3">
                      <div class="flex items-center border border-brand-200 rounded-lg overflow-hidden">
                        <button onclick="Store.updateQuantity('${item.bookId}', ${item.quantity - 1})" class="qty-btn" aria-label="Decrease">${Icons.minus}</button>
                        <span class="px-4 py-2 font-semibold text-sm min-w-[3rem] text-center">${item.quantity}</span>
                        <button onclick="Store.updateQuantity('${item.bookId}', ${item.quantity + 1})" class="qty-btn" aria-label="Increase">${Icons.plus}</button>
                      </div>
                      <div class="text-right">
                        <div class="font-serif font-bold text-lg text-brand-600">$${(item.price * item.quantity).toFixed(2)}</div>
                        ${item.quantity > 1 ? `<div class="text-xs text-brand-400">$${item.price.toFixed(2)} each</div>` : ''}
                      </div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
            <button onclick="Router.go('/shop')" class="btn-ghost mt-4 text-brand-600">${Icons.arrowLeft} Continue Shopping</button>
          </div>

          <div class="lg:col-span-1">
            <div class="sticky top-28 bg-white border border-brand-100 rounded-2xl p-5 sm:p-6">
              <h2 class="font-serif text-xl font-bold text-brand-900 mb-5">Order Summary</h2>
              <div id="promo-area">
                <label class="text-sm font-medium text-brand-900 mb-2 flex items-center gap-1.5">🎁 Promo Code</label>
                <div class="flex gap-2">
                  <input type="text" id="promo-input" placeholder="Try BOOK10" class="input h-10" />
                  <button onclick="applyPromo()" class="btn-outline shrink-0">Apply</button>
                </div>
              </div>
              <div class="space-y-3 my-5">
                <div class="flex justify-between text-sm"><span class="text-brand-400">Subtotal</span><span class="font-medium">$${subtotal.toFixed(2)}</span></div>
                <div id="discount-row" class="hidden flex justify-between text-sm text-emerald-700"><span>Discount</span><span class="font-medium">-$0.00</span></div>
                <div class="flex justify-between text-sm"><span class="text-brand-400">Shipping</span><span class="font-medium">${shipping === 0 ? '<span class="text-emerald-700 font-semibold">FREE</span>' : '$' + shipping.toFixed(2)}</span></div>
                <div class="flex justify-between text-sm"><span class="text-brand-400">Estimated Tax</span><span class="font-medium">$${tax.toFixed(2)}</span></div>
                ${subtotal < 50 && subtotal > 0 ? `<p class="text-xs text-brand-600 bg-brand-100 px-3 py-2 rounded-lg">💡 Add $${(50 - subtotal).toFixed(2)} more for FREE shipping!</p>` : ''}
              </div>
              <div class="border-t border-brand-100 pt-4 mb-5">
                <div class="flex justify-between items-baseline">
                  <span class="font-serif text-lg font-bold">Total</span>
                  <span class="font-serif text-2xl font-bold text-brand-600" id="cart-total">$${total.toFixed(2)}</span>
                </div>
              </div>
              <button onclick="Router.go('/checkout')" class="btn-primary w-full h-12 text-base">Proceed to Checkout ${Icons.arrow}</button>
              <div class="mt-4 space-y-2">
                <div class="flex items-center gap-2 text-xs text-brand-400">${Icons.shield} Secure SSL encrypted checkout</div>
                <div class="flex items-center gap-2 text-xs text-brand-400">${Icons.truck} Free shipping on orders over $50</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // ============ CHECKOUT ============
  checkout() {
    if (Store.cart.length === 0) {
      return `<div class="container-mw py-32 text-center"><p class="text-xl text-brand-500 mb-4">Your cart is empty.</p><button onclick="Router.go('/shop')" class="btn-primary">Browse books</button></div>`;
    }
    const subtotal = Store.cartTotal();
    const shipping = subtotal > 50 ? 0 : 5.99;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    return `
      <div class="container-mw py-8 sm:py-12 min-h-screen">
        <nav class="text-sm text-brand-400 mb-3"><button onclick="Router.go('/')" class="hover:text-brand-600">Home</button> / <button onclick="Router.go('/cart')" class="hover:text-brand-600">Cart</button> / <span class="text-brand-900 font-medium">Checkout</span></nav>
        <h1 class="font-serif text-3xl sm:text-4xl font-bold text-brand-900 mb-8">Checkout</h1>

        <div class="grid lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2">
            <form onsubmit="event.preventDefault(); placeOrder();" class="bg-white border border-brand-100 rounded-2xl p-5 sm:p-8" id="checkout-form">
              <h2 class="font-serif text-xl font-bold text-brand-900 mb-1">Customer Information</h2>
              <p class="text-sm text-brand-400 mb-6">We'll send your order confirmation to this email.</p>

              <div class="space-y-4">
                <div><label class="text-sm font-medium text-brand-900 block mb-1.5">Email Address *</label><input required type="email" placeholder="you@example.com" class="input" /></div>
                <div class="grid sm:grid-cols-2 gap-4">
                  <div><label class="text-sm font-medium text-brand-900 block mb-1.5">First Name *</label><input required placeholder="John" class="input" /></div>
                  <div><label class="text-sm font-medium text-brand-900 block mb-1.5">Last Name *</label><input required placeholder="Doe" class="input" /></div>
                </div>
                <div><label class="text-sm font-medium text-brand-900 block mb-1.5">Street Address *</label><input required placeholder="Shop no 10, Sp Chowk, Adali Colony" class="input" /></div>
                <div><label class="text-sm font-medium text-brand-900 block mb-1.5">Apartment, suite, etc. (optional)</label><input placeholder="Opp. Khawar Centre Mall of Cantt" class="input" /></div>
                <div class="grid sm:grid-cols-3 gap-4">
                  <div><label class="text-sm font-medium text-brand-900 block mb-1.5">City *</label><input required placeholder="Multan" class="input" /></div>
                  <div><label class="text-sm font-medium text-brand-900 block mb-1.5">Province *</label><input required placeholder="Punjab" class="input" /></div>
                  <div><label class="text-sm font-medium text-brand-900 block mb-1.5">ZIP Code *</label><input required placeholder="60050" class="input" /></div>
                </div>
                <div class="grid sm:grid-cols-2 gap-4">
                  <div><label class="text-sm font-medium text-brand-900 block mb-1.5">Country *</label><input required value="Pakistan" class="input" /></div>
                  <div><label class="text-sm font-medium text-brand-900 block mb-1.5">Phone (optional)</label><input type="tel" placeholder="+92 3XX XXXXXXX" class="input" /></div>
                </div>
              </div>

              <h2 class="font-serif text-xl font-bold text-brand-900 mt-8 mb-4">Shipping Method</h2>
              <div class="space-y-3">
                <label class="flex items-center gap-4 p-4 rounded-xl border-2 border-brand-600 bg-brand-50 cursor-pointer">
                  <input type="radio" name="shipping" value="standard" checked class="accent-brand-600" />
                  <span class="w-12 h-12 rounded-lg bg-brand-600 text-white flex items-center justify-center">${Icons.truck}</span>
                  <div class="flex-1"><div class="font-semibold text-brand-900">Standard Shipping</div><div class="text-sm text-brand-400">5-7 business days</div></div>
                  <div class="font-semibold text-brand-600">${shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}</div>
                </label>
                <label class="flex items-center gap-4 p-4 rounded-xl border-2 border-brand-200 hover:border-brand-400 cursor-pointer">
                  <input type="radio" name="shipping" value="express" class="accent-brand-600" />
                  <span class="w-12 h-12 rounded-lg bg-brand-100 text-brand-600 flex items-center justify-center">${Icons.truck}</span>
                  <div class="flex-1"><div class="font-semibold text-brand-900">Express Shipping</div><div class="text-sm text-brand-400">2-3 business days</div></div>
                  <div class="font-semibold text-brand-600">$14.99</div>
                </label>
              </div>

              <h2 class="font-serif text-xl font-bold text-brand-900 mt-8 mb-1">Payment Method</h2>
              <p class="text-sm text-brand-400 mb-6 flex items-center gap-1.5">${Icons.shield} All transactions are secured and encrypted</p>

              <div class="space-y-3 mb-6">
                ${['card','paypal','applepay'].map((m, i) => `
                  <label class="flex items-center gap-4 p-4 rounded-xl border-2 ${i===0?'border-brand-600 bg-brand-50':'border-brand-200 hover:border-brand-400'} cursor-pointer">
                    <input type="radio" name="payment" value="${m}" ${i===0?'checked':''} class="accent-brand-600" onchange="togglePaymentFields()" />
                    <span class="w-12 h-12 rounded-lg ${i===0?'bg-brand-600 text-white':'bg-brand-100 text-brand-600'} flex items-center justify-center">${Icons.cart}</span>
                    <div class="flex-1 font-semibold text-brand-900">${m==='card'?'Credit / Debit Card':m==='paypal'?'PayPal':'Apple Pay'}</div>
                  </label>
                `).join('')}
              </div>

              <div id="card-fields" class="space-y-4">
                <div><label class="text-sm font-medium text-brand-900 block mb-1.5">Card Number *</label><input required placeholder="1234 5678 9012 3456" maxlength="19" class="input font-mono" /></div>
                <div><label class="text-sm font-medium text-brand-900 block mb-1.5">Name on Card *</label><input required placeholder="John Doe" class="input" /></div>
                <div class="grid grid-cols-2 gap-4">
                  <div><label class="text-sm font-medium text-brand-900 block mb-1.5">Expiry Date *</label><input required placeholder="MM / YY" maxlength="7" class="input font-mono" /></div>
                  <div><label class="text-sm font-medium text-brand-900 block mb-1.5">CVC *</label><input required placeholder="123" maxlength="4" class="input font-mono" /></div>
                </div>
              </div>

              <button type="submit" class="btn-primary w-full h-12 text-base mt-8">${Icons.shield} Place Order</button>
            </form>
          </div>

          <div class="lg:col-span-1">
            <div class="sticky top-28 bg-white border border-brand-100 rounded-2xl p-5 sm:p-6">
              <h2 class="font-serif text-xl font-bold text-brand-900 mb-5">Order Summary</h2>
              <div class="space-y-3 mb-5 max-h-72 overflow-y-auto pr-1">
                ${Store.cart.map(item => `
                  <div class="flex gap-3">
                    <div class="relative shrink-0">
                      <div class="w-14 h-20 rounded-md overflow-hidden bg-brand-100"><img src="${item.cover}" alt="${item.title}" class="w-full h-full object-cover" /></div>
                      <span class="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-brand-600 text-white text-xs font-bold flex items-center justify-center">${item.quantity}</span>
                    </div>
                    <div class="flex-1 min-w-0">
                      <h4 class="font-medium text-sm line-clamp-2">${item.title}</h4>
                      <p class="text-xs text-brand-400 mt-0.5">${item.author}</p>
                      <p class="font-semibold text-sm mt-1 text-brand-600">$${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
              <div class="border-t border-brand-100 my-4"></div>
              <div class="space-y-2.5 mb-4">
                <div class="flex justify-between text-sm"><span class="text-brand-400">Subtotal</span><span class="font-medium">$${subtotal.toFixed(2)}</span></div>
                <div class="flex justify-between text-sm"><span class="text-brand-400">Shipping</span><span class="font-medium">${shipping === 0 ? '<span class="text-emerald-700 font-semibold">FREE</span>' : '$' + shipping.toFixed(2)}</span></div>
                <div class="flex justify-between text-sm"><span class="text-brand-400">Tax (8%)</span><span class="font-medium">$${tax.toFixed(2)}</span></div>
              </div>
              <div class="border-t border-brand-100 my-4"></div>
              <div class="flex justify-between items-baseline mb-4">
                <span class="font-serif text-lg font-bold">Total</span>
                <span class="font-serif text-2xl font-bold text-brand-600">$${total.toFixed(2)}</span>
              </div>
              <div class="space-y-2 text-xs text-brand-400">
                <div class="flex items-center gap-2">${Icons.shield} Secure SSL encrypted checkout</div>
                <div class="flex items-center gap-2">${Icons.truck} Standard delivery (5-7 days)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // ============ CATEGORIES ============
  categories() {
    return `
      <div class="container-mw py-8 sm:py-12 min-h-screen">
        <nav class="text-sm text-brand-400 mb-3"><button onclick="Router.go('/')" class="hover:text-brand-600">Home</button> / <span class="text-brand-900 font-medium">Categories</span></nav>
        <div class="text-center mb-12 fade-in-up">
          <span class="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-3">All Categories</span>
          <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 mb-4">Explore Every Book Category</h1>
          <p class="text-brand-500 max-w-2xl mx-auto text-base sm:text-lg">Ten curated categories, thousands of titles — find exactly what you're looking for.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          ${CATEGORIES.map((cat, idx) => {
            const sampleBooks = getBooksByCategory(cat.id).slice(0, 3);
            return `
              <button onclick="Router.go('/shop?category=${cat.id}')"
                      class="group relative overflow-hidden bg-white border border-brand-100 rounded-2xl p-6 text-left hover:shadow-xl hover:-translate-y-1 transition-all fade-in-up"
                      style="animation-delay:${idx * 0.05}s;">
                <div class="flex items-start justify-between mb-4">
                  <div class="w-14 h-14 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-md text-2xl">${cat.icon}</div>
                  <span class="text-xs text-brand-400">${cat.bookCount.toLocaleString()} books</span>
                </div>
                <h3 class="font-serif font-bold text-xl text-brand-900 mb-2 group-hover:text-brand-600 transition-colors">${cat.name}</h3>
                <p class="text-sm text-brand-400 mb-5 line-clamp-2">${cat.description}</p>
                <div class="flex -space-x-2 mb-4">
                  ${sampleBooks.map(b => `<div class="w-10 h-14 rounded overflow-hidden border-2 border-white bg-brand-100 shadow-sm"><img src="${b.cover}" alt="" class="w-full h-full object-cover" /></div>`).join('')}
                  ${cat.bookCount > 3 ? `<div class="w-10 h-14 rounded border-2 border-white bg-brand-100 text-xs text-brand-400 flex items-center justify-center font-medium">+${cat.bookCount - 3}</div>` : ''}
                </div>
                <div class="flex items-center justify-between pt-3 border-t border-brand-100">
                  <span class="text-sm font-medium text-brand-600">Browse books</span>
                  <span class="text-brand-600 group-hover:translate-x-1 transition-transform">${Icons.arrow}</span>
                </div>
              </button>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },

  // ============ BEST SELLERS ============
  bestsellers() {
    const ranked = [...getBestSellers()].sort((a,b) => b.reviewCount - a.reviewCount);
    const top3 = ranked.slice(0, 3);
    const rest = ranked.slice(3);

    return `
      <div class="container-mw py-8 sm:py-12 min-h-screen">
        <nav class="text-sm text-brand-400 mb-3"><button onclick="Router.go('/')" class="hover:text-brand-600">Home</button> / <span class="text-brand-900 font-medium">Best Sellers</span></nav>
        <div class="text-center mb-12 fade-in-up">
          <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-100 text-accent-600 text-xs font-semibold uppercase tracking-wider mb-3">${Icons.flame} Trending This Month</div>
          <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 mb-4">Best Sellers</h1>
          <p class="text-brand-500 max-w-2xl mx-auto text-base sm:text-lg">The most-loved books by our community of passionate readers.</p>
        </div>

        <div class="grid sm:grid-cols-3 gap-5 mb-12">
          ${top3.map((book, idx) => {
            const rank = idx + 1;
            const rankColor = rank === 1 ? 'from-amber-400 to-yellow-600' : rank === 2 ? 'from-slate-300 to-slate-500' : 'from-orange-400 to-orange-700';
            return `
              <div class="relative bg-white border-2 ${rank === 1 ? 'border-amber-400 shadow-lg sm:scale-105' : 'border-brand-100'} rounded-2xl p-5 fade-in-up" style="animation-delay:${idx*0.1}s;">
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r ${rankColor} text-white text-xs font-bold shadow-md">#${rank} Best Seller</div>
                <div class="flex gap-4 mt-3">
                  <div class="shrink-0 w-20 sm:w-24 h-28 sm:h-36 rounded-md overflow-hidden book-shadow">
                    <img src="${book.cover}" alt="${book.title}" class="w-full h-full object-cover" />
                  </div>
                  <div class="flex flex-col flex-1 min-w-0">
                    <h3 class="font-serif font-bold text-base sm:text-lg line-clamp-2 hover:text-brand-600 cursor-pointer" onclick="Router.go('/book/${book.id}')">${book.title}</h3>
                    <p class="text-xs sm:text-sm text-brand-400 mt-1">${book.author}</p>
                    <div class="text-xs mt-1.5 text-brand-400">${book.reviewCount.toLocaleString()} reviews · ${book.rating}★</div>
                    <div class="mt-auto font-serif font-bold text-lg sm:text-xl text-brand-600">$${book.price.toFixed(2)}</div>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <div class="flex items-center gap-4 mb-8">
          <div class="flex-1 h-px bg-brand-100"></div>
          <span class="text-sm font-semibold text-brand-400 uppercase tracking-wider">More Best Sellers</span>
          <div class="flex-1 h-px bg-brand-100"></div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          ${rest.map(b => renderBookCard(b)).join('')}
        </div>
      </div>
    `;
  },

  // ============ ABOUT ============
  about() {
    return `
      <div class="bg-brand-50">
        <section class="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50 py-16 sm:py-24">
          <div class="absolute -top-20 -right-20 w-96 h-96 bg-brand-200/40 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-100/40 rounded-full blur-3xl pointer-events-none"></div>
          <div class="container-mw relative text-center max-w-4xl fade-in-up">
            <span class="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-4">About Umer Kitab Ghar</span>
            <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-900 mb-6 leading-tight">Connecting readers with <br class="hidden sm:block"><span class="gradient-text">stories that matter</span></h1>
            <p class="text-lg text-brand-700 leading-relaxed max-w-2xl mx-auto">Founded with a simple mission — to make great books accessible to everyone, everywhere. From our virtual shelves to your doorstep, we're committed to delivering knowledge, inspiration, and the joy of reading.</p>
          </div>
        </section>

        <section class="container-mw py-12 sm:py-16">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-5">
            ${[
              {icon: Icons.book, value: '10,000+', label: 'Books Available', color: 'text-amber-700 bg-amber-100'},
              {icon: Icons.user, value: '50,000+', label: 'Happy Readers', color: 'text-emerald-700 bg-emerald-100'},
              {icon: Icons.library, value: '32', label: 'Countries Served', color: 'text-rose-700 bg-rose-100'},
              {icon: Icons.star, value: '4.8/5', label: 'Average Rating', color: 'text-purple-700 bg-purple-100'},
            ].map((s, idx) => `
              <div class="bg-white border border-brand-100 rounded-2xl p-6 text-center fade-in-up" style="animation-delay:${idx*0.08}s;">
                <div class="inline-flex items-center justify-center w-14 h-14 rounded-xl ${s.color} mb-4">${s.icon}</div>
                <div class="font-serif text-3xl sm:text-4xl font-bold text-brand-900 mb-1">${s.value}</div>
                <div class="text-sm text-brand-400">${s.label}</div>
              </div>
            `).join('')}
          </div>
        </section>

        <section class="container-mw py-12 sm:py-16">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="fade-in-up">
              <span class="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-3">Our Story</span>
              <h2 class="font-serif text-3xl sm:text-4xl font-bold text-brand-900 mb-5">From a small dream to a global bookstore</h2>
              <div class="space-y-4 text-brand-700 leading-relaxed">
                <p>Umer Kitab Ghar began in 2024 with a simple idea: building a digital home for readers who crave quality books across every genre imaginable. What started as a small curated list of must-read titles has grown into a catalog of over ten thousand books, serving readers in more than thirty countries around the world.</p>
                <p>We're proud to offer a thoughtfully selected collection that spans fiction and non-fiction, modern bestsellers and timeless classics, with special attention to underrepresented voices and niche categories like Islamic literature and poetry that often get overlooked by larger retailers.</p>
                <p>Every book on our shelves is there because someone on our team read it, loved it, and believed you would too. That personal touch is what makes Umer Kitab Ghar different — and it's why readers keep coming back to us, again and again.</p>
              </div>
            </div>
            <div class="relative aspect-[4/5] rounded-2xl overflow-hidden book-shadow fade-in-up">
              <img src="https://picsum.photos/seed/bookstore-shelves/800/1000" alt="Umer Kitab Ghar shelves" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div class="absolute bottom-6 left-6 right-6 text-white">
                <p class="font-serif text-xl font-semibold mb-1">Where every book finds its reader</p>
                <p class="text-sm text-white/80">— our promise since day one</p>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-brand-100/40 py-16 sm:py-24">
          <div class="container-mw">
            <div class="text-center mb-12">
              <span class="inline-block px-3 py-1 rounded-full bg-accent-100 text-accent-600 text-xs font-semibold uppercase tracking-wider mb-3">Our Values</span>
              <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 mb-4">What we believe in</h2>
              <p class="text-brand-500 max-w-2xl mx-auto">Four principles that guide every book we stock and every package we ship.</p>
            </div>
            <div class="grid sm:grid-cols-2 gap-6">
              ${[
                {title: 'Passion for Reading', desc: "We believe books have the power to transform lives, expand horizons, and connect us across cultures. Every decision we make starts with our love for the written word."},
                {title: 'Curated Quality', desc: "Our team of editors carefully selects each title we stock. We don't chase trends — we choose books that matter, books that last, books you'll want to share."},
                {title: 'Community First', desc: "Readers are at the heart of everything. From our recommendation engine to customer support, we're here to make your reading journey better every day."},
                {title: 'Innovation', desc: "We blend the warmth of a neighborhood bookstore with the convenience of modern technology — fast shipping, smart search, and personalized recommendations."},
              ].map((v, idx) => `
                <div class="bg-white border border-brand-100 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow fade-in-up" style="animation-delay:${idx*0.08}s;">
                  <div class="flex items-start gap-4">
                    <div class="shrink-0 w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center">${Icons.star}</div>
                    <div>
                      <h3 class="font-serif font-bold text-lg mb-2">${v.title}</h3>
                      <p class="text-sm text-brand-500 leading-relaxed">${v.desc}</p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <section class="container-mw py-16 sm:py-24 text-center fade-in-up">
          <div class="max-w-2xl mx-auto">
            <h2 class="font-serif text-3xl sm:text-4xl font-bold text-brand-900 mb-4">Ready to find your next great read?</h2>
            <p class="text-brand-500 mb-8">Join thousands of readers who've already discovered their next favorite book with us.</p>
            <div class="flex flex-col sm:flex-row gap-3 justify-center">
              <button onclick="Router.go('/shop')" class="btn-primary">${Icons.book} Browse Books</button>
              <button onclick="Router.go('/contact')" class="btn-outline">${Icons.mail} Get in Touch</button>
            </div>
          </div>
        </section>
      </div>
    `;
  },

  // ============ CONTACT ============
  contact() {
    return `
      <div class="bg-brand-50">
        <section class="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50 py-16 sm:py-20">
          <div class="absolute -top-20 -right-20 w-96 h-96 bg-brand-200/40 rounded-full blur-3xl pointer-events-none"></div>
          <div class="container-mw relative">
            <nav class="text-sm text-brand-400 mb-3"><button onclick="Router.go('/')" class="hover:text-brand-600">Home</button> / <span class="text-brand-900 font-medium">Contact Us</span></nav>
            <div class="text-center max-w-3xl mx-auto fade-in-up">
              <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-4">${Icons.mail} We're here to help</div>
              <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 mb-4">Get in Touch with Umer Kitab Ghar</h1>
              <p class="text-brand-500 text-base sm:text-lg leading-relaxed">Have a question about an order, a book recommendation, or anything else? Our friendly support team is ready to help you.</p>
            </div>
          </div>
        </section>

        <section class="container-mw py-12 sm:py-16">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-16">
            ${[
              {icon: Icons.mail, label: 'Email Us', value: 'newbookstore@umer.shop', desc: 'We reply within 24 hours', color: 'bg-amber-100 text-amber-700', link: 'mailto:newbookstore@umer.shop'},
              {icon: Icons.phone, label: 'Call Us', value: '0316 6870173', desc: 'Mon – Sat, 9am – 7pm PKT', color: 'bg-emerald-100 text-emerald-700', link: 'tel:+923166870173'},
              {icon: Icons.whatsapp, label: 'WhatsApp', value: '0316 6870173', desc: 'Chat with us instantly', color: 'bg-green-100 text-green-700', link: 'https://wa.me/923166870173'},
              {icon: Icons.map, label: 'Visit Us', value: 'Multan, Pakistan', desc: 'Shop no 10, Sp Chowk, opp. Khawar Centre Mall of Cantt, Adali Colony, Multan 60050', color: 'bg-rose-100 text-rose-700', link: '#'},
            ].map((m, idx) => `
              <a href="${m.link}" class="group bg-white border border-brand-100 rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all fade-in-up" style="animation-delay:${idx*0.08}s;">
                <div class="inline-flex items-center justify-center w-14 h-14 rounded-xl ${m.color} mb-4 group-hover:scale-110 transition-transform">${m.icon}</div>
                <h3 class="font-semibold text-brand-900 mb-1">${m.label}</h3>
                <p class="text-sm font-medium text-brand-600 mb-1">${m.value}</p>
                <p class="text-xs text-brand-400">${m.desc}</p>
              </a>
            `).join('')}
          </div>

          <div class="grid lg:grid-cols-3 gap-8">
            <div class="lg:col-span-2 fade-in-up">
              <div class="bg-white border border-brand-100 rounded-2xl p-6 sm:p-8">
                <h2 class="font-serif text-2xl sm:text-3xl font-bold text-brand-900 mb-2">Send Us a Message</h2>
                <p class="text-sm text-brand-400 mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>
                <form onsubmit="event.preventDefault(); this.reset(); Store.addToast('Thanks for reaching out! We\\'ll reply within 24 hours.', 'success');" class="space-y-4">
                  <div class="grid sm:grid-cols-2 gap-4">
                    <div><label class="text-sm font-medium text-brand-900 block mb-1.5">Full Name *</label><input required placeholder="John Doe" class="input" /></div>
                    <div><label class="text-sm font-medium text-brand-900 block mb-1.5">Email Address *</label><input required type="email" placeholder="you@example.com" class="input" /></div>
                  </div>
                  <div><label class="text-sm font-medium text-brand-900 block mb-1.5">Subject *</label><input required placeholder="How can we help?" class="input" /></div>
                  <div><label class="text-sm font-medium text-brand-900 block mb-1.5">Message *</label><textarea required rows="6" placeholder="Tell us what's on your mind..." class="input resize-none"></textarea></div>
                  <button type="submit" class="btn-primary min-w-[200px]">${Icons.send} Send Message</button>
                </form>
              </div>
            </div>
            <div class="space-y-5 fade-in-up">
              <div class="bg-white border border-brand-100 rounded-2xl p-6">
                <h3 class="font-serif font-bold text-lg mb-4 flex items-center gap-2">${Icons.bell} Business Hours</h3>
                <div class="space-y-2 text-sm">
                  ${[
                    ['Monday – Friday', '9:00 AM – 7:00 PM'],
                    ['Saturday', '10:00 AM – 5:00 PM'],
                    ['Sunday', 'Closed'],
                  ].map(r => `<div class="flex justify-between"><span class="text-brand-400">${r[0]}</span><span class="font-medium text-brand-900">${r[1]}</span></div>`).join('')}
                </div>
                <p class="text-xs text-brand-400 mt-4 pt-4 border-t border-brand-100">All times are in Pakistan Standard Time (PKT)</p>
              </div>
              <div class="bg-white border border-brand-100 rounded-2xl p-6">
                <h3 class="font-serif font-bold text-lg mb-4">Follow Us</h3>
                <p class="text-sm text-brand-400 mb-4">Stay updated with the latest releases and exclusive offers.</p>
                <div class="flex gap-2">
                  ${['facebook','twitter','instagram','youtube'].map(s => `<a href="#" class="w-10 h-10 rounded-full bg-brand-100 hover:bg-brand-600 hover:text-white flex items-center justify-center transition-colors" aria-label="${s}">${Icons[s]}</a>`).join('')}
                  <a href="https://wa.me/923166870173" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-green-100 hover:bg-green-500 hover:text-white text-green-700 flex items-center justify-center transition-colors" aria-label="WhatsApp">${Icons.whatsapp}</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="container-mw pb-16 sm:pb-24">
          <div class="text-center mb-10">
            <h2 class="font-serif text-3xl sm:text-4xl font-bold text-brand-900 mb-4">Frequently Asked Questions</h2>
            <p class="text-brand-500 max-w-2xl mx-auto">Quick answers to common questions from our readers.</p>
          </div>
          <div class="max-w-3xl mx-auto space-y-3">
            ${[
              {q: 'How long does delivery take?', a: 'Standard shipping takes 5-7 business days. Express shipping arrives in 2-3 business days. Free shipping is available on all orders over $50.'},
              {q: 'What is your return policy?', a: "We offer a 30-day return policy on all unused books in their original condition. Refunds are processed within 5-7 business days of receiving your return."},
              {q: 'Do you ship internationally?', a: 'Yes! We ship to over 32 countries worldwide. International shipping rates and delivery times vary by destination.'},
              {q: 'Can I track my order?', a: "Absolutely. Once your order ships, you'll receive a tracking link via email. You can also track your order anytime from your account page."},
            ].map(faq => `
              <details class="group bg-white border border-brand-100 rounded-xl overflow-hidden">
                <summary class="flex items-center justify-between p-5 cursor-pointer list-none">
                  <h3 class="font-semibold text-brand-900">${faq.q}</h3>
                  <span class="text-brand-600 text-xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <div class="px-5 pb-5 text-sm text-brand-500 leading-relaxed">${faq.a}</div>
              </details>
            `).join('')}
          </div>
        </section>
      </div>
    `;
  },

  // ============ ACCOUNT ============
  account() {
    return `
      <div class="container-mw py-12 sm:py-16 min-h-screen">
        <div class="max-w-md mx-auto">
          <div class="text-center mb-8 fade-in-up">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-600 to-accent-600 shadow-lg mb-4 text-white">${Icons.user}</div>
            <h1 class="font-serif text-3xl sm:text-4xl font-bold text-brand-900 mb-2">Welcome Back</h1>
            <p class="text-brand-400">Sign in to access your account, orders, and wishlist.</p>
          </div>

          <div class="bg-white border border-brand-100 rounded-2xl p-6 sm:p-8 fade-in-up">
            <div class="flex gap-1 p-1 bg-brand-100 rounded-lg mb-6">
              <button class="flex-1 py-2.5 text-sm font-medium rounded-md bg-white text-brand-900 shadow-sm">Sign In</button>
              <button class="flex-1 py-2.5 text-sm font-medium rounded-md text-brand-400">Sign Up</button>
            </div>
            <form onsubmit="event.preventDefault(); Router.go('/');" class="space-y-4">
              <div><label class="text-sm font-medium text-brand-900 block mb-1.5">Email Address</label><input required type="email" placeholder="you@example.com" class="input" /></div>
              <div><label class="text-sm font-medium text-brand-900 block mb-1.5">Password</label><input required type="password" placeholder="••••••••" class="input" /></div>
              <div class="flex items-center justify-between text-sm">
                <label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" class="rounded" /> <span class="text-brand-400">Remember me</span></label>
                <a href="#" class="text-brand-600 hover:underline">Forgot password?</a>
              </div>
              <button type="submit" class="btn-primary w-full">Sign In</button>
            </form>
            <div class="mt-6 pt-6 border-t border-brand-100">
              <p class="text-xs text-center text-brand-400 mb-4">Or continue with</p>
              <div class="grid grid-cols-2 gap-3">
                <button class="btn-outline text-sm py-2">Google</button>
                <button class="btn-outline text-sm py-2">Facebook</button>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-3 mt-6">
            <button onclick="Router.go('/cart')" class="bg-white border border-brand-100 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
              <div class="text-brand-600 mx-auto mb-1 w-5 h-5">${Icons.cart}</div>
              <div class="font-semibold text-sm">${Store.cartCount()}</div>
              <div class="text-xs text-brand-400">In Cart</div>
            </button>
            <button onclick="Router.go('/shop')" class="bg-white border border-brand-100 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
              <div class="text-accent-500 mx-auto mb-1 w-5 h-5">${Icons.heart}</div>
              <div class="font-semibold text-sm">${Store.wishlist.length}</div>
              <div class="text-xs text-brand-400">Wishlist</div>
            </button>
            <button onclick="Router.go('/shop')" class="bg-white border border-brand-100 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
              <div class="text-amber-600 mx-auto mb-1 w-5 h-5">${Icons.book}</div>
              <div class="font-semibold text-sm">0</div>
              <div class="text-xs text-brand-400">Orders</div>
            </button>
          </div>
        </div>
      </div>
    `;
  },

};

window.Pages = Pages;
