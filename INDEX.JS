// Smooth scroll for "Order Now" button
document.addEventListener("DOMContentLoaded", function () {
  const orderBtn = document.querySelector(".order-btn");

  if (orderBtn) {
    orderBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const menuSection = document.querySelector("#menu");
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
