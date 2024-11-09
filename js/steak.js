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
    { date: "11/1", event: "Caius Farm Brewing" },
    { date: "11/2", event: "White Hills Distillery" },
    { date: "11/3", event: "Black Hog Brewing" },
    { date: "11/6-11/10", event: "Tribus Beer Co." },
    { date: "11/12", event: "Quinnipiac" },
    { date: "11/13", event: "Aquilas Nest Vineyards" },
    { date: "11/14", event: "Caius Farm Brewing" },
    { date: "11/15", event: "Tribus Beer Co." },
    { date: "11/16", event: "New England Brewing Co" },
    { date: "11/17", event: "White Hills Distillery" },
    { date: "11/20", event: "The Anchorage Apartments" },
    { date: "11/22", event: "Black Hog Brewing" },
    { date: "11/23", event: "Caius Farm Brewing" },
    { date: "11/30", event: "Sticks For Soldiers" },
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
