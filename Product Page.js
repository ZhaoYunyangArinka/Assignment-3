// —————————————————————————————— Product Page ——————————————————————————————
// Select product page container
const productPage = document.querySelector(".product-page");

// Only run this code on product page
if (productPage) {
  // Get product id and page source from URL
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id") || "beach-hair-wash";

  // Find current product data
  const currentProduct = products.find(product => {
    return product.id === productId;
  });

  if (currentProduct) {
    // Update browser title
    document.title = currentProduct.name + " | Kusco-Murphy";

    // Get breadcrumb source and trail data
    const fromPage = params.get("from") || "products";
    const trailParam = params.get("trail");

    const trailIds =
      trailParam ? trailParam.split(",") : [];

    const trailProducts = trailIds
      .map(id => products.find(product => product.id === id))
      .filter(product => product !== undefined);

    // Render breadcrumb based on previous page
    if (fromPage === "search") {

      renderBreadcrumb([
        { label: "Home", href: "index.html" },
        { label: "Search Results", href: "Search Result.html" },
        { label: currentProduct.name }
      ]);

    } else if (fromPage === "home") {

      renderBreadcrumb([
        { label: "Home", href: "index.html" },
        { label: currentProduct.name }
      ]);

    } else if (fromPage === "cart") {

      renderBreadcrumb([
        { label: "Home", href: "index.html" },
        { label: "Shopping Cart", href: "Shopping Cart.html" },
        { label: currentProduct.name }
      ]);

    } else if (fromPage === "product") {

      const breadcrumbItems = [
        { label: "Home", href: "index.html" },
      ];

      // Add previous related products into breadcrumb
      trailProducts.forEach(product => {
        breadcrumbItems.push({
          label: product.name,
          href:
            "Product Page.html?id=" +
            product.id +
            "&from=product&trail=" +
            trailIds
              .slice(0, trailIds.indexOf(product.id))
              .join(",")
        });
  });

      breadcrumbItems.push({
        label: currentProduct.name
      });

      renderBreadcrumb(breadcrumbItems);

    } else {

      renderBreadcrumb([
        { label: "Home", href: "index.html" },
        { label: "Products", href: "Products.html" },
        { label: currentProduct.name }
      ]);
    }

    // Fill basic product information
    document.getElementById("productTitle").textContent =
      currentProduct.name;

    document.getElementById("productPrice").innerHTML =
      "$" +
      currentProduct.price.toFixed(2) +
      " <span>inc GST</span>";

    document.getElementById("productShortDescription").textContent =
      currentProduct.shortDescription;

    document.getElementById("productSize").textContent =
      currentProduct.size;

    // Fill main product image
    const mainProductImage =
      document.getElementById("mainProductImage");

    mainProductImage.src = currentProduct.images.gallery[0];
    mainProductImage.alt = currentProduct.name;

    // Render thumbnail images
    const thumbnailList =
      document.getElementById("thumbnailList");

    thumbnailList.innerHTML = "";

    const galleryImages = [
      ...currentProduct.images.gallery.slice(3),
      ...currentProduct.images.gallery,
      ...currentProduct.images.gallery.slice(0, 2)
    ];

    galleryImages.forEach((image, index) => {
      const li = document.createElement("li");

      li.innerHTML =
        `
        <button type="button" data-image="` +
        image +
        `">
          <img src="` +
        image +
        `" alt="` +
        currentProduct.name +
        ` thumbnail ` +
        (index + 1) +
        `">
        </button>
      `;

      thumbnailList.appendChild(li);
    });

    // Render key benefits
    const benefitList =
      document.getElementById("benefitList");

    benefitList.innerHTML = "";

    currentProduct.benefits.forEach(benefit => {
      const li = document.createElement("li");
      li.textContent = benefit;
      benefitList.appendChild(li);
    });

    // Render related product
    const goesWellContainer =
      document.getElementById("goesWellContainer");

    goesWellContainer.innerHTML = "";

    if (
      currentProduct.goesWellWith &&
      currentProduct.goesWellWith.length > 0
    ) {

      const relatedProduct = products.find(product => {
        return product.id === currentProduct.goesWellWith[0];
      });

      if (relatedProduct) {

        goesWellContainer.innerHTML =
          `
          <article class="mini-product-card">

            <a href="Product Page.html?id=` +
          relatedProduct.id +
          `&from=product&trail=` +
          [...trailIds, currentProduct.id].join(",") +
          `" class="mini-product-link">

              <div class="mini-product-image">
                <img src="` +
          relatedProduct.images.card +
          `" alt="` +
          relatedProduct.name +
          `">
              </div>

              <div class="mini-product-info">
                <h3>` +
          relatedProduct.name +
          `</h3>

                <p>` +
          relatedProduct.size +
          `</p>
              </div>

              <p class="mini-price">
                $` +
          relatedProduct.price.toFixed(2) +
          ` <span>inc GST</span>
              </p>
            </a>

            <button type="button" class="add-to-cart">
              Add To Cart
            </button>

          </article>
        `;

        const relatedAddToCartBtn =
          goesWellContainer.querySelector(".add-to-cart");

        if (relatedAddToCartBtn) {

          relatedAddToCartBtn.addEventListener("click", () => {

            addProductToCart(relatedProduct.id, 1);

            showCartModal([
              {
                ...relatedProduct,
                quantity: 1
              }
            ]);
          });
        }
      }
    }

    // Product page main Add To Cart button
    const productAddToCart =
      document.getElementById("productAddToCart");

    if (productAddToCart) {

      productAddToCart.addEventListener("click", () => {

        const quantity =
          Number(document.getElementById("quantityNumber").textContent);

        addProductToCart(currentProduct.id, quantity);

        showCartModal([
          {
            ...currentProduct,
            quantity: quantity
          }
        ]);
      });
    }

    // Fill description and application text
    document.getElementById("descriptionTitle").textContent =
      currentProduct.description.title;

    document.getElementById("descriptionParagraphs").innerHTML =
      currentProduct.description.paragraphs
        .map(paragraph => "<p>" + paragraph + "</p>")
        .join("");

    document.getElementById("applicationTitle").textContent =
      currentProduct.application.title;

    document.getElementById("applicationParagraphs").innerHTML =
      currentProduct.application.paragraphs
        .map(paragraph => "<p>" + paragraph + "</p>")
        .join("");

    // Render description/application image carousel
    function renderIntroCarousel(containerId, images, altText) {
      const container = document.getElementById(containerId);
      container.innerHTML = "";

      images.forEach((image, index) => {
        const img = document.createElement("img");

        img.classList.add("intro-slide");

        if (index === 0) {
          img.classList.add("active");
        }

        img.src = image;
        img.alt = altText + " image " + (index + 1);

        container.appendChild(img);
      });

      const dots = document.createElement("div");
      dots.classList.add("intro-dots");

      images.forEach((image, index) => {
        const dot = document.createElement("button");

        dot.type = "button";
        dot.classList.add("intro-dot");

        if (index === 0) {
          dot.classList.add("active");
        }

        dots.appendChild(dot);
      });

      container.appendChild(dots);
    }

    renderIntroCarousel(
      "descriptionImageCarousel",
      currentProduct.images.description,
      currentProduct.name
    );

    renderIntroCarousel(
      "applicationImageCarousel",
      currentProduct.images.application,
      currentProduct.name
    );
  }
}

// —————————— Thumbnail Carousel ——————————
const mainProductImage = document.getElementById("mainProductImage");
const thumbnailList = document.getElementById("thumbnailList");

if (mainProductImage && thumbnailList) {
  // Convert all <li> elements into an array
  const thumbnails = Array.from(thumbnailList.children);
  const totalItems = thumbnails.length;
  
  // Current logical center index
  let logicalIndex = 2; 

  // Prevent consecutive clicks
  let isAnimating = false;

  // Update the carousel layout
  function updateInfiniteLayout() {
    thumbnails.forEach((item, i) => {
      // Clear old state
      item.className = "";
      
      // // Calculate the offset of each image relative to the logical center
      let diff = i - (logicalIndex % totalItems);
      
      // Ensure to take the shortest path
      if (diff > totalItems / 2) diff -= totalItems;
      if (diff < -totalItems / 2) diff += totalItems;

      // Assign the class name for the position
      if (diff >= -2 && diff <= 2) {
        item.classList.add("thumb-active-" + (diff + 2));
        if (diff === 0) {
          item.classList.add("active");
          // Update Main Image
          const imgUrl = item.querySelector("button").dataset.image;
          if (mainProductImage.src !== imgUrl) {
            mainProductImage.src = imgUrl;
          }
        }

        // The preparing picture on the right
      } else if (diff === 3) {
        item.classList.add("thumb-prepare-right");

        // The preparing picture on the left
      } else if (diff === -3) {
        item.classList.add("thumb-prepare-left");

        // Hide all the others
      } else {
        item.classList.add("thumb-hidden");
      }
    });
  }

  // Bind click event
  thumbnails.forEach((item, i) => {
    item.addEventListener("click", () => {
      if (isAnimating) return;
      
      // Calculate the distance of the clicked image from the center
      let diff = i - (logicalIndex % totalItems);
      if (diff > totalItems / 2) diff -= totalItems;
      if (diff < -totalItems / 2) diff += totalItems;

      // The click is on the current image, and no action is taken.
      if (diff === 0) return;

      isAnimating = true;

      // Infinite scrolling
      logicalIndex += diff;
      
      updateInfiniteLayout();

      // Wait until the animation ends
      setTimeout(() => {
        isAnimating = false;
      }, 450);
    });
  });

  updateInfiniteLayout();
}

// —————————— Quantity Control ——————————
const minusQty = document.getElementById("minusQty");
const plusQty = document.getElementById("plusQty");
const quantityNumber = document.getElementById("quantityNumber");
const leftDivider = document.querySelector(".quantity-control .left-divider");

if (minusQty && plusQty && quantityNumber && leftDivider) {
  let quantity = 1;

  function updateQuantityState() {
    quantityNumber.textContent = quantity;

    // If the quantity is less than or equal to 1, disable the minus button and make the divider line gray.
    if (quantity <= 1) {
      minusQty.disabled = true;
      leftDivider.classList.add("disabled");
    } else {
      minusQty.disabled = false;
      leftDivider.classList.remove("disabled");
    }
  }

  minusQty.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      updateQuantityState();
    }
  });

  plusQty.addEventListener("click", () => {
    quantity++;
    updateQuantityState();
  });

  updateQuantityState();
}

// —————————— Key Benefits ——————————
const benefitToggle = document.getElementById("benefitToggle");
const benefitBox = document.querySelector(".benefit-box");

if (benefitToggle && benefitBox) {
  benefitToggle.addEventListener("click", () => {
    benefitBox.classList.toggle("open");
  });
}

// —————————— Description & Application tabs ——————————
const introTabs = document.querySelectorAll(".intro-tab");
const introContents = document.querySelectorAll(".intro-content");

introTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const targetId = tab.getAttribute("data-target");

    // Switch tab status
    introTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    // Switch Content
    introContents.forEach(content => {
      if (content.id === targetId) {
        content.classList.add("active");
      } else {
        content.classList.remove("active");
      }
    });
  });
});

// —————————— Description & Application: Image Carousels ——————————
const introImageCarousels = document.querySelectorAll(".intro-image-carousel");

introImageCarousels.forEach(carousel => {
  const slides = carousel.querySelectorAll(".intro-slide");
  const dots = carousel.querySelectorAll(".intro-dot");

  let imageIndex = 0;

  // Switch images
  function showImage(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    imageIndex = index;
  }

  // Next Image
  function showNextImage() {
    const nextIndex = (imageIndex + 1) % slides.length;
    showImage(nextIndex);
  }

  // Automatic Carousel
  let imageTimer = setInterval(showNextImage, 4000);

  // Click the picture: Switch + Reset Timer
  carousel.addEventListener("click", () => {
    showNextImage();
    clearInterval(imageTimer);
    imageTimer = setInterval(showNextImage, 4000);
  });

  // Click on the small dot: Jump to the specified image
  dots.forEach((dot, index) => {
    dot.addEventListener("click", event => {
      event.stopPropagation();
      showImage(index);
      clearInterval(imageTimer);
      imageTimer = setInterval(showNextImage, 4000);
    });
  });
});