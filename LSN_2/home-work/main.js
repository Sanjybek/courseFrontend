
// Условные операторы. ДЗ
// Используйте условный оператор JavaScript для сортировки трех чисел по убыванию. *Примеры чисел:* 0, -1, 4 *Вывод:* 4, 0, -1

let number1 = 0
let number2 = -1
let number3 = 4
if(number3 > number1 && number2 && number1 > number2) {
    console.log(number3, number1, number2);

}

// Примите 3два целых числа и отобразите большее Напишите программу на JavaScript, которая принимает два целых числа и отображает большее.
let number4 = 20
let number5 = 18
if(number4 > number5) {
    console.log(number4);
} else {
    console.log('Не правилно');
}
// 1. Напишите условное выражение JavaScript, чтобы найти наибольшее из пяти чисел. Примеры чисел: -6, -3, -6, 0, -1 Вывод: 0
let num1 = -6
let num2 = -3
let num3 = -6
let num4 = 0 
let num5 = -1
if(num1 && num2 && num3 && num5 < num4) {
    console.log(num4);
} else {
    console.log('Не правельно');
}


// Вам даны две переменные x и y, менять их не нужно. При помощи тернарного оператора сравните их и если x больше, чем y, то выведите фразу: "x больше, чем y", иначе выведите фразу: "x не больше, чем y".
var x = 10;
var y = 7;
x > y ? console.log("x больше, чем y") :  console.log("x не больше, чем y");
  
// Пользователь вводит какое-то число (num). Используя конструкцию if..else, напишите код, который делает запрос: «Введите число». 
// Если посетитель вводит четное число, то выводить «"Число " + num + " четное"», если нечетное: "Число " + num + " нечетное".
let number = prompt('Ввыведитье число')
if(number % 2 === 0) {
    console.log('число' + number + 'четное');
} else {
    console.log('число' + number + 'нечетное');
}

// Напишите код, который предлагает пользователю ввести целое число. Нужно вывести на экран сколько в этом числе цифр, 
// а также положительное оно или отрицательное. Например, "Число " + num + " однозначное положительное". 
// Достаточно будет определить, является ли число однозначным, двухзначным или трехзначным и более.
let n = prompt('Введитье положительный число')
console.log(n.toString('').length);
if(n > 0) {
    console.log('число ' + n + ' однозначное положительное');
} else {
    console.log('число ' + n + ' однозначное отрицательное');
}