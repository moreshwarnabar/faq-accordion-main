let prevThis;

// click handlers
function handleClick(e) {
  if (e.srcElement.classList[0] == "content-title") return;

  if (
    prevThis &&
    prevThis.nextElementSibling != this.nextElementSibling &&
    prevThis.nextElementSibling.classList.contains("active")
  ) {
    prevThis.nextElementSibling.classList.remove("active");
    prevThis.children[1].classList.remove("hidden");
    prevThis.children[2].classList.add("hidden");
  }

  this.nextElementSibling.classList.toggle("active");

  this.children[1].classList.toggle("hidden");
  this.children[2].classList.toggle("hidden");

  prevThis = this;
}

document.addEventListener("DOMContentLoaded", function () {
  const openers = [];
  openers.push(...document.querySelectorAll(".content-title"));

  openers.forEach((opener) => {
    opener.addEventListener("click", handleClick);
  });
});
