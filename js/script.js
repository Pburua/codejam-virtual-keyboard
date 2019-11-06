const buttonTextArray = [
  [
    ['`', '~', 'ё', 'Ё', 'capsifying2'],
    ['1', '!', '1', '!'],
    ['2', '@', '2', '"'],
    ['3', '#', '3', '№'],
    ['4', '$', '4', ';'],
    ['5', '%', '5', '%'],
    ['6', '^', '6', ':'],
    ['7', '&', '7', '?'],
    ['8', '*', '8', '*'],
    ['9', '(', '9', '('],
    ['0', ')', '0', ')'],
    ['-', '_', '-', '_'],
    ['=', '+', '-', '+'],
    ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'fat', 'typeIgnore'],
  ],
  [
    ['Tab', 'Tab', 'Tab', 'Tab', 'fat', 'typeIgnore'],
    ['q', 'Q', 'й', 'Й', 'capsifying'],
    ['w', 'W', 'ц', 'Ц', 'capsifying'],
    ['e', 'E', 'у', 'У', 'capsifying'],
    ['r', 'R', 'к', 'К', 'capsifying'],
    ['t', 'T', 'е', 'Е', 'capsifying'],
    ['y', 'Y', 'н', 'Н', 'capsifying'],
    ['u', 'U', 'г', 'Г', 'capsifying'],
    ['i', 'I', 'ш', 'Ш', 'capsifying'],
    ['o', 'O', 'щ', 'Щ', 'capsifying'],
    ['p', 'P', 'з', 'З', 'capsifying'],
    ['[', '{', 'х', 'Х', 'capsifying2'],
    [']', '}', 'ъ', 'Ъ', 'capsifying2'],
    ['\\', '|', '\\', '/', 'fat'],
  ],
  [
    ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'fat', 'typeIgnore'],
    ['a', 'A', 'ф', 'Ф', 'capsifying'],
    ['s', 'S', 'ы', 'Ы', 'capsifying'],
    ['d', 'D', 'в', 'В', 'capsifying'],
    ['f', 'F', 'а', 'А', 'capsifying'],
    ['g', 'G', 'п', 'П', 'capsifying'],
    ['h', 'H', 'р', 'Р', 'capsifying'],
    ['j', 'J', 'о', 'О', 'capsifying'],
    ['k', 'K', 'л', 'Л', 'capsifying'],
    ['l', 'L', 'д', 'Д', 'capsifying'],
    [';', ':', 'ж', 'Ж', 'capsifying2'],
    ['\'', '"', 'э', 'Э', 'capsifying2'],
    ['Enter', 'Enter', 'Enter', 'Enter', 'fat', 'typeIgnore'],
  ],
  [
    ['ShiftLeft', 'ShiftLeft', 'ShiftLeft', 'ShiftLeft', 'fat', 'typeIgnore'],
    ['z', 'Z', 'я', 'Я', 'capsifying'],
    ['x', 'X', 'ч', 'Ч', 'capsifying'],
    ['c', 'C', 'с', 'С', 'capsifying'],
    ['v', 'V', 'м', 'М', 'capsifying'],
    ['b', 'B', 'и', 'И', 'capsifying'],
    ['n', 'N', 'т', 'Т', 'capsifying'],
    ['m', 'M', 'ь', 'Ь', 'capsifying'],
    [',', '<', 'б', 'Б', 'capsifying'],
    ['.', '>', 'ю', 'Ю', 'capsifying2'],
    ['/', '?', '.', ','],
    ['ShiftRight', 'ShiftRight', 'ShiftRight', 'ShiftRight', 'fat', 'typeIgnore'],
  ],
  [
    ['ControlLeft', 'ControlLeft', 'ControlLeft', 'ControlLeft', 'fat', 'typeIgnore'],
    ['AltLeft', 'AltLeft', 'AltLeft', 'AltLeft', 'fat', 'typeIgnore'],
    [' ', ' ', ' ', ' ', 'space'],
    ['AltRight', 'AltRight', 'AltRight', 'AltRight', 'fat', 'typeIgnore'],
    ['ControlRight', 'ControlRight', 'ControlRight', 'ControlRight', 'fat', 'typeIgnore'],
  ],
];

let language;
if (localStorage.getItem('language')) {
  language = localStorage.getItem('language');
} else language = 'english';

function setItem(TextArray) {
  const [text1, text2, text3, text4, class1, typeIgnore] = TextArray;
  let addClass = '';
  const fat = class1;
  if (fat === 'fat') {
    addClass = ' keyboard--item-fat2';
  } else if (fat === 'space') {
    addClass = ' keyboard--item--fatSpace';
  } else addClass = '';

  if (typeIgnore) {
    addClass += ' type_ignore';
  }

  const capsifying = class1;
  if (capsifying === 'capsifying') {
    addClass += ' capsifying';
  }
  if (capsifying === 'capsifying2') {
    addClass += ' capsifying capsifying2';
  }

  return `<div class="keyboard--item${addClass}">\n`
    + '        <div class="keyboard--english">\n'
    + `          <span>${text1}</span>\n`
    + `          <span class="order66">${text2}</span>\n`
    + '        </div>\n'
    + '\n'
    + '        <div class="keyboard--russian hidden">\n'
    + `          <span>${text3}</span>\n`
    + `          <span class="order66">${text4}</span>\n`
    + '        </div>\n'
    + '      </div>';
}


function setItems(rowArray) {
  let str = '';

  for (let i = 0; i < rowArray.length; i += 1) {
    str += setItem(rowArray[i]);
  }

  return str;
}


function init() {
  let html = '<main><section class="keyboard">\n'
    + '    <label for="charsfield"></label>\n'
    + '    <textarea name="" id="charsfield" cols="30" rows="5" disabled '
    + '"></textarea>\n'
    + '  </section><section class="keyboard">\n'
    + '    <div class="keyboard--row"></div>\n'
    + '    <div class="keyboard--row"></div>\n'
    + '    <div class="keyboard--row"></div>\n'
    + '    <div class="keyboard--row"></div>\n'
    + '    <div class="keyboard--row"></div></section></main>';
  const body = document.querySelector('body');
  body.insertAdjacentHTML('afterbegin', html);

  const rows = document.querySelectorAll('.keyboard--row');

  rows.forEach((row, index) => {
    html = setItems(buttonTextArray[index]);
    // console.log(html);
    row.insertAdjacentHTML('afterbegin', html);
  });

  if (language === 'russian') {
    const buttons = document.querySelectorAll('.keyboard--item');
    buttons.forEach((button) => {
      const englishLiter = button.querySelector('.keyboard--english');
      const russianLiter = button.querySelector('.keyboard--russian');

      if (russianLiter) {
        englishLiter.classList.toggle('hidden');
        russianLiter.classList.toggle('hidden');
      }
    });
  }
}

init();

const charsfield = document.querySelector('#charsfield');
// const keyboard = document.querySelector('.keyboard');
const buttons = document.querySelectorAll('.keyboard--item');

let isShiftPressed = false;
let isAltPressed = false;
let isCapsPressed = false;
let isMousePressed = false;


function Click(oneButtonLiter) {
  // console.log(oneButtonLiter.innerHTML);
  oneButtonLiter.parentElement.parentElement.classList.add('pressed');
  if (!oneButtonLiter.parentElement.parentElement.classList.contains('type_ignore')) {
    charsfield.value += oneButtonLiter.innerText;
  } else if (oneButtonLiter.innerHTML === 'Enter') {
    charsfield.value += '\n';
  } else if (oneButtonLiter.innerHTML === 'Backspace') {
    charsfield.value = charsfield.value.substr(0, charsfield.value.length - 1);
  }
}


function SelectAndPrintButton(event) {
  const allButtonsLiters = document.querySelectorAll('span');

  const BreakException = {};
  try {
    allButtonsLiters.forEach((oneButtonLiter) => {
      if (oneButtonLiter.parentElement.parentElement.classList.contains('type_ignore')) {
        if (oneButtonLiter.innerText === event.code) {
          Click(oneButtonLiter);
          throw BreakException;
        }
      } else if (oneButtonLiter.innerText === event.key) {
        let allButtonLiters;
        if (language === 'english') {
          allButtonLiters = oneButtonLiter.parentElement.parentElement
            .querySelectorAll('.keyboard--english>span');
        } else {
          allButtonLiters = oneButtonLiter.parentElement.parentElement
            .querySelectorAll('.keyboard--russian>span');
        }

        if ((isCapsPressed && isShiftPressed) || (!isCapsPressed && !isShiftPressed)) {
          // if (allButtonLiters[0].parentElement.classList.contains('hidden'))
          //     return;
          // console.log(allButtonLiters[0]);
          Click(allButtonLiters[0]);
          throw BreakException;
        } else {
          // if (allButtonLiters[1].parentElement.classList.contains('hidden'))
          //     return;
          // console.log(allButtonLiters[0]);
          Click(allButtonLiters[1]);
          throw BreakException;
        }
      }
    });
    // console.log(event.code);
    // console.log(event.key);
  } catch (e) {
    if (e !== BreakException) {
      throw e;
    }
  }
}


function Disclick(oneButtonLiter) {
  // console.log(oneButtonLiter.innerHTML);
  oneButtonLiter.parentElement.parentElement.classList.remove('pressed');
}


function DisselectButton(event) {
  const allButtonsLiters = document.querySelectorAll('span');

  const BreakException = {};
  try {
    allButtonsLiters.forEach((oneButtonLiter) => {
      if (oneButtonLiter.parentElement.parentElement.classList.contains('type_ignore')) {
        if (oneButtonLiter.innerText === event.code) {
          Disclick(oneButtonLiter);
          throw BreakException;
        }
      } else if (oneButtonLiter.innerText === event.key) {
        Disclick(oneButtonLiter);
        throw BreakException;
      }
    });
    // console.log(event.code);
    // console.log(event.key);
  } catch (e) {
    if (e !== BreakException) {
      throw e;
    }
  }
}


document.addEventListener('keydown', (event) => {
  // console.log(event.code);


  if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && isShiftPressed === false) {
    isShiftPressed = true;

    buttons.forEach((button) => {
      const Liters = button.querySelectorAll('*>span');

      Liters.forEach((liter) => {
        liter.classList.toggle('order66');
      });
    });
  }
  if ((event.code === 'AltLeft' || event.code === 'AltRight') && isAltPressed === false) {
    isAltPressed = true;
  }
  if (event.key === 'CapsLock') {
    if (!isCapsPressed) {
      isCapsPressed = true;
      SelectAndPrintButton(event);

      buttons.forEach((button) => {
        if (button.classList.contains('capsifying')
          && !(language === 'english' && button.classList.contains('capsifying2'))) {
          const Liters = button.querySelectorAll('*>span');

          Liters.forEach((liter) => {
            liter.classList.toggle('order66');
          });
        }
      });
    } else {
      isCapsPressed = false;
      DisselectButton(event);

      buttons.forEach((button) => {
        if (button.classList.contains('capsifying')
          && !(language === 'english' && button.classList.contains('capsifying2'))) {
          const Liters = button.querySelectorAll('*>span');

          Liters.forEach((liter) => {
            liter.classList.toggle('order66');
          });
        }
      });
    }
  }

  if (event.code !== 'CapsLock') {
    SelectAndPrintButton(event);
  }
});

document.addEventListener('keyup', (event) => {
  // console.log(event.key);

  if (isAltPressed === true && isShiftPressed === true) {
    if (language === 'english') {
      language = 'russian';
    } else {
      language = 'english';
    }
    buttons.forEach((button) => {
      const englishLiter = button.querySelector('.keyboard--english');
      const russianLiter = button.querySelector('.keyboard--russian');

      englishLiter.classList.toggle('hidden');
      russianLiter.classList.toggle('hidden');
    });
  }
  if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && isShiftPressed === true) {
    isShiftPressed = false;

    buttons.forEach((button) => {
      const Liters = button.querySelectorAll('*>span');

      Liters.forEach((liter) => {
        liter.classList.toggle('order66');
      });
    });

    // if(isCapsPressed) {
    //     buttons.forEach(function (button) {
    //
    //         if (button.classList.contains('capsifying') &&
    //             !(language === 'english' && button.classList.contains('capsifying2'))) {
    //
    //             // console.log('heo');
    //             let firstLiter = button.querySelector('*:not(.hidden)>span:first-of-type');
    //             let secondLiter = button.querySelector('*:not(.hidden)>span:last-of-type');
    //
    //             if (secondLiter) {
    //                 // console.log('down');
    //                 firstLiter.classList.add('order66');
    //                 secondLiter.classList.remove('order66');
    //             }
    //         }
    //     });
    // }
  }
  if ((event.code === 'AltLeft' || event.code === 'AltRight') && isAltPressed === true) {
    isAltPressed = false;
    // alert("hey2!");
  }

  if (event.code !== 'CapsLock') {
    DisselectButton(event);
  }
});

buttons.forEach((button) => {
  function onMouseDown() {
    isMousePressed = true;
    let text;
    if (language === 'english') {
      text = button.querySelector('.keyboard--english>*:not(.order66)');
    } else text = button.querySelector('.keyboard--russian>*:not(.order66)');

    // console.log(text.innerText);

    const keyEventDown = new KeyboardEvent('keydown', {
      key: text.innerText,
      code: text.innerText,
    });
    document.dispatchEvent(keyEventDown);
  }

  function onMouseUp() {
    if (isMousePressed === true) {
      isMousePressed = false;
      let text;
      if (language === 'english') {
        text = button.querySelector('.keyboard--english>*:not(.order66)');
      } else text = button.querySelector('.keyboard--russian>*:not(.order66)');

      // console.log(text.innerText);

      const keyEventUp = new KeyboardEvent('keyup', {
        key: text.innerText,
        code: text.innerText,
      });
      document.dispatchEvent(keyEventUp);
    }
  }

  button.addEventListener('mousedown', onMouseDown);
  button.addEventListener('mouseup', onMouseUp);
  button.addEventListener('mouseleave', onMouseUp);
});

window.addEventListener('beforeunload', () => {
  localStorage.setItem('language', language);
});
