document.addEventListener("DOMContentLoaded", function () {
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

  const popup = document.getElementById("popup");
  if (!popup) {
    console.error("Popup element not found");
  }

  const closeBtn = document.querySelector(".close-btn");
  if (!closeBtn) {
    console.error("Close button element not found");
  }

  function formatSchedule(events) {
    return events
      .map((event) => `<p><strong>${event.date}</strong>: ${event.event}</p>`)
      .join("");
  }

  function showPopup() {
    const eventSchedule = document.getElementById("event-schedule");
    if (eventSchedule) {
      eventSchedule.innerHTML = formatSchedule(events);
      popup.style.display = "flex";
    } else {
      console.error("Event schedule element not found");
    }
  }

  function hidePopup() {
    if (popup) {
      popup.style.display = "none";
    } else {
      console.error("Popup element not found when trying to hide");
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

  setTimeout(() => {
    if (popup) {
      showPopup();
    }
  }, 3000);

  // Updated November events
  const events = [
    { date: "2/1-2/2", event: "Tribus Beer Co" },
    { date: "2/3", event: "University of New Haven" },
    { date: "2/6", event: "Quinnipiac University" },
    { date: "2/8", event: "Black Hog Brewing" },
    { date: "2/9", event: "The Curb Apartments" },
    { date: "2/13", event: "Anchorage Apartments" },
    { date: "2/19-2/23", event: "Tribus Beer Co" },
    { date: "2/28", event: "University of New Haven" },
  ];

  window.onload = () => {
    if (popup) {
      showPopup();
    }
  };
});

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contactForm");
  if (!form) {
    console.error("Contact form element not found");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();

    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");

    xhr.onload = function () {
      if (xhr.status === 200 || xhr.status === 201) {
        alert("Thank you for your message! We'll get back to you soon.");
        form.reset();
      } else {
        alert("Oops! Something went wrong.");
      }
    };

    xhr.onerror = function () {
      alert("Oops! There was an error submitting your form.");
    };

    xhr.send(formData);
  });
});
