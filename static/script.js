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