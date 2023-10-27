'use strict';

Object.defineProperty(Number.prototype, 'tr', {
  get: function () {
    return this.toLocaleString('en-EN', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  },
});

// HTML tag selections
const digits = document.querySelectorAll('.btn');
const bufferElm = document.getElementById('buffer');
const btnCalculate = document.querySelector('#btn--calculate');
const displayElm = document.getElementById('display');

// Starting conditions.
bufferElm.value = '';

const getVal = function (/** @type {any} */ event) {
  bufferElm.value += event.target.value;
};

const calculate = function () {
  /**
   * Eval the string result, truncate it then feed it to container.
   */
  displayElm.innerHTML = eval(bufferElm.value).tr;
};

// Add a handler function for each button to feed a button-related value
// to the buffer's one.
digits.forEach(digit => {
  digit.addEventListener('click', getVal);
});

// Compute the final result.
btnCalculate.addEventListener('click', calculate);
