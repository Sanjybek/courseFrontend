// Преобразование массива чисел в строку, объединяя элементы через запятую (использовать join):
const numbers = [1, 2, 3, 4, 5];
numbers.join(',')
console.log(numbers);

// Преобразование массива строк, удаляя 2 элемента начиная с индекса 2 (использовать splice):
const fruits = ["apple", "banana", "cherry", "date", "fig"];
fruits.splice(0, 3)
console.log(fruits);

// Конкатенация двух массивов (использовать concat):
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concat = array1.concat(array2)
console.log(concat);

// Преобразование массива строк в массив их длин (использовать map):
const words = ["apple", "banana", "cherry"];
const arr = words.map((e) => e.length)
console.log(arr);

// Преобразование входной строки в нижний регистр (использовать toLowerCase):
const inputString = "Hello World";
const str = inputString.toLowerCase()
console.log(str);
// Преобразование входной строки в верхний регистр (использовать toUpperCase):
const inputString1 = "Hello World";
const str1 = inputString1.toUpperCase()
console.log(str1);
// Поиск индекса элемента в массиве (использовать indexOf):
const fruits1 = ["apple", "banana", "cherry"];
const str2 = fruits1.indexOf('banana')
console.log(str2);

// Применение функции к каждому элементу массива (использовать forEach):
const number2 = [1, 2, 3, 4, 5];
const number3 = number2.forEach((e) => {
    console.log(e);
})
console.log(number3);

// Объединение двух строк с удалением начальных и конечных пробелов (использовать trim):
const stringWithWhitespace = " Hello, World! ";
const str3 = stringWithWhitespace.trim()
console.log(str3);
// Проверка наличия определенного элемента в массиве (использовать includes):
const fruits2 = ["apple", "banana", "cherry"];
const fruits3 = fruits2.includes('apple')
console.log(fruits3);
// Разделение строки на массив подстрок по определенному разделителю (использовать split):
const sentence = "Hello, how are you?";
const str4 = sentence.split('')
console.log(str4);
// Преобразование вложенных массивов в одномерный массив (использовать flat):
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flatNum = nestedArray.flat(2)
console.log(flatNum);
// Конкатенация нескольких строк в одну (использовать concat):
const string1 = "Hello"; const string2 = " World";
const concatStr = string1.concat(string2)
console.log(concatStr);
// Подсчет количества элементов в массиве (использовать length):
const number4 = [1, 2, 3, 4, 5];
console.log(number4.length);
// Преобразование строки с разделителями в массив подстрок (использовать split):
const csvData = "John,Doe,30,Engineer";
const spStr = csvData.split(',')
console.log(spStr);
// Задача: Дан массив объектов со студентами и их предметами. Необходимо выполнить следующие шаги:
// 1 - Извлечь имена студентов.
// 2 - Преобразовать имена в нижний регистр.
// 3 - Отфильтровать студентов, изучающих математику.
// 4 - Соединить имена отфильтрованных студентов в одну строку через запятую.
const students = [ { name: "Alice", subject: "Math" }, { name: "Bob", subject: "Physics" }, { name: "Charlie", subject: "Math" }, { name: "David", subject: "Chemistry" }, ];
const FrName = students.map((e) => {
    return e.name.toLowerCase()
})
console.log(FrName);

const Mt = students.map((e) => {
    if(e.subject === 'Math') {
        return e.name
    }
})
// console.log(Mt);
console.log(Mt);

const strJoi = Mt.join(',')
console.log(strJoi);