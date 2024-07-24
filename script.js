document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

document.getElementById("link1").addEventListener("click", () => {
  scrollToElement(".header");
});

document.getElementById("link2").addEventListener("click", () => {
  scrollToElement(".header", 1);
});

document.getElementById("link3").addEventListener("click", () => {
  scrollToElement(".column");
});
