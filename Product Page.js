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
        { label: "Home", href: "Index.html" },
        { label: "Search Results", href: "Search Result.html" },
        { label: currentProduct.name }
      ]);

    } else if (fromPage === "home") {

      renderBreadcrumb([
        { label: "Home", href: "Index.html" },
        { label: currentProduct.name }
      ]);

    } else if (fromPage === "cart") {

      renderBreadcrumb([
        { label: "Home", href: "Index.html" },
        { label: "Shopping Cart", href: "Shopping Cart.html" },
        { label: currentProduct.name }
      ]);

    } else if (fromPage === "product") {

      const breadcrumbItems = [
        { label: "Home", href: "Index.html" },
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
        { label: "Home", href: "Index.html" },
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

    const galleryImages =
      currentProduct.images.gallery;

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

    function truncateProductTitle(title, maxLength) {
      if (title.length <= maxLength) {
        return title;
      }

      return title.slice(0, maxLength) + "...";
    }
    // Render related product
    const goesWellContainer =
      document.getElementById("goesWellContainer");

    goesWellContainer.innerHTML = "";

    const mobileGoesWellContainer =
      document.getElementById("mobileGoesWellContainer");

    if (mobileGoesWellContainer) {
      mobileGoesWellContainer.innerHTML = "";
    }

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
          truncateProductTitle(relatedProduct.name, 20) +
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

        if (mobileGoesWellContainer) {
          mobileGoesWellContainer.innerHTML =
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
                truncateProductTitle(relatedProduct.name, 22) +
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

              <button type="button" class="add-to-cart mobile-related-add">
                Add To Cart
              </button>

            </article>
          `;

          const mobileRelatedAddBtn =
            mobileGoesWellContainer.querySelector(".mobile-related-add");

          if (mobileRelatedAddBtn) {
            mobileRelatedAddBtn.addEventListener("click", () => {
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

    const productBuyNow =
      document.getElementById("productBuyNow");

    if (productAddToCart) {
      productAddToCart.addEventListener("click", () => {
        const quantity =
          Number(document.getElementById("quantityNumber").textContent) || 1;

        addProductToCart(currentProduct.id, quantity);

        showCartModal([
          {
            ...currentProduct,
            quantity: quantity
          }
        ]);
      });
    }
    
    function goToBuyNowCheckout() {
      localStorage.setItem(
        "buyNowItem",
        JSON.stringify({
          id: currentProduct.id,
          quantity: 1
        })
      );

      window.location.href = "Checkout.html?mode=buy-now";
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

    // Render mobile intro content in text-image flow
    function renderMobileIntroFlow(containerId, contentData, images, altText) {
      const container = document.getElementById(containerId);

      if (container === null) return;

      container.innerHTML = "";

      const title = document.createElement("h2");
      title.textContent = contentData.title;
      container.appendChild(title);

      contentData.paragraphs.forEach((paragraph, index) => {
        const p = document.createElement("p");
        p.textContent = paragraph;
        container.appendChild(p);

        if (images[index]) {
          const img = document.createElement("img");
          img.src = images[index];
          img.alt = altText + " image " + (index + 1);
          container.appendChild(img);
        }
      });

      if (images.length > contentData.paragraphs.length) {
        images.slice(contentData.paragraphs.length).forEach((image, index) => {
          const img = document.createElement("img");
          img.src = image;
          img.alt = altText + " image " + (index + 1);
          container.appendChild(img);
        });
      }
    }

    renderMobileIntroFlow(
      "mobileDescriptionFlow",
      currentProduct.description,
      currentProduct.images.description,
      currentProduct.name
    );

    renderMobileIntroFlow(
      "mobileApplicationFlow",
      currentProduct.application,
      currentProduct.images.application,
      currentProduct.name
    );

    // —————————— Mobile Product Page ——————————
    const mobileBackBtn =
      document.querySelector(".mobile-product-back");

    const mobileDescriptionToggle =
      document.getElementById("mobileDescriptionToggle");

    const mobileDescriptionBox =
      document.querySelector(".mobile-description-box");

    const mobileBottomAddBtn =
      document.getElementById("mobileBottomAddBtn");

    const mobileBottomBuyBtn =
      document.getElementById("mobileBottomBuyBtn");

      if (productBuyNow) {
        productBuyNow.addEventListener("click", event => {
          event.preventDefault();
          goToBuyNowCheckout();
        });
      }

      if (mobileBottomBuyBtn) {
        mobileBottomBuyBtn.addEventListener("click", event => {
          event.preventDefault();
          goToBuyNowCheckout();
        });
      }

    const mobileCartSheet =
      document.getElementById("mobileCartSheet");

    const mobileSheetClose =
      document.getElementById("mobileSheetClose");

    const mobileSheetImage =
      document.getElementById("mobileSheetImage");

    const mobileSheetPrice =
      document.getElementById("mobileSheetPrice");

    const mobileSheetSize =
      document.getElementById("mobileSheetSize");

    const mobileSheetMinus =
      document.getElementById("mobileSheetMinus");

    const mobileSheetPlus =
      document.getElementById("mobileSheetPlus");

    const mobileSheetQuantity =
      document.getElementById("mobileSheetQuantity");

    const mobileSheetAddBtn =
      document.getElementById("mobileSheetAddBtn");

    let mobileSheetQty = 1;

    // Mobile back button
    if (mobileBackBtn) {
      mobileBackBtn.addEventListener("click", () => {
        window.history.back();
      });
    }

    // Open mobile bottom sheet
    function openMobileCartSheet() {
      if (mobileCartSheet === null) return;

      mobileSheetQty = Number(quantityNumber.textContent) || 1;

      if (mobileSheetImage) {
        mobileSheetImage.src = currentProduct.images.card;
        mobileSheetImage.alt = currentProduct.name;
      }

      if (mobileSheetPrice) {
        mobileSheetPrice.textContent =
          "$" + currentProduct.price.toFixed(2);
      }

      if (mobileSheetSize) {
        mobileSheetSize.textContent = currentProduct.size;
      }

      if (mobileSheetQuantity) {
        mobileSheetQuantity.textContent = mobileSheetQty;
      }

      updateMobileSheetQuantityState();

      mobileCartSheet.classList.add("active");
    }

    // Close mobile bottom sheet
    function closeMobileCartSheet() {
      if (mobileCartSheet === null) return;

      mobileCartSheet.classList.remove("active");
    }

    // Update mobile sheet minus button state
    function updateMobileSheetQuantityState() {
      if (
        mobileSheetMinus === null ||
        mobileSheetQuantity === null
      ) {
        return;
      }

      const leftDivider =
        mobileCartSheet.querySelector(".left-divider");

      mobileSheetQuantity.textContent = mobileSheetQty;

      if (mobileSheetQty <= 1) {
        mobileSheetMinus.disabled = true;

        if (leftDivider) {
          leftDivider.classList.add("disabled");
        }

      } else {
        mobileSheetMinus.disabled = false;

        if (leftDivider) {
          leftDivider.classList.remove("disabled");
        }
      }
    }

    if (mobileBottomAddBtn) {
      mobileBottomAddBtn.addEventListener("click", () => {
        openMobileCartSheet();
      });
    }

    if (mobileSheetClose) {
      mobileSheetClose.addEventListener("click", () => {
        closeMobileCartSheet();
      });
    }

    if (mobileCartSheet) {
      document.addEventListener("click", event => {
        if (!mobileCartSheet.classList.contains("active")) return;

        const clickedInsideSheet =
          mobileCartSheet.contains(event.target);

        const clickedOpenButton =
          mobileBottomAddBtn &&
          mobileBottomAddBtn.contains(event.target);

        if (!clickedInsideSheet && !clickedOpenButton) {
          closeMobileCartSheet();
        }
      }, true);
    }

    if (mobileSheetMinus) {
      mobileSheetMinus.addEventListener("click", () => {
        if (mobileSheetQty > 1) {
          mobileSheetQty--;
          updateMobileSheetQuantityState();
        }
      });
    }

    if (mobileSheetPlus) {
      mobileSheetPlus.addEventListener("click", () => {
        mobileSheetQty++;
        updateMobileSheetQuantityState();
      });
    }

    if (mobileSheetAddBtn) {
      mobileSheetAddBtn.addEventListener("click", () => {
        addProductToCart(currentProduct.id, mobileSheetQty);

        closeMobileCartSheet();

        showCartModal([
          {
            ...currentProduct,
            quantity: mobileSheetQty
          }
        ]);
      });
    }
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

const mobileDescriptionToggle =
  document.getElementById("mobileDescriptionToggle");

const mobileDescriptionBox =
  document.querySelector(".mobile-description-box");

if (mobileDescriptionToggle && mobileDescriptionBox) {
  mobileDescriptionToggle.addEventListener("click", () => {
    const isOpen = mobileDescriptionBox.classList.contains("open");

    if (benefitBox) {
      benefitBox.classList.remove("open");
    }

    if (isOpen) {
      mobileDescriptionBox.classList.remove("open");
    } else {
      mobileDescriptionBox.classList.add("open");
    }
  });
}

if (benefitToggle && benefitBox) {
  benefitToggle.addEventListener("click", () => {
    const mobileDescriptionBox =
      document.querySelector(".mobile-description-box");

    const isOpen = benefitBox.classList.contains("open");

    if (mobileDescriptionBox) {
      mobileDescriptionBox.classList.remove("open");
    }

    if (isOpen) {
      benefitBox.classList.remove("open");
    } else {
      benefitBox.classList.add("open");
    }
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