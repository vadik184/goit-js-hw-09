import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const timerItems = document.querySelectorAll('.field');
timerItems.forEach(element => {
  element.style.display = 'flex';
  element.style.flexDirection = 'column';
  element.style.justifyContent = 'center';
  element.style.alignItems = 'center';
});
const timerNubers = document.querySelectorAll('.value');
timerNubers.forEach(element => {
  element.style.fontSize = '40px';
  element.style.fontWeight = '500';
});
const timerNames = document.querySelectorAll('.label');
timerNames.forEach(element => {
  element.style.textTransform = 'uppercase';
});
const displayTimer = document.querySelector('.timer');
displayTimer.style.display = 'flex';
displayTimer.style.gap = '40px';
const startButton = document.querySelector('button[data-start]');
startButton.disabled = true;

const timer = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    getSelectedDate(selectedDates[0]);
  },
};

let timerInterval;
let selectedDate;

flatpickr('#datetime-picker', options);

function getSelectedDate(date) {
  date = new Date(date);
  let currentDate = new Date();
  if (date.getTime() <= currentDate.getTime()) {
    Notiflix.Notify.failure('Please choose a date in the future', {
      timeout: 5000,
    });
    return;
  } else {
    startButton.disabled = false;
    selectedDate = date.getTime();
  }
  selectedDate = date;
  console.log(currentDate);
  console.log(currentDate.getTime());
}
const addLeadingZero = value => value.toString().padStart(2, '0');

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function startCoundown() {
  startButton.disabled = true;

  timerInterval = setInterval(() => {
    let currentDate = new Date();
    if (selectedDate <= currentDate.getTime()) {
      clearInterval(timerInterval);
      return;
    }
    let countdown = convertMs(selectedDate - currentDate.getTime());
    timer.days.textContent = addLeadingZero(countdown.days);
    timer.hours.textContent = addLeadingZero(countdown.hours);
    timer.minutes.textContent = addLeadingZero(countdown.minutes);
    timer.seconds.textContent = addLeadingZero(countdown.seconds);
  }, 1000);
}
startButton.addEventListener('click', startCoundown);

console.log(timer);
console.log(options.defaultDate);
