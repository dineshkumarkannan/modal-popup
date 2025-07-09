const button = document.getElementById("button");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const backdrop = document.getElementById("modal-backdrop");

function openModal() {
  modal.hidden = false;
  backdrop.hidden = false;
  document.body.style.overflow = "hidden";
  modal.focus();
}

function closeModal() {
  modal.hidden = true;
  backdrop.hidden = true;
  document.body.style.overflow = "";
  button.focus();
}

button.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (!modal.hidden && e.key === "Escape") {
    closeModal();
  }
  // Trap focus inside modal
  if (!modal.hidden && e.key === "Tab") {
    const focusable = modal.querySelectorAll(
      "button, [tabindex]:not([tabindex='-1'])"
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      last.focus();
      e.preventDefault();
    } else if (!e.shiftKey && document.activeElement === last) {
      first.focus();
      e.preventDefault();
    }
  }
});
