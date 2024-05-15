document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
      document.getElementById("container").style.display = "block";
      document.querySelector(".loader-container").style.display = "none";
  }, 5000); // 5 seconds delay
});


/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
  } else {
      menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
  ) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
  } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
  }
}

// Typing
var typingEffect = new Typed(".typedText", {
  strings: ["Designer", "Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });
sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header", {});

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute("id");

      if (
          scrollY > sectionTop &&
          scrollY <= sectionTop + sectionHeight
      ) {
          document
              .querySelector(".nav-menu a[href*=" + sectionId + "]")
              .classList.add("active-link");
      } else {
          document
              .querySelector(".nav-menu a[href*=" + sectionId + "]")
              .classList.remove("active-link");
      }
  });
}

window.addEventListener("scroll", scrollActive);



document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("downloadCVButton").addEventListener("click", function (event) {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Retrieve the href attribute of the anchor
      var cvUrl = this.getAttribute("href");

      // Create a temporary link element
      var link = document.createElement("a");
      link.href = cvUrl;
      link.setAttribute("download", "Aditya CV.pdf"); // Set the download attribute and file name
      link.style.display = "none"; // Hide the link
      document.body.appendChild(link); // Append the link to the document body
      link.click(); // Trigger the click event on the link
      document.body.removeChild(link); // Remove the link from the document body after download
  });
});
