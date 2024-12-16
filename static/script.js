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