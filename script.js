const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);
generateJoke();
function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke;
    });
}
window.onload = function () {
  const btn = document.querySelector("#jokeBtn");
  const circle = document.querySelector(".circle");
  jokeBtn.addEventListener("click", changeColor);
};

let colorIndex = 0;
const colors = ["#643B9F", "#8AE3A8", "#E3ACDE", "#FFD1DC"];
const btnColors = ["#967A94", "#20912D", "#FF66CC", "#DE5D83"];

function changeColor() {
  colorIndex++;
  if (colorIndex >= colors.length) {
    colorIndex = 0; // Circle back to the start
  }
  document.body.style.backgroundColor = colors[colorIndex];
  document.querySelector(".circle").style.backgroundColor = colors[colorIndex];
  document.getElementById("jokeBtn").style.backgroundColor =
    btnColors[colorIndex];
}
