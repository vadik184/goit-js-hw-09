function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyColor = document.querySelector('body');
const buttonStart = document.querySelector('button');
const buttonStop = document.querySelector('button[data-stop]');
let colorTimerId;
buttonStop.setAttribute('disabled', true);
console.log(buttonStart);

buttonStart.addEventListener('click', function (event) {
  colorTimerId = setInterval(() => {
    bodyColor.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
  buttonStart.setAttribute('disabled', true);
  buttonStop.removeAttribute('disabled');
});
buttonStop.addEventListener('click', stopChange);
function stopChange() {
  clearInterval(colorTimerId);
  buttonStop.setAttribute('disabled', true);
  buttonStart.removeAttribute('disabled');
}
