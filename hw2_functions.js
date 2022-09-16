/** ЗАВДАННЯ 1
  * 1. Оголосіть змінну та присвойте їй стрілочну функцію
  * 2. У функції не повинно бути параметрів
  * 3. Поверніть з функції рядок "Привіт, світ!"
  * 4. Викличте функцію та виведіть результат у консоль
  */

const helloWorld = () => {
  console.log('Привіт, світ!') 
}
helloWorld();

/** ЗАВДАННЯ 2
  * 1. Виведіть у консоль "Привіт, світ!" із затримкою 5 секунд
  * 2. Використовуйте стрілочну функцію
  */

const helloWorldWithTimer = () => {
  setTimeout(function(){
    console.log('Привіт, світ!')
  }, 5000)
}
helloWorldWithTimer();

/** ЗАВДАННЯ 3
  * 1. Створіть об'єкт із трьома властивостями та присвойте його значення змінній:
  * - name
  * - surname
  * - favoriteNumber
  * 2. Напишіть функцію, що прийматиме цей обʼєкт як аргумент і
  *     створюватиме в ньому додаткове поле age з довільним значенням.
  * Результат роботи функції це вивід у консоль рядка
  * "My name is <name> <surname>, I'm <age> years old and my favorite number is <favoriteNumber>"
  */

let personalData = {
  name: 'Nikita',
  surname: 'Gubii',
  favoriteNumber: 2084323123595662
}

const myPersonalData = (data) => {
  data.age = Math.floor(Math.random() * 100) + 1;
  return `My name is ${data.name} ${data.surname}, I'm ${data.age} years old and my favorite number is ${data.favoriteNumber}`
}
console.log(myPersonalData(personalData));


/** ЗАВДАННЯ 4
  * 1. Створіть масив з кількома елементами таких типів (int, boolean, string)
  * 2. Створіть стрілочну функцію, що прийматиме цей масив як аргумент.
  * 3. В функції замініть елемент масиву з типом int на інший з типом string
  * 4. Поверніть новий масив як результат роботи функції та виведіть його у консоль
  */

let arr = [6, true, "random text"];

const changingArrayData = (arrIn) => {
  arrIn.splice(0, 1, 'random text 2');
  return arrIn;
}
console.log(changingArrayData(arr));

/** ЗАВДАННЯ 5
  * 1. Виправте код щоб обидва вирази (setTimeout та myFn()) працювали.
  * setTimeout(function myFn() {
  * console.log('hello from myFn')
  * }, 2000)
  * myFn()
  */

function myFn(){
  setTimeout(function(){
    console.log('Hello from myFn')
  }, 2000)
};
myFn();

/** ЗАВДАННЯ 6
  * 1. Створіть масив із 3 об'єктами "cars"
  * 2. Кожен об'єкт повинен мати три властивості
  * - carBrand (рядок)
  * - price (число)
  * - isAvailableForSale (логічне значення)
  * 3. Створіть функцію, що прийматиме цей масив в якості аргументу.
  * 4. В середині функції додайте ще один такий же обʼєкт в масив.
  *     Не створюйте новий обʼєкт в середині функції, а візьміть його з масиву.
  * 5. Поверніть з функції новий масив. Результат роботи функції виведіть у консоль.
  */

let cars = [
  {carBrand: "Renault", price: 2000, isAvailableForSale: true},
  {carBrand: "Ferrari", price: 33000, isAvailableForSale: false},
  {carBrand: "Datsun", price: 4000, isAvailableForSale: true},
];

const carsData = (carsIn) => {
  carsIn.push(cars[0]);
  return carsIn;
}
console.log(carsData(cars));

// Или, если все таки нужно было добавить полностью новый объект в массив
const carsData2 = (carsIn2) => {
  carsIn2.push(Object.assign({}, {
    ...cars[0],
    carBrand: "Mercedes", 
    price: 10000,
    isAvailableForSale: false
  }))
  return carsIn2;
}
console.log(carsData2(cars));

/** ЗАВДАННЯ 7
  * 1. Створіть обʼєкт
    const myObject = {
        key1: true,
        key5: 10,
        key3: 'abc',
        key4: null,
        key10: NaN,
     }
  * 2. Створіть функцію, що прийматиме цей обʼєкт як аргумент.
  * 3. У функції реалізуйте логіку: якщо назва властивості (ключ) дорівнює key3 або key10 то виводьте значення властивості в консоль.
  */
const myObject = {
  key1: true,
  key5: 10,
  key3: 'abc',
  key4: null,
  key10: NaN,
}

const getObjectPropertyByKey = (myObj) => {
  if('key1' in myObj && 'key10' in myObj){
    console.log(`myObject key1=${myObj.key1} and myObject key10=${myObj.key10}`)
  };
} 
getObjectPropertyByKey(myObject);

/** ЗАВДАННЯ 8
  * 1. Створіть функцію "findProductById" із двома параметрами:
  * - ID товару
  * - масив товарів
  * 2. Функція повинна повернути товар із певним ID
  * 3. Якщо товару з певним ID у масиві товарів немає,
  * функція має повернути "undefined"
  * 4. Також всередині функції виведіть у консоль товар по ID
    const products = [
    { productId: 1355, name: 'phone' },
    { productId: 5131, name: 'laptop' },
    { productId: 6134, name: 'tablet' },
 ]
 console.log(findProductById(6134, products)) // { postId: 6134, name: 'tablet' }
 console.log(findProductById(4511, products)) // undefined
 */

const products = [
  {productId: 1355, name: 'phone'},
  {productId: 5131, name: 'laptop'},
  {productId: 6134, name: 'tablet'},
]

function findProductById(productsList, productId) {
  return productsList.find(product => product.productId === productId);
}
console.log(findProductById(products, 1355));

