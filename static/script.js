// document.addEventListener('DOMContentLoaded', function () {
//     const toggle = document.querySelector('.navbar-header a'); // Your toggle link
//     const collapsibleMenu = document.querySelector('.navbar-collapse');

//     toggle.addEventListener('click', function (event) {
//         event.preventDefault(); // Prevent the link's default behavior
//         collapsibleMenu.classList.toggle('show'); // Toggle the visibility
//     });
// });

const collapseBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    collapseBtn.classList.toggle('bi-x');
    collapseBtn.classList.toggle('bi-list');
  }
  collapseBtn.addEventListener('click', mobileNavToogle);


// Get scroll button
let topBtn = document.getElementById("scroll-top");

// Show the button at 100px down the page
window.onscroll = function() {
  onScroll()
};

function onScroll() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

// When button is clicked go to top of the page
function goToTop() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome
}