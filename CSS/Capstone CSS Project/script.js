const mobileNavbar = document.querySelector("#mobileNav");
const navBarToggle = document.querySelector("#navBarToggle");

navBarToggle.addEventListener("click", () => {
  const allClass = mobileNavbar.className;
  console.log(allClass.includes("hide-navbar"));
  if (allClass.includes("hide-navbar")) {
    mobileNavbar.className = "navbar-mobile show-navbar";
  } else {
    mobileNavbar.className = "navbar-mobile hide-navbar";
  }
});
