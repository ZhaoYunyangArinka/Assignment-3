// —————————————————————————————— Contact Page ——————————————————————————————
const contactPage = document.querySelector(".contact-page");

if (contactPage) {
  const contactForm = document.getElementById("contactForm");

  const firstNameInput = document.getElementById("contactFirstName");
  const lastNameInput = document.getElementById("contactLastName");
  const emailInput = document.getElementById("contactEmail");
  const messageInput = document.getElementById("contactMessage");

  const recommendContainer =
    document.getElementById("contactRecommendProducts");

  // Breadcrumb
  renderBreadcrumb([
    { label: "Home", href: "index.html" },
    { label: "Contact Us" }
  ]);

  // —————————— Floating Label ——————————
  function updateContactFieldState(input) {
    if (input === null) return;

    const field = input.closest(".form-field");

    if (field === null) return;

    if (input.value.trim() !== "") {
      field.classList.add("is-filled");
    } else {
      field.classList.remove("is-filled");
    }
  }

  function setupContactField(input) {
    if (input === null) return;

    const field = input.closest(".form-field");

    if (field === null) return;

    updateContactFieldState(input);

    input.addEventListener("focus", () => {
      field.classList.add("is-focused");
    });

    input.addEventListener("blur", () => {
      field.classList.remove("is-focused");
      updateContactFieldState(input);
      validateContactFieldOnBlur(input);
    });

    input.addEventListener("input", () => {
      updateContactFieldState(input);
      clearContactError(input);
    });
  }

  // —————————— Error Message ——————————
  function showContactError(input, message) {
    if (input === null) return;

    const field = input.closest(".form-field");

    if (field === null) return;

    field.classList.add("has-error");

    const errorText = field.querySelector(".error-message");

    if (errorText) {
      errorText.textContent = message;
    }
  }

  function clearContactError(input) {
    if (input === null) return;

    const field = input.closest(".form-field");

    if (field === null) return;

    field.classList.remove("has-error");

    const errorText = field.querySelector(".error-message");

    if (errorText) {
      errorText.textContent = "";
    }
  }

  // —————————— Validation Helpers ——————————
  function hasNumber(value) {
    for (let i = 0; i < value.length; i++) {
      const character = value[i];

      if (character >= "0" && character <= "9") {
        return true;
      }
    }

    return false;
  }

  function validateName(input, showRequired, requiredMessage) {
    clearContactError(input);

    const value = input.value.trim();

    if (value === "") {
      if (showRequired) {
        showContactError(input, requiredMessage);
      }

      return false;
    }

    if (hasNumber(value)) {
      showContactError(input, "Wrong format");
      return false;
    }

    return true;
  }

  function validateEmail(showRequired) {
    clearContactError(emailInput);

    const value = emailInput.value.trim();

    if (value === "") {
      if (showRequired) {
        showContactError(emailInput, "Please include “@” and a valid email domain");
      }

      return false;
    }

    if (
      value.includes("@") === false ||
      value.includes(".") === false
    ) {
      showContactError(emailInput, "Enter a valid email address");
      return false;
    }

    return true;
  }

  function validateMessage(showRequired) {
    clearContactError(messageInput);

    const value = messageInput.value.trim();

    if (value === "") {
      if (showRequired) {
        showContactError(messageInput, "Please enter message");
      }

      return false;
    }

    return true;
  }

  function validateContactFieldOnBlur(input) {
    if (input === firstNameInput) {
      validateName(firstNameInput, false, "Please enter first name");
    }

    if (input === lastNameInput) {
      validateName(lastNameInput, false, "Please enter last name");
    }

    if (input === emailInput) {
      validateEmail(false);
    }

    if (input === messageInput) {
      validateMessage(false);
    }
  }

  function validateContactForm() {
    let isValid = true;

    if (
      validateName(firstNameInput, true, "Please enter first name") === false
    ) {
      isValid = false;
    }

    if (
      validateName(lastNameInput, true, "Please enter last name") === false
    ) {
      isValid = false;
    }

    if (validateEmail(true) === false) {
      isValid = false;
    }

    if (validateMessage(true) === false) {
      isValid = false;
    }

    return isValid;
  }

  // —————————— Recommend Products ——————————
  function createRecommendCard(product) {
    const article = document.createElement("article");

    article.classList.add("product-card");
    article.dataset.productId = product.id;

    article.innerHTML =
      `
      <a href="Product Page.html?id=` + product.id + `&from=contact">
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

        <p class="price">
          $` + product.price.toFixed(2) + `
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

    const addButton = article.querySelector(".add-to-cart");

    if (addButton) {
      addButton.addEventListener("click", () => {
        addProductToCart(product.id, 1);

        showCartModal([
          {
            ...product,
            quantity: 1
          }
        ]);
      });
    }

    return article;
  }

  function renderContactRecommendations() {
    if (recommendContainer === null) return;

    const recommendIds = [
      "o-ssential-hair-rinse",
      "beach-hair-rinse",
      "dry-leave-in",
      "hair-setting-lotion"
    ];

    recommendContainer.innerHTML = "";

    recommendIds.forEach(id => {
      const product = products.find(product => {
        return product.id === id;
      });

      if (product) {
        recommendContainer.appendChild(createRecommendCard(product));
      }
    });
  }

  // —————————— Submit ——————————
  if (contactForm) {
    contactForm.addEventListener("submit", event => {
      event.preventDefault();

      if (validateContactForm() === false) {
        return;
      }

      contactPage.classList.add("success");

      renderContactRecommendations();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // Initialize fields
  [
    firstNameInput,
    lastNameInput,
    emailInput,
    messageInput
  ].forEach(input => {
    setupContactField(input);
  });
}