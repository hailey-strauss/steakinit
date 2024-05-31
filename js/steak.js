// Keep track of previous scroll position
let prevScrollPos = window.pageYOffset;

// Add scroll event listener
window.addEventListener("scroll", function () {
  // Current scroll position
  const currentScrollPos = window.pageYOffset;

  // Check if the user has scrolled up or down
  if (prevScrollPos > currentScrollPos) {
    // User has scrolled up
    document.getElementById("navbar").classList.add("sticky");
  } else {
    // User has scrolled down
    document.getElementById("navbar").classList.remove("sticky");
  }

  // Update previous scroll position
  prevScrollPos = currentScrollPos;
});
