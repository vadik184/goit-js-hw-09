import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
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
startButton.setAttribute('disabled', true);
// function getDate(event) {
//     let selectedDate = ;

// }
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
flatpickr('#datetime-picker', options);
console.log(timer);
