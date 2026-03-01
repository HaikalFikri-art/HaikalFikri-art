// Loader
window.addEventListener("load", function() {
  document.querySelector(".loader").style.display = "none";
});

// Progress Bar
window.onscroll = function() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.querySelector(".progress-bar").style.width = scrolled + "%";
};

// Custom Cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  if (cursor) {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  }
});

// Dynamic Image Load
const params = new URLSearchParams(window.location.search);
const imgSrc = params.get("img");

if (imgSrc) {
  document.getElementById("dynamic-image").src = imgSrc;
}