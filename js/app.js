/* =========================
   app.js
========================= */
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const primaryAuthBtn = document.getElementById("primaryAuthBtn");
const switchModeBtn = document.getElementById("switchMode");
const switchText = document.getElementById("switchText");
const nameField = document.getElementById("nameField");

const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const loginBtn2 = document.getElementById("loginBtn2");
const signupBtn2 = document.getElementById("signupBtn2");

const modalClose = document.getElementById("modalClose");
const authForm = document.getElementById("authForm");

const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

let mode = "signup"; // "signup" | "login"

function openModal(nextMode){
  mode = nextMode;
  renderMode();
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal(){
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function renderMode(){
  if (mode === "signup"){
    modalTitle.textContent = "Sign up";
    modalSubtitle.textContent = "Sign up to explore restaurants and access special features";
    primaryAuthBtn.textContent = "Create account";
    switchText.innerHTML = `Already have an account? <button class="link" type="button" id="switchMode">Log in</button>`;
    nameField.style.display = "grid";
  } else {
    modalTitle.textContent = "Log in";
    modalSubtitle.textContent = "Log in to explore restaurants and access special features";
    primaryAuthBtn.textContent = "Log in";
    switchText.innerHTML = `Don’t have an account? <button class="link" type="button" id="switchMode">Sign up</button>`;
    nameField.style.display = "none";
  }

  // Re-bind the switch button after innerHTML change
  const newSwitch = document.getElementById("switchMode");
  newSwitch.addEventListener("click", () => {
    mode = (mode === "signup") ? "login" : "signup";
    renderMode();
  });
}

// Nav actions
loginBtn?.addEventListener("click", () => openModal("login"));
signupBtn?.addEventListener("click", () => openModal("signup"));
loginBtn2?.addEventListener("click", () => { closeMobileMenu(); openModal("login"); });
signupBtn2?.addEventListener("click", () => { closeMobileMenu(); openModal("signup"); });

modalClose?.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target && e.target.dataset && e.target.dataset.close === "true") closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape"){
    closeModal();
    closeMobileMenu();
  }
});

// Getting started button opens signup
document.getElementById("gettingStarted")?.addEventListener("click", () => openModal("signup"));

// Fake submit
authForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  // Replace with real auth later
  alert(mode === "signup" ? "Account created (demo)!" : "Logged in (demo)!");
  closeModal();
});

// Mobile menu
function openMobileMenu(){
  mobileMenu.classList.add("is-open");
  mobileMenu.setAttribute("aria-hidden", "false");
}
function closeMobileMenu(){
  mobileMenu.classList.remove("is-open");
  mobileMenu.setAttribute("aria-hidden", "true");
}

burger?.addEventListener("click", openMobileMenu);
closeMenu?.addEventListener("click", closeMobileMenu);

// Close menu when clicking outside panel
mobileMenu?.addEventListener("click", (e) => {
  if (e.target === mobileMenu) closeMobileMenu();
});

const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (!nav) return;
  nav.classList.toggle("nav--scrolled", window.scrollY > 10);
});

const pill = document.querySelector(".nav__pill");

window.addEventListener("scroll", () => {
  if (!pill) return;
  pill.classList.toggle("nav__pill--scrolled", window.scrollY > 10);
});
