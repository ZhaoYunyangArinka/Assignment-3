// —————————————————————————————— Shopping Cart Page ——————————————————————————————
const cartPage = document.querySelector(".cart-page");

// Only run shopping cart logic on cart page
if (cartPage) {
  const cartItemsContainer = document.getElementById("cartItems");
  const cartTitle = document.getElementById("cartTitle");

  const summarySubtotal = document.getElementById("summarySubtotal");
  const summaryShipping = document.getElementById("summaryShipping");
  const summaryTotal = document.getElementById("summaryTotal");
  const checkoutBtn = document.getElementById("checkoutBtn");

  const SHIPPING_FEE = 11;

  // Render breadcrumb navigation
  renderBreadcrumb([
    { label: "Home", href: "index.html" },
    { label: "Shopping Cart" }
  ]);

  // Get full product data from localStorage cart
  function getCartProducts() {
    const cart = getCart();

    return cart
      .map(item => {
        const product = products.find(product => product.id === item.id);

        if (!product) return null;

        return {
          ...product,
          quantity: item.quantity
        };
      })
      .filter(item => item !== null);
  }

  // Calculate total quantity
  function getCartTotalQuantity(cartProducts) {
    return cartProducts.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  }

  // Calculate subtotal price
  function calculateSubtotal(cartProducts) {
    return cartProducts.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }

  // Update subtotal, shipping, total and checkout button
  function updateCartSummary(cartProducts) {
    const totalQuantity = getCartTotalQuantity(cartProducts);
    const subtotal = calculateSubtotal(cartProducts);

    let shipping;

    if (totalQuantity === 0) {
      shipping = 0;
    } else {
      shipping = SHIPPING_FEE;
    }

    const total = subtotal + shipping;

    cartTitle.textContent =
      "Shopping Cart (" + totalQuantity + ")";

    summarySubtotal.textContent =
      "$" + subtotal.toFixed(2);

    summaryShipping.textContent =
      "$" + shipping.toFixed(2);

    summaryTotal.textContent =
      "$" + total.toFixed(2);
  }

  // Update product quantity in cart
  function updateQuantity(productId, newQuantity) {
    const cart = getCart();

    const targetItem = cart.find(item => item.id === productId);

    if (!targetItem) return;

    targetItem.quantity = newQuantity;

    saveCart(cart);

    renderCart();
  }

  // Remove product from cart
  function removeCartItem(productId) {
    let cart = getCart();

    cart = cart.filter(item => item.id !== productId);

    saveCart(cart);

    renderCart();
  }

  // Dynamically generate a cart item
  function renderCartItem(product) {
    const article = document.createElement("article");

    article.classList.add("cart-item");

    article.innerHTML = `
      <a href="Product Page.html?id=` + product.id + `&from=cart" class="cart-product-link">
        <figure class="cart-item-image">
          <img src="` + product.images.card + `" alt="` + product.name + `">
        </figure>

        <section class="cart-item-info">
          <h3>` + product.name + `</h3>
          <p class="cart-size">` + product.size + `</p>

          <p class="cart-price">
            $` + product.price.toFixed(2) + `
            <span>inc GST</span>
          </p>
        </section>
      </a>

      <section class="cart-actions">
        <div class="cart-quantity-control">
          <button type="button" class="cart-qty-btn cart-minus">-</button>
          <span class="cart-qty-divider left-divider"></span>
          <span class="cart-qty-number">` + product.quantity + `</span>
          <span class="cart-qty-divider"></span>
          <button type="button" class="cart-qty-btn cart-plus">+</button>
        </div>

      <button type="button" class="delete-cart-item" aria-label="Remove item">
        <svg viewBox="0 0 24 24" preserveAspectRatio="none">
          <path d="M6 7h12" />
          <path d="M9 7V5.6C9 4.7 9.7 4 10.6 4h2.8C14.3 4 15 4.7 15 5.6V7" />
          <path d="M8 7v11.2C8 19.2 8.8 20 9.8 20h4.4C15.2 20 16 19.2 16 18.2V7" />
          <path d="M10.5 10.5v5.8" />
          <path d="M13.5 10.5v5.8" />
        </svg>
      </button>
      </section>
    `;

    const minusBtn = article.querySelector(".cart-minus");
    const plusBtn = article.querySelector(".cart-plus");
    const deleteBtn = article.querySelector(".delete-cart-item");
    const leftDivider = article.querySelector(".left-divider");

    if (product.quantity <= 1) {
      minusBtn.disabled = true;
      leftDivider.classList.add("disabled");
    }

    minusBtn.addEventListener("click", () => {
      if (product.quantity > 1) {
        updateQuantity(product.id, product.quantity - 1);
      }
    });

    plusBtn.addEventListener("click", () => {
      updateQuantity(product.id, product.quantity + 1);
    });

    deleteBtn.addEventListener("click", () => {
      removeCartItem(product.id);
    });

    return article;
  }

  // Show empty cart message
  function renderEmptyCart() {
    cartItemsContainer.innerHTML = `
      <p class="empty-cart-message">
        Your cart is empty.
      </p>
    `;
  }

  // Render full shopping cart
  function renderCart() {
    const cartProducts = getCartProducts();

    cartItemsContainer.innerHTML = "";

    if (cartProducts.length === 0) {
      renderEmptyCart();
    } else {
      cartProducts.forEach(product => {
        cartItemsContainer.appendChild(renderCartItem(product));
      });
    }

    updateCartSummary(cartProducts);
  }

  // Checkout button logic
  checkoutBtn.addEventListener("click", () => {
    const cartProducts = getCartProducts();

    if (cartProducts.length === 0) {
      alert("Please add items to your cart before proceeding to checkout.");
      return;
    }

    const selectedPayment = document.querySelector(
      "input[name='payment']:checked"
    );

    if (selectedPayment) {
      sessionStorage.setItem(
        "selectedPayment",
        selectedPayment.value
      );
    }

    window.location.href = "Checkout.html";
  });

  renderCart();
}