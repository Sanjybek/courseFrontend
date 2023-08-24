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



// Преобразование входной строки в нижний регистр (использовать toLowerCase):
// const inputString = "Hello World";
// Преобразование входной строки в верхний регистр (использовать toUpperCase):
// const inputString = "Hello World";
// Поиск индекса элемента в массиве (использовать indexOf):
// const fruits = ["apple", "banana", "cherry"];
// Применение функции к каждому элементу массива (использовать forEach):
// const numbers = [1, 2, 3, 4, 5];
// Объединение двух строк с удалением начальных и конечных пробелов (использовать trim):
// const stringWithWhitespace = " Hello, World! ";
// Проверка наличия определенного элемента в массиве (использовать includes):
// const fruits = ["apple", "banana", "cherry"];
// Разделение строки на массив подстрок по определенному разделителю (использовать split):
// const sentence = "Hello, how are you?";
// Преобразование вложенных массивов в одномерный массив (использовать flat):
// const nestedArray = [1, [2, 3], [4, [5, 6]]];
// Конкатенация нескольких строк в одну (использовать concat):
// const string1 = "Hello"; const string2 = "World";
// Подсчет количества элементов в массиве (использовать length):
// const numbers = [1, 2, 3, 4, 5];
// Преобразование строки с разделителями в массив подстрок (использовать split):
// const csvData = "John,Doe,30,Engineer";
// Задача: Дан массив объектов со студентами и их предметами. Необходимо выполнить следующие шаги:
// 1 - Извлечь имена студентов.
// 2 - Преобразовать имена в нижний регистр.
// 3 - Отфильтровать студентов, изучающих математику.
// 4 - Соединить имена отфильтрованных студентов в одну строку через запятую.
// const students = [ { name: "Alice", subject: "Math" }, { name: "Bob", subject: "Physics" }, { name: "Charlie", subject: "Math" }, { name: "David", subject: "Chemistry" }, ];