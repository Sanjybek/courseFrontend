// // Задача. Сделайте функцию, которая возвращает куб числа. Число передается параметром
// function someFn(arg) {
//     console.log(arg ** 3);
// }
// someFn(30)

// //2 Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
// const sum = (a) => {
//     console.log(a * a)
// } 
// sum(prompt('Число'))

// //3 Сделайте функцию, которая возвращает сумму двух чисел.
// const num = (a, b) => {
//     console.log(a + b)
// } 
// num(20, 30)

// // 4 Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
// const number = (a, b, c) => {
//     console.log((a - b) / c)
// } 
// number(180, 15, 3)

// //5 Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
// let day = function (number) {
//     if(number === 1) {
//         console.log('Понедельник');
//     } else if(number === 2) {
//         console.log(' Вторник');
//     } else if(number === 3) {
//         console.log('Среда');
//     }else if(number === 4) {
//         console.log('Четверг');
//     }else if(number === 5) {
//         console.log('Пятница');
//     } else if(number === 6) {
//         console.log('Суббота');
//     }  else if(number === 7) {
//         console.log('Воскресенье');
//     }
// } 
// day(1)

// //6 Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.
// let arr = [2, 3, 10, 5, 60, 5, 7]
// for(let i = 5; i < arr.length; i++) {
//     if(i) {
//         console.log('да');
//     } else {
//         console.log('нет');
//     }
// }
// // //7 Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы.
// // //  То есть в нашем случае нужно проверить,
// // //  что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.
// let z = 31
// for(let i = 1; i < 31; i++) {
//     if(z / i) {
//         console.log(false);
//     } else {
//         console.log(true);
//     }
// }

// //9 Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
// let sum1 = (x, y) => {
//     if(x === y) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// let x = prompt('число')
// let y = prompt('число')
// sum1(x, y)


// //10 Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.
// let ch = (f, k) => {
//     let s = f + k 
//     if(s > 10) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
//     // console.log(f + k);
// }
// ch(12, 0)


// //11 Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.
// let ChNumber = (one) => {
//     if(one < 0) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// ChNumber(-1)










