const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const overlay = document.getElementById("menuOverlay");

function toggleMenu(open) {
  menu.classList.toggle("is-open", open);
  overlay.classList.toggle("is-open", open);
  menuBtn.classList.toggle("is-open", open);
  menuBtn.setAttribute("aria-expanded", open);
  menu.setAttribute("aria-hidden", !open);
  document.body.style.overflow = open ? "hidden" : "";
}

menuBtn.addEventListener("click", () => {
  toggleMenu(!menu.classList.contains("is-open"));
});

overlay.addEventListener("click", () => toggleMenu(false));

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => toggleMenu(false));
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") toggleMenu(false);
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();