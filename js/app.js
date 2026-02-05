const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

function openMenu(){
  mobileMenu.classList.add("show");
  burger.setAttribute("aria-expanded", "true");
  mobileMenu.setAttribute("aria-hidden", "false");
}

function closeMobileMenu(){
  mobileMenu.classList.remove("show");
  burger.setAttribute("aria-expanded", "false");
  mobileMenu.setAttribute("aria-hidden", "true");
}

burger.addEventListener("click", openMenu);
closeMenu.addEventListener("click", closeMobileMenu);

mobileMenu.addEventListener("click", (e) => {
  if(e.target === mobileMenu) closeMobileMenu();
});

document.addEventListener("keydown", (e) => {
  if(e.key === "Escape") closeMobileMenu();
});

/* Close menu when clicking a link */
document.querySelectorAll(".mobileMenu__link").forEach(link => {
  link.addEventListener("click", closeMobileMenu);
});
