$("head").append("<script src='//infoey.github.io/infoey/plugins-rtl.min.js'/>");
var head = document.getElementsByTagName("HEAD")[0];
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "//infoey.github.io/infoey/plugins-rtl.min.css";
head.appendChild(link);
const html = document.querySelector("html");
const daynight = document.querySelector(".night-day");
const input = document.querySelector(".switch");
input.addEventListener("click", (e) => {
  html.classList.toggle("darkmode");
  daynight.classList.toggle("active");
  });
