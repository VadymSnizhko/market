const arrayList = ["математика", "фізика", "хімія", "математика", "укр.мова", "хімія"];

const filterArray = arrayList.filter((items, index, arr) => {
  
  return arr.indexOf(items) === index;
});
console.log(filterArray);
//Підходить, якщо важливо зберегти порядок елементів у масиві.

const uniqueArray = [...new Set(arrayList)];
console.log(uniqueArray);
// Швидко та ефективно, але не підходить, якщо потрібно зберегти порядок, який був у вихідному масиві.

const uniqueArray2 = arrayList.reduce((acc, item) => {
  if (!acc.includes(item)) acc.push(item);
  return acc;
}, []);
console.log(uniqueArray2);
//Добре підходить, коли потрібно гнучко керувати логікою відбору унікальних значень.
console.log(arrayList.map(item => [item, item + " ok"]));
console.log(...new Map(arrayList.map(item => [item, item + " ok"])).keys() );
console.log(...new Map(arrayList.map(item => [item, item + " ok"])).values());


const uniqueArray3 = [...new Map(arrayList.map(item => [item, item])).values()];

console.log(uniqueArray3); // ["математика", "фізика", "хімія", "укр.мова"]
// Оптимальний спосіб, якщо масив дуже великий, бо Map працює швидше, ніж indexOf()

/*
1. map(item => [item, item]) → створює масив пар [ключ, значення]
2. new Map([...]) → автоматично прибирає дублікати
3. .values() → отримує унікальні значення
4. [... ] → розгортає ітератор у масив
*/

/*const getUserNames = (users) => users.map(item => item.name);
console.log(
  getUserNames([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    balance: 3793
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    balance: 2278
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    balance: 2764
  },
])
);*/ // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]