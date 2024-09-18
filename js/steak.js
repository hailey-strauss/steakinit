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

// Function to format the schedule into HTML
function formatSchedule(events) {
  return events
    .map((event) => `<p><strong>${event.date}</strong>: ${event.event}</p>`)
    .join("");
}

// Function to show the popup with schedule
function showPopup() {
  const eventSchedule = document.getElementById("event-schedule");
  eventSchedule.innerHTML = formatSchedule(events); // Set the schedule in popup
  popup.style.display = "flex"; // Show the popup
}

// Function to hide the popup
function hidePopup() {
  popup.style.display = "none";
}

// Attach event listener to close button
closeBtn.addEventListener("click", hidePopup);

// Hide popup if user clicks outside of it
window.addEventListener("click", function (event) {
  if (event.target === popup) {
    hidePopup(); // Hide popup if user clicks outside of it
  }
});

// Optional: Show the popup after a delay
setTimeout(showPopup, 3000); // Show popup after 3 seconds

// Schedule data
const events = [
  { date: "9/4-9/8", event: "Tribus (9/7 Octoberfest)" },
  { date: "9/11", event: "Counter" },
  { date: "9/12", event: "Spacecat Brewing" },
  { date: "9/14", event: "Charter Oak Brewing" },
  { date: "9/15", event: "White Hills Distillery" },
  { date: "9/19", event: "Caius Farm Brewing" },
  { date: "9/21", event: "Two Roads Octoberfest" },
  { date: "9/22", event: "Fairfield Food Truck Festival" },
  { date: "9/25-9/29", event: "Tribus" },
];

// Show the popup when the page loads or at a specific time
window.onload = showPopup;
