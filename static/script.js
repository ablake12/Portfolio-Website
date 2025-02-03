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


// Fallback for spotify embeded songs

// document.addEventListener("DOMContentLoaded", () => {
//   function spotifyTimeout(iframe) { // timeout in milliseconds
//     const spotifyHTML = {
//       "spotify-track-1": `<div class="fallback-song"><p class="song-text">Trouble loading the song? Please listen <a href="https://open.spotify.com/track/4fUSETqk4cKrV3CeHIBtfa?si=504647640e644e7b" target="_blank">here</a> instead.</p></div>`,
//       "spotify-track-2": `<div class="fallback-song"><p class="song-text">Trouble loading the song? Please listen <a href="https://open.spotify.com/track/2oap3QptGISyIvwKpnJJId?si=0428e7c9dd154ea3" target="_blank">here</a> instead.</p></div>`,
//       "spotify-track-3": `<div class="fallback-song"><p class="song-text">Trouble loading the song? Please listen <a href="https://open.spotify.com/track/6vmxWfIkL7CjXwwZSUMJ77?si=952cb16dbcf542e1" target="_blank">here</a> instead.</p></div>`,
//       "spotify-track-4": `<div class="fallback-song"><p class="song-text">Trouble loading the song? Please listen <a href="https://open.spotify.com/track/6dFOwtd9iBMERardJvsIxY?si=b3619c286d584a28" target="_blank">here</a> instead.</p></div>`,
//       "spotify-track-5": `<div class="fallback-song"><p class="song-text">Trouble loading the song? Please listen <a href="https://open.spotify.com/track/6dOtVTDdiauQNBQEDOtlAB?si=a19e86d2330945d3" target="_blank">here</a> instead.</p></div>`,
//       "spotify-track-6": `<div class="fallback-song"><p class="song-text">Trouble loading the song? Please listen <a href="https://open.spotify.com/track/3Fwebmu4BzPUpDtPZo0qHb?si=69540d5b065f4429" target="_blank">here</a> instead.</p></div>`,
//       "spotify-track-7": `<div class="fallback-song"><p class="song-text">Trouble loading the song? Please listen <a href="https://open.spotify.com/track/14kyXBpg91RVq8bNRDS1q2?si=3f14788447a74616" target="_blank">here</a> instead.</p></div>`,
//       "spotify-track-8": `<div class="fallback-song"><p class="song-text">Trouble loading the song? Please listen <a href="https://open.spotify.com/track/6LH0tmf42QU4EDFSbTlWvt?si=58553380fc504271" target="_blank">here</a> instead.</p></div>`,
//       "spotify-track-9": `<div class="fallback-song"><p class="song-text">Trouble loading the song? Please listen <a href="https://open.spotify.com/track/5VA4Ispp52EA1sOqzMz3Av?si=9706249405164364" target="_blank">here</a> instead.</p></div>`,
//       "spotify-track-10": `<div class="fallback-song"><p class="song-text">Trouble loading the song? Please listen <a href="https://open.spotify.com/track/6xkryXuiZU360Lngd4sx13?si=b58ed794b534451b" target="_blank">here</a> instead.</p></div>`,
//       "spotify-track-11": `<div class="fallback-song"><p class="song-text">Trouble loading the song? Please listen <a href="https://open.spotify.com/track/7tUEDtHchueeUJTfEFEhii?si=a950cfdbe51c4caa" target="_blank">here</a> instead.</p></div>`,
//       "spotify-track-12": `<div class="fallback-song"><p class="song-text">Unable to load song. Please listen <a href="https://open.spotify.com/track/384TJj6XyHUyNlCbdgm6Sz?si=250c092939a44a09" target="_blank">here</a> instead.</p></div>`
//     };
//     const songsDiv = iframe.parentNode;
//     let loaded = false;
    
//     // Listen for the load event
//     iframe.addEventListener('load', function() {
//       loaded = true;
//     });
//     iframe.addEventListener('error', () => {
//       console.error('Iframe encountered an error');
//     });
//     setTimeout(() => {
//       console.log(iframe.innerHTML);
//       if (iframe.offsetHeight < 50) {
//         iframe.style.display = "none";
//         console.log("boooo");
//         songsDiv.innerHTML = spotifyHTML[iframe.id];
//       }
//       else {
//         console.log("yayyy");
//       }
//     }, 60000);
//   }

//   const iframes = document.querySelectorAll('.songs iframe');
//   iframes.forEach(function(iframe) {
//     spotifyTimeout(iframe);
//   });
// });