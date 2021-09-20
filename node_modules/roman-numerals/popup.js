const txtResp = document.querySelector('#txtResp');
const select = document.getElementById('select');
const txtInput = document.getElementById('txtBody');

const { parse, stringify } = require('roman-numerals');

console.log(parse('I') === 1); // true

txtInput.addEventListener('keyup', () => {
  if (select.value === 'Parse') {
    txtResp.innerHTML = txtInput.value;
  }
  if (select.value === 'Stringify') { txtResp.innerHTML = 'hola'; }
});
