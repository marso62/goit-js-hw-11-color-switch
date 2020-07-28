import refs from './js/refs';
import randomIntegerBody from './js/randomInteger';
import './styles.css';

refs.buttonStart.addEventListener(
  'click',
  randomIntegerBody.start.bind(randomIntegerBody),
);
refs.buttonStop.addEventListener(
  'click',
  randomIntegerBody.stop.bind(randomIntegerBody),
);
