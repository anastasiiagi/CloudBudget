let mobileBtn = document.querySelector(".mobile-menu");
let mobileMenu = document.querySelector(".mobile-nav");

mobileBtn.addEventListener("click", function () {
    mobileMenu.classList.add("mobile-nav--active");
})