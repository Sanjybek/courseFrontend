// Создайте объект следующий объект:

const obj1 = {
    a: { b: 3 }
}
console.log(obj1);

// Удалите ключи a и b
const obj2 = { 
    a: 1,
    b: 2,
    c: 3,
    d: 4,
}
delete obj2.a
delete obj2.b
console.log(obj2);

// // Динамически создайте ключи у объекта с помощью цикла
const obj3 = {
    
}
for(let i = 0; i < 20; i++) {
    obj3['key' + i] = i
}
console.log(obj3);

//  Получите значение 2 ключей из объекта посредством динамического ключа и сложите их
const result = {
    a: 80,
    b: 5,
    c: 70,
    d: 40
}
function name(a, b) {
    console.log(a + b);
}
name(result['b'],result['d'])


// Соедините 3 объекта. Ключи могут быть перезаписаны!
const obj4 = { 
    test: 1, 
    test1: 2, 
    test3: 3,
}
      
const obj5 = {
    test4: 4,
    test5: 5,
    test6: 6
}
const obj6 = {
    test: 1,
    test1: 2,
    test3: 3
}
const obj7 ={
    ...obj4,
    ...obj5,
    ...obj6,
}
console.log(obj7);

// // Создайте объект city1 (let city1 = {}), укажите у него свойства name (название города, строка) со значением «ГородN» и population (населенность города, число) со значением 10 млн.
let city1 = {
    name: 'ГородN',
    population: 10 + ' млн',
    getName () {
         console.log(city1.name);   
    }
}
console.log(city1);
city1.getName()
// //Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.
let city2 = {
    name: 'ГородМ',
    population: 1e6,
    getName () {
        console.log(city2.name);
    }
}
console.log(city2);
city2.getName()


// Создайте методы exportStr() у каждого из объектов. Этот метод должен возвращать информацию о городе в 
// формате «name=ГородN\npopulation=10000000\n». Для второго города будет строка со своими значениями. Примечание:
// можно обращаться к каждому свойству через цикл for/in, но методы объекта возвращать не нужно

let city3 = {
    name: 'городN',
    population: 10000000,
    exportStr() {
        console.log(city3.name);
        console.log(city3.population);
    }
}
city3.exportStr()

let city4 = {
    name: 'городL',
    population: 100000,
    exportStr() {
        console.log(city4.name);
        console.log(city4.population);
    }
}
city4.exportStr()


// // Создайте глобальную функцию getObj(), которая возвращает this. А у каждого из объектов city1 или city2 метод getCity,
// // который ссылается на getObj. Проверьте работу метода. Примечание: к объекту вызова можно обратиться через this. 
function getObj() {
    return this;
}
city1.getCity = getObj;
city2.getCity = getObj;
console.log(city1.getCity());
console.log(city2.getCity());


// // (*) Создать объект obj, с методами method1(),method2() и method3(). В методе method3() должна возвращаться строка «метод3».
//  Сделайте так, чтобы было возможно выполнение кода obj.method1().method2().method3(). 

const object = {
    str: 'метод3',
    method1() {
        return this
    },
    method2() {
        return this
    },
    method3() {
       console.log(this.str);
    }
}
object.method1().method2().method3()


