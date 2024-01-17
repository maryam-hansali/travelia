const body = document.querySelector("body");
const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", () => {
  preloader.classList.add("remove");
});

const addEventOnelement = function (elements, eventType, callback) {
  elements.addEventListener(eventType, callback);
};
// ===== navbar toggler for mobile ====//
const navbar = document.querySelector("[data-navbar]");
const open_menu = document.querySelector(".open_menu");
const overlay = document.querySelector(".overlay");
const togglerActive = function () {
  navbar.classList.add("active");
  overlay.classList.add("active");
  body.classList.add("nav-active");
};
addEventOnelement(open_menu, "click", togglerActive);
// ======= remove navbar =====//
const close_btn = document.querySelector(".close-btn-menu");
function removeNavbar() {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  body.classList.remove("nav-active");
}
addEventOnelement(close_btn, "click", removeNavbar);
// ===== header ========//
const header = document.querySelector("[data-header]");
function headerShow() {
  header.classList[window.scrollY > 1014 ? "add" : "remove"]("active");
}
window.addEventListener("scroll", headerShow);
