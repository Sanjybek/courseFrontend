// Преобразование массива строк в массив их длин (использовать map):
const words = ["apple", "banana", "cherry"];
const newArr = words.map((e) =>  e.length)
console.log(newArr);

// Фильтрация массива чисел, оставляющая только четные числа (использовать filter):
const numbers = [1, 2, 3, 4, 5];
const arr = numbers.filter((e) => e % 2 === 0)
console.log(arr);
// Фильтрация массива строк, оставляющая только слова с буквой "a" (использовать filter и includes):
const array = words.filter((e) => e.includes ('a'))
console.log(array);
// Поиск первого числа в массиве, которое больше 10 (использовать find):
const number = [8, 12, 5, 20, 3];
const num = number.find((e) => e > 10)
console.log(num);
// Добавление элемента в конец массива (использовать push):
const fruits1 = ["apple", "banana"];
fruits1.push("eggplant")
console.log(fruits1);

// Удаление последнего элемента из массива (использовать pop):
const fruits2 = ["apple", "banana", "cherry"]
fruits2.pop()
console.log(fruits2);

// Добавление элемента в начало массива (использовать unshift):
const fruits3 = ["apple", "banana"];
fruits3.unshift('a pineapple')
console.log(fruits3);

// Удаление первого элемента из массива (использовать shift):
const fruits4 = ["apple", "banana", "cherry"];
fruits4.shift()
console.log(fruits4);

// Сортировка массива чисел в порядке возрастания (использовать sort):
const numbers1 = [3, 1, 4, 1, 5, 9, 2];
const sort1 = numbers1.sort((a, b) => a - b)
console.log(sort1);


// Сортировка массива строк в алфавитном порядке (использовать sort):
const words1 = ["banana", "cherry", "apple"];
words1.sort()
console.log(words1);
// Разворот массива чисел (использовать reverse):
const numbers2 = [1, 2, 3, 4, 5];
numbers2.reverse()
console.log(numbers2);

// Проверка наличия определенного элемента в массиве (использовать includes):
const frui = ["apple", "banana", "cherry"];
let resul = frui.includes("apple");
console.log(resul)
let res = frui.includes("oranges");
console.log(res)