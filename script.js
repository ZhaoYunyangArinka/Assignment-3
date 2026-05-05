// —————————————————————————————— Global ——————————————————————————————
// —————————— Add to cart button ——————————
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(button => {
  // Binding click event
  button.addEventListener("click", () => {

    // Prevent duplicate clicks
    if (button.classList.contains("added")) return;

    // Add status class
    button.classList.add("added");

    // Modify button content
    button.innerHTML = `
      <span>ADDED</span>
      <svg class="added-check" viewBox="0 0 24 24">
        <polyline 
          points="20 6 9 17 4 12"
          fill="none"
          stroke="currentColor"
          stroke-width="2.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `;
  });
});

// —————————————————————————————— Home Page ——————————————————————————————
// —————————— Most Popular ——————————
// Get main carousel container and control buttons
const carousel = document.getElementById("popularCarousel");
const prevBtn = document.querySelector(".carousel-container .recommend-prev");
const nextBtn = document.querySelector(".carousel-container .recommend-next");

if (carousel && prevBtn && nextBtn) {
  // Convert all carousel items into an array for easier manipulation
  const cards = Array.from(carousel.children);

  // The index of the currently centered card
  let currentIndex = 2;

  // Updates the position of all cards
  function updateCarousel() {
    // Rremove all existing position classes
    cards.forEach(card => {
      card.classList.remove("active-0", "active-1", "active-2", "active-3", "active-4");
    });

    // Assign new positions relative to the current center
    for (let position = -2; position <= 2; position++) {
      // Calculate the correct card index to allow the carousel to loop infinitely
      const cardIndex = (currentIndex + position + cards.length) % cards.length;
      // Convert position into a class name
      const activeClass = "active-" + (position + 2);
      // Control this class through CSS
      cards[cardIndex].classList.add(activeClass);
    }
  }

  // Move carousel to the next item
  nextBtn.addEventListener("click", () => {
    // Update center index
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
  });

  // Move carousel to the previous item
  prevBtn.addEventListener("click", () => {
    // Update center index
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
  });

  updateCarousel();
}

// —————————————————————————————— Search Result ——————————————————————————————
// Obtain the tab button
const resultTabs = document.querySelectorAll(".result-tab");
// Obtain two result panels
const resultPanels = document.querySelectorAll(".result-panel");

// Sort UI elements
const sortBox = document.getElementById("sortBox");
const sortBtn = document.getElementById("sortBtn");
const sortOptionsList = document.getElementById("sortOptions");

// Content areas
const productSection = document.querySelector(".product-section");
const blogSection = document.querySelector(".blog-section");
const recommendSection = document.querySelector(".recommend-section");

// Sorting Option
// Product
const productSortOptions = [
  "Sales",
  "Name: A - Z",
  "Name: Z - A",
  "Price: Low to High",
  "Price: High to Low"
];

// Blog
const blogSortOptions = [
  "Publication Date",
  "Name: A - Z",
  "Name: Z - A"
];


if (resultTabs.length && resultPanels.length && sortBox && sortBtn && sortOptionsList) {

  // —————————— Initial Setup ——————————
  // Save the initial order
  let originalProductCards;
  let originalBlogCards;

  if (productSection) {
    originalProductCards = Array.from(productSection.children);
  } else {
    originalProductCards = [];
  }

  if (blogSection) {
    originalBlogCards = Array.from(blogSection.children);
  } else {
    originalBlogCards = [];
  }
  
  // Currently it is Product
  let currentResultType = "product";

  // —————————— Tab Switching ——————————
  function switchResultTab(targetId) {
    // Active tab highlighted
    resultTabs.forEach(tab => {
      tab.classList.toggle("active", tab.dataset.target === targetId);
    });

    // Switch the display of content
    resultPanels.forEach(panel => {
      panel.classList.toggle("active", panel.id === targetId);
    });

    // Switch sort & recommendations
    if (targetId === "blogResults") {
      currentResultType = "blog";
      renderSortOptions("blog");

      // Blog does not display recommendations
      if (recommendSection) {
        recommendSection.style.display = "none";
      }
    } else {
      currentResultType = "product";
      renderSortOptions("product");

      // Product displays recommendations
      if (recommendSection) {
        recommendSection.style.display = "";
      }
    }
  }

  // —————————— Sort switching logic ——————————
  function renderSortOptions(type) {
    // Based on the current tab, determine which set to use
    let options;

    if (type === "blog") {
      options = blogSortOptions;
    } else {
      options = productSortOptions;
    }
    
    // Display the first item by default
    sortBtn.textContent = options[0];

    // Clear old options
    sortOptionsList.innerHTML = "";

    // Recreate the li element
    options.forEach(optionText => {
      const li = document.createElement("li");
      li.textContent = optionText;
      sortOptionsList.appendChild(li);
    });
  }

  // —————————— Sort sorting logic ——————————
  function sortProducts(selected) {
    if (productSection === null) {
      return;
    }

    let sortedCards = [...originalProductCards];

    if (selected === "Name: A - Z") {
      sortedCards.sort((a, b) => {
        const nameA = a.querySelector("figcaption").textContent.trim();
        const nameB = b.querySelector("figcaption").textContent.trim();
        return nameA.localeCompare(nameB);
      });
    }

    if (selected === "Name: Z - A") {
      sortedCards.sort((a, b) => {
        const nameA = a.querySelector("figcaption").textContent.trim();
        const nameB = b.querySelector("figcaption").textContent.trim();
        return nameB.localeCompare(nameA);
      });
    }

    // Sales: Maintain original order
    if (selected === "Sales") {
      sortedCards = [...originalProductCards];
    }

    if (selected === "Price: Low to High") {
      sortedCards.sort((a, b) => {

        // Remove the $ symbol and extract the price
        const priceA = parseFloat(a.querySelector(".price").textContent.replace("$", ""));
        const priceB = parseFloat(b.querySelector(".price").textContent.replace("$", ""));

        // If the prices are the same, keep the original order
        if (priceA === priceB) {
          return originalProductCards.indexOf(a) - originalProductCards.indexOf(b);
        }

        return priceA - priceB;
      });
    }

    if (selected === "Price: High to Low") {
      sortedCards.sort((a, b) => {

        // Remove the $ symbol and extract the price
        const priceA = parseFloat(a.querySelector(".price").textContent.replace("$", ""));
        const priceB = parseFloat(b.querySelector(".price").textContent.replace("$", ""));

        // If the prices are the same, keep the original order
        if (priceA === priceB) {
          return originalProductCards.indexOf(a) - originalProductCards.indexOf(b);
        }

        return priceB - priceA;
      });
    }

    sortedCards.forEach(card => productSection.appendChild(card));
  }


  // Blog Sorting
  function sortBlogs(selected) {
    if (blogSection === null) {
      return;
    }

    let sortedCards = [...originalBlogCards];

    if (selected === "Publication Date") {
      sortedCards.sort((a, b) => {
        // Extract Date
        const dateA = a.querySelector(".Date").textContent.replace("Publication Date:", "").trim();
        const dateB = b.querySelector(".Date").textContent.replace("Publication Date:", "").trim();

        // Convert to YYYY-MM-DD format and then compare
        return new Date(dateB.split("/").reverse().join("-")) -
               new Date(dateA.split("/").reverse().join("-"));
      });
    }

    if (selected === "Name: A - Z") {
      sortedCards.sort((a, b) => {
        const nameA = a.querySelector("figcaption").textContent.trim();
        const nameB = b.querySelector("figcaption").textContent.trim();
        return nameA.localeCompare(nameB);
      });
    }

    if (selected === "Name: Z - A") {
      sortedCards.sort((a, b) => {
        const nameA = a.querySelector("figcaption").textContent.trim();
        const nameB = b.querySelector("figcaption").textContent.trim();
        return nameB.localeCompare(nameA);
      });
    }

    sortedCards.forEach(card => blogSection.appendChild(card));
  }

  // —————————— Event Binding ——————————
  // Binding of Tab click event
  resultTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      switchResultTab(tab.dataset.target);
    });
  });

  // Sort: Open & Close
  sortBtn.addEventListener("click", event => {
    event.stopPropagation();
    sortBox.classList.toggle("active");
  });

  // Click on the Sort option
  sortOptionsList.addEventListener("click", event => {
    const option = event.target.closest("li");
    if (option === null) {
      return;
    }

    const selected = option.textContent.trim();
    sortBtn.textContent = selected;
    sortBox.classList.remove("active");

    // Sort according to the current tab
    if (currentResultType === "blog") {
      sortBlogs(selected);
    } else {
      sortProducts(selected);
    }
  });

  // Click anywhere else on the page to close the dropdown
  document.addEventListener("click", () => {
    sortBox.classList.remove("active");
  });

  // —————————— Initial State ——————————
  switchResultTab("productResults");
}

// —————————— Recommend carousel ——————————
const recommendProducts = document.querySelector(".recommend-products");
const recommendPrev = document.querySelector(".recommend-prev");
const recommendNext = document.querySelector(".recommend-next");

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

// —————————————————————————————— Product Page ——————————————————————————————
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
const leftDivider = document.querySelector(".left-divider");

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