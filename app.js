// this one is jut to wait for the page to load
document.addEventListener("DOMContentLoaded", () => {
  const themeStylesheet = document.getElementById("theme");
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    // if it's light -> go dark
    if (themeStylesheet.href.includes("light")) {
      themeStylesheet.href = "css/dark-theme.css";
      themeToggle.innerText = "Switch to light mode";
    } else {
      // if it's dark -> go light
      themeStylesheet.href = "css/light-theme.css";
      themeToggle.innerText = "Switch to dark mode";
    }
  });
});

// hamburger function

function myFunction() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
