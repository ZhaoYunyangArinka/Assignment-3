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