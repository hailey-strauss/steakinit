document.addEventListener("DOMContentLoaded", function () {
  // Function to toggle the navigation menu
  function toggleMenu() {
    const dropdown = document.getElementById("myDropdown");
    const overlay = document.querySelector(".overlay");
    const hamburger = document.querySelector(".hamburger-menu");

    console.log("Menu toggle function triggered");
    console.log("Dropdown:", dropdown);
    console.log("Overlay:", overlay);
    console.log("Hamburger:", hamburger);

    if (dropdown && overlay && hamburger) {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
        overlay.classList.remove("active");
        hamburger.classList.remove("active");
      } else {
        dropdown.classList.add("show");
        overlay.classList.add("active");
        hamburger.classList.add("active");
      }
    } else {
      console.error("Dropdown, Overlay, or Hamburger element is missing");
    }
  }

  // Attach the toggleMenu function to the hamburger menu click
  const hamburger = document.querySelector(".hamburger-menu");
  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  } else {
    console.error("Hamburger menu element not found");
  }

  // Other code remains unchanged
});
