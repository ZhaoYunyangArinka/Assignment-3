// —————————————————————————————— Search Result ——————————————————————————————
// Select search result tabs, panels, sorting elements, and result containers
const resultTabs = document.querySelectorAll(".result-tab");
const resultPanels = document.querySelectorAll(".result-panel");

const sortBox = document.getElementById("sortBox");
const sortBtn = document.getElementById("sortBtn");
const sortOptionsList = document.getElementById("sortOptions");
const sortRow = document.querySelector(".sort-row");

const productSection = document.querySelector(".product-section");
const blogSection = document.querySelector(".blog-section");
const recommendSection = document.querySelector(".recommend-section");

const searchResultTitle = document.getElementById("searchResultTitle");
const productNoResults = document.getElementById("productNoResults");
const blogNoResults = document.getElementById("blogNoResults");

// —————————— Sorting ——————————
const productSortOptions = [
  "Sales",
  "Name: A - Z",
  "Name: Z - A",
  "Price: Low to High",
  "Price: High to Low"
];

const blogSortOptions = [
  "Publication Date",
  "Name: A - Z",
  "Name: Z - A"
];

if (resultTabs.length && resultPanels.length && sortBox && sortBtn && sortOptionsList && productSection && blogSection) {
  const params = new URLSearchParams(window.location.search);
  const searchKeyword = params.get("search") || "Shampoo";
  const keywordLower = searchKeyword.toLowerCase();

  // —————————— Breadcrumb ——————————
  renderBreadcrumb([
    { label: "Home", href: "index.html" },
    { label: "Search Results" }
  ]);

  let currentResultType = "product";
  let currentProducts = [];
  let currentBlogs = [];

  // —————————— Search ——————————
  // Check whether an item matches the search keyword
  function itemMatchesSearch(item, keyword) {
    const nameText = item.name || item.title || "";
    const categoryText = item.category || "";
    const brandText = item.brand || "";
    const keywordText = item.keywords ? item.keywords.join(" ") : "";

    const searchableText = (
      nameText + " " +
      categoryText + " " +
      brandText + " " +
      keywordText
    ).toLowerCase();

    return searchableText.includes(keyword);
  }

  // Create product page link from search result
  function getProductLink(product) {
    return "Product Page.html?id=" + product.id + "&from=search";
  }

  // Generate a product card dynamically
  function renderProductCard(product) {

    const article = document.createElement("article");

    article.classList.add("product-card");

    const productLink = getProductLink(product);

    const productPrice =
      product.price.toFixed(2);

    if (product.inStock) {
      article.innerHTML =
        `
        <a href="` + productLink + `">
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
        </a>

        <button type="button" class="add-to-cart">
          Add to Cart
        </button>
      `;
    } else {
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

        <button type="button" class="out-of-stock" disabled>
          Out of stock
        </button>
      `;
    }

    return article;
  }

  // Generate a blog card dynamically
  function renderBlogCard(blog) {
    const article = document.createElement("article");
    article.classList.add("blog-card");

    article.innerHTML = `
      <a href="#">
        <figure>
          <img src="` + blog.image + `" alt="` + blog.title + `">

          <figcaption>` + blog.title + `</figcaption> 
        </figure>
        <p class="Date">
          Publication Date: ` + blog.date + `
        </p>
      </a>
    `;

    return article;
  }

  // Render product results and show no-result message if needed
  function renderProducts(productList) {
    productSection.innerHTML = "";

    productList.forEach(product => {
      productSection.appendChild(renderProductCard(product));
    });

    if (productList.length === 0) {
      productNoResults.innerHTML =
        "No results found for <em>“" +
        searchKeyword +
        "”</em>.<br>" +
        "Check the spelling or use a different word or phrase.";
      productNoResults.classList.add("active");
    } else {
      productNoResults.innerHTML = "";
      productNoResults.classList.remove("active");
    }

    bindAddToCartButtons();
  }

  // Render blog results and show no-result message if needed
  function renderBlogs(blogList) {
    blogSection.innerHTML = "";

    blogList.forEach(blog => {
      blogSection.appendChild(renderBlogCard(blog));
    });

    if (blogList.length === 0) {
      blogNoResults.innerHTML =
        "No results found for <em>“" +
        searchKeyword +
        "”</em>.<br>" +
        "Check the spelling or use a different word or phrase.";
      blogNoResults.classList.add("active");
    } else {
      blogNoResults.innerHTML = "";
      blogNoResults.classList.remove("active");
    }
  }

  // Update result count title based on current tab
  function updateSearchTitle() {
    let count;

    if (currentResultType === "blog") {
      count = currentBlogs.length;
    } else {
      count = currentProducts.length;
    }

    let resultWord;

    if (count === 1) {
      resultWord = "Result";
    } else {
      resultWord = "Results";
    }

    searchResultTitle.innerHTML =
    "Search results for “" +
    searchKeyword +
    "”: <em>" +
    count +
    " " +
    resultWord +
    "</em>";
  }

  // Hide sort row when current tab has no results
  function updateSortVisibility() {
    if (sortRow === null) return;

    if (currentResultType === "blog") {

      if (currentBlogs.length === 0) {
        sortRow.style.display = "none";
      } else {
        sortRow.style.display = "";
      }

    } else {

      if (currentProducts.length === 0) {
        sortRow.style.display = "none";
      } else {
        sortRow.style.display = "";
      }
    }
  }

  // Render different sort options for product or blog tab
  function renderSortOptions(type) {
    let options;

    if (type === "blog") {
      options = blogSortOptions;
    } else {
      options = productSortOptions;
    }

    sortBtn.textContent = options[0];
    sortOptionsList.innerHTML = "";

    options.forEach(optionText => {
      const li = document.createElement("li");
      li.textContent = optionText;
      sortOptionsList.appendChild(li);
    });
  }

  // Switch between product results and blog results
  function switchResultTab(targetId) {
    resultTabs.forEach(tab => {
      tab.classList.toggle("active", tab.dataset.target === targetId);
    });

    resultPanels.forEach(panel => {
      panel.classList.toggle("active", panel.id === targetId);
    });

    if (targetId === "blogResults") {
      currentResultType = "blog";
      renderSortOptions("blog");

      if (recommendSection) {
        recommendSection.style.display = "none";
      }
    } else {
      currentResultType = "product";
      renderSortOptions("product");

      if (recommendSection) {
        recommendSection.style.display = "";
      }
    }

    updateSearchTitle();
    updateSortVisibility();
  }

  // Sort product results
  function sortProducts(selected) {
    let sortedProducts = [...currentProducts];

    if (selected === "Name: A - Z") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (selected === "Name: Z - A") {
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    if (selected === "Price: Low to High") {
      sortedProducts.sort((a, b) => a.price - b.price);
    }

    if (selected === "Price: High to Low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    if (selected === "Sales") {
      sortedProducts = [...currentProducts];
    }

    renderProducts(sortedProducts);
    updateSortVisibility();
  }

  // Sort blog results
  function sortBlogs(selected) {
    let sortedBlogs = [...currentBlogs];

    if (selected === "Publication Date") {
      sortedBlogs.sort((a, b) => {
        return new Date(b.date.split("/").reverse().join("-")) -
               new Date(a.date.split("/").reverse().join("-"));
      });
    }

    if (selected === "Name: A - Z") {
      sortedBlogs.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (selected === "Name: Z - A") {
      sortedBlogs.sort((a, b) => b.title.localeCompare(a.title));
    }

    renderBlogs(sortedBlogs);
    updateSortVisibility();
  }

  // Re-bind Add to Cart buttons after dynamic rendering
  function bindAddToCartButtons() {
    const newAddToCartButtons = productSection.querySelectorAll(".add-to-cart");

    newAddToCartButtons.forEach(button => {

      button.addEventListener("click", () => {

        const card = button.closest(".product-card");

        const productName =
          card.querySelector("figcaption").textContent.trim();

        const targetProduct = products.find(product => {
          return product.name === productName;
        });

        if (targetProduct) {
          addProductToCart(targetProduct.id, 1);

          showCartModal([
            {
              ...targetProduct,
              quantity: 1
            }
          ]);
        }
      });
    });
  }

  // Filter products and blogs based on search keyword
  currentProducts = products.filter(product => {
    return itemMatchesSearch(product, keywordLower);
  });

  currentBlogs = blogs.filter(blog => {
    if (blog.id === "welcome-to-kusco-murphy") {
      return true;
    }

    return itemMatchesSearch(blog, keywordLower);
  });

  // Initial rendering
  renderProducts(currentProducts);
  renderBlogs(currentBlogs);

  // Bind tab switching
  resultTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      switchResultTab(tab.dataset.target);
    });
  });

  // Open & close sort dropdown
  sortBtn.addEventListener("click", event => {
    event.stopPropagation();
    sortBox.classList.toggle("active");
  });

  // Handle selected sort option
  sortOptionsList.addEventListener("click", event => {
    const option = event.target.closest("li");

    if (option === null) {
      return;
    }

    const selected = option.textContent.trim();
    sortBtn.textContent = selected;
    sortBox.classList.remove("active");

    if (currentResultType === "blog") {
      sortBlogs(selected);
    } else {
      sortProducts(selected);
    }
  });

  // Close sort dropdown when clicking outside
  document.addEventListener("click", () => {
    sortBox.classList.remove("active");
  });

  // Start with product results tab
  switchResultTab("productResults");
}