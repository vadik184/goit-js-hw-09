import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';
const form = document.querySelector('.form');
console.log(form);
let {
  elements: { delay, step, amount },
} = form;

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

const getPromises = evt => {
  evt.preventDefault();
  let delayValue = Number(delay.value);
  let stepValue = Number(step.value);
  let amountVlaue = Number(amount.value);

  for (let position = 0; position < amountVlaue; position += 1) {
    setTimeout(
      run () => createPromise(position + 1, (delayValue += stepValue)),
      (delayValue + position * stepValue)
    );
  }
};
form.addEventListener('submit', getPromises);
