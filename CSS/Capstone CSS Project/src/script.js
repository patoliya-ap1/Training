const documentEle = document.documentElement;
const themeToggle = document.querySelector("#themeToggle");

themeToggle.addEventListener("click", () => {
  if (!documentEle.classList.contains("dark")) {
    documentEle.classList.add("dark");
    themeToggle.textContent = "☀️";
  } else {
    documentEle.classList.remove("dark");
    themeToggle.textContent = "🌙";
  }
});
