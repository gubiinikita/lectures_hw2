"use strict";

// Задание 1
// 
// 1.  Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
//     (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

function doWeHaveEnoughFood(hamburger, fries){
    if(hamburger >= 5 && fries){
        return "Мы поели";
    } else {
        return "МЫ идем в другое кафе";
    };
};
console.log(doWeHaveEnoughFood(0, 1));

// Задание 2
//Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//Результат виводити в консоль.

function isThePriceInTheRange(price){
    if(price >= 1000 && price <= 1900){
        return `Цена ${price} находится в диапазоне 1000-1900`;
    } else {
        return `Цена ${price} не входит в диапазон 1000-1900`;
    };
};
console.log(isThePriceInTheRange(1000));

// Задание 3
// Напишіть конструкцію if, що перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
// Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
// Результат виводити в консоль.

function isThePriceNotInRangeButWithNegation(price){
    if(!(price < 1000 || price > 1900)){
        return `Цена ${price} не находится в диапазоне 1000-1900`;
    } else {
        return `Цена ${price} входит в диапазон 1000-1900`;
    };
};
console.log(isThePriceNotInRangeButWithNegation(99));

function isThePriceNotInRange(price){
    if(price < 1000 || price > 1900){
        return `Цена ${price} не находится в диапазоне 1000-1900`;
    } else {
        return `Цена ${price} входит в диапазон 1000-1900`;
    };
};
console.log(isThePriceNotInRange(99));

// Задание 4
//За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//Результат виводити в консоль.

function seasonNameByNumber(seasonOfYearNumber){
    const firstSeason = "Winter",
          secondSeason = "Spring",
          thirdSeason = "Summer",
          fourthSeason = "Autumn";

    if(seasonOfYearNumber === 1){
        return `The ${firstSeason} is here`;
    } else if (seasonOfYearNumber === 2){
        return `The ${secondSeason} is here`;
    } else if (seasonOfYearNumber === 3){
        return `The ${thirdSeason} is here`;
    } else if (seasonOfYearNumber === 4){
        return `The ${fourthSeason} is here`;
    };
};
console.log(seasonNameByNumber(2));

// Задание 5
// Задано 3 числа (a, b, c), які не рівні між собою.
// Визначити середнє мід цими трьома числами
// (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
// Використати вкладені оператори if
// Результат виводити в консоль.

function averageNumber(a, b, c){
    if(a > b && a < c || b < a && b > c) {
       return `Среднее: ${a}`;
    } else if (b > a && b < c || b < a && b > c) {
       return `Среднее: ${b}`;
    } else {
       return `Среднее: ${c}`;
    };
}
console.log(averageNumber(1,3,10));

// задание 6 
// Задано номер дня тижня.
// За заданим номером вивести назву дня тижня використовуючи switch.
// Результат виводити в консоль.

function dayOfWeekNameByNum(dayOfWeek){
    switch(dayOfWeek){
        case 1:
            return 'понедельник';
        case 2:
            return 'вторник';
        case 3:
            return 'среда';
        case 4:
            return 'Четверг';
        case 5:
            return 'Пятница';
        case 6:
            return 'Суббота';       
        case 7:
            return 'Воскресенье';
    };
};
console.log(dayOfWeekNameByNum(3));

// Задание 7
// За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
// Математичні операції для обчислення: "+", "-", "*", "/".
// Результат виводити в консоль.

function basicCalculations(operator, number1, number2){
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
    return `Result of ${number1} ${operator} ${number2} = ${result}`;
};
console.log(basicCalculations("+", 3, 2));

// задание 8
//Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

function allVowelsMustDie(someText){
    string = someText.replace( /[aeioe]/gi, '' );
    return string;
}
console.log(allVowelsMustDie("Alexisonfire"))

// Задание 9
// Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
// так щоб в консоль виводився результат обчислень з правильним закнченням.
// Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.
// Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")
// https://www.kyivdictionary.com/uk/words/conjugation/?word=%D0%BC%D0%B5%D1%82%D1%80&lang=uk

function metersInKilometrCalculator(m){
    const result1 = m / 1000; // метрів в километрі
    let lastMSign = m.toString().slice(-1);
    let ending1 = "и",
        ending2 = "ів";

if(lastMSign === '1'){
    return `${m} метр дорівнює ${result1} километр`;
} else if(lastMSign === '2' || lastMSign === '3' || lastMSign === '4'){
    return `${m} метр${ending1} дорівнює ${result1} километр${ending1}`;
} else if (lastMSign > '5' || lastMSign === '0'){
    return `${m} метр${ending2} дорівнює ${result1} километр${ending2}`;
};
};
console.log(metersInKilometrCalculator(22));