// —————————————————————————————— Product List Page ——————————————————————————————
const productListPage = document.querySelector(".product-list-page");

if (productListPage) {
  const productListTitle = document.getElementById("productListTitle");
  const productListSection = document.getElementById("productListSection");
  const productListNoResults = document.getElementById("productListNoResults");

  const sortBox = document.getElementById("sortBox");
  const sortBtn = document.getElementById("sortBtn");
  const sortOptionsList = document.getElementById("sortOptions");

  const params = new URLSearchParams(window.location.search);

  const collection = params.get("collection");
  const brand = params.get("brand");
  const category = params.get("category");

  let currentProducts = [];

  // Fixed best seller products
  const bestSellerIds = [
    "o-ssential-hair-wash",
    "o-ssential-hair-rinse",
    "beach-hair-wash",
    "beach-hair-rinse",
    "dry-leave-in",
    "hair-setting-lotion"
  ];

  // —————————— Page Title ——————————
  function getPageTitle() {
    if (collection === "best-sellers") {
      return "Best Sellers";
    }

    if (brand) {
      return brand;
    }

    if (category) {
      return category;
    }

    return "All Products";
  }

  function updatePageTitle() {
    const title = getPageTitle();

    productListTitle.textContent = title;

    renderBreadcrumb([
      { label: "Home", href: "Index.html" },
      { label: title }
    ]);
  }

  // —————————— Filter Products ——————————
  function getFilteredProducts() {
    if (collection === "best-sellers") {
      return bestSellerIds
        .map(id => {
          return products.find(product => product.id === id);
        })
        .filter(product => product !== undefined);
    }

    if (brand) {
      return products.filter(product => {
        return product.brand === brand;
      });
    }

    if (category) {
      return products.filter(product => {
        return product.category === category;
      });
    }

    return products;
  }

  // —————————— Product Card ——————————
  function renderProductCard(product) {
    const article = document.createElement("article");

    article.classList.add("product-card");
    article.dataset.productId = product.id;

    const productPrice = product.price.toFixed(2);

    const productLink =
      "Product Page.html?id=" +
      product.id +
      "&from=products";

    if (product.inStock) {
      article.innerHTML =
        `
        <a href="` + productLink + `">
          <figure>
            <div class="product-image">
              <img class="primary-img"
                src="` + product.images.card + `"
                alt="` + product.name + `">

              <img class="hover-img"
                src="` + product.images.hover + `"
                alt="` + product.name + `">
            </div>

            <figcaption>` + getProductCardName(product.name) + `</figcaption>
          </figure>

          <p class="size">` + product.size + `</p>

          <p class="price">
            $` + productPrice + `
            <span>inc GST</span>
          </p>
        </a>

        <button type="button" class="add-to-cart">
          <span class="add-to-cart-text">Add to Cart</span>

          <span class="add-to-cart-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 7V17"></path>
              <path d="M7 12H17"></path>
            </svg>
          </span>
        </button>
      `;
    } else {
      article.innerHTML =
        `
        <div class="product-disabled">
          <figure>
            <div class="product-image">
              <img class="primary-img"
                src="` + product.images.card + `"
                alt="` + product.name + `">

              <img class="hover-img"
                src="` + product.images.hover + `"
                alt="` + product.name + `">
            </div>

            <figcaption>` + getProductCardName(product.name) + `</figcaption>
          </figure>

          <p class="size">` + product.size + `</p>

          <p class="price">
            $` + productPrice + `
            <span>inc GST</span>
          </p>
        </div>

        <button type="button" class="out-of-stock" disabled>
          Out of stock
        </button>
      `;
    }

    return article;
  }

  // —————————— Render Products ——————————
  function renderProducts(productList) {
    productListSection.innerHTML = "";

    productList.forEach(product => {
      productListSection.appendChild(renderProductCard(product));
    });

    if (productList.length === 0) {
      productListNoResults.classList.add("active");
      productListNoResults.textContent = "No products found.";
    } else {
      productListNoResults.classList.remove("active");
      productListNoResults.textContent = "";
    }

    bindAddToCartButtons();
  }

  // —————————— Add To Cart ——————————
  function bindAddToCartButtons() {
    const addToCartButtons =
      productListSection.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
      button.addEventListener("click", () => {
        const card = button.closest(".product-card");
        const productId = card.dataset.productId;

        const targetProduct = products.find(product => {
          return product.id === productId;
        });

        if (targetProduct === undefined) {
          return;
        }

        addProductToCart(targetProduct.id, 1);

        showCartModal([
          {
            ...targetProduct,
            quantity: 1
          }
        ]);
      });
    });
  }

  // —————————— Sorting ——————————
  function sortProducts(selected) {
    let sortedProducts = [...currentProducts];

    if (selected === "Name: A - Z") {
      sortedProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }

    if (selected === "Name: Z - A") {
      sortedProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }

    if (selected === "Price: Low to High") {
      sortedProducts.sort((a, b) => {
        return a.price - b.price;
      });
    }

    if (selected === "Price: High to Low") {
      sortedProducts.sort((a, b) => {
        return b.price - a.price;
      });
    }

    if (selected === "Sales") {
      sortedProducts = [...currentProducts];
    }

    renderProducts(sortedProducts);
  }

  if (sortBtn && sortBox && sortOptionsList) {
    sortBtn.addEventListener("click", event => {
      event.stopPropagation();
      sortBox.classList.toggle("active");
    });

    sortOptionsList.addEventListener("click", event => {
      const option = event.target.closest("li");

      if (option === null) {
        return;
      }

      const selected = option.textContent.trim();

      sortBtn.textContent = selected;
      sortBox.classList.remove("active");

      sortProducts(selected);
    });

    document.addEventListener("click", () => {
      sortBox.classList.remove("active");
    });
  }

  // —————————— Initialize Page ——————————
  updatePageTitle();

  currentProducts = getFilteredProducts();

  renderProducts(currentProducts);
}