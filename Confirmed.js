// —————————————————————————————— Confirmed Page ——————————————————————————————
const confirmedPage = document.querySelector(".confirmed-page");

if (confirmedPage) {

  const savedCheckoutInfo =
    JSON.parse(localStorage.getItem("checkoutInfo"));

  const confirmedCart =
    getCart();

  const successAddress =
    document.getElementById("successAddress");

  const successUserName =
    document.getElementById("successUserName");

  const successPhone =
    document.getElementById("successPhone");

  const successItemCount =
    document.getElementById("successItemCount");

  const estimatedDelivery =
    document.getElementById("estimatedDelivery");

  const successAmountPaid =
    document.getElementById("successAmountPaid");

  const successOrderNumber =
  document.getElementById("successOrderNumber");

  const confirmedImageList =
    document.getElementById("confirmedImageList");

  // —————————— Checkout Info ——————————
  if (savedCheckoutInfo) {

    const fullAddress =
      savedCheckoutInfo.address +
      ", " +
      savedCheckoutInfo.suburb +
      ", " +
      savedCheckoutInfo.state +
      " " +
      savedCheckoutInfo.postcode +
      " " +
      savedCheckoutInfo.country;

    successAddress.textContent =
      fullAddress;

    successUserName.textContent =
      savedCheckoutInfo.username;

    successPhone.textContent =
      savedCheckoutInfo.phone;
  }

  // —————————— Item Number ——————————
  let totalItemNumber = 0;

  confirmedCart.forEach(item => {
    totalItemNumber += item.quantity;
  });

  successItemCount.textContent =
    totalItemNumber;

  // —————————— Order Number ——————————
  const now = new Date();

  const year =
    now.getFullYear();

  const month =
    String(now.getMonth() + 1).padStart(2, "0");

  const day =
    String(now.getDate()).padStart(2, "0");

  const randomNumber =
    Math.floor(Math.random() * 900 + 100);

  const orderNumber =
    "#KM" +
    year +
    month +
    day +
    randomNumber;

  successOrderNumber.textContent =
    orderNumber;

  // —————————— Amount Paid ——————————
  let subtotal = 0;

  confirmedCart.forEach(item => {

    const product =
      products.find(product => {
        return product.id === item.id;
      });

    if (product) {
      subtotal +=
        product.price * item.quantity;
    }

  });

  const shipping =
    confirmedCart.length > 0 ? 11 : 0;

  const totalPaid =
    subtotal + shipping;

  successAmountPaid.textContent =
    "$" + totalPaid.toFixed(2);

  // —————————— Estimated Delivery ——————————
  const deliveryDate =
    new Date();

  deliveryDate.setDate(
    deliveryDate.getDate() + 7
  );

  estimatedDelivery.textContent =
    deliveryDate.toLocaleDateString("en-AU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });

  // —————————— Product Images ——————————
  const orderedProducts =
    confirmedCart
      .map(item => {

        return products.find(product => {
          return product.id === item.id;
        });

      })
      .filter(product => {
        return product !== undefined;
      });

  confirmedImageList.innerHTML = "";

  orderedProducts
    .slice(0, 2)
    .forEach(product => {

      const img =
        document.createElement("img");

      img.src =
        product.images.card;

      img.alt =
        product.name;

      confirmedImageList.appendChild(img);

    });

  // —————————— Clear Cart ——————————
  localStorage.removeItem("shoppingCart");
}