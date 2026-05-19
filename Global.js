const siteHeader = document.querySelector("header");

// —————————————————————————————— Cart Storage ——————————————————————————————
function getCart() {
  const savedCart = localStorage.getItem("shoppingCart");

  if (savedCart) {
    return JSON.parse(savedCart);
  }

  return [];
}

function saveCart(cart) {
  localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

function addProductToCart(productId, quantity) {
  const cart = getCart();

  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: productId,
      quantity: quantity
    });
  }

  saveCart(cart);
}

function showCartModal(addedProducts) {
  let modalOverlay = document.querySelector(".cart-modal-overlay");

  if (modalOverlay === null) {
    modalOverlay = document.createElement("section");
    modalOverlay.classList.add("cart-modal-overlay");

    modalOverlay.innerHTML = `
      <article class="cart-modal">
        <button type="button" class="cart-modal-close">×</button>

        <h2 class="cart-modal-success">
          Successfully added to your shopping cart.
        </h2>

        <div class="cart-modal-line"></div>

        <h3 class="cart-modal-title" id="cartModalTitle">
          Added Product(s)
        </h3>

        <section class="cart-modal-items" id="cartModalItems"></section>

        <section class="cart-modal-actions">
          <button type="button" class="continue-shopping">
            Continue Shopping
          </button>

          <a href="Shopping Cart.html" class="view-cart">
            View My Cart
          </a>
        </section>
      </article>
    `;

    document.body.appendChild(modalOverlay);

    modalOverlay.addEventListener("click", event => {
      if (event.target === modalOverlay) {
        modalOverlay.classList.remove("active");
      }
    });

    modalOverlay.querySelector(".cart-modal-close")
      .addEventListener("click", () => {
        modalOverlay.classList.remove("active");
      });

    modalOverlay.querySelector(".continue-shopping")
      .addEventListener("click", () => {
        modalOverlay.classList.remove("active");
      });
  }

  const modalItems = document.getElementById("cartModalItems");
  modalItems.innerHTML = "";

  addedProducts.forEach(product => {
    let addedQuantity = product.quantity;

    const item = document.createElement("article");
    item.classList.add("cart-modal-item");

    item.innerHTML = `
      <img src="` + product.images.card + `" alt="` + product.name + `">

      <div>
        <h3>` + product.name + `</h3>

        <p>` + product.size + `</p>

        <p class="cart-modal-each-price">
          Unit Price: $` + product.price.toFixed(2) + `
          <span>inc GST</span>
        </p>
      </div>

      <div class="cart-modal-right">
        <div class="cart-modal-quantity">

          <button type="button" class="cart-modal-minus">-</button>

          <span class="cart-modal-divider left-divider"></span>

          <span class="cart-modal-number">
            ` + addedQuantity + `
          </span>

          <span class="cart-modal-divider"></span>

          <button type="button" class="cart-modal-plus">+</button>

        </div>

        <strong class="cart-modal-price">
          $` + (product.price * addedQuantity).toFixed(2) + `
        </strong>
      </div>
    `;

    const minusBtn = item.querySelector(".cart-modal-minus");
    const plusBtn = item.querySelector(".cart-modal-plus");
    const quantityText = item.querySelector(".cart-modal-number");
    const priceText = item.querySelector(".cart-modal-price");
    const leftDivider =
      item.querySelector(".left-divider");

    function updateModalQuantity(newAddedQuantity) {
      const difference = newAddedQuantity - addedQuantity;

      const cart = getCart();

      const targetItem = cart.find(item => {
        return item.id === product.id;
      });

      if (targetItem == null) {
        return;
      }

      targetItem.quantity += difference;

      addedQuantity = newAddedQuantity;

      saveCart(cart);

      quantityText.textContent = addedQuantity;

      priceText.textContent =
        "$" + (product.price * addedQuantity).toFixed(2);

      if (addedQuantity <= 1) {
        minusBtn.disabled = true;
        leftDivider.classList.add("disabled");
      }
      else {
        minusBtn.disabled = false;
        leftDivider.classList.remove("disabled");
      }
    }

    if (addedQuantity <= 1) {
      minusBtn.disabled = true;
      leftDivider.classList.add("disabled");
    }

    minusBtn.addEventListener("click", () => {
      if (addedQuantity > 1) {
        updateModalQuantity(addedQuantity - 1);
      }
    });

    plusBtn.addEventListener("click", () => {
      updateModalQuantity(addedQuantity + 1);
    });

    modalItems.appendChild(item);
  });

  modalOverlay.classList.add("active");
}

// —————————————————————————————— Search ——————————————————————————————
// Select all required search panel elements from the page
const searchTrigger = document.querySelector(".search-trigger");
const searchPanel = document.querySelector(".search-panel");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const historyList = document.getElementById("historyList");

// Default search history shown when user has no saved searches yet
const defaultSearchHistory = [
  "Shampoo",
  "Conditioner",
  "Hair Mask",
  "Styling Cream",
  "Repair Treatment",
  "Damaged Hair"
];

// Get search history from sessionStorage
function getSearchHistory() {
  const savedHistory =
    sessionStorage.getItem("searchHistory");

  if (savedHistory !== null) {
    return JSON.parse(savedHistory);
  }

  return [...defaultSearchHistory];
}

// Save search history into sessionStorage
function saveSearchHistory(history) {
  sessionStorage.setItem("searchHistory", JSON.stringify(history));
}

// Render search history into two columns
function renderSearchHistory() {
  if (historyList === null) return;

  const history = getSearchHistory().slice(0, 8);
  historyList.innerHTML = "";

  if (history.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.classList.add("empty-history-message");
    emptyMessage.textContent = "Go search something first.";
    historyList.appendChild(emptyMessage);
    return;
  }

  if (window.innerWidth <= 600) {
    history.forEach(keyword => {
      const link = document.createElement("a");
      link.href = "Search Result.html?search=" + encodeURIComponent(keyword);
      link.textContent = keyword;
      historyList.appendChild(link);
    });

    setupMobileHistoryExpand();
    return;
  }

  const leftColumn = document.createElement("div");
  const rightColumn = document.createElement("div");

  leftColumn.classList.add("history-column");
  rightColumn.classList.add("history-column");

  history.forEach((keyword, index) => {
    const link = document.createElement("a");
    link.href = "Search Result.html?search=" + encodeURIComponent(keyword);
    link.textContent = keyword;

    if (index < 4) {
      leftColumn.appendChild(link);
    } else {
      rightColumn.appendChild(link);
    }
  });

  historyList.appendChild(leftColumn);
  historyList.appendChild(rightColumn);
}

// —————————————————————————————— Search Toggle ——————————————————————————————
if (siteHeader && searchTrigger && searchPanel) {
  // Open & close search panel when clicking search icon
  searchTrigger.addEventListener("click", event => {

    // Prevent click from closing panel immediately
    event.stopPropagation();

    // Toggle search panel visibility
    siteHeader.classList.toggle("search-panel-active");
    // Close shop menu if it is open
    siteHeader.classList.remove("shop-menu-active");

    // Refresh search history every time panel opens
    renderSearchHistory();

    // Automatically focus on search input
    if (siteHeader.classList.contains("search-panel-active") && searchInput
    ) {
      searchInput.focus();
    }
  });

  // Prevent closing panel when clicking inside it
  searchPanel.addEventListener("click", event => {
    event.stopPropagation();
  });

  // Close search panel when clicking outside
  document.addEventListener("click", () => {
    siteHeader.classList.remove("search-panel-active");
  });
}

// —————————————————————————————— Search Form Submit ——————————————————————————————
if (searchForm && searchInput) {

  // Handle user search
  searchForm.addEventListener("submit", event => {

    // Prevent default page refresh
    event.preventDefault();

    // Remove unnecessary spaces
    const keyword = searchInput.value.trim();

    // Stop empty searches
    if (keyword === "") return;

    // Get current history
    let history = getSearchHistory();

    // Remove duplicate keywords
    history = history.filter(
      item => item.toLowerCase() !== keyword.toLowerCase()
    );

    // Add newest search to the front
    history.unshift(keyword);

    // Keep maximum 8 records
    history = history.slice(0, 8);

    // Save updated history
    saveSearchHistory(history);

    // Jump to search results page
    window.location.href =
      "Search Result.html?search=" +
      encodeURIComponent(keyword);
  });
}

// Render history immediately when page loads
renderSearchHistory();

// —————————————————————————————— Menu Hover ——————————————————————————————
// Select the "Shop" navigation button
const shopTrigger = document.querySelector(".shop-trigger");

// Select the dropdown mega menu
const shopMenu = document.querySelector(".shop-menu");

// Only run if all required elements exist
if (siteHeader && shopTrigger && shopMenu) {

  // Store timer for delayed menu closing
  let closeMenuTimer;

  // Function to open the mega menu
  function openShopMenu() {

    // Cancel any pending close action
    clearTimeout(closeMenuTimer);

    // Close search panel if it is open
    siteHeader.classList.remove("search-panel-active");

    // Add class to show mega menu
    siteHeader.classList.add("shop-menu-active");
  }

  // Function to close the mega menu
  function closeShopMenu() {

    // Small delay prevents flickering when moving mouse
    closeMenuTimer = setTimeout(() => {

      // Hide mega menu
      siteHeader.classList.remove("shop-menu-active");

    }, 0);
  }

  // Open menu when hovering over "Shop"
  shopTrigger.addEventListener("mouseenter", openShopMenu);

  // Start closing when leaving "Shop"
  shopTrigger.addEventListener("mouseleave", closeShopMenu);

  // Keep menu open when mouse enters dropdown area
  shopMenu.addEventListener("mouseenter", openShopMenu);

  // Close menu when leaving dropdown area
  shopMenu.addEventListener("mouseleave", closeShopMenu);
}

// —————————————————————————————— Search Placeholder Typing Animation ——————————————————————————————
// Static text shown before animated words
const searchPrefix = "Search ";

// Words that will be animated in the placeholder
const animatedWords = [
  "for Products",
  "Blogs",
];

// Track current word, current character, and typing state
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

// Animate typing and deleting effect
function animatePlaceholder() {

  // Stop if search input does not exist
  if (searchInput === null) return;

  // Current animated word
  const currentWord = animatedWords[wordIndex];

  // Typing or deleting logic
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  // Build animated text
  const animatedText =
    currentWord.substring(0, charIndex);

  // Update placeholder text
  searchInput.placeholder =
    searchPrefix + animatedText;

  // Different speed for typing and deleting
  let speed;

  if (isDeleting) {
    speed = 45;
  } else {
    speed = 90;
  }

  // Pause after finishing typing
  if (
  isDeleting === false &&
  charIndex === currentWord.length
  ) {
    speed = 1000;
    isDeleting = true;
  }

  // Move to next word after deleting
  if (
    isDeleting &&
    charIndex === 0
  ) {
    isDeleting = false;

    // Loop through words continuously
    wordIndex =
      (wordIndex + 1) %
      animatedWords.length;

    speed = 250;
  }

  // Continue animation
  setTimeout(animatePlaceholder, speed);
}

// Start placeholder animation
animatePlaceholder();

// —————————————————————————————— Breadcrumb ——————————————————————————————
// Dynamically generate breadcrumb navigation
function renderBreadcrumb(items) {

  // Select breadcrumb container
  const breadcrumb =
    document.querySelector(".breadcrumb");

  // Stop if breadcrumb does not exist
  if (!breadcrumb) return;

  // Clear old breadcrumb content
  breadcrumb.innerHTML = "";

  // Loop through each breadcrumb item
  items.forEach((item, index) => {

    // Create clickable link if href exists
    if (item.href) {

      const link = document.createElement("a");

      link.href = item.href;
      link.textContent = item.label;

      breadcrumb.appendChild(link);

    } else {

      // Create plain text for current page
      const span = document.createElement("span");

      span.textContent = item.label;

      breadcrumb.appendChild(span);
    }

    // Add divider between breadcrumb items
    if (index < items.length - 1) {

      const divider = document.createElement("span");

      divider.textContent = "|";

      breadcrumb.appendChild(divider);
    }
  });
}

// —————————————————————————————— Recommend carousel ——————————————————————————————
const recommendProducts = document.querySelector(".recommend-products");
const recommendPrev = document.querySelector(".recommend-prev");
const recommendNext = document.querySelector(".recommend-next");

// Automatically generate all product cards
if (recommendProducts) {

  products
  .filter(product => product.inStock)
  .forEach(product => {

    const article = document.createElement("article");
    article.classList.add("product-card");

  if (product.inStock) {

    const productPrice =
      product.price.toFixed(2);

    article.innerHTML =
      `
      <a href="Product Page.html?id=` +
      product.id +
      `&from=search">

        <figure>

          <div class="product-image">

            <img class="primary-img"
            src="` + product.images.card + `"
            alt="` + product.name + `">

            <img class="hover-img"
            src="` + product.images.hover + `"
            alt="` + product.name + `">

          </div>

          <figcaption>` + product.name + `</figcaption>

        </figure>

        <p class="size">` + product.size + `</p>

        <p class="price">
          $` + productPrice + `
          <span>inc GST</span>
        </p>

      </a>

      <button type="button" class="add-to-cart">
        Add to Cart
      </button>
    `;
  } else {
    const productPrice =
      product.price.toFixed(2);

    article.innerHTML =
      `
      <div class="product-disabled">
        <figure>
          <div class="product-image">
            <img class="primary-img" src="` + product.images.card + `" alt="` + product.name + `">

            <img class="hover-img" src="` + product.images.hover + `" alt="` + product.name + `">
          </div>

          <figcaption>` + product.name + `</figcaption>
        </figure>

        <p class="size">` + product.size + `</p>

        <p class="price">
          $` + productPrice + `
          <span>inc GST</span>
        </p>
      </div>

      <button type="button"  class="out-of-stock" disabled >
        Out of stock
      </button>
    `;
  }

  // Add To Cart Button in Recommend
  const recommendAddToCartBtn =
    article.querySelector(".add-to-cart");

  if (recommendAddToCartBtn && product.inStock) {

    recommendAddToCartBtn.addEventListener("click", () => {

      addProductToCart(product.id, 1);

      if (cartPage) {
        renderCart();
      }

      showCartModal([
        {
          ...product,
          quantity: 1
        }
      ]);
    });
  }

    recommendProducts.appendChild(article);
  });
}

// Only execute if these elements exist
if (recommendProducts && recommendPrev && recommendNext) {

  let isAnimating = false;

  // Obtain the sliding distance (The width of a card + spacing)
  function getRecommendSlideDistance() {

    const card = recommendProducts.querySelector(".product-card");
    const gap = parseFloat(getComputedStyle(recommendProducts).columnGap);

    return card.offsetWidth + gap;
  }

  // Click right arrow: slide left, then move first card to the end
  recommendNext.addEventListener("click", () => {

    // If the animation is not yet over, do not allow further clicks.
    if (isAnimating) return;

    isAnimating = true;

    const distance = getRecommendSlideDistance();

    // Animation
    recommendProducts.style.transition = "transform 0.45s ease";
    recommendProducts.style.transform = "translateX(-" + distance + "px)";

    // Triggered after the animation ends
    recommendProducts.addEventListener("transitionend", function handleTransitionEnd() {

      // Move the first card to the end to achieve an infinite loop
      recommendProducts.appendChild(recommendProducts.firstElementChild);

      // Reset position
      recommendProducts.style.transition = "none";
      recommendProducts.style.transform = "translateX(0)";

      // Prevent duplicate triggering
      recommendProducts.removeEventListener("transitionend", handleTransitionEnd);

      // Allow the next click
      isAnimating = false;
    });
  });

  // Click left arrow: move last card to the front, then slide right
  recommendPrev.addEventListener("click", () => {

    // If the animation is not yet over, do not allow further clicks.
    if (isAnimating) return;

    isAnimating = true;

    const distance = getRecommendSlideDistance();

    // Move the last one to the front
    recommendProducts.style.transition = "none";
    recommendProducts.prepend(recommendProducts.lastElementChild);

    // Set initial offset
    recommendProducts.style.transform = "translateX(-" + distance + "px)";

    // Force the browser to redraw
    recommendProducts.offsetHeight;

    // Animation: Return to original position
    recommendProducts.style.transition = "transform 0.45s ease";
    recommendProducts.style.transform = "translateX(0)";

    recommendProducts.addEventListener("transitionend", function handleTransitionEnd() {

      recommendProducts.removeEventListener("transitionend", handleTransitionEnd);

      isAnimating = false;
    });
  });
}

const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

const mobileShopToggle = document.querySelector(".mobile-shop-toggle");
const mobileBrandToggle = document.querySelector(".mobile-brand-toggle");
const mobileTypeToggle = document.querySelector(".mobile-type-toggle");

function closeMobileMenu() {
  if (!siteHeader || !mobileMenu) return;

  siteHeader.classList.remove("mobile-menu-active");
  mobileMenu.classList.remove("shop-open", "brand-open", "type-open");
  document.body.classList.remove("mobile-panel-open");
}

function closeMobileSearch() {
  if (!siteHeader) return;

  siteHeader.classList.remove("search-panel-active");
  document.body.classList.remove("mobile-panel-open");
}

function setupMobileHistoryExpand() {
  if (window.innerWidth > 600 || historyList === null) return;

  let expandBtn = historyList.querySelector(".history-expand-btn");

  if (expandBtn === null) {
    expandBtn = document.createElement("button");
    expandBtn.type = "button";
    expandBtn.classList.add("history-expand-btn");
    expandBtn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path d="M6 9L12 15L18 9"></path>
      </svg>
    `;
    historyList.appendChild(expandBtn);
  }

  const historyItems = Array.from(historyList.querySelectorAll("a"));

  historyItems.forEach(item => {
    item.classList.remove("history-hidden");
    item.style.display = "";
  });

  historyList.classList.remove("history-expanded");
  expandBtn.classList.remove("active", "expanded");

  requestAnimationFrame(() => {
    const lineTops = [];

    historyItems.forEach(item => {
      if (!lineTops.includes(item.offsetTop)) {
        lineTops.push(item.offsetTop);
      }
    });

    if (lineTops.length <= 2) return;

    const secondLineTop = lineTops[1];

    historyItems.forEach(item => {
      if (item.offsetTop > secondLineTop) {
        item.classList.add("history-hidden");
      }
    });

    expandBtn.classList.add("active");
  });

  expandBtn.onclick = () => {
    const expanded = historyList.classList.toggle("history-expanded");

    historyList.querySelectorAll(".history-hidden").forEach(item => {
      item.style.display = "";
    });

    expandBtn.classList.toggle("expanded", expanded);
  };
}

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener("click", event => {
    if (window.innerWidth > 600) return;

    event.stopPropagation();

    closeMobileSearch();

    siteHeader.classList.toggle("mobile-menu-active");

    document.body.classList.toggle(
      "mobile-panel-open",
      siteHeader.classList.contains("mobile-menu-active")
    );
  });
}

if (searchTrigger && searchPanel) {
  searchTrigger.addEventListener("click", event => {
    if (window.innerWidth > 600) return;

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    closeMobileMenu();

    siteHeader.classList.toggle("search-panel-active");

    document.body.classList.toggle(
      "mobile-panel-open",
      siteHeader.classList.contains("search-panel-active")
    );

    renderSearchHistory();
    setupMobileHistoryExpand();

    if (searchInput) {
      searchInput.focus();
    }
  }, true);
}

if (mobileShopToggle && mobileMenu) {
  mobileShopToggle.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();

    mobileMenu.classList.toggle("shop-open");
  });
}

if (mobileBrandToggle && mobileMenu) {
  mobileBrandToggle.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();

    mobileMenu.classList.toggle("brand-open");
    mobileMenu.classList.remove("type-open");
  });
}

if (mobileTypeToggle && mobileMenu) {
  mobileTypeToggle.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();

    mobileMenu.classList.toggle("type-open");
    mobileMenu.classList.remove("brand-open");
  });
}

if (mobileMenu) {
  mobileMenu.addEventListener("click", event => {
    event.stopPropagation();
  });
}

if (searchPanel) {
  searchPanel.addEventListener("click", event => {
    event.stopPropagation();
  });
}

document.addEventListener("click", event => {
  if (window.innerWidth > 600) return;

  if (siteHeader && !siteHeader.contains(event.target)) {
    closeMobileMenu();
    closeMobileSearch();
  }
});

const clearHistoryBtn = document.querySelector(".clear-history-btn");
const refreshSuggestedBtn = document.querySelector(".refresh-suggested-btn");

const suggestedKeywords = [
  "Dry Hair",
  "Frizzy Hair",
  "Damaged Hair",
  "Oily Scalp",
  "Repair Treatment",
  "Scalp Care",
  "Conditioner",
  "Shampoo",
  "Hair Mask",
  "Styling Cream"
];

function renderSuggestedSearches() {
  const keywordLinks = document.querySelectorAll(".search-keywords a");

  const shuffledKeywords = [...suggestedKeywords]
    .sort(() => Math.random() - 0.5)
    .slice(0, keywordLinks.length);

  keywordLinks.forEach((link, index) => {
    link.textContent = shuffledKeywords[index];
    link.href =
      "Search Result.html?search=" +
      encodeURIComponent(shuffledKeywords[index]);
  });
}

if (clearHistoryBtn) {
  clearHistoryBtn.addEventListener("click", () => {
    saveSearchHistory([]);
    renderSearchHistory();
  });
}

if (refreshSuggestedBtn) {
  refreshSuggestedBtn.addEventListener("click", () => {
    renderSuggestedSearches();
  });
}

window.addEventListener("resize", () => {
  renderSearchHistory();
});

const mobileFooterToggles = document.querySelectorAll(".mobile-footer-toggle");

mobileFooterToggles.forEach(toggle => {

    toggle.addEventListener("click", () => {

        const currentColumn = toggle.closest(".mobile-footer-column");

        const isAlreadyOpen = currentColumn.classList.contains("active");

        document.querySelectorAll(".mobile-footer-column").forEach(column => {
            column.classList.remove("active");
        });

        if (!isAlreadyOpen) {
            currentColumn.classList.add("active");
        }

    });

});