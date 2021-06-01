const openIcon = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");
const mobileNav = document.querySelector(".mobile-nav");
const mobileMenuLink = document.querySelectorAll(".nav-item");
// const subMenu = document.querySelectorAll(".sub-menu");

openIcon.addEventListener("click", () => {
  mobileNav.classList.remove("menu-close");
  closeIcon.classList.remove("menu-close");
  openIcon.classList.add("menu-close");
});

closeIcon.addEventListener("click", () => {
  mobileNav.classList.add("menu-close");
  // subMenu.classList.add("menu-close");
  closeIcon.classList.add("menu-close");
  openIcon.classList.remove("menu-close");
});

mobileMenuLink.forEach((arr) =>
  arr.addEventListener("click", function (e) {
    // console.log(e.target);
    e.target
      .closest("ul")
      .querySelectorAll(".sub-menu")
      .forEach((thing) => {
        if (
          thing.closest(".nav-item").querySelector(".nav-link") !== e.target
        ) {
          thing.classList.add("menu-close");
        }
      });

    e.target
      .closest(".nav-item")
      .querySelector(".sub-menu")
      .classList.toggle("menu-close");
  })
);

// window.addEventListener("click", function () {
//   mobileNav.classList.add("menu-close");
// });
