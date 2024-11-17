'use strict';

{
  function generatePassword() {
    const result = document.getElementById('result');
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let password = '';
    let seed = letters + letters.toUpperCase();

    if (numbersCheckbox.checked === true) {
      seed += numbers;
    }

    if (symbolsCheckbox.checked === true) {
      seed += symbols;
    }

    for (let i = 0; i < slider.value; i++) {
      password += seed[Math.floor(Math.random() * seed.length)];
    }

    result.textContent = password;
  }

  const slider = document.getElementById('slider');
  const generate = document.getElementById('generate');
  const numbersCheckbox = document.getElementById('numbers');
  const symbolsCheckbox = document.getElementById('symbols');

  slider.addEventListener('input', () => {
    const passwordLength = document.getElementById('password-length');
    passwordLength.textContent = slider.value;
  });

  generate.addEventListener('click', () => {
    generatePassword();
  });

  generatePassword();
}
