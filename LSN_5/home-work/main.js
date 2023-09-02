// Создайте объект следующий объект:
const obj = {
 a: { b: 3 }
}
    
// Удалите ключи a и b
const obj2 ={
    a: 1,
  b: 2,
  c: 3,
  d: 4,
}
delete obj2.b
delete obj2.c
console.log(obj2);
    
// Динамически создайте ключи у объекта с помощью цикла:
      
const obj3 = {
  
}

for( let i = 0; i < 10; i++ ) {
  obj3["key" + i] = i
}
console.log(obj3);
    
// Получите значение 2 ключей из объекта посредством динамического ключа и сложите их
const result = {
  a: 20,
  b: 200,
  c: 30,
  d: 3
}

function num (a, b) {
    const num2 = a + b
    console.log(num2);
}
num(result['a'], result['b'])

      
// Соедините 3 объекта. Ключи могут быть перезаписаны!
const obj4 = { 
    test: 1,
    test1: 2, 
    test3: 3
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
const obj8 = {
    ...obj4,
    ...obj5,
    ...obj6,
}
console.log(obj8);
    
// Создайте объект city1 (let city1 = {}), укажите у него свойства name (название города, строка) 
// со значением «ГородN» и population (населенность города, число) со значением 10 млн.
const city1 = {
    name: "ГородM", 
    population: 10000000,
    getName() {
        console.log(city1.name);
    }

}
console.log(city1);
city1.getName()
// Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.
const city2 = {
    name: "ГородL",
    population: 1e6,
    getName() {
        console.log(city2.name);
    }

}
console.log(city2);
city2.getName()
// Создайте у объектов city1 и city2 методы getName(), которые вернут соответствующие названия городов

// Создайте методы exportStr() у каждого из объектов. Этот метод должен возвращать информацию о городе в формате 
// «name=ГородN\npopulation=10000000\n». Для второго города будет строка со своими значениями. Примечание: можно обращаться к каждому свойству через
//  цикл for/in, но методы объекта возвращать не нужно
const city3 = {
    name: "ГородJ",
    population: 1000000,
    exportStr() {
        console.log(this.name);
        console.log(this.population);
    }
}
city3.exportStr()
const city4 = {
    name: "ГородN",
    population: 10000,
    exportStr() {
        console.log(this.name);
        console.log(this.population);
    }
}
city4.exportStr()

// Создайте глобальную функцию getObj(), которая возвращает this. А у каждого из объектов city1 или city2 метод getCity,
//  который ссылается на getObj. Проверьте работу метода. Примечание: к объекту вызова можно обратиться через this.
function getObj() {
    return this;
}
city1.getCity = getObj;
city2.getCity = getObj;
console.log(city1.getCity());
console.log(city2.getCity());

// (*) Создать объект obj, с методами method1(),method2() и method3(). В методе method3() должна возвращаться строка «метод3».
//  Сделайте так, чтобы было возможно выполнение кода obj.method1().method2().method3().
const object10 = {
    str: 'метод3',
    method1() {
        return this
    },
    method2() {
        return this
    },
    method3() {
        return this.str
    }
}
console.log(object10.method1().method2().method3());
