function themeToggle() {
  const theme = localStorage.getItem("theme");

  if (theme == null || theme == "light") {
    document.body.className = "";
    document.documentElement.classList.remove("dark");
  } else {
    document.body.className =
      "dark:bg-gray-900 dark:text-gray-200 transition-color duration-400";
    document.documentElement.classList.add("dark");
  }
}
themeToggle();
