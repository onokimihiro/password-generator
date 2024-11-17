export function passwordGenerator() {
  // 文字列の先頭を大文字にする
  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // パスワード生成
  function generatePassword() {
    const result = document.getElementById('result') as HTMLSpanElement;
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const colorsJa = [
      'shiro',
      'kuro',
      'aka',
      'ao',
      'kiiro',
      'midori',
      'chairo',
      'daidai',
      'murasaki',
      'hai',
    ];
    const colorsEn = [
      'white',
      'black',
      'red',
      'blue',
      'yellow',
      'green',
      'brown',
      'orange',
      'purple',
      'gray',
    ];
    const colorsHex = [
      'ffffff',
      '000000',
      'ff0000',
      '0000ff',
      'ffff00',
      '008000',
      'a52a2a',
      'ffa500',
      '800080',
      '808080',
    ];

    let password = '';
    let passwordNumber = '';
    let passwordString1 = '';
    let passwordString2 = '';
    let passwordString3 = '';
    let seed = letters + letters.toUpperCase();

    if (passwordType1.classList.contains('is-selected')) {
      for (let i = 0; i < 4; i++) {
        passwordNumber += numbers[Math.floor(Math.random() * numbers.length)];
      }

      let seedString1 = colorsJa[Math.floor(Math.random() * colorsJa.length)];
      passwordString1 += capitalizeFirstLetter(seedString1);

      let seedString2 = colorsEn[Math.floor(Math.random() * colorsEn.length)];
      passwordString2 += capitalizeFirstLetter(seedString2);

      password = passwordNumber + '@' + passwordString1 + '#' + passwordString2;
    } else if (passwordType2.classList.contains('is-selected')) {
      if (numbersCheckbox.checked === true) {
        seed += numbers;
      }

      if (symbolsCheckbox.checked === true) {
        seed += symbols;
      }

      for (let i = 0; i < Number(slider2.value); i++) {
        password += seed[Math.floor(Math.random() * seed.length)];
      }
    }

    result.textContent = password;
  }

  // 要素を取得
  const slider1 = document.getElementById('slider1') as HTMLInputElement;
  const slider2 = document.getElementById('slider2') as HTMLInputElement;
  const generate = document.getElementById('generate')!;
  const numbersCheckbox = document.getElementById('numbers')! as HTMLInputElement;
  const symbolsCheckbox = document.getElementById('symbols')! as HTMLInputElement;
  const passwordType1 = document.getElementById('password-type-1')!;
  const passwordType2 = document.getElementById('password-type-2')!;
  const passwordTypeOptions1 = document.getElementById('password-type-options-1')!;
  const passwordTypeOptions2 = document.getElementById('password-type-options-2')!;

  // イベントリスナーを設定
  if (passwordType1 && passwordType2) {
    passwordType1.addEventListener('click', () => {
      passwordType1.classList.add('is-selected');
      passwordType2.classList.remove('is-selected');

      passwordTypeOptions1.classList.remove('is-hidden');
      passwordTypeOptions1.classList.add('is-show');
      passwordTypeOptions2.classList.remove('is-show');
      passwordTypeOptions2.classList.add('is-hidden');

      generatePassword();
    });

    passwordType2.addEventListener('click', () => {
      passwordType2.classList.add('is-selected');
      passwordType1.classList.remove('is-selected');

      passwordTypeOptions1.classList.remove('is-show');
      passwordTypeOptions1.classList.add('is-hidden');
      passwordTypeOptions2.classList.remove('is-hidden');
      passwordTypeOptions2.classList.add('is-show');

      generatePassword();
    });
  }

  slider1.addEventListener('input', () => {
    const passwordLength1 = document.getElementById('password-length1')!;
    passwordLength1.textContent = slider1.value;
  });

  slider2.addEventListener('input', () => {
    const passwordLength2 = document.getElementById('password-length2')!;
    passwordLength2.textContent = slider2.value;
    generatePassword();
  });

  generate.addEventListener('click', () => {
    generatePassword();
  });

  generatePassword();
}
