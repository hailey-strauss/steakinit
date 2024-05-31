window.addEventListener("scroll", function () {
  // code to be executed when user scrolls
});

// keep track of previous scroll position
let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", function () {
  // current scroll position
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    document.querySelector(".navbar").classList.add("show");
  } else {
    // user has scrolled down
    document.querySelector(".navbar").classList.remove("show");
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
});
