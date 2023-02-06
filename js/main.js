//TODO Потрібно вивести в консоль наступне:
//TODO Сума від користувача = курс кожної з валют на ринку

// Отримана сума від користувача
let sum = +prompt('Введіть в гривнях суму для обміну');

// Курс валют на ринку
let usd = 40.30;
let eur = 43.75;
let pln = 9.20;
let gpb = 49.20;
let chf = 43.50;

// Конвертація отриманої суми від користувача в курс валют на ринку
let resUsd = sum / usd;
let resEur = sum / eur;
let resPln = sum / pln;
let resGpb = sum / gpb;
let resChf = sum / chf;

// Виведення результату користувачу
console.log(sum + '(грн)' + ' = ' + +resUsd.toFixed(2) + '($)');
console.log(sum + '(грн)' + ' = ' + +resEur.toFixed(2) + '(€)');
console.log(sum + '(грн)' + ' = ' + +resPln.toFixed(2) + '(zł)');
console.log(sum + '(грн)' + ' = ' + +resGpb.toFixed(2) + '(£)');
console.log(sum + '(грн)' + ' = ' + +resChf.toFixed(2) + '(Fr)');