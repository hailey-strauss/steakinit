document.addEventListener("DOMContentLoaded", function () {
  // Your existing JavaScript code
  let prevScrollPos = window.pageYOffset;

  window.addEventListener("scroll", function () {
    const currentScrollPos = window.pageYOffset;
    const navbar = document.getElementById("navbar");

    if (navbar) {
      if (prevScrollPos > currentScrollPos) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    } else {
      console.error("Navbar element not found");
    }

    prevScrollPos = currentScrollPos;
  });

  // Get the popup element
  const popup = document.getElementById("popup");
  const closeBtn = document.querySelector(".close-btn");
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
    if (eventSchedule) {
      eventSchedule.innerHTML = formatSchedule(events);
      popup.style.display = "flex";
    }
  }

  function hidePopup() {
    if (popup) {
      popup.style.display = "none";
    }
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", hidePopup);
  }

  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      hidePopup();
    }
  });

  setTimeout(showPopup, 3000);
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

  window.onload = showPopup;
});
