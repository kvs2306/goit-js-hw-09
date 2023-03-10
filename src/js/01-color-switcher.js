const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const bgdBody = document.querySelector('body');

let changeInterval = null;

btnStart.addEventListener('click', () => {
  changeInterval = setInterval(changeColor, 1000);
  btnStart.disabled = true;
  btnStop.disabled = false;
});

btnStop.addEventListener('click', () => {
  clearInterval(changeInterval);
  btnStop.disabled = true;
  btnStart.disabled = false;
});

function changeColor() {
  bgdBody.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
