// click handlers
function handleClick(e) {
  if (e.srcElement.classList[0] == "content-title") return;

  this.nextElementSibling.classList.toggle("active");

  this.children[1].classList.toggle("hidden");
  this.children[2].classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  const openers = [];
  openers.push(...document.querySelectorAll(".content-title"));

  openers.forEach((opener) => {
    opener.addEventListener("click", handleClick);
  });
});
