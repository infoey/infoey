$("head").append("<link href='//infoey.github.io/infoey/plugins-rtl.min.css' rel='stylesheet'/>");
$("head").append("<script src='//infoey.github.io/infoey/plugins-rtl.min.js'/>");
const html = document.querySelector("html");
const daynight = document.querySelector(".night-day");
const input = document.querySelector(".switch");
input.addEventListener("click", (e) => {
  html.classList.toggle("darkmode");
  daynight.classList.toggle("active");
  });
