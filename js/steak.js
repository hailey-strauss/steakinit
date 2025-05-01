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

  // Updated events
  const events = [
    { date: "5/1", event: "Tribus Beer Co" },
    { date: "5/2-5/3", event: "Stamford Beer Garden" },
    { date: "5/6", event: "The Curb Apartments" },
    { date: "5/7", event: "Stamford Beer Garden" },
    { date: "5/9", event: "Charter Oak Brewing" },
    { date: "5/10", event: "Black Hog Brewing" },
    { date: "5/14-5/15", event: "Aquilas Nest Vineyards" },
    { date: "5/16", event: "Caius Farm Brewing" },
    { date: "5/17-5/18", event: "Stamford Beer Garden" },
    { date: "5/20", event: "The Curb Apartments" },
    { date: "5/21", event: "Tribus Beer Co" },
    { date: "5/23", event: "Stamford Beer Garden" },
    { date: "5/24", event: "Caius Farm Brewery" },
    { date: "5/25", event: "Aquilas Nest Vineyards" },
    { date: "5/28", event: "Stamford Beer Garden" },
    { date: "5/30-5/31", event: "Shelton Food Trucks on the River" },
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
