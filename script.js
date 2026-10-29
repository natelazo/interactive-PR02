const modal = document.getElementById("discount-modal");
const overlay = document.getElementById("overlay");
const closeModalButtons = document.querySelectorAll("[data-close-button]");

window.addEventListener("load", () => {
  setTimeout(() => {
    openModal(modal);
  }, 2500);
});

overlay.addEventListener("click", () => {
  closeModal(modal);
});

function openModal(modal) {
  if (modal == null) return;

  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;

  modal.classList.remove("active");
  overlay.classList.remove("active");
}