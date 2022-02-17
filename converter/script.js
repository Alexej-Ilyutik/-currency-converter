const usd = 2.56;
const eur = 2.91;
const cny = 0.4;
const rub = 0.03;

const MAIN_SELECT = document.querySelector('.main-select');
const AMOUNT_VALUE = document.getElementById('amount');
const BYN_VALUE = document.getElementById('BYN');
const USD_VALUE = document.getElementById('USD');
const EUR_VALUE = document.getElementById('EUR');
const CNY_VALUE = document.getElementById('CNY');
const RUB_VALUE = document.getElementById('RUB');
const BOX = document.querySelectorAll('.box');
let lastIndex = 0;

MAIN_SELECT.addEventListener('change', changeCurrencyValue);

AMOUNT_VALUE.addEventListener('change', changeCurrencyValue);

changeCurrencyValue();

function changeCurrencyValue() {
  BOX[lastIndex].style.display = 'flex';
  let index = MAIN_SELECT.selectedIndex;
  BOX[index].style.display = 'none';
  lastIndex = index;
  if (MAIN_SELECT.value === 'BYN') {
    changeBYNValue();
  } else if (MAIN_SELECT.value === 'USD') {
    changeUSDValue();
  } else if (MAIN_SELECT.value === 'EUR') {
    changeEURValue();
  } else if (MAIN_SELECT.value === 'CNY') {
    changeCNYValue();
  } else if (MAIN_SELECT.value === 'RUB') {
    changeRUBValue();
  }
}

function changeBYNValue() {
  USD_VALUE.value = (AMOUNT_VALUE.value * usd).toFixed(2);
  EUR_VALUE.value = (AMOUNT_VALUE.value * eur).toFixed(2);
  CNY_VALUE.value = (AMOUNT_VALUE.value * cny).toFixed(2);
  RUB_VALUE.value = (AMOUNT_VALUE.value * rub).toFixed(2);
}

function changeUSDValue() {
  BYN_VALUE.value = (AMOUNT_VALUE.value * usd).toFixed(2);
  EUR_VALUE.value = (BYN_VALUE.value / eur).toFixed(2);
  CNY_VALUE.value = (BYN_VALUE.value / cny).toFixed(2);
  RUB_VALUE.value = (BYN_VALUE.value / rub).toFixed(2);
}

function changeEURValue() {
  BYN_VALUE.value = (AMOUNT_VALUE.value * eur).toFixed(2);
  USD_VALUE.value = (BYN_VALUE.value / usd).toFixed(2);
  CNY_VALUE.value = (BYN_VALUE.value / cny).toFixed(2);
  RUB_VALUE.value = (BYN_VALUE.value / rub).toFixed(2);
}

function changeCNYValue() {
  BYN_VALUE.value = (AMOUNT_VALUE.value * cny).toFixed(2);
  USD_VALUE.value = (BYN_VALUE.value / usd).toFixed(2);
  EUR_VALUE.value = (BYN_VALUE.value / eur).toFixed(2);
  RUB_VALUE.value = (BYN_VALUE.value / rub).toFixed(2);
}

function changeRUBValue() {
  BYN_VALUE.value = (AMOUNT_VALUE.value * rub).toFixed(2);
  USD_VALUE.value = (BYN_VALUE.value / usd).toFixed(2);
  EUR_VALUE.value = (BYN_VALUE.value / eur).toFixed(2);
  CNY_VALUE.value = (BYN_VALUE.value / cny).toFixed(2);
}
