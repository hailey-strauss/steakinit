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

  // Video playback functionality
  const video = document.getElementById("myVideo");

  // Function to detect mobile devices
  function isMobileDevice() {
    return (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    );
  }

  // Function to detect Chrome mobile
  function isChromeMobile() {
    return (
      /Android/i.test(navigator.userAgent) &&
      /Chrome/i.test(navigator.userAgent)
    );
  }

  if (video) {
    video.muted = true;
    video.loop = true;
    video.playsinline = true;

    // Handle Chrome mobile specifically
    if (isChromeMobile()) {
      // Add a click handler for Chrome mobile
      document.body.addEventListener(
        "click",
        function (e) {
          if (e.target !== video) {
            // First click anywhere will try to play the video
            video.play().catch(() => {});
          }
        },
        { once: true }
      );
    } else if (isMobileDevice()) {
      // For other mobile devices
      video.play().catch((error) => {
        // Try again after a delay
        setTimeout(() => {
          video.play().catch(() => {});
        }, 1000);
      });

      // Add touchstart handler
      document.addEventListener(
        "touchstart",
        function () {
          video.play().catch(() => {});
        },
        { once: true }
      );
    } else {
      // For desktop
      video.play().catch(() => {});
    }

    // Add a click handler for the video element itself
    video.addEventListener("click", function () {
      video.play().catch(() => {});
    });
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
