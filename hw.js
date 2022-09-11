"use strict";

// Задание 1
// 
// 1.  Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
//     (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

const hamburger = 5;
const fries = 1;

if(hamburger >= 5 && fries){
    console.log('Мы поели')
} else {
    console.log('Мы идем в другое кафе')
};

// Задание 2
//Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//Результат виводити в консоль.

let num = 1901;

(num >= 1000 && num <= 1900) ? console.log(`Число ${num} находится между 1000 и 1900`) : console.log(`Число ${num} НЕ находится между 1000 и 1900`);

// или

let num1 = 1901;

if(num1 < 1000){
    console.log(`Число ${num1} меньше 1000`)
} else if (num1 >= 1000 && num1 <= 1900){
    console.log(`Число ${num1} находится в диапазоне 1000-1900`)
} else if (num1 >1900){
    console.log(`Число ${num1} больше 1900`)
};

// или

let num2 = 1000;

if(num2 >= 1000 && num2 <= 1900){
    console.log(`Число ${num2} находится в диапазоне 1000-1900`)
} else {
    console.log(`Число ${num2} не входит в диапазон 1000-1900`)
};

// Задание 3
// Напишіть конструкцію if, що перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
// Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
// Результат виводити в консоль.

let price1 = 1000;

if(!(price1 < 1000 || price1 > 1900)){
    console.log(`Цена ${price1} не находится в диапазоне 1000-1900`)
} else {
    console.log(`Цена ${price1} входит в диапазон 1000-1900`)
};

let price = 1000;

if(price < 1000 || price > 1900){
    console.log(`Цена ${price} не находится в диапазоне 1000-1900`)
} else {
    console.log(`Цена ${price} входит в диапазон 1000-1900`)
};

// Задание 4
//За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//Результат виводити в консоль.


const firstSeason = "Winter",
      secondSeason = "Spring",
      thirdSeason = "Summer",
      fourthSeason = "Autumn";

let seasonOfYear = 3;

if(seasonOfYear === 1){
    console.log(`The ${firstSeason} is here`)
} else if (seasonOfYear === 2){
    console.log(`The ${secondSeason} is here`)
} else if (seasonOfYear === 3){
    console.log(`The ${thirdSeason} is here`)
} else if (seasonOfYear === 4){
    console.log(`The ${fourthSeason} is here`)
};

// Задание 5
// Задано 3 числа (a, b, c), які не рівні між собою.
// Визначити середнє мід цими трьома числами
// (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
// Використати вкладені оператори if
// Результат виводити в консоль.

var a = 26;
var b = 25;
var c = 100;

if(a > b && a < c || b < a && b > c) {
    console.log(`Среднее: ${a}`)
} else if (b > a && b < c || b < a && b > c) {
    console.log(`Среднее: ${b}`)
} else {
    console.log(`Среднее: ${c}`)
};

// задание 6 
// Задано номер дня тижня.
// За заданим номером вивести назву дня тижня використовуючи switch.
// Результат виводити в консоль.

let dayOfWeek = 7;

switch(dayOfWeek){
    case 1:
        console.log('понедельник')
        break;
    case 2:
        console.log('вторник')
        break;
    case 3:
        console.log('среда')
        break; 
    case 4:
        console.log('Четверг')
        break;
    case 5:
        console.log('Пятница')
        break;
    case 6:
        console.log('Суббота')
        break;        
    case 7:
        console.log('Воскресенье')
        break;    
};

// Задание 7
// За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
// Математичні операції для обчислення: "+", "-", "*", "/".
// Результат виводити в консоль.

let operator = '/';
let number1 = 7;
let number2 = 8;
let result;

switch(operator){
    case '+':
        result = number1 + number2;
        break;
    case '-':
        result = number1 - number2;
        break;
    case '*':
        result = number1 * number2;
        break;
    case '/':
        result = number1 / number2;
        break;
    default:
        console.log('Invalid operator')    
}
console.log(`Result of ${number1} ${operator} ${number2} = ${result}`);

// задание 8
//Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

let someText = 'Alexisonfire';
string = someText.replace( /[aeioe]/gi, '' );
console.log(string);


// Задание 9
// Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
// так щоб в консоль виводився результат обчислень з правильним закнченням.
// Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.
// Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")
// https://www.kyivdictionary.com/uk/words/conjugation/?word=%D0%BC%D0%B5%D1%82%D1%80&lang=uk

let m = 10000; // метров
const km = 1000; // метров в километре
let result1 = m / km;

if(result1 >= 1000){
    console.log(`${km} километров это ${result1} метров`)
} else if(result1 <1000){
    console.log(`${m} метров это ${result1} километров`)
}