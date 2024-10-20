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
// Function to handle form submission
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contactForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    var formData = new FormData(form); // Get form data
    var xhr = new XMLHttpRequest(); // Create new XMLHttpRequest

    // Setup the request
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");

    // Define what happens on successful data submission
    xhr.onload = function () {
      if (xhr.status === 200 || xhr.status === 201) {
        // If successful, display a success message
        alert("Thank you for your message! We'll get back to you soon.");
        form.reset(); // Optionally, reset the form
      } else {
        // If there's an error, display the error message
        alert("Oops! Something went wrong.");
      }
    };

    // Define what happens in case of an error
    xhr.onerror = function () {
      // If there's an error, display the error message
      alert("Oops! There was an error submitting your form.");
    };

    // Send the form data
    xhr.send(formData);
  });
});
