// click handlers
function handleClick(e) {
  if (e.srcElement.classList[0] == "content-title") return;

  this.nextElementSibling.classList.toggle("active");
  console.log(this.nextElementSibling);
}

document.addEventListener("DOMContentLoaded", function () {
  const openers = [];
  openers.push(...document.querySelectorAll(".content-title"));

  openers.forEach((opener) => {
    opener.addEventListener("click", handleClick);
  });
});
