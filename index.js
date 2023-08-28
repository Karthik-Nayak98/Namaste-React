const inputElement = document.querySelector('.input_text');
const uppercase = document.querySelector('.uppercase');
const lowercase = document.querySelector('.lowercase');
const pascalcase = document.querySelector('.pascalcase');
const kebabcase = document.querySelector('.kebabcase');
const camelcase = document.querySelector('.camelcase');
const snakecase = document.querySelector('.snakecase');
const trim = document.querySelector('.trim');

inputElement.addEventListener('input', (e) => {
  const input = e.target.value;
  upperCase(input);
  lowerCase(input);
  kebabCase(input);
  pascalCase(input);
  camelCase(input);
  snakeCase(input);
  stringTrim(input);
});

function snakeCase(input) {
  const list = input.split(' ');
  const snakeString = list.join('_');
  snakecase.innerText = snakeString;
}
function stringTrim(input) {
  const list = input.split(' ');
  const trimString = list.join('');
  trim.innerText = trimString;
}

function upperCase(input) {
  uppercase.innerText = input.toUpperCase();
}
function pascalCase(input) {
  const list = input.split(' ');
  const pascalCaseList = list.map(
    (item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
  );
  const pascalCaseString = pascalCaseList.join('');
  pascalcase.innerText = pascalCaseString;
}

function kebabCase(input) {
  const list = input.split(' ');
  const kebabString = list.join('-');
  kebabcase.innerText = kebabString;
}

function camelCase(input) {
  const list = input.split(' ');
  const camelCaseList = list.map(
    (item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
  );
  camelCaseList[0] =
    camelCaseList[0].charAt(0).toLowerCase() + camelCaseList[0].slice(1);
  const camelCaseString = camelCaseList.join('');
  camelcase.innerText = camelCaseString;
}

function lowerCase(input) {
  lowercase.innerText = input.toLowerCase();
}
