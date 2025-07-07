const collapseBtn = document.querySelector('.mobile-nav-toggle');// select icon for mobile nav

function mobileNavCollapse() {
  document.querySelector('body').classList.toggle('mobile-nav-active');// toggle html body when in collapse mode
  collapseBtn.classList.toggle('bi-x'); // toggle exit icon when in collapse mode
  collapseBtn.classList.toggle('bi-list');// toggle list icon when in collapse mode
}

// Get scroll button
let topBtn = document.getElementById("scroll-top"); // retrieve scroll top icon

// Show the button at 100px down the page
window.onscroll = function() {
  onScroll()
};

function onScroll() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";// Display once the page scrolls to 100px
  } else {
    topBtn.style.display = "none"; // Don't display if it's at the top
  }
}

// When button is clicked go to top of the page
function goToTop() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome
}

// Handling resume for mobile view
function mobileResume() {
  const width = window.screen.width; // Width of the screen in pixels
  const resumeUrl = document.querySelector(".desktop-resume");
  const activeResumeUrl = document.querySelector(".active .desktop-resume");
  if (resumeUrl || activeResumeUrl) {
    if (width <= 499) {
      resumeUrl.href = "static/resume.pdf";
      resumeUrl.target = "_blank";
      console.log("Updated href to resume.pdf");
    }
  }
}
document.addEventListener("DOMContentLoaded", () => {
  mobileResume();
});
document.addEventListener("resume", mobileResume)

// Fallback for Resume
document.addEventListener("DOMContentLoaded", () => {
  const pdfViewer = document.getElementById("pdf");
  const pdfText = document.getElementById("pdf-text");

  console.log(document.readyState)

  // Set a timeout to check if the PDF iframe has loaded
  setTimeout(() => {
    // Check if the iframe is still empty or failed to load
  if (pdfViewer){ // if not null
    if (pdfViewer.contentDocument.body.childElementCount === 0 || !pdfViewer.contentDocument) {
      pdfViewer.style.display = "none"; // Hide iframe
      pdfText.style.display = "block"; // Show fallback
    }
  }
  }, 200); // 2 seconds timeout for load detection
});

// Add increased timeout for spotify embeds
document.addEventListener("DOMContentLoaded", () => {
  function spotifyTimeout(iframe) {
    setTimeout(() => {// attempt to increase timeout for spotify embeds to load
      console.log("Checking " + iframe.id + " after 60 seconds");
    }, 60000);
  }

  const iframes = document.querySelectorAll('.songs iframe');
  iframes.forEach(function(iframe) {
    spotifyTimeout(iframe);
  });
});