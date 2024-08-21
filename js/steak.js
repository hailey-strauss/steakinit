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
// Get the popup element
const popup = document.getElementById("popup");
// Get the close button element
const closeBtn = document.querySelector(".close-btn");
// Get the offer button (optional if you need an additional action)
const claimOfferBtn = document.getElementById("claim-offer");

// Function to show the popup
function showPopup() {
  popup.style.display = "flex"; // Display the popup using flexbox
}

// Function to hide the popup
function hidePopup() {
  popup.style.display = "none";
}

// Event listeners
closeBtn.addEventListener("click", hidePopup);
window.addEventListener("click", function (event) {
  if (event.target === popup) {
    hidePopup(); // Hide popup if user clicks outside of it
  }
});

// Optional: Show the popup after a delay
setTimeout(showPopup, 3000); // Show popup after 3 seconds
