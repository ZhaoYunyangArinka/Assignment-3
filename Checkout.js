// —————————————————————————————— Checkout Page ——————————————————————————————
// Check if current page is Checkout page
const checkoutPage = document.querySelector(".checkout-page");

if (checkoutPage) {
  // Get Checkout page elements
  const checkoutItems = document.getElementById("checkoutItems");
  const checkoutCartTitle = document.getElementById("checkoutCartTitle");
  const checkoutSubtotal = document.getElementById("checkoutSubtotal");
  const checkoutShipping = document.getElementById("checkoutShipping");
  const checkoutTotal = document.getElementById("checkoutTotal");
  const payBtn = document.getElementById("payBtn");

  // Payment method elements
  const paymentRadios = document.querySelectorAll("input[name='checkoutPayment']");
  const cardPanel = document.getElementById("cardPanel");
  const paypalPanel = document.getElementById("paypalPanel");
  const applePanel = document.getElementById("applePanel");

  // "Add with this order" section
  const addOrderProduct = document.getElementById("addOrderProduct");
  const seeMoreBtn = document.getElementById("seeMoreBtn");

  // Country and state select elements
  const countryInput = document.getElementById("countryInput");
  const countrySelect = document.getElementById("countrySelect");
  const countrySelectValue = document.getElementById("countrySelectValue");

  const stateSelectField = document.getElementById("stateSelectField");
  const stateInput = document.getElementById("stateInput");
  const stateSelect = document.getElementById("stateSelect");
  const stateSelectValue = document.getElementById("stateSelectValue");

  // State text input for non-Australia countries
  const stateTextField = document.getElementById("stateTextField");
  const stateTextInput = document.getElementById("stateTextInput");

  // Shipping form inputs
  const firstNameInput = document.getElementById("firstNameInput");
  const lastNameInput = document.getElementById("lastNameInput");
  const unitInput = document.getElementById("unitInput");
  const streetNumberInput = document.getElementById("streetNumberInput");
  const streetNameInput = document.getElementById("streetNameInput");
  const suburbInput = document.getElementById("suburbInput");
  const postcodeInput = document.getElementById("postcodeInput");
  const phoneInput = document.getElementById("phoneInput");

  // Card payment inputs
  const cardNumberInput = document.getElementById("cardNumberInput");
  const expiryInput = document.getElementById("expiryInput");
  const securityCodeInput = document.getElementById("securityCodeInput");
  const cardNameInput = document.getElementById("cardNameInput");

  // Shipping fee constant
  const SHIPPING_FEE = 11;

  // Checkout data variables
  let checkoutProducts = getCheckoutProducts();
  let expandedQtyControl = null;
  let addOrderSelected = false;
  let currentCountry = countryInput.value;

  // Phone prefixes for different countries
  const countryPhonePrefixes = {
    "Australia": "+61",
    "China": "+86",
    "New Zealand": "+64",
    "United Kingdom": "+44",
    "United States": "+1",
    "Canada": "+1"
  };

  // Breadcrumb
  renderBreadcrumb([
    { label: "Home", href: "index.html" },
    { label: "Checkout" }
  ]);

  // Get products from shopping cart
  function getCheckoutProducts() {
    return getCart()
      .map(item => {
        const product = products.find(product => product.id === item.id);

        if (!product) return null;

        return {
          ...product,
          quantity: item.quantity
        };
      })
      .filter(product => product !== null);
  }

  function syncCart() {
    const updatedCart = checkoutProducts.map(product => {
      return {
        id: product.id,
        quantity: product.quantity
      };
    });

    saveCart(updatedCart);
  }

  // Save updated cart data
  function updateSummary() {
    const subtotal = checkoutProducts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);

    const shipping = checkoutProducts.length > 0 ? SHIPPING_FEE : 0;
    const total = subtotal + shipping;

    checkoutSubtotal.textContent = "$" + subtotal.toFixed(2);
    checkoutShipping.textContent = "$" + shipping.toFixed(2);
    checkoutTotal.textContent = "$" + total.toFixed(2);
    payBtn.textContent = "Pay $" + total.toFixed(2);
  }

  // —————————— Custom Dropdown ——————————
  // Close all custom dropdown menus
  function closeAllCustomSelects() {
    document.querySelectorAll(".custom-select").forEach(select => {
      select.classList.remove("active");
    });

    document.querySelectorAll(".custom-select-field").forEach(field => {
      field.classList.remove("is-focused");
    });
  }

  // Open selected custom dropdown
  function openCustomSelect(selectElement) {
    closeAllCustomSelects();

    selectElement.classList.add("active");

    const field = selectElement.closest(".form-field");

    if (field) {
      field.classList.add("is-focused");
    }
  }

  // Update selected dropdown option
  function chooseCustomSelectOption(option) {
    const selectElement = option.closest(".custom-select");
    const field = selectElement.closest(".form-field");
    const valueElement = selectElement.querySelector(".custom-select-value");

    const selectedValue = option.dataset.value;
    const selectedText = option.textContent.trim();

    // Update visible selected text
    valueElement.textContent = selectedText;

    // Country dropdown logic
    if (selectElement.id === "countrySelect") {
      countryInput.value = selectedValue;
      updateCountryFields();
      clearError(countryInput);
    }

    // State dropdown logic
    if (selectElement.id === "stateSelect") {
      stateInput.value = selectedValue;
      updateFieldState(stateInput);
      clearError(stateInput);
    }

    // Update floating label state
    if (field) {
      field.classList.add("is-filled");
      field.classList.remove("is-focused");
    }

    // Close dropdown after selection
    closeAllCustomSelects();
  }

  // Dropdown click interactions
  document.addEventListener("click", event => {
    const option = event.target.closest(".custom-select-options li");
    const button = event.target.closest(".custom-select-btn");

    // Select dropdown option
    if (option) {
      event.preventDefault();
      chooseCustomSelectOption(option);
      closeExpandedQuantity();
      return;
    }

    // Open or close dropdown
    if (button) {
      event.preventDefault();

      const selectElement = button.closest(".custom-select");

      if (selectElement.classList.contains("active")) {
        closeAllCustomSelects();
      } else {
        openCustomSelect(selectElement);
      }

      closeExpandedQuantity();
      return;
    }

    // Close dropdown when clicking outside
    closeAllCustomSelects();
    closeExpandedQuantity();
  });

  // —————————— Floating Labels ——————————
  // Update floating label state
  function updateFieldState(input) {
    // Stop if input does not exist
    if (input === null) return;

    const field = input.closest(".form-field");

    // Stop if parent field does not exist
    if (input === null) return;

    // Add "is-filled" class when input has content
    if (input.value.trim() !== "") {
      field.classList.add("is-filled");
    } else {
      // Remove class when input is empty
      field.classList.remove("is-filled");
    }
  }

  // Setup floating label interactions
  function setupFloatingField(input) {
    // Stop if input does not exist
    if (input === null) return;

    const field = input.closest(".form-field");

    // Stop if parent field does not exist
    if (field === null) return;

    // Initialize label state
    updateFieldState(input);

    // Add focus style when input is selected
    input.addEventListener("focus", () => {
      field.classList.add("is-focused");
    });

    // Remove focus style and validate input
    input.addEventListener("blur", () => {
      field.classList.remove("is-focused");
      updateFieldState(input);
      validateFieldOnBlur(input);
    });

    // Update floating label while typin
    input.addEventListener("input", () => {
      updateFieldState(input);
      // Remove error message while typing
      clearError(input);
    });
  }

  // List of inputs using floating labels
  const floatingInputs = [
    countryInput,
    stateInput,
    firstNameInput,
    lastNameInput,
    unitInput,
    streetNumberInput,
    streetNameInput,
    suburbInput,
    stateTextInput,
    postcodeInput,
    phoneInput,
    cardNumberInput,
    expiryInput,
    securityCodeInput,
    cardNameInput
  ];

  // Apply floating label setup to all inputs
  floatingInputs.forEach(input => {
    setupFloatingField(input);
  });

  // —————————— Country & State & Phone ——————————
  // Update phone prefix based on selected country
  function updatePhonePrefix() {
    const phoneField = phoneInput.closest(".phone-field");
    const prefix = phoneField.querySelector(".phone-prefix");

    // Set country phone code
    prefix.textContent = countryPhonePrefixes[countryInput.value] || "";

    // Show prefix when phone input is focused or has value
    if (
      phoneInput.value.trim() !== "" ||
      document.activeElement === phoneInput
    ) {
      phoneField.classList.add("has-prefix");
    } else {
      phoneField.classList.remove("has-prefix");
    }
  }

  // Clear address fields when country changes
  function clearAddressFields() {
    const fieldsToClear = [
      firstNameInput,
      lastNameInput,
      unitInput,
      streetNumberInput,
      streetNameInput,
      suburbInput,
      stateTextInput,
      postcodeInput,
      phoneInput
    ];

    fieldsToClear.forEach(input => {
      input.value = "";
      clearError(input);
      updateFieldState(input);
    });
  }

  // Update state field and phone prefix after country changes
  function updateCountryFields() {

    // Clear address if country has changed
    if (countryInput.value !== currentCountry) {
      clearAddressFields();
      currentCountry = countryInput.value;
    }

     // Australia uses state dropdown
    if (countryInput.value === "Australia") {
      stateSelectField.classList.remove("hidden");
      stateTextField.classList.add("hidden");

      stateTextInput.value = "";
      clearError(stateTextInput);

      stateInput.value = "Victoria";
      stateSelectValue.textContent = "Victoria";
      updateFieldState(stateInput);

    } else {

      // Other countries use text input for state
      stateSelectField.classList.add("hidden");
      stateTextField.classList.remove("hidden");

      stateInput.value = "";
      updateFieldState(stateTextInput);
    }

    updatePhonePrefix();
  }

  // Update phone prefix while typing
  phoneInput.addEventListener("input", () => {
    updatePhonePrefix();
  });

  // Show phone prefix on focus
  phoneInput.addEventListener("focus", () => {
    updatePhonePrefix();
  });

  // Hide phone prefix on blur if input is empty
  phoneInput.addEventListener("blur", () => {
    updatePhonePrefix();
  });

  // —————————— Errors ——————————
  // Show error message for an input field
  function showError(input, message) {
    const field = input.closest(".form-field");

    if (field === null) return;

    field.classList.add("has-error");

    const errorMessage = field.querySelector(".error-message");

    if (errorMessage) {
      errorMessage.textContent = message;
    }
  }

  // Clear error message for an input field
  function clearError(input) {
    if (input === null) return;

    const field = input.closest(".form-field");

    if (!field) return;

    field.classList.remove("has-error");

    const errorMessage = field.querySelector(".error-message");

    if (errorMessage) {
      errorMessage.textContent = "";
    }
  }

  // Check if input is empty
  function isEmpty(input) {
    return input.value.trim() === "";
  }

  // Check if value contains any number
  function hasNumber(value) {

    for (let i = 0; i < value.length; i++) {

      const character = value[i];

      if (
        character >= "0" &&
        character <= "9"
      ) {
        return true;
      }
    }

    return false;
  }

  // Check if value only contains numbers
  function isNumbersOnly(value) {

    if (value.length < 2 || value.length > 30) {
      showError(nameInput, "Name must be 2-30 characters");
      return false;
    }

    for (let i = 0; i < value.length; i++) {

      const character = value[i];

      if (
        character < "0" ||
        character > "9"
      ) {
        return false;
      }
    }

    return true;
  }

  // —————————— Validation ——————————
  // Validate first name
  function validateFirstName(showRequired) {
    clearError(firstNameInput);

    const value = firstNameInput.value.trim();

     // Required check
    if (value === "") {
      if (showRequired) showError(firstNameInput, "Please enter first name");
      return false;
    }

    // First name should not contain numbers
    if (hasNumber(value)) {
      showError(firstNameInput, "Wrong format");
      return false;
    }

    return true;
  }

  // Validate last name
  function validateLastName(showRequired) {
    clearError(lastNameInput);

    const value = lastNameInput.value.trim();

    // Required check
    if (value === "") {
      if (showRequired) showError(lastNameInput, "Please enter last name");
      return false;
    }

    // Last name should not contain numbers
    if (hasNumber(value)) {
      showError(lastNameInput, "Wrong format");
      return false;
    }

    return true;
  }

  // Validate required field only
  function validateRequired(input, showRequired, message) {
    clearError(input);

    if (isEmpty(input)) {
      if (showRequired) showError(input, message);
      return false;
    }

    return true;
  }

  // Validate text field that should not contain numbers
  function validateTextNoNumber(input, showRequired, requiredMessage) {
    clearError(input);

    const value = input.value.trim();

    // Required check
    if (value === "") {
      if (showRequired) showError(input, requiredMessage);
      return false;
    }

    // Text field should not contain numbers
    if (hasNumber(value)) {
      showError(input, "Wrong format");
      return false;
    }

    return true;
  }

  // Validate field that should contain numbers only
  function validateNumberField(input, showRequired, requiredMessage) {
    clearError(input);

    const value = input.value.trim();

    // Required check
    if (value === "") {
      if (showRequired) showError(input, requiredMessage);
      return false;
    }

    // Number-only check
    if (isNumbersOnly(value) === false) {
      showError(input, "Please enter numbers only");
      return false;
    }

    return true;
  }

  // Validate phone number based on selected country
  function validatePhone(showRequired) {
    clearError(phoneInput);

    const value = phoneInput.value.trim();
    const country = countryInput.value;

    // Required check
    if (value === "") {
      if (showRequired) {
        showError(phoneInput, "Please enter phone number");
      }
      return false;
    }

    // Phone number should contain numbers only
    if (isNumbersOnly(value) === false) {
      showError(phoneInput, "Enter a valid phone number");
      return false;
    }

    if (country === "Australia") {
      if (
        (
          value.startsWith("04") === false ||
          value.length !== 10
        ) &&
        (
          value.startsWith("4") === false ||
          value.length !== 9
        )
      ) {
        showError(phoneInput, "Enter a valid phone number");
        return false;
      }

      return true;
    }

    if (country === "China") {
      if (
        value.startsWith("1") === false ||
        value.length !== 11
      ) {
        showError(phoneInput, "Enter a valid phone number");
        return false;
      }

      return true;
    }

    if (country === "New Zealand") {
      if (value.length < 8 || value.length > 10) {
        showError(phoneInput, "Enter a valid phone number");
        return false;
      }

      return true;
    }

    if (country === "United Kingdom") {
      if (value.length !== 10) {
        showError(phoneInput, "Enter a valid phone number");
        return false;
      }

      return true;
    }

    if (
      country === "United States" ||
      country === "Canada"
    ) {
      if (value.length !== 10) {
        showError(phoneInput, "Enter a valid phone number");
        return false;
      }

      return true;
    }

    if (value.length < 6 || value.length > 15) {
      showError(phoneInput, "Enter a valid phone number");
      return false;
    }

    return true;
  }

  // Validate card number
  function validateCardNumber(showRequired) {
    clearError(cardNumberInput);

    const value = cardNumberInput.value.trim();

    // Required check
    if (value === "") {
      if (showRequired) showError(cardNumberInput, "Please enter card number");
      return false;
    }

    // Card number should contain numbers only
    if (isNumbersOnly(value) === false) {
      showError(cardNumberInput, "Please enter numbers only");
      return false;
    }

    // Common card number length range
    if (value.length < 12 || value.length > 19) {
      showError(cardNumberInput, "Wrong format");
      return false;
    }

    return true;
  }

  // Auto-format expiry date as MM / YY
  function formatExpiryInput() {
    let numbers = expiryInput.value.replace(/\D/g, "");

    // Limit to 4 digits
    if (numbers.length > 4) {
      numbers = numbers.slice(0, 4);
    }

    if (numbers.length === 0) {
      expiryInput.value = "";
      return;
    }

    // If first digit is 2–9, automatically add 0 before it
    if (numbers.length === 1) {
      const firstNumber = Number(numbers);

      if (firstNumber >= 2 && firstNumber <= 9) {
        expiryInput.value = "0" + numbers + " / ";
      } else {
        expiryInput.value = numbers;
      }

      return;
    }

    // Format into MM / YY
    const month = numbers.slice(0, 2);
    const year = numbers.slice(2);

    expiryInput.value = month + " / " + year;
  }

  // Allow cleaner backspace behavior for expiry date
  expiryInput.addEventListener("keydown", event => {
    if (
      event.key === "Backspace" &&
      expiryInput.value.endsWith(" / ")
    ) {
      event.preventDefault();

      let numbers = "";

      for (let i = 0; i < expiryInput.value.length; i++) {

        const character = expiryInput.value[i];

        if (
          character >= "0" &&
          character <= "9"
        ) {
          numbers += character;
        }
      }
      expiryInput.value = numbers.slice(0, 1);

      clearError(expiryInput);
      updateFieldState(expiryInput);
    }
  });

  // Format expiry input while typing
  expiryInput.addEventListener("input", () => {
    formatExpiryInput();
    clearError(expiryInput);
    updateFieldState(expiryInput);
  });

  // Validate expiry date
  function validateExpiry(showRequired) {
    clearError(expiryInput);

    const value = expiryInput.value.trim();

    // Required check
    if (value === "") {
      if (showRequired) showError(expiryInput, "Please enter expiration date");
      return false;
    }

    // Format must be MM / YY, month from 01 to 12
    const parts = value.split(" / ");

    if (parts.length !== 2) {
      showError(expiryInput, "Wrong format");
      return false;
    }

    const month = Number(parts[0]);
    const year = parts[1];

    if (
      month < 1 ||
      month > 12 ||
      year.length !== 2 ||
      isNumbersOnly(parts[0]) === false ||
      isNumbersOnly(year) === false
    ) {
      showError(expiryInput, "Wrong format");
      return false;
    }

    return true;
  }

  // Validate security code
  function validateSecurityCode(showRequired) {
    clearError(securityCodeInput);

    const value = securityCodeInput.value.trim();

    // Required check
    if (value === "") {
      if (showRequired) showError(securityCodeInput, "Please enter security code");
      return false;
    }

    // Security code should contain numbers only
    if (isNumbersOnly(value) === false) {
      showError(securityCodeInput, "Please enter numbers only");
      return false;
    }

    // Usually 3 or 4 digits
    if (value.length < 3 || value.length > 4) {
      showError(securityCodeInput, "Wrong format");
      return false;
    }

    return true;
  }

  // Validate name on card
  function validateCardName(showRequired) {
    clearError(cardNameInput);

    const value = cardNameInput.value.trim();

    // Required check
    if (value === "") {
      if (showRequired) showError(cardNameInput, "Please enter name on card");
      return false;
    }

    // Name should not contain numbers
    if (hasNumber(value)) {
      showError(cardNameInput, "Wrong format");
      return false;
    }

    return true;
  }

  // Validate each field after user leaves the input
  function validateFieldOnBlur(input) {
    if (input === firstNameInput) validateFirstName(false);
    if (input === lastNameInput) validateLastName(false);
    if (input === streetNumberInput) validateNumberField(streetNumberInput, false, "Please enter street number");
    if (input === streetNameInput) validateTextNoNumber(streetNameInput, false, "Please enter street name");
    if (input === suburbInput) validateTextNoNumber(suburbInput, false, "Please enter suburb");
    if (input === stateTextInput) validateTextNoNumber(stateTextInput, false, "Please enter state");
    if (input === postcodeInput) validateNumberField(postcodeInput, false, "Please enter postcode");
    if (input === phoneInput) validatePhone(false);
    if (input === cardNumberInput) validateCardNumber(false);
    if (input === expiryInput) validateExpiry(false);
    if (input === securityCodeInput) validateSecurityCode(false);
    if (input === cardNameInput) validateCardName(false);
  }

  // Validate all checkout fields when Pay button is clicked
  function validateCheckoutForm() {
    let isValid = true;

    if (validateFirstName(true) === false) isValid = false;
    if (validateLastName(true) === false) isValid = false;
    if (validateRequired(unitInput, true, "Please enter unit") === false) isValid = false;
    if (validateNumberField(streetNumberInput, true, "Please enter street number") === false) isValid = false;
    if (validateTextNoNumber(streetNameInput, true, "Please enter street name") === false) isValid = false;
    if (validateTextNoNumber(suburbInput, true, "Please enter suburb") === false) isValid = false;
    if (validateNumberField(postcodeInput, true, "Please enter postcode") === false) isValid = false;
    if (validatePhone(true) === false) isValid = false;

    // Australia uses custom state dropdown
    if (countryInput.value === "Australia") {
      if (validateRequired(stateInput, true, "Please select state") === false) {
        isValid = false;
      }
    } else {

      // Other countries use text state input
      if (validateTextNoNumber(stateTextInput, true, "Please enter state") === false) {
        isValid = false;
      }
    }

    const selectedPayment = document.querySelector(
      "input[name='checkoutPayment']:checked"
    ).value;

    // Validate card form only when card payment is selected
    if (selectedPayment === "card") {
      if (validateCardNumber(true) === false) isValid = false;
      if (validateExpiry(true) === false) isValid = false;
      if (validateSecurityCode(true) === false) isValid = false;
      if (validateCardName(true) === false) isValid = false;
    }

    return isValid;
  }

  // —————————— Quantity ——————————
  // Close the expanded quantity controller
  function closeExpandedQuantity() {
    if (expandedQtyControl === null) return;

    const productId = expandedQtyControl.dataset.productId;

    // Find the product currently being edited
    const product = checkoutProducts.find(item => {
      return item.id === productId;
    });

    if (product===null) return;

    // Change quantity controller back to simple "x quantity" text
    const qtyDisplay = document.createElement("span");
    qtyDisplay.classList.add("checkout-qty");
    qtyDisplay.textContent = "x" + product.quantity;

    qtyDisplay.addEventListener("click", event => {
      event.stopPropagation();
      closeExpandedQuantity();
      qtyDisplay.replaceWith(createQuantityControl(product));
    });

    expandedQtyControl.replaceWith(qtyDisplay);
    expandedQtyControl = null;
  }

  // Create quantity controller with minus and plus buttons
  function createQuantityControl(product) {
    const control = document.createElement("div");
    control.classList.add("checkout-qty-control");
    control.dataset.productId = product.id;

    control.innerHTML = `
      <button type="button" class="qty-minus">-</button>
      <span class="checkout-qty-divider left-divider"></span>
      <span class="checkout-qty-number">${product.quantity}</span>
      <span class="checkout-qty-divider"></span>
      <button type="button" class="qty-plus">+</button>
    `;

    const minusBtn = control.querySelector(".qty-minus");
    const plusBtn = control.querySelector(".qty-plus");
    const qtyNumber = control.querySelector(".checkout-qty-number");
    const leftDivider = control.querySelector(".left-divider");

    // Disable minus button when quantity is 1
    function updateDisabledState() {
      if (product.quantity <= 1) {
        minusBtn.disabled = true;
        leftDivider.classList.add("disabled");
      } else {
        minusBtn.disabled = false;
        leftDivider.classList.remove("disabled");
      }
    }

    updateDisabledState();

    // Prevent click from closing the controller
    control.addEventListener("click", event => {
      event.stopPropagation();
    });

    // Decrease quantity
    minusBtn.addEventListener("click", () => {
      if (product.quantity > 1) {
        product.quantity--;
        qtyNumber.textContent = product.quantity;

        updateDisabledState();
        syncCart();
        updateSummary();
      }
    });

    // Increase quantity
    plusBtn.addEventListener("click", () => {
      product.quantity++;
      qtyNumber.textContent = product.quantity;

      updateDisabledState();
      syncCart();
      updateSummary();
    });

    expandedQtyControl = control;

    return control;
  }

  // —————————— Name ——————————
  // Shorten long product names
  function truncateProductName(name) {

    const maxLength = 22;

    if (name.length <= maxLength) {
      return name;
    }

    return name.slice(0, maxLength).trim() + "...";
  }

  // —————————— Card ——————————
  // Render checkout cart items
  function renderCheckoutItems() {
    checkoutItems.innerHTML = "";

    checkoutCartTitle.textContent =
      "Shopping Cart (" + checkoutProducts.length + ")";

    checkoutProducts.forEach(product => {
      const item = document.createElement("article");
      item.classList.add("checkout-item");

      item.innerHTML = `
        <img src="${product.images.card}" alt="${product.name}">

        <section class="checkout-cart-info">
          <section class="checkout-cart-top">
            <h4>${truncateProductName(product.name)}</h4>

            <p class="checkout-cart-size">
              ${product.size}
            </p>
          </section>

          <strong>
            $${product.price.toFixed(2)}
            <span>inc GST</span>
          </strong>
        </section>
      `;

      // Show simple quantity first
      const quantityDisplay = document.createElement("span");
      quantityDisplay.classList.add("checkout-qty");
      quantityDisplay.textContent = "x" + product.quantity;

      // Click quantity to expand controller
      quantityDisplay.addEventListener("click", event => {
        event.stopPropagation();
        closeExpandedQuantity();
        quantityDisplay.replaceWith(createQuantityControl(product));
      });

      item.appendChild(quantityDisplay);
      checkoutItems.appendChild(item);
    });

    updateSummary();
  }

  // —————————— Payment ——————————
  // Show the correct payment panel
  function updatePaymentPanel() {
    const selectedPayment = document.querySelector(
      "input[name='checkoutPayment']:checked"
    ).value;

    // Hide all payment panels first
    cardPanel.classList.remove("active");
    paypalPanel.classList.remove("active");
    applePanel.classList.remove("active");

    // Show selected payment panel
    if (selectedPayment === "card") {
      cardPanel.classList.add("active");
    }

    if (selectedPayment === "paypal") {
      paypalPanel.classList.add("active");
    }

    if (selectedPayment === "applepay") {
      applePanel.classList.add("active");
    }

    // Save selected payment method
    sessionStorage.setItem("selectedPayment", selectedPayment);
  }

  // Load saved payment method from Shopping Cart page
  function setInitialPayment() {
    const savedPayment = sessionStorage.getItem("selectedPayment") || "card";

    paymentRadios.forEach(radio => {
      radio.checked = radio.value === savedPayment;
    });

    updatePaymentPanel();
  }

  // Update panel when user changes payment method
  paymentRadios.forEach(radio => {
    radio.addEventListener("change", updatePaymentPanel);
  });

  // —————————— Add With This Oder ——————————
  // Fixed products shown when clicking See More
  const fixedSeeMoreProducts = [
    "dry-leave-in",
    "hair-setting-lotion",
    "lavender-hair-creme"
  ];

  let seeMoreIndex = 0;

  // Render recommended product
  function renderAddOrderProduct(productId) {
    const product = products.find(product => {
      return product.id === productId;
    });

    if (product === undefined) return;

    addOrderSelected = false;

    addOrderProduct.innerHTML = `
      <article class="add-order-card">
        <img src="${product.images.card}" alt="${product.name}">

        <section class="add-order-info">

          <section class="add-order-top">
            <h3>${product.name}</h3>

            <p class="add-order-size">
              ${product.size}
            </p>
          </section>

          <strong>
            $${product.price.toFixed(2)}
            <span>inc GST</span>
          </strong>

        </section>

        <button type="button" class="add-order-select"></button>
      </article>
    `;

    const addButton = addOrderProduct.querySelector(".add-order-select");

    // Add selected recommended product to checkout cart
    addButton.addEventListener("click", () => {
      if (addOrderSelected) return;

      const existingProduct = checkoutProducts.find(item => {
        return item.id === product.id;
      });

      // If product already exists, increase quantity
      if (existingProduct) {
        existingProduct.quantity++;
      } else {

        // Otherwise add it as a new checkout item
        checkoutProducts.push({
          ...product,
          quantity: 1
        });
      }

      addOrderSelected = true;
      addButton.classList.add("selected");

      syncCart();
      renderCheckoutItems();
    });
  }

  // Show related product based on first cart item
  function renderInitialAddOrder() {
    if (checkoutProducts.length === 0) return;

    const firstProduct = checkoutProducts[0];

    if (
      firstProduct.goesWellWith &&
      firstProduct.goesWellWith.length > 0
    ) {
      renderAddOrderProduct(firstProduct.goesWellWith[0]);
    }
  }

  // Switch to another recommended product
  seeMoreBtn.addEventListener("click", () => {
    const nextProductId = fixedSeeMoreProducts[seeMoreIndex];

    seeMoreIndex =
      (seeMoreIndex + 1) % fixedSeeMoreProducts.length;

    renderAddOrderProduct(nextProductId);
  });

  // Validate form before placing order
  payBtn.addEventListener("click", () => {

    const isValid = validateCheckoutForm();

    if (isValid === false) {
      return;
    }

    const selectedPayment =
      document.querySelector("input[name='checkoutPayment']:checked").value;

    const firstName =
      firstNameInput.value.trim();

    const lastName =
      lastNameInput.value.trim();

    const unit =
      unitInput.value.trim();

    const streetNumber =
      streetNumberInput.value.trim();

    const streetName =
      streetNameInput.value.trim();

    const suburb =
      suburbInput.value.trim();

    let state;

    if (countryInput.value === "Australia") {
      state = stateInput.value.trim();
    } else {
      state = stateTextInput.value.trim();
    }

    const postcode =
      postcodeInput.value.trim();

    const phone =
      phoneInput.value.trim();

    const phonePrefix =
      countryPhonePrefixes[countryInput.value] || "";

    const checkoutInfo = {
      username:
        firstName + " " + lastName,

      phone:
        phonePrefix + " " + phone,

      address:
        unit + "/" + streetNumber + " " + streetName,

      suburb:
        suburb,

      state:
        state,

      postcode:
        postcode,

      country:
        countryInput.value,

      payment:
        selectedPayment
    };

    localStorage.setItem(
      "checkoutInfo",
      JSON.stringify(checkoutInfo)
    );

    window.location.href = "Confirmed.html";
  });

  // Initialize checkout page
  updateCountryFields();
  updatePhonePrefix();
  setInitialPayment();
  renderCheckoutItems();
  renderInitialAddOrder();
}