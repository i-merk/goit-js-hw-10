import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const form = event.target;
  const delay = parseInt(form.elements['delay'].value, 10);
  const state = form.elements['state'].value;

  // Функція для створення промісу
  function createPromise(delay, shouldResolve) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });
  }

  // Вибираємо, виконувати проміс чи відхиляти
  const shouldResolve = state === 'fulfilled';

  createPromise(delay, shouldResolve)
    .then((delay) => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
});
