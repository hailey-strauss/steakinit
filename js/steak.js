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
  // const events = [
  //   { date: "6/10", event: "The Curb Apartments" },
  //   { date: "6/11", event: "Aquilas Nest Vineyards" },
  //   { date: "6/12", event: "Black Hog Brewing" },
  //   { date: "6/13", event: "Aquilas Nest Vineyards" },
  //   { date: "6/14", event: "Stamford Beer Garden" },
  //   { date: "6/15", event: "Aquilas Nest Vineyards" },
  //   { date: "6/17", event: "Private Event" },
  //   { date: "6/18", event: "Aquilas Nest Vineyards" },
  //   { date: "6/19–6/22", event: "Tribus Beer Co" },
  //   { date: "6/24", event: "The Curb Apartments" },
  //   { date: "6/25", event: "Stamford Beer Garden" },
  //   { date: "6/26", event: "Twelve Percent Beer Project" },
  //   { date: "6/27", event: "Caius Farm Brewing" },
  //   { date: "6/28", event: "Stony Creek Brewery" },
  //   { date: "6/29", event: "Charger Oak Brewing" },
  // ];

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
