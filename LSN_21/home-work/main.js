// Напишите программу, которая подсчитывает сумму всех чисел от 1 до N.
// Ожидаемый вывод: Для N = 5, программа должна вывести 15 (1 + 2 + 3 + 4 + 5).

let N = 5
let sum = 0
for(let i = 1; i <= N; i++) {
     sum += i
    
}
console.log(sum)

// Напишите программу, которая выводит все четные числа от 1 до N.
// Ожидаемый вывод: Для N = 10, программа должна вывести 2 4 6 8 10.

let B = 10;
for(let i = 0; i <= B; i++) {
    if(i % 2 === 0){
        console.log(i);

    }
}

// Напишите программу, которая находит наибольший элемент в массиве чисел.
// Ожидаемый вывод: Для массива numbers, программа должна вывести 9 (наибольший элемент).
let numbers = [4, 9, 2, 8, 5];

for(let i = 0; i <= numbers.length; i++) {
    if(numbers[i] === 9) {
        console.log(numbers[i]);
    }
}


// Напишите программу, которая подсчитывает количество гласных букв в строке.
// Ожидаемый вывод: Для строки str, программа должна вывести 3 (гласные буквы 'e', 'o', 'o').

let str = "Hello, World!";
let strLength = 0
let vowels = ['a', 'e', 'i', 'o', 'u']
for(let i = 0; i <= str.length; i++) {
    if(vowels.includes(str[i])) {
        strLength++
    }
}
console.log(strLength);


// Напишите программу, которая находит первый положительный элемент в массиве чисел.
// Ожидаемый вывод: Для массива numbers, программа должна вывести 3 (первый положительный элемент).
let number = [-2, 0, 3, -5, 7, -8];
let num
for(let i = 0; i <= number.length; i++) {
    if(number[i] > 0) {
        num = number[i]
        break
    }
}
console.log(num);

// Напишите программу, которая перебирает массив объектов, представляющих продукты в корзине, и подсчитывает общую стоимость покупки.
// Для массива cart, программа должна вывести общую стоимость продуктов, равную 20.5.

let cart = [ 
    { name: 'Молоко', price: 2.5, quantity: 2 },
    { name: 'Хлеб', price: 1.5, quantity: 3 },
    { name: 'Яблоки', price: 1, quantity: 5 } 
];
function oper (cart) {
    let res = 0
    for(let i = 0; i < cart.length; i++) {
        res = res + cart[i].price * cart[i].quantity
    }
    return res
}
console.log(oper(cart));

// Напишите программу, которая ищет объект в массиве объектов по определенному ключу.
// Ожидаемый вывод: Для userIdToFind = 2, программа должна вывести объект { id: 2, name: 'Bob' }.

let users = [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' } ];
let userIdToFind = 2;
function findUserById (useerArrId, userId) {
    for(let i = 0; i <= useerArrId.length ; i++){
        if(useerArrId[i].id === userId) {
            return useerArrId[i]
        }
    }
}
console.log(findUserById(users, userIdToFind));

// Напишите программу, которая фильтрует массив объектов на основе определенного условия.
// Для массива students, программа должна вывести объекты { name: 'Bob', score: 92 } и { name: 'David', score: 95 }.
let students = [ 
    { name: 'Alice', score: 85 }, 
    { name: 'Bob', score: 92 }, 
    { name: 'Charlie', score: 78 }, 
    { name: 'David', score: 95 } 
];
let score = 90
function filterScore(studentsArr, score) {

    return  studentsArr.filter((e) => e.score >= score)
}
console.log(filterScore(students, score));


// Напишите программу, которая группирует объекты по определенному критерию, например, по возрасту.
// Программа должна сгруппировать объекты по возрасту и вывести объект {25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }]} и объект {30: [{ name: 'Bob', age: 30 }, { name: 'David', age: 30 }]}.
let people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 30 }
];

function groupByAge(peopleArray) {
  let groupedByAge = {};

  peopleArray.forEach(person => {
    if (!groupedByAge[person.age]) {
      groupedByAge[person.age] = [];
    }
    groupedByAge[person.age].push(person);
  });

  return groupedByAge;
}

let groupedPeople = groupByAge(people);

for (let age in groupedPeople) {
  console.log(groupedPeople[age]);
}





// Напишите программу, которая подсчитывает количество элементов по категориям в массиве объектов.
// Программа должна подсчитать количество элементов в каждой категории и вывести объект {Литература: 1, Электроника: 2, Красота: 1, Одежда: 1}.
let items = [
  { name: 'Книга', category: 'Литература' },
  { name: 'Телефон', category: 'Электроника' },
  { name: 'Шампунь', category: 'Красота' },
  { name: 'Футболка', category: 'Одежда' },
  { name: 'Ноутбук', category: 'Электроника' }
];

function countItemsByCategory(itemsArray) {
  let categoryCount = {};

  itemsArray.forEach(item => {
    if (!categoryCount[item.category]) {
      categoryCount[item.category] = 1;
    } else {
      categoryCount[item.category]++;
    }
  });

  return categoryCount;
}

let result = countItemsByCategory(items);
console.log(result);