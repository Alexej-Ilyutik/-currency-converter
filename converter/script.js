const usd = 2.56;
const eur = 2.91;
const cny = 0.4;
const rub = 0.03;


const DATE = document.getElementById('date_id');
const MAIN_SELECT = document.querySelector('.main-select');
const AMOUNT_VALUE = document.getElementById('amount');
const BYN_VALUE = document.getElementById('BYN');
const USD_VALUE = document.getElementById('USD');
const EUR_VALUE = document.getElementById('EUR');
const CNY_VALUE = document.getElementById('CNY');
const RUB_VALUE = document.getElementById('RUB');
const BOX = document.querySelectorAll('.box');
let lastIndex = 0;
let coefficient;
let rate;

DATE.valueAsDate = new Date();

DATE.addEventListener('change', changeDate);


function changeDate() {
  const randomRate = Math.random() * (1.1 - 0.9) + 0.9;
  const date = new Date().getDate();
  const currentDate = DATE.valueAsDate.getDate();
  if (currentDate > date) {
    alert("Error! Choose today's or past date!");
    DATE.valueAsDate = new Date();
  }else if (currentDate < date) {
    coefficient = +randomRate.toFixed(2);
   changeCurrencyValue();
  }else{
    coefficient = 1;
    changeCurrencyValue();
  }
}

changeDate();


MAIN_SELECT.addEventListener('change', changeDate);

AMOUNT_VALUE.addEventListener('change', changeDate);

function hideBox(){
  BOX[lastIndex].style.display = 'flex';
  let index = MAIN_SELECT.selectedIndex;
  BOX[index].style.display = 'none';
  lastIndex = index;
}


function changeCurrencyValue() {
  hideBox();
  if (MAIN_SELECT.value === 'BYN') {
    changeBYNValue(coefficient);
  } else if (MAIN_SELECT.value === 'USD') {
    changeUSDValue(coefficient);
  } else if (MAIN_SELECT.value === 'EUR') {
    changeEURValue(coefficient);
  } else if (MAIN_SELECT.value === 'CNY') {
    changeCNYValue(coefficient);
  } else if (MAIN_SELECT.value === 'RUB') {
    changeRUBValue(coefficient);
  }
}

function changeBYNValue(k) {
  USD_VALUE.value = (AMOUNT_VALUE.value / usd*k).toFixed(2);
  EUR_VALUE.value = (AMOUNT_VALUE.value / eur*k).toFixed(2);
  CNY_VALUE.value = (AMOUNT_VALUE.value / cny*k).toFixed(2);
  RUB_VALUE.value = (AMOUNT_VALUE.value / rub*k).toFixed(2);
}

function changeUSDValue(k) {
  BYN_VALUE.value = (AMOUNT_VALUE.value * usd * k).toFixed(2);
  EUR_VALUE.value = (BYN_VALUE.value / eur).toFixed(2);
  CNY_VALUE.value = (BYN_VALUE.value / cny).toFixed(2);
  RUB_VALUE.value = (BYN_VALUE.value / rub).toFixed(2);
}

function changeEURValue(k) {
  BYN_VALUE.value = (AMOUNT_VALUE.value * eur * k).toFixed(2);
  USD_VALUE.value = (BYN_VALUE.value / usd).toFixed(2);
  CNY_VALUE.value = (BYN_VALUE.value / cny).toFixed(2);
  RUB_VALUE.value = (BYN_VALUE.value / rub).toFixed(2);
}

function changeCNYValue(k) {
  BYN_VALUE.value = (AMOUNT_VALUE.value * cny * k).toFixed(2);
  USD_VALUE.value = (BYN_VALUE.value / usd).toFixed(2);
  EUR_VALUE.value = (BYN_VALUE.value / eur).toFixed(2);
  RUB_VALUE.value = (BYN_VALUE.value / rub).toFixed(2);
}

function changeRUBValue(k) {
  BYN_VALUE.value = (AMOUNT_VALUE.value * rub * k).toFixed(2);
  USD_VALUE.value = (BYN_VALUE.value / usd).toFixed(2);
  EUR_VALUE.value = (BYN_VALUE.value / eur).toFixed(2);
  CNY_VALUE.value = (BYN_VALUE.value / cny).toFixed(2);
}
