import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const buttonStart = document.querySelector('button[data-action="start"]');
const buttonStop = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');

buttonStart.addEventListener('click', start);
buttonStop.addEventListener('click', stop);

let colorId = false;

function start() {
  if (colorId) {
    return;
  }
  colorId = true;
  colorId = setInterval(() => {
    body.style = `background-color: ${
      colors[randomIntegerFromInterval(0, colors.length - 1)]
    }`;
  }, 1000);
}
function stop() {
  clearInterval(colorId);
  colorId = false;
}
