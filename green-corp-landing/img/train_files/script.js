console.log('Тренировка');

//СИНТАКСИС
/*
// Создание объекта

let userInfo = new Object(); // синтаксис "конструктор объекта"
let userInfo = {};  // синтаксис "литерал объекта"
*/

//-----------------
// Свойства объектов. Ключ + значение

//У каждого свойства есть ключ
//(также называемый «имя» или «идентификатор»).
//После имени свойства следует двоеточие ":",
//и затем указывается значение свойства.
//Если в объекте несколько свойств,
//то они перечисляются через запятую.

/*
let userInfo = {
	name: "Вася", // Свойство объекта
	age: 30, // Последняя (висячая) запятая
};

console.log(userInfo);
console.log(userInfo.name);
*/
//---------------------------------------------
// Имена свойств

// Имя из двух и больше слов
/*
let userInfo = {
	name: "Вася",
	age: 30,
	"likes javascript": true,
};
console.log(userInfo.name);
console.log(userInfo['name']);
console.log(userInfo["likes javascript"]);

const myObj = {
    count: 1,
    texts: {
      greetings: "вложенный ключ!"
    }
  };
  /*
  console.log(myObj.texts.greetings);
  console.log(myObj["texts"].greetings);
//-----------------
// Вычисляемое либо передаваемое имя
/*
// Вычисляем имя
let firstPart = "likes";
let userInfo = {
	name: "Вася",
	age: 30,
	[firstPart + " javascript"]: true,
};
console.log(userInfo["likes javascript"]);
*/
//-----------------
/*
// Передаем имя
let firstPart = "likes";
let userInfo = {
	name: "Вася",
	age: 30,
	[firstPart]: true,
};
console.log(userInfo[firstPart]);

// Преимущество квадратных скобок
//let key = "name";
//console.log(userInfo[key]);
*/
//-----------------
/*
// Зарезервированные слова в именах
let userInfo = {
	let: "Вася",
	for: 30,
};
console.log(userInfo.let);
console.log(userInfo.for);
*/
//-----------------
/*
// Имена = строки либо символы

let userInfo = {
	0: "Вася", // 0 тоже самое что "0"
};
console.log(userInfo[0]);
console.log(userInfo["0"]);
*/
//-----------------

/*
// Тип данных Symbol

// Создаём символ id с описанием (именем) "id"
let id = Symbol("id");
let userInfo = {
	name: "Вася",
	age: 30,
	[id]: "Некое значение"
};
console.log(userInfo);

// Основное применение символов:
// 1.«Скрытые» свойства объектов
//		Символьное свойство не появится в for..in
// 2. Использование системных символов
// 	Symbol.iterator, Symbol.toPrimitive и т.д.
*/
//---------------------------------------------
// Вложенность
/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	}
}
console.log(userInfo);
console.log(userInfo.address);
console.log(userInfo.address.city);
*/

//---------------------------------------------
/*
// Свойство из переменной

function makeUserInfo(name, age) {
	return {
		name: name,
		age: age,
		// ...другие свойства
	};
}
let user = makeUserInfo("Вася", 30);
console.log(user);
*/
//------------------
/*
function makeUserInfo(name, age) {
	return {
		name, // Тоже самое что и  name: name,
		age,// Тоже самое что и  age: age,
		"likes javascript": true,
		// ...другие свойства
	};
}
let user = makeUserInfo("Вася", 30);
console.log(user);
*/
//---------------------------------------------
// Изменение объекта
/*
// Добавление свойства
let userInfo = {
	name: "Вася",
}

console.log(userInfo);

userInfo.age = 30;

console.log(userInfo);

userInfo['likes javascript'] = true;

console.log(userInfo);

userInfo.address = {
	city: "Uzhhorod",
	street: "Freedom",
};

console.log(userInfo);
*/
//------------------
/*
// Удаление свойства

let userInfo = {
	name: "Вася",
	age: 30,
	"likes javascript": true
}
console.log(userInfo);

delete userInfo.age;

console.log(userInfo);

delete userInfo["likes javascript"];

console.log(userInfo);

*/
//------------------
// Изменение свойства
/*
let userInfo = {
	name: "Вася",
	age: 30,
}
console.log(userInfo);

userInfo.age = 18;

console.log(userInfo);
*/

//------------------
/*
// Изменение свойства даже в константе

const userInfo = {
	name: "Вася",
	age: 30,
}
console.log(userInfo);

userInfo.age = 18;

console.log(userInfo);
*/

//---------------------------------------------

/*
// Копирование объектов

// При копировании объекта в другую переменную
// сам объект не дублируется, а копируется только ссылка на него

let userInfo = {
	name: "Вася",
	age: 30,
}

console.log(userInfo);

let user = userInfo;

console.log(user);

user.age = 18;

console.log(userInfo);
*/

//-------------------

// Дублирование объектов (Object.assign)

// Синтаксис
//Object.assign(куда(объект), что(свойство #1), что(свойство #2), ...);
/*
let userInfo = {
	name: "Вася",
	age: 30,
}

let user = Object.assign({}, userInfo);

user.age = 18;

console.log(userInfo);
console.log(user);
*/
//-------------------
/*
// Еще про Object.assign

let userInfo = {
	name: "Вася",
	age: 30,
}
Object.assign(userInfo, { ['likes javascript']: true, city: "Uzhhorod" });
console.log(userInfo);
*/

//---------------------------------------------
// Проверка существования свойства
/*
let userInfo = {
	name: "Вася",
	age: 30,
}
//console.log(userInfo.age);

if (userInfo.age) { // true или false
	console.log(userInfo.age);
}
*/
//--------------------
// Опциональная цепочка
/*
let userInfo = {
	name: "Вася",
	age: 30,
	//address: {
	//	city: "Uzhhorod",
	//	street: "Freedom",
	//}
}
//console.log(userInfo.address.street);
console.log(userInfo?.address?.street);
*/

//--------------------
// Оператор "in"
/*
let userInfo = {
	//name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	}
}
if ("name" in userInfo) {
	console.log(userInfo.name);
}
*/
//--------------------

//В большинстве случаев сработает сравнение с undefined.
//либо опциональная цепочка ?.
//Но есть особый случай, когда свойство существует, 
//но содержит значение undefined. 
//В этом случае необходимо использовать "in".

/*
let userInfo = {
	name: undefined,
	// ...следующие свойства
}
if (userInfo.name) { // false
	console.log(userInfo.name);
}
if ("name" in userInfo) { //true
	console.log(userInfo.name);
}
*/

//---------------------------------------------

// Цикл «for…in»
/*
// Для перебора всех свойств объекта используется цикл for..in.
// Этот цикл отличается от изученного ранее цикла for(;;).

for (let key in object) {
	// тело цикла выполняется для каждого свойства объекта
}
*/

//-----------

/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	}
}

for (let key in userInfo) {
	// ключи
	console.log(key); // name, age, address
	// значения ключей
	console.log(userInfo[key]); // Вася, 30, Object {}
}

for (let key in userInfo.address) {
	// ключи
	console.log(key); // city, street
	// значения ключей
	console.log(userInfo.address[key]); // Uzhhorod, Freedom
}*/

//---------------------------------------------
// Методы объекта
/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},
	//showInfo: function () {
	//	console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
	//}
	showInfo() {
		console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
	}
}
userInfo.showInfo();
*/

//----------------------
// Использование "this"
/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},
	showInfo() {
		//console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
		console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
	}
}
userInfo.showInfo();
*/
//----------------------

/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},
	showInfo() {
		//function show() {
		//	console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
		//}

		// У стрелочной функции нет своего "this" используются
		// значение из внешнего метода userInfo.showInfo()
		let show = () => console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
		show();
	}
}
userInfo.showInfo();
*/
//----------------------
// Преимущество "this"
/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},
	showInfo() {
		console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
		//console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
	}
}
userInfo.showInfo();

let user = userInfo;
userInfo = null;
user.showInfo();
*/
//---------------------------------------------

// Функция-конструктор

/*
Обычный синтаксис создания объекта{... } позволяет создать
только один объект. Но зачастую нам нужно создать множество
однотипных объектов, таких как пользователи, элементы меню и т.д.
Это можно сделать при помощи функции - конструктора и оператора "new".
*/
/*
Функции - конструкторы являются обычными функциями.
Но есть два правила:
1. Имя функции - конструктора должно начинаться с большой буквы.
2. Функция - конструктор должна вызываться при помощи
	оператора "new".
*/
/*
function UserInfo(name) {

	// this = {}; Создается пустой объект (неявно)

	this.name = name;
	this.age = 30;

	// return this; Возвращается объект (неявно)
}

console.log(new UserInfo('Вася'));
console.log(new UserInfo('Лена'));
*/

/*
Когда мы пишем наш код, используя объекты для представления сущностей реального мира,
– это называется объектно - ориентированное программирование или сокращённо: «ООП».

ООП является большой предметной областью и интересной наукой само по себе.
Как выбрать правильные сущности ? Как организовать взаимодействие между ними ?
Это – создание архитектуры, и есть хорошие книги по этой теме,
такие как «Приёмы объектно - ориентированного проектирования.
Паттерны проектирования» авторов Эрих Гамма, Ричард Хелм, Ральф Джонсон,
Джон Влиссидес или «Объектно - ориентированный анализ и проектирование с примерами приложений»
Гради Буча, а также ещё множество других книг.
*/

//========================================================================================================================================================
//========================================================================================================================================================

//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/
/*
// Задача №1 (верна ли запись)
const userInfo = {
	name: "Вася"
	age: 30
}

// Задача №2 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30,
	"58": 'Значение свойства'
}
console.log(userInfo[58]);

// Задача №3 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30
}
let user = userInfo;
user.age = 45;

console.log(userInfo.age);

// Задача №4 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30,
	showInfo() {
		console.log(`${this.name}`);
	}
}
let user = userInfo;
userInfo = null;
user.showInfo();

// Задача №5 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30,
}
for (const key in userInfo) {
	const value = userInfo[key];
	console.log(value);
}

// Задача №6 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod"
	}
}
for (const key in userInfo.address) {
	console.log(userInfo.address[key]);
}

// Задача №7 (верна ли запись)
const userInfo = {
	name: "Вася",
	age: 30,
	"likes js": true
}
console.log(userInfo."likes js");
*/
// Задача №8
/*
1.Создайте пустой объект userInfo.
2.Добавьте свойство name со значением Вася.
3.Добавьте свойство age со значением 30.
4.Измените значение свойства name на Лена.
5.Удалите свойство name из объекта.
*/
/*
const obj= {
      "Яблоко": "фрукт",
      ["Арбуз"]: "ягода",
      ["Помидор"]: "овощ",
      ["Огурец"]: "овощ",
      ["Вишня"]: "ягода"
};

const Obj= {
    "Велосипед":"лето",
    "Лыжи":"зима",
    "Сноуборд":"зима",
};

console.log(obj);

let char;
let NewObj={};
for (let key in obj) {
    let count=0;
    char=obj[key];
    for (let key in obj) {
     if (char == obj[key]) count++;
    }
        NewObj[char]=count;         
} 
console.log(NewObj);

let list = [
    {product: "Apple", price: 25},
    {product: "Cherry", price: 32},
    {product: "Strawberry", price: 45}
];
console.log(list);
console.log(list.length);

// list.forEach(function(item, index, array) {
//    console.log(item, index);
// });
let listPrice=0;
let num=0;
for (let i=0; i<list.length; i++) {
      if (listPrice<list[i].price) {
          listPrice= list[i].price;
          num=i;
      }
  }
console.log(list[num].product);

/*function printArray(array) {
    for (let index = 0; index < array.length; index++) {
      console.log(array[index]);
    }
}
*/



/*


function printArray(array) {
    for (let value of array) {
      console.log(value);
    }
  }
let array1=[{1:12}, {2:22}, {3:32}, {5:52}, {q:11}, {w:99} , {e:44}];

let multipleTypes = [0, '1', true, {}, undefined,'',   , 0, 34];

// printArray(array1);
/* function printReverseArray(array) {
    for (let index = array.length - 1; index >= 0; index--) {
      console.log(array[index]);
    }
  };
  printReverseArray(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
 // функция хелпер - убирает ве falsy значени из массива 

  function compactArray(array) {
    const result = [];
    for (let item of array) {
        if (Boolean(item)){
            result.push(item);
        }
      }
      return result;
  }

    //console.log(compactArray(multipleTypes));
//создает новый массив на основе фильтрации элементов из имеющегося массива массива
    function deleteArray(array) {
        const result = [];
        for (let item of array) {
            if (!Boolean(item)){
                result.push(item);
            }
          }
          return result;
      }
      console.log(deleteArray(multipleTypes));

      let result;
      let list = ["Банан","Апельсин","Яблоко"] /*l
      function betterArray(array) {
        result= array[0];
          for (let index=0; index<array.length; index++) {
            for (let index=0; index<array.length; index++){
            if (result.length < (array[index].length)) result= array[index];    
            };
          };
          return result;
      } 
      console.log(betterArray(list));
      
      function better1Array(array) {
        result= array[0];
          for (let index=0; index<array.length; index++) {
            if (result.length < (array[index].length) ) result= array[index];    
            };
        
          return result;
      } 
      console.log(better1Array(list));
      */


     // Задание 9.3
/* 
let list_1= [12, 3];
let list_2= [2, 1];
let list_3= [];

let list_3=list_1.concat(list_2);
console.log(list_3);
for (let i=0; i<list_3.length; i++) {
    list_3[i]=list_3[i]*list_3[i];
}
console.log(list_3);
function twoArray(arr1,arr2) {
    const result = [];
    for (let item of arr1) {
        result.push(item);
    };
    for (let item of arr2) {
        result.push(item);
    };
    for (let i=0; i<result.length; i++) {
        result[i]=result[i]*result[i];
    }
return result;
}
console.log(twoArray(list_1,list_2));
*/

/*
function twosqerArray(arr1,arr2,arr3){
    arr3=arr1.concat(arr2);
    for (let i=0; i<arr3.length; i++) {
        arr3[i]=arr3[i]**2;
    }
 return arr3;
}
console.log(twosqerArray(list_1,list_2,list_3));
*/
/* Задание 9.4 

В программе объявлена переменная list, 
которая содержит массив чисел. Используя цикл, 
посчитайте сумму чисел и выведите в консоль.
Пример значений переменных:
list = [23, 13, 3]
Пример результата:
39


let list = [23, 13, 3]
function sum_elementArray(array) {
     let result=0;  
     for (let index=0; index<array.length; index++) {
        result += array[index];
        };
     return result;
  } 
  console.log(sum_elementArray(list));
*/
/*
Практическое задание 9.5
В программе объявлена переменная list, 
в которую записан массив из положительных 
и отрицательных числовых значений. Используя цикл, 
посчитайте сумму положительных чисел и выведите результат в консоль.
Пример значений переменных:
list = [12, -4, 5, 32, 2],
Пример результата:
51


let list = [12, -4, 5, 32, 2];
function sum_plusArray(array) {
    let result=0;  
    for (let index=0; index<array.length; index++) {
       if (array[index]>=0) result += array[index];
       };
    return result;
 } 
 console.log(sum_plusArray(list));
 
 Практическое задание 9.6
 В программе объявлена переменная list, 
 в которую записан массив числовых значений от 1 до 100. 
 Используя цикл, сформируйте сумму из простых чисел
 этого диапазона и выведите результат в консоль.

 Пример значений переменных:
 list = [1, 2, 3, ... 99, 100]
 
 Пример результата:
 1060
  
 
 let list= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
 function isPrime(num){
     for(let i=2, max= Math.sqrt(num); i<=max; i++) {
         if (num % i === 0) {
             return false;
         }
     }
     return num>1;
 }

let char=0;
for (i=0; i<list.length;i++){
    if (isPrime(list[i])) {
       char +=list[i];
    }
} 
console.log(char);
*/
/*
Практическое задание 9.7
В программе объявлена переменная list, 
в которую записан массив из числовых значений. 
Рассчитайте произведение максимального и минимального 
элементов массива. Результат выведите в консоль.
Пример значений переменных:
list = [2, 45, 3, 23, 6]
Пример результата:
90 */
/*
let list = [2, 45, 3, 23, 6];
function getMaxMinOfArray(numArray) {
    let max= Math.max.apply(null, numArray);
    let min= Math.min.apply(null, numArray);
    let result= max*min
    return result;
  }
 console.log(getMaxMinOfArray(list));
*/

/*задание 9.8
В программе объявлена переменная list, 
в которую записан массив из числовых значений. 
Напишите программу, которая переворачивает массив list 
и выводит результат в консоль. Метод массива reverse()
использовать нельзя.


Пример значений переменных:
list = [2, 45, 3, 23, 6]

Пример результата:
[6, 23, 3, 45, 2]
list = [2, 45, 3, 23, 6]
let array1=[];
function printReverseArray(array) {
    for (let index = array.length - 1; index >= 0; index--) {
      array1.push(array[index]);
    }
    return array1;
  }
  console.log(printReverseArray(list));

  */
/* 
  Практическое задание 9.9
  В программе объявлена переменная sentence со строковым значением. 
  Преобразуйте эту строку в массив так, чтобы каждое слово было 
  отдельным элементом массива. Результат выведите в консоль.
  Метод строки split() использовать нельзя.
  Пример значений переменных:
  sentence = "Завтра будет лучше чем вчера"
  Пример результата:
  ['Завтра', 'будет', 'лучше', 'чем', 'вчера'] 

let sentence = "Завтра будет лучше чем вчера";
let array=[];
let char='';
for (i=0; i<=sentence.length; i++){
    if (sentence.charAt(i) !==' ' && sentence.charAt(i) !=='') {
        char += sentence.charAt(i);
    } else {
        array.push(char);
        char='';
    }
}
console.log(array);
*/

/* Практическое задание 9.10
В программе объявлена переменная list, 
в которой записан массив из чисел и логических значений. 
Используя цикл, посчитайте сумму числовых значений 
до первого логического значения. Дойдя до логического значения, 
остановите цикл. Результат выведите в консоль.
Пример значений переменных:
list = [2, 54, 2, 54, false, 2]
Пример результата:
112 */
/*
let list = [2, 54, 2, 54, false, 2];
let char=0;
function thenumbArray (arr) {
    for (let index=0; index<list.length;index++ ){
        if (Number.isFinite(arr[index])) {
            char +=arr[index];
        }else {
            return char;
        }
    }
 return char;
}
console.log(thenumbArray(list));
*/

/*
Практическое задание 9.11
Используя цикл, сформируйте массив list 
со значениями от 10 до 20. Выведите значение 
переменной list в консоль. */
/*
let list=[];
function addArr (arr) {
    for(let i=10; i<=20; i++){
     arr[i-10]=i;
    }
    console.log(arr);
}
addArr (list);
*/
/*
Практическое задание 9.13
В программе объявлена переменная list, 
в которой записан массив из строковых значений. 
Напишите программу, которая считает количество элементов 
в массиве list без учета элементов со значением "default" 
и выводит результат в консоль. 
Сравнение должно быть регистронезависимым.
Пример значений переменных:
list = ["Лёша", "default", "полке", "клопа", "нашёл"]
Пример результата:
4
*/
/*
let list = ["Лёша", "default", "полке", "клопа", "нашёл"];
let num=0;

for (let i of list) {
 if (i.toLowerCase() !== 'default') {
     console.log(i);
     num++;
     }else {
         continue
        }
}
console.log(num);
*/
/*
В программе объявлена переменная list, 
в которую записан массив из строковых значений. 
Сформируйте строку из первых букв каждого элемента 
массива и выведите ее в консоль. Гарантируется, что 
каждый элемент массива не нулевой длины.
Пример значений переменных:
list = ["почтовый","желание","абсолютный","закрытый"]

Пример результата:
"пжаз"
*/
/*
let list = ["почтовый","желание","абсолютный","закрытый"]
let str='';
function firstletter (arr){
for (let i=0; i<arr.length; i++) {
 str += arr[i].charAt(0);
}
return str;
}
console.log(firstletter(list));
*/ /*
let objectArray = [{ name: 'Иван' }, { name: 'Петя' }, { name: 'Саша' }];
console.log(objectArray.toString());

let numberArray = [1, 2, 3];
// console.log(numberArray.toString()); // '1,2,3'
console.log(typeof [1, 2, 3].join());
*/
/*
Практическое задание 9.12
В программе объявлена переменная list, в которую записан массив. 
Используя цикл, сформируйте массив numbers_list, который содержит 
в себе только числа из массива list. Если в процессе прохода циклом 
по массиву list обнаружится значение false, последующие значения рассматривать не нужно. 
В конце программы выведите значение переменной numbers_list в консоль.

Пример значений переменных:
list = [2, "привет", 23, true, 2, false, 2]
Пример результата:
[2, 23, 2]

*/
// Пример №1 не заработал в задании, но заработал в консоле
// let list = ["привет",1,"пока",true,2,false];
// let numbers_list=[];
/*let el='';
for (let i=0; i<list.length; i++){
  if (Number.isFinite(list[i])) {
    el=`${el}${list[i]} `;
  } else if (list[i] === false) {
            break;
  }
}
el= el.split(' ');
el.pop();
for (let i=0; i<el.length; i++){
  if (el[i].length > 1){ 
    str.trim(el[i]);
    numbers_list[i]= el[i]*1;
  } else {
    numbers_list[i]= el[i]*1;
  }
}
console.log(numbers_list);
*/ 
// пример 2 - рабочий

/*
function compactArray(arr) {
  var numbers_list = [];
    
  for (let item of arr) {
    if (Number.isFinite(item)) {
      numbers_list.push(item);
    }
     else if (item === false) {
       return numbers_list;
     }
  }

  return numbers_list;
}
console.log(compactArray(list)); /*

// Основы программирования на JavaScript II
/*
const name = "Я хочу, чтобы было выведено из этой строки только слово, но не Петр, не Вася, Коля и Маша, Вова";
console.log("Привет".concat(", ", name, "!")); 
console.log('какого черта'.concat(', ', name, '!'));
console.log("Привет, Петр".includes("Привет"));
console.log("Привет, Петр".includes(".", 1));
console.log("Привет, Петр".includes("Петр",9)); 
console.log("Привет, Детка".startsWith(" Детка", 7));
console.log("Привет, Колян".endsWith("Коля", 12));
console.log("Привет, Петр".endsWith("Привет", 6)); 
console.log("- 2345Привет, Петр!\n-Привет, Вася!".indexOf("ривет"));
console.log("Привет, Петр".slice(8));
let stroka= "Привет, Петр".slice(8);
console.log(stroka);
let newname='';
for (let i=0; i<name.length; i++) {
  if (name.slice(i, i+4) === 'Вова') {
    newname= name.slice(i, i+4);
    console.log(newname);
    break;
  }
}

// Практическое задание 1.1.

let message = "Приветствую вас"
for (let i=0; i<message.length; i++) {
  if (message.slice(i, i+6).toLowerCase() === 'привет') {
    console.log(true);
     break;
  } else {
    console.log(false);
  }
}
*/
// Практическое задание 1.2.
/*
В программе задана переменная greetings со строковым значением. 
Определите позицию последнего вхождения подстроки username 
в значении переменной greetings. Результат выведите в консоль.

Пример значений переменных:
greetings = "Приветствую, username! Сегодня вы получили два сообщения от username."
Пример результата:
58

// let greetings ="Приветствую, username! Сегодня вы получили 2 сообщения от username.";
let greetings ="Username, вы можете загрузить новую версию программы."
greetings= greetings.toLowerCase()
console.log(greetings.lastIndexOf("username"));

 */
/*
// Практическое задание 1.3.
В программе задана переменная firstDiv со строковым значением. 
Определите, встречаются ли в данной строке два парных тега <p>. 
Выведите в консоль булевое значение true, если встречается, и false — в ином случае.

Пример значений переменных:
firstDiv = "<div><p>Первый заголовок</p><p>Второй заголовок</p></div>"
Пример результата:
true
*/
/*
let firstDiv = "<div><p>Первый заголовок</p>Второй заголовок</p></div>"
 if (firstDiv.indexOf("<p>") !== firstDiv.lastIndexOf("<p>")) {
   console.log(true);
 } else {
  console.log(false);
 }
//вариант без if
let firstDiv = "<div><p>Первый заголовок</p>Второй заголовок</p></div>"
let first = firstDiv.indexOf('<p>');
let second = firstDiv.lastIndexOf('<p>');
console.log(!(first==second));
*/
// Практическое задание 1.4.
/*
В программе объявлена переменная road со строковым значением, 
которая задает протяженность дороги. Необходимо из строки убрать 
подстроку km, оставив только численное значение. Его необходимо 
конвертировать в мили, округлить до одного знака после запятой, 
а результат вывести в консоль. Помните, что 1 километр равен 0,62 мили.

Пример значений переменных:
road = 15 km
Пример результата:
9.3

 let road = '15.2 km';
 let mill=0.62;
 let result='';
 for (let i=0; i<road.length; i++) {
  if (road.slice(i) !== ' km') {
     result= result + road[i];
  } else {
    result *= 0.62;
    break;
  }
}
if (Number.isInteger(result)) {
  console.log(result)
} else {
  console.log(result.toFixed(1));
}

let road = '15 km';
let index;
let result;
index= road.lastIndexOf(" km");
result = road.slice(0,index) * 0.62;

result = (Number.isInteger(result))? result : result.toFixed(1)*1;
console.log(result);
*/
/*if (Number.isInteger(result)) {
  console.log(result);
} else {
  result= result.toFixed(1)
  console.log(result);
} */

// Практическое задание 1.5.

/*В программе задана переменная words со строковым значением. 
Напишите условный оператор, который выводит в консоль сообщение 
В строке больше одного слова, если строка содержит больше одного слова, 
в ином случае в консоль должна выводиться фраза В строке одно слово.

Пример значений переменных:
words = "Солнечная панель"
Пример результата:
"В строке больше одного слова" 

let words = "Солнечная панель";

if (words.includes(" ")) {
  console.log('В строке больше одного слова');
} else {
  console.log('В строке одно слово');
}
*/
/*
Практическое задание 1.6.

В программе объявлена переменная symbols со строковым значением. 
В данной строке могут встречаться буквенные символы и цифры. 
Опишите условие, которое выводит в консоль строку Первый символ цифра, 
если первый символ переменной symbols является цифрой. 
В противном случае необходимо вывести строку Первый символ не цифра.

Пример значений переменных:
symbols = "Первый номер"
Пример результата:
"Первый символ не цифра"

//c if 

let = symbols = "12 Первый номер";
if ((symbols.codePointAt(0)>=48) && (symbols.codePointAt(0)<=57)) {
  console.log('Первый символ цифра');
} else {
   console.log('Первый символ не цифра');
 }

// с тернарным оператором
 let = symbols = "12 Первый номер";
 let result='';
 result = (symbols.codePointAt(0)>=48) && (symbols.codePointAt(0)<=57)?
 'Первый символ цифра':'Первый символ не цифра';
 console.log(result);
 */
/*
 
Практическое задание 1.7.
 В программе объявлена переменная symbols со строковым значением. 
Напишите условный оператор, который реализует следующую логику:
Если сумма числовых значений Unicode первых двух символов делится на два без остатка, 
необходимо получившееся число конвертировать в unicode-символ и вывести в консоль
В ином случае необходимо вывести сообщение Символ обнаружить не удалось

Пример значений переменных:
symbols = "floor"
Пример результата:
"Ò"

let symbols = "floor";
let result=0;
result = (symbols.codePointAt(0) + symbols.codePointAt(1))%2 == 0?
symbols.codePointAt(0) + symbols.codePointAt:'Символ обнаружить не удалось';
console.log(String.fromCodePoint(result));

let symbols = "floor";
let result=0;

if ((symbols.codePointAt(0) + symbols.codePointAt(1))%2 == 0) {
   result= symbols.codePointAt(0) + symbols.codePointAt(1);
   console.log(String.fromCodePoint(result));
} else {
  result='Символ обнаружить не удалось';
  console.log(result);
}

*/
/*
Практическое задание 1.8.
В программе задана переменная phone со строковым значением. 
В ней хранится номер телефона и, помимо цифр, иные символы. 
Преобразуйте строку так, чтобы в номере отсутствовали следующие символы: (,/:/* / ).

Пример значений переменных:
phone = "+712:34567*8,90"
Пример результата:
"+71234567890"

let phone = "+712:34567*8,90";
console.log(phone.match(/[+0-9]/g).join(''));


/*
Практическое задание 1.9.
В программе задана переменная emails со строковым значением. 
В ней указано несколько значений электронной почты через пробел. 
Преобразуйте данное значение в массив так, чтобы каждая почта 
в строке являлась элементом массива. Результат выведите в консоль.
Пример значений переменных:
emails = "example@ex.ru primer@primer.com email@com.ru"
Пример результата:
["example@ex.ru", "primer@primer.com", "email@com.ru"] 
*/
/*
let emails = "example@ex.ru primer@primer.com email@com.ru";
// первый вариант
// console.log(emails.split(' '));
// второй вариант
if (emails !== '') {
  console.log(emails.match(/([-a-z0-9@.]{1,})|()/g));
} else {
  console.log(emails.match());
}
*/
/*
Практическое задание 1.10.
В программе задана переменная ticket со строковым значением. 
Напишите условный оператор, который работает по следующей логике:

- Если в билете после буквенных символов и тире идут 8 цифр подряд, 
   программа должна вывести в консоль сообщение Выбран билет на концерт
- Если в билете после буквенных символов идут 12 цифр подряд, 
   программа должна вывести в консоль сообщение Выбран билет в театр
- В противном случае выведите в консоль сообщение Билет не определен

Пример значений переменных:
ticket = "BM-12234567:RU"
Пример результата:
"Выбран билет на концерт"


let ticket = 'SD-122345678912:RU';

let result = ticket.match(/[0-9]/g);

if (result.length == 8) {
  console.log('Выбран билет на концерт');
 } else { if (result.length == 12) {
   console.log('Выбран билет в театр');
 } else {
   console.log('Билет не определен');
 } }
 */
// примеры метода .splice
/*
 const films = [
  {viewed: false, title: "Назад в будущее", durationInMinutes: 116},
  {viewed: false, title: "12 разгневанных мужчин", durationInMinutes: 96},
  {viewed: false, title: "Мэри и Макс", durationInMinutes: 92},
];

 const customSelection = [
  {viewed: false, title: "12 разгневанных мужчин", durationInMinutes: 96},
  {viewed: false, title: "Мэри и Макс", durationInMinutes: 92},
  {viewed: false, title: "Чужой", durationInMinutes: 87}, 
  {viewed: false, title: "Зодиак", durationInMinutes: 121}
];
customSelection.splice(5, 0, 
  {viewed: false, title: "Время", durationInMinutes: 117}
); // начиная с индекса 5, вставляем один новый элемент
console.log(customSelection); // 
customSelection.splice(-1, 0, {viewed: false, title: "Бенни и Джун", durationInMinutes: 89}) 
// начиная с индекса 4 (подсчет ведем с конца), вставляем один новый элемент 

console.log(customSelection); 
customSelection.splice(2) // начиная со второго индекса, удаляем все элементы 
console.log(customSelection); 
*/

// Практическое задание 2.1.
/*
В программе задана переменная values, которая хранит массив 
со строковыми и булевыми значениями. Замените булевое значение 
с минимальным индексом на строковое значение Булевый тип. 
Преобразованный массив выведите в консоль. Примечание: подразумевается 
решение без методов массивов, просто вспомним, как работать с массивами и циклами!
Пример значений переменных:
values = ["Строка", true, "Число", "Объект", "Не число", false]
Пример результата:
["Строка", "Булевый тип", "Число", "Объект", "Не число", false]
*/
/*
let values = ["Строка", true, "Число", "Объект", "Не число", false];

for (let index = 0; index<=values.length; index++) {
  if ((values[index] == true) | (values[index] == false)) {
    values[index]= 'Булевый тип';
     break;
  }
}
console.log(values);*/

// Как создать новый массив из сущетсвующего
/*
const films = [
  {viewed: false, title: "Назад в будущее", durationInMinutes: 116},
  {viewed: true, title: "12 разгневанных мужчин", durationInMinutes: 96},
  {viewed: false, title: "Мэри и Макс", durationInMinutes: 92},
];

const customSelection = films.slice(0, 2);
console.log(customSelection);
Console: [
  {viewed: false, title: "Назад в будущее", durationInMinutes: 116},
  {viewed: true, title: "12 разгневанных мужчин", durationInMinutes: 96}
]; 
 копируем весь массив целиком
const films = [
  {viewed: false, title: "Назад в будущее", durationInMinutes: 116},
  {viewed: true, title: "12 разгневанных мужчин", durationInMinutes: 96},
  {viewed: false, title: "Мэри и Макс", durationInMinutes: 92},
];
const customSelection = films.slice() // копируем весь массив целиком
console.log(customSelection);
копируем последний элемент массива, для этого указываем индек (-1)
const films = [
  {viewed: false, title: "Назад в будущее", durationInMinutes: 116},
  {viewed: true, title: "12 разгневанных мужчин", durationInMinutes: 96},
  {viewed: false, title: "Мэри и Макс", durationInMinutes: 92},
];
const customSelection = films.slice(-1)
console.log(customSelection);
Console: [
  {viewed: false, title: "Мэри и Макс", durationInMinutes: 92},
];*/


/*
// пример работы concat и filter

const mas=[1,2,'and mas'];
const mastwo=[3,4,5, 'and mastwo'];
const customMas= mas.concat(mastwo);
console.log(customMas);

const mas3=mastwo.concat(
  'new element', 'new element_2'
);
console.log(mas3);

const mas4=mastwo.concat(
  [{'mas1':1,'mas2':2,'mas3':3}],
  5
)
console.log(mas4);

const customSelection = [
  {viewed: false, title: "Назад в будущее", durationInMinutes: 116},
  {viewed: true, title: "12 разгневанных мужчин", durationInMinutes: 96},
  {viewed: false, title: "Мэри и Макс", durationInMinutes: 92},
];
console.log(customSelection);
console.log('new array after used metod filter');
const unwatchFilms = customSelection.filter(e=> e.durationInMinutes <96 ) 
console.log(unwatchFilms);
*/

/*
Практическое задание 2.2.
В программе задана переменная partNumbers, 
которая хранит в себе массив. Каждый элемент 
массива является артикулом товара. Напишите программу, 
которая создаст новый массив на основе partNumbers. 
В новом массиве должны быть все элементы из partNumbers, 
которые заканчиваются на две цифры и два буквенных символа. 
Все остальные элементы необходимо отбросить. 
Значение нового массива выведите в консоль.

Пример значений переменных:
partNumbers = ["ER1234COM", "FIV987451RU","GE123JO","P4321NO"]

Пример результата:
["FIV987451RU", "GE123JO", "P4321NO"]

let partNumbers = ["ER1234COM", "FIV987451RU","GE123JO","P4321NO"];

const newpartNumbers = partNumbers.filter(element=>(/\d[a-z]{2}$/ig).test(element) == true);
console.log(newpartNumbers);
*/

// разбирал работу рег строк с квантификатором и без
//let str="ER1234CO1gh";
//console.log(str.match(/[a-zA-Z]{2}$/g));
//console.log('вариант без квантифика',(/\d\w\w$/ig).test(str));
//console.log('с квантификатором',(/\d[a-z]{2}$/ig).test(str));


// Практическое задание 2.3.
/*
В программе задана переменная layout, которая хранит 
в себе строковое значение. Данная строка содержит 
в себе часть HTML-верстки с числами. На основе значения layout 
сформируйте массив из чисел, которые встречаются в верстке. 
Если число четное, возведите его в квадрат, 
в ином случае оставьте без изменений. 
Полученный массив выведите в консоль. 
Если строка layout не содержит чисел, выведите пустой массив.

Пример значений переменных:
layout = "<p>10</p><p>14</p><p>23</p><p>43</p><p>98</p><p>101</p>"

Пример результата:
[100, 196, 23, 43, 9604, 101]


let layout = "<p>10</p><p>14</p><p>23</p><p>43</p><p>98</p><p>101</p>";
layout= layout.split('>');
let num=0;
let newArray=[];
for (let items of layout) {
    num= parseInt(items);
   if (Number.isInteger(num)) {
    newArray.push(parseInt(items));
   }
}
console.log(newArray);

let customArray= newArray.map(function(square) {
  return square= square%2==0 ? square*square : square;
})
console.log(customArray);
*/

// Практическое задание 2.4.
/*
В программе задана переменная tasks, которая содержит массив. 
Элементы данного массива являются объектами с ключами title и completed. 
Сформируйте новый массив titles, который в качестве значений может хранить 
свойства title из всех значений массива tasks. Результат выведите в консоль.

Пример значений переменных:
tasks = [
    {title: "Умыться" , completed: true},
    {title: "Сделать зарядку" , completed: true},
    {title: "Приготовить завтрак" , completed: false}
]
Пример результата:
["Умыться", "Сделать зарядку", "Приготовить завтрак"]
*/
/*
let tasks = [
  {title: "Умыться" , completed: true},
  {title: "Сделать зарядку" , completed: true},
  {title: "Приготовить завтрак" , completed: true}
];

// let titles = tasks.map(index => index=index.title)
// console.log(titles);

let titles = tasks.map(function (index) {
  return index= index.title;
})
console.log(titles);

let noCompleted=tasks.every(e=> e.completed === true);
console.log(noCompleted);

*/
/*
Практическое задание 2.5

В программе задана переменная values, которая хранит массив со строковыми и булевыми значениями. 
На основе массива values сформируйте новый массив result, который является фрагментом values. 
Новый массив должен начинаться с первого вхождения булевого значения и заканчиваться последним 
вхождением булевого значения в массив values.


Пример значений переменных:
values = ["Строка",true,"Числа","Объект","Не число", false, "Не объект"]

Пример результата:
[true, "Число", "Объект", "Не число", false]


let values = ["Строка",true,"Числа","Объект","Не число", false, "Не объект"]
let index1=values.indexOf(true);
let index2=values.indexOf(false);
let startIndex=index1<index2? index1:index2;
let index3=values.lastIndexOf(true);
let index4=values.lastIndexOf(false);
let endIndex=index3>index4? index3:index4;
endIndex++
const result= values.slice(startIndex,endIndex);
console.log(result);
*/

// Практическое задание 2.6.
/*
В программе задана переменная values, которая хранит в себе массив. 
Элементы массива являются числами. Определите, находятся ли в заданном 
массиве элементы, которые содержат четырехзначные числа. Результат выведите 
в консоль в виде булевого значения (true, если содержит, и false, если нет).

Пример значений переменных:
values = [10, 185, 11200, 980]

Пример результата:
false


let values = [10, 185, 11200, 980];

let result= values.find(function (num){
  if (num>999 && num<=9999){
    return num;
  }
}) 
if (result !== undefined) {
  result=true;
  console.log(result);
} else {
  result=false;
  console.log(result);
}
*/
/*
// Практическое задание 2.7.

Необходимо доработать программу из задания 2.7
В программе задана переменная values, которая хранит в себе массив. 
Элементы массива являются числами. Определите, находятся ли в заданном массиве элементы, 
которые содержат четырехзначные числа. Если такие значения встречаются, выведите индекс первого 
в консоль. В противном случае выведите сообщение Искомый элемент не был найден.

Пример значений переменных:
values = [10, 185, 11200, 980]

Пример результата:
"Искомый элемент не был найден"


let values = [10, 185, 11200, 980];

let result= values.findIndex(function (num){
  if (num>999 && num<=9999){
    return num;
  }
}) 
if (result == -1) {
  result='Искомый элемент не был найден'
  console.log(result);
} else {
  console.log(result);
}
*/
/*
//Практическое задание 2.8.
В программе задана переменная users, которая хранит в себе массив. 
Элементы данного массива являются объектами. Определите индекс элемента, 
значение свойства role которого содержит больше одного слова. 
Результат выведите в консоль разработчика.

Пример значений переменных:
users = [
    {login: "user1", role: "Admin"},
    {login: "user2", role: "State user"},
    {login: "user3", role: "Moderator"}
]
Пример результата:
1

let users = [
  {login: "user1", role: "Admin"},
  {login: "user2", role: "State user"},
  {login: "user3", role: "Moderator"}
]
let row=[];
let result=users.findIndex(function (element){
  row= element.role.split(' ');
  console.log(row);
  if (row.length == 2){
    return element;
  }
})
console.log(result);
*/
// решение от препода
/*
let users = [
  {login: "user1", role: "Admin users"},
  {login: "user2", role: "Stater"},
  {login: "user3", role: "Moderator"}
]
let elem = users.find(m=>m.role.indexOf(' ') !== -1);
console.log(users.indexOf(elem));
*/
/*
//Практическое задание 2.9.

В программе задана переменная randValues, которая хранит в себе массив. 
Его элементы могут являться как строковыми, так и числовыми значениями. 
Отсортируйте массив следующим образом:
В начале массива должны быть все числовые значения по возрастанию
В конце все строковые, упорядоченные по алфавиту
Результат выведите в консоль.

Пример значений переменных:
randValues = ["Банан", 3, "Апельсин", 2, "Вишня"]
Пример результата:

[2, 3, "Апельсин", "Банан", "Вишня"]


let randValues = [-100,23,34,4,432];
let count=0;
let countB;
for (let index of randValues ) {
  if (Number.isInteger(index)) {
    count++
  }
  console.log(count);
  if (count == randValues.length) {
    countB= true;
  } else {
    countB= false;
  }
}
console.log(count);
if (countB == true) {
  randValues.sort((a, b) => a - b);
  console.log(randValues);
} else {
  randValues.sort();
  console.log(randValues);
}
*/
/*
нормальное решение
let randValues = [-100,3,"Апельсин",2,"Вишня"];

randValues.sort().sort(sortNumbers);
function sortNumbers(a,b){
  if (typeof a=== 'number' && typeof b==='number') {
    return a-b;
  }
}
console.log(randValues);
*/
/*
Практическое задание 2.10.
В программе задана переменная array, которая хранит 
в себе двумерный массив. Его элементы — массивы, состоящие из чисел. 
Отсортируйте массив по количеству элементов вложенного массива по возрастанию. 
Результат выведите в консоль.

Пример значений переменных:
array = [[1,2,3],[1,2],[1,2,3,4]]
Пример результата:
[[1,2],[1,2,3],[1,2,3,4]]
*/
/*
//вариант 1
let array = [[1,2,3],[1,2],[1,2,3,4]]
const twoArray = (a, b) => {
  const aArray = a.length;
  const bArray = b.length;
  if (aArray == bArray) return 0;
  if (aArray < bArray) return -1;
  if (aArray > bArray) return 1;
}
array.sort(twoArray);
console.log(array);

//вариант 2
let array = [[1,2,3],[1,2],[1,2,3,4]]
// array.sort((a, b) => a.length - b.length);
console.log(array);
array.reverse();
let rand = [-10,3,"Апельсин",2,"Вишня"];
rand.reverse();
console.log(rand);

*/ 
/*
Практическое задание 2.11

В программе задана переменная words, которая хранит в себе массив строковых значений. 
Напишите скрипт, который считает количество палиндромов и непалиндромов в массиве words. 
Результат должен представлять собой массив из двух элементов, 
где первое значение — количество палиндромов, а второе — непалиндромов.

Пример значений переменных:
words = ["Заказ", "Такси", "Доход"]

Пример результата:
[2, 1]


let words = ["Заказ", "Такси", "Доход", "Аза", "Ад" ];

let sum1=0;
let revarray='';
let sumArray =[];

for (let items of words){
  revarray =items.split('').reverse().join('').toLowerCase();
  var countP=0;
  for (let i=0; i<items.length; i++){
      if (items.toLowerCase().charAt(i) == revarray.charAt(i)){
        countP++
      } 
    if (countP == items.length) {
      sum1 =sum1+1;
      sumArray[0]= sum1;
      sumArray[1]= words.length - sum1;
    }
  }
}
console.log(sumArray);

*
// вариант через метод map

let words = ["Заказ", "Такси", "Доход"];
let sumArray=words.map(e => e = e.split('').reverse().join(""));
let polindrom=0;
let pArray=[];

 for (let i=0; i<words.length; i++) {
  if (words[i].toLowerCase() == sumArray[i].toLowerCase()) {
   polindrom++
  }
}
pArray.push(polindrom,words.length - polindrom);
console.log(pArray);

*/
/*
Практическое задание 2.12.
В программе задана переменная dates, которая хранит в себе строковое значение. 
В данной строке хранятся значения дат в формате ДД:ММ:ГГГГ, которые разделены пробелами. 
На основе значения переменной dates сформируйте новый массив, каждый элемент которого содержит 
одну дату переменной dates, преобразованную в формат ДД/ММ/ГГГГ. Выведите содержимое сформированного 
массива в консоль.

Пример значений переменных:
dates = "23.04.1996 07.10.2002 15.08.1945"
Пример результата:
["23/04/1996", "07/10/2002", "15/08/1945"]


let dates = "23.04.1996 07.10.2002 15.08.1945";
//console.log(dates.match(/([0-9.]{1,})/g));
let date1= dates.split(' '); // второй вариант как строку перевести в массив
let dateArray= date1.map( e=> e.split('.').join('/'));
console.log(dateArray);
*/



/*
Практическое задание 2.13. 
В программе задана переменная tickets, которая хранит в себе строковое значение. 
В этой переменной указаны номера билетов на поезд (после слова Train) и на самолет 
(после слова Airplane). Необходимо написать скрипт, который на основе строки из переменной 
tickets формирует объект. Он должен хранить в себе два ключа (train, airplane), 
а в качестве значений — массивы с номерами билетов для поезда и самолета соответственно.

Пример значений переменных:
tickets = "Train: AV432, FS452, OE402. Airplane: DR578, JN1089, NDK140."
Пример результата:
{
    "train" : ["AV432", "FS452", "OE402"],
    "airplane" : ["DR578", "JN1089", "NDK140"]
}



let tickets = "Train: AV432, FS452, OE402. Airplane: DR578, JN1089, NDK140.";
let result={};
function separator() {
let ticket = tickets.replace(/\s/g,'');
let ticket1 = ticket.split('.',2); 
let arr2t = ticket1[0].split(":"); //train Делю строку по ":"
arr2t[0]=arr2t[0].toLocaleLowerCase();
let arr2a = ticket1[1].split(":"); //airplane Делю строку по ":"
arr2a[0]=arr2a[0].toLocaleLowerCase();
let ticT = arr2t[1].split(","); //train tickets Делю строку по ","
let ticA = arr2a[1].split(","); //plainTickets Делю строку по ","
  result[arr2t[0]] = ticT; //Добавляю элементы в объект
  result[arr2a[0]] = ticA;
}
separator();
console.log(result);

// другой вариант решения

let tickets = "Train: AV432, FS452, OE402. Airplane: DR578, JN1089, NDK140.";
let result={};
let transpArr= tickets.split(' ').filter(e => e == "Train:" | e == "Airplane:");
for (let volue of transpArr) {
  result.(`volue`);
}
console.log(result);
*/


/*
Практическое задание 2.14.
В программе задана переменная numbers, которая хранит массив из чисел. 
Определите, какое максимальное количество элементов массива numbers 
(в порядке, который реализован в массиве) можно сложить, чтобы 
их итоговая сумма не превышала 50. Результат выведите в консоль.
Пример значений переменных:
numbers = [10, 20, 33, 55, 100]
Пример результата:
2


let numbers = [12,4,3,2,4]
let count=0, sum=0;
const sumArr = numbers.reduce(function(previousValue, currentItem,currentIndex ) {
      sum=previousValue+currentItem;
      if (sum <= 50){
        count++ ; 
      } 
      return previousValue+currentItem;
},0)
console.log(count);
*/
/*
Практическое задание 2.15.
В программе задана переменная values, которая хранит массив из строк. 
Определите математическую сумму всех элементов, которые при преобразовании 
в число не вернут значение NaN. Результат выведите в консоль.
Пример значений переменных:
values = ["100", "30", "Не число", "20", "Тоже не число"]
Пример результата:
150
*/
/*
let values = ["100", "30", "Не число", "20", "Тоже не число"];

let numValues=values.filter(e=> Number(e)).map(e=>e=Number(e)).reduce(function (previousValue, currentItem){
  return previousValue + currentItem
}, 0);
console.log(numValues);
*/
/*
Практическое задание 2.16.

В программе заданы два массива array_1 и array_2, элементы которого являются числами. 
Значения внутри одного массива уникальные. Реализуйте функцию intersection, 
которая принимает в качестве аргументов два массива и возвращает новый массив. 
Он должен содержать значения, которые встречаются в обоих массивах-аргументах, 
и быть отсортирован по убыванию.

Пример значений переменных:
array_1 = [2, 4, 7, 8, 1]
array_2 = [2, 5, 11, 6, 1]

Пример результата:
[2, 1]

let array_1 = [3, 1, 4, 7, 8, 2]
let array_2 = [3, 1, 5, 11, 6, 2]

//let array_1 = [1,2,3,4]
//let array_2 = [7,8,9]

//let array_1 = []
//let array_2 = []
function intersection (arr1,arr2) {
 return array= arr1.filter(function (e) {
  for (let value of arr2) {
     if (e == value) { 
       return true
      };
  } 
 }).sort((a,b)=>b-a)
}
console.log (intersection(array_1,array_2));

console.log();
char = 'stroka';
const array11 = Array.from(char);
console.log(array11);
*/
/*

function User(name, numb) {
  this.train = name;
  this.airplane = numb;
}
let x='egfue'
let y='sdsds'
let user = new User(x, y);
console.log(user);
*/
/*
let user = {
  name: "Иван",
}

let userAge = {
  age: 25,
}

let clone = Object.assign(user, userAge);

console.log(user);
console.log(clone);


let userArray = Object.entries(user);
console.log(userArray);

let userArrayKeys = Object.keys(user);
console.log(userArrayKeys);

let userArrayValues = Object.values(user);
console.log(userArrayValues);

*/
/*
Практическое задание 3.1.
В программе объявлена переменная car, которая хранит в себе объект, 
у которого есть как минимум одно свойство — engine. Удалите из объекта 
car свойство engine и результат выведите в консоль.
Пример значений переменных:

car  = {
    model: "Audi", 
    color: "white",
    weight: 1850,
    engine: "170 hp"
}
Пример результата:

{
    model: "Audi", 
    color: "white",
    weight: 1850
}
*//*
let car  = {
  model: "Audi", 
  color: "white",
  weight: 1850,
  engine: "170 hp"
}
delete car.engine;
console.log(car)

*/
/*
Практическое задание 3.2.
В программе объявлена переменная goods, которая хранит объект со свойствами, 
описывающими товар. Сформируйте массив, который содержит в начале все названия 
свойств объекта, а потом все их значения. Результат выведите в консоль.

Пример значений переменных:
goods = {
    title: "Самокат", 
    price: 6000,
    good_id: 1
}
Пример результата:
["title, "price", "good_id", "Самокат", 6000, 1]
*/
/*
let goods = {
  title: "Самокат", 
  price: 6000,
  good_id: 1
}
let arrayGoods=Object.keys(goods);
let array=Object.values(goods);
arrayGoods=arrayGoods.concat(array);
console.log(arrayGoods);
*/
// более короткое решение
/*
let goods = {
  title: "Самокат", 
  price: 6000,
  good_id: 1
}
let arrayGoods=Object.keys(goods);
arrayGoods=arrayGoods.concat(Object.values(goods));
console.log(arrayGoods);
*/
/*


Практическое задание 3.3.
В программе заданы две переменные article и author, которые содержат объекты. 
Объект article содержит информацию о статье, а author — об авторе. 
Сформируйте новый объект, который содержит свойства объектов article и author. 
Результат выведите в консоль.

Пример значений переменных:
article = {
    title: "Загадки дачного огурца", 
    text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении" 
}
author = {
    name: "Ричард М.В.",
    age: 43
}

Пример результата:
article = {
    title: "Загадки дачного огурца", 
    text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении",
    name: "Ричард М.В.",
    age: 43
}
*/
/*
let article = {
  title: "Загадки дачного огурца", 
  text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении" 
}
let author = {
  name: "Ричард М.В.",
  age: 43
}
article=Object.assign(article,author);
console.log(article);
*/

// exemple works object Map
/*
const arr = new Map([
['key1', 'value1'],
['key2', 'value2'],
['key3', 'value3']
]);
console.log(arr);

console.log(arr.size);

arr
  .set('key5','value5')
  .set('key6','value6');

  console.log(arr);

  arr
  .set('key5','value')
  console.log(arr);

  console.log(arr.get('key5'));
  arr.delete('key1');
  console.log(arr);
  */
/*
  Практическое задание 3.4.

  В программе задан массив array. Напишите функцию count(), которая считает количество 
  элементов массива array и выводит в консоль сообщение, как в примере.
    Пример значений переменных:
       array = [true, 4, "word", "10n"]
    Пример результата:
       Количество элементов в массиве: 4
  */
      /*
       let array = [true, 4, "word", "10n"]

       function count () {
         return console.log(`Количество элементов в массиве ${array.length}`);
       }
       count()
       */


//Практическое задание 3.5
/*
В программе задан двумерный массив employee. Удалите у данного массива значение,
 у которого первый элемент hireDate, и добавьте новое значение ["jobName", "IT PROG"] 
 в конец массива. Результат выведите в консоль.

Пример значений переменных:
employee  = [
    ["firstName", "Ivan"], 
    ["lastName", "Ivanov"],
    ["hireDate", "21.10.2015"]
]
Пример результата:
[
    ["firstName", "Ivan"], 
    ["lastName", "Ivanov"],
    ["jobName", "IT PROG"]
]


*/
/*
// вариант с map приколльно сделал функцию, но проблема с массивами, где отстутсвует должный элемент, добавил проверку такого массива
let employee  = [
  ["firstName", "Ivan"], 
  ["lastName", "Ivanov"],
  ["hireDate", "21.10.2015"]
]
let count=0;
let array=[];
// создаем функцию, которая заменяет искомые эелементы в массиве на итоговый
function correctAra (e) {
  if ((e.indexOf("hireDate") !== -1) && (count<1)) {  
     count++
     return e= ["jobName", "IT PROG"]
    } else  { 
            if (e.indexOf("hireDate") !== -1){
             return e.slice()
            } else {
                     return e
                    }
       }  
}
if (employee.length !== 0) {
  array =employee.map(correctAra);
} else {
  array.push(["jobName", "IT PROG"])
}

for (let i=0 ; i<array.length; i++) {
  if (array[i].length == 0) {
   array.splice(i,1);
  }
}
count=0;
for (let i=0; i<array.length; i++){
  if ((array[i][0] !== 'hireDate') && (array[i][0] !=='jobName')){
    count++
  }
}
if (count == array.length) {
  array.push(["jobName", "IT PROG"]);
}
console.log(array);

*/
/*
// Спустня день мучительного поиска решений6 я нашел легкое и умное решение данной задачи:
let employee  = [
  ["firstName", "Ivan"], 
  ["lastName", "Ivanov"],
  ["hireDate", "21.10.2015"],
  ["hireDate", "21.10.2015"]
]
let array = employee.filter(e=> e[0] !== "hireDate") // фильруем массив
array.push(["jobName", "IT PROG"]); // добавляем нужный элемент
console.log(array);
*/
/*
Практическое задание 3.6.
В программе задан двумерный массив array. Создайте и вызовите функцию countString(), 
которая считает количество значений массива array, у которых второй элемент является строкой. 
Функция countString() должна выводить в консоль сообщение, как в примере.


Пример значений переменных:
array = [
        [ "boolean", true ], 
        [ "number", 4 ],
        [ "string", "word" ],
        [ "object", {}]
    ]
Пример результата:
Количество строковых элементов в именованном массиве: 1
*/
/*
let array = [
  [ "boolean", true ], 
  [ "number", 4 ],
  [ "string", "word" ],
  [ "object", {}]
]

function countString() {
  let count=0;
  for (i=0; i<array.length; i++) {
     if ( typeof array[i][1] == 'string') {
       count++
     }
  } 
   return console.log (`Количество строковых элементов в именованном массиве: ${count}`);
}
countString();
*/
/*
const hero1 = { heroName: 'Герой #1' };
const hero2 = { heroName: 'Герой #2' };

function say(message) {
  console.log(`${this.heroName}: ${message}`);
}

const hero1Say = say.bind(hero1);

hero1Say("Вы любите живопись?"); // Герой #1: Вы любите живопись?
say.call(hero2, "Да, очень. Люблю Рафаэля."); // Герой #2: Да, очень. Люблю Рафаэля.
say.apply(hero2, ["А мне больше нравятся другие черепашки-ниндзя."]); // Герой #1: А мне больше нравятся другие черепашки-ниндзя.
*/

/*
Практическое задание 4.1.
В программе объявлены объекты pet_1 и pet_2. 
Напишите функцию getName() и присвойте ее объектам pet_1 и pet_2 
в качестве метода. При вызове метода getName() он должен вернуть имя 
и возраст питомца через пробел. Решить задачу необходимо с использованием this.

Пример значений переменных:
pet_1 = { 
    name: "Шарик", 
    age: 10 
};
pet_2 = { 
    name: "Жучка", 
    age: 5
};
*/
/*
let pet_1 = { 
  name: "Шарик", 
  age: 10 ,
};

let pet_2 = { 
  name: "Жучка", 
  age: 5
};

function getName(){
  return text= `${this.name} ${this.age}`;
}
pet_1.getName= getName;
pet_2.getName= getName;
console.log(`${pet_1.getName()}; ${pet_2.getName()}`);
*/
/*

Практическое задание 4.2.
В программе объявлен объект input и функция sayHi(), 
которая выводит в консоль сообщение из примера. 
Используя метод присвоения контекста, свяжите контекст 
объекта input с функцией sayHi() и вызовите функцию sayHi().

Пример значений переменных:
input = {
    id: 1,
    value: "Добрый вечер",
    firstName: "Григорий",
    lastName: "Стрельников" 
}

function sayHi() {
    console.log(`${this.value}, ${this.firstName} ${this.lastName}!`)
}
Пример результата:
Добрый вечер, Григорий Стрельников!
*/
/*
let input = {
  id: 1,
  value: "Добрый вечер",
  firstName: "Григорий",
  lastName: "Стрельников" 
}
function sayHi() {
  console.log(`${this.value}, ${this.firstName} ${this.lastName}!`)
}

 sayHi.call(input);

 */

 /*
Практическое задание 4.3.
В программе объявлен объект pet со свойствами name и breed 
и функция getDescription(), которая выводит эту информацию, 
используя this. Привяжите к функции getDescription() контекст pet 
и присвойте получившуюся функцию переменной getDescription.

Пример значений переменных:
pet = { 
    name: "Диксон", 
    breed: "Немецкая овчарка" 
}

function getDescription() { 
    console.log("Имя питомца: " + this.name + ", Порода: " + this.breed) 
}

Пример результата:
Имя питомца: Диксон, Порода: Немецкая овчарка
 */

let pet = { 
  name: "Диксон", 
  breed: "Немецкая овчарка" 
}
/*
let getDescription = function () { 
  console.log("Имя питомца: " + this.name + ", Порода: " + this.breed) 
}.bind(pet)

getDescription();
*/
/*
function getDescription() { 
    console.log("Имя питомца: " + this.name + ", Порода: " + this.breed)
}

getDescription= getDescription.bind();

getDescription()
*/
/*
let getDescription = function () { 
  console.log("Имя питомца: " + this.name + ", Порода: " + this.breed) 
}
pet.getDescription= getDescription.bind(pet);

getDescription()
*/

/*
Практическое задание 4.4.
В программе объявлен объект props, у которого задан набор свойств. 
Объявите функцию getValue(), которая выводит в консоль строку со всеми свойствами 
и их значениями (без методов). Привяжите объект props в качестве контекста функции 
getValue() и присвойте получившуюся функцию переменной getValue.

Пример значений переменных:
props= { 
    name: "Анатолий", 
    age: 29,
    sayHi: ()=>"привет"
}

props = {
  firstName:'Петя',
  lastName:'Иванов'
}
Пример результата:
Значения свойств объекта props (name: Анатолий, age: 29)

*/
/*
// крутое решение
let props = {
    name: "Анатолий", 
    age: 29,
    sayHi: ()=>"привет"
}

function getValue(){
  let strObj=Object.entries(this).filter(e=> typeof e[1] !== 'function' ).map(e=> e[0].match(/\w+/g) + `: ${e[1]}`).join(', ');
  console.log(`Значения свойств объекта props (${strObj})`)
} 
getValue=getValue.bind(props)
getValue()


/*
Практическое задание 4.5.
В программе объявлен объект hero, свойства которого 
описывают информацию о герое. В объекте в том числе 
определен метод getPosition, который возвращает позицию 
героя в игре. Определите, почему вызов getPosition работает 
некорректно. Исправьте эту ошибку.

Пример значений переменных:
hero = { 
    nick: "FirstHero", 
    position: "Лагерь",
    getPosition: ()=>console.log("Позиция героя: " + this.position)
}

Пример результата:
Позиция героя: Лагерь
*/
/*
let hero = { 
  nick: "FirstHero", 
  position: "Лагерь",
  getPosition: function getPosition () {
    console.log("Позиция героя: " + this.position)
}
}
hero.getPosition()
*/


/*
Практическое задание 5.1.

В программе объявлена переменная order, которая хранит объект. Объявите переменную descriptor, которая должна содержать значения всех атрибутов ключа totalPrice объекта orders в виде объекта. Результат выведите в консоль.
Пример значений переменных:

order = {
    productName: "Велосипед",
    costomerName: "Саша",
    salesName: "Петя",
    totalPrice: 15000
}
Пример результата:

{value: 15000, writable: true, enumerable: true, configurable: true}
*/
/*
let order = {
  productName: "Велосипед",
  costomerName: "Саша",
  salesName: "Петя",
  totalPrice: 15000
}
let desc = Object.getOwnPropertyDescriptor(order, 'totalPrice');
 
console.log(desc);
*/


/*
Практическое задание 5.2.

В программе задан объект employees, который содержит ряд свойств и методов. Сформируйте строку с именами всех свойств через запятую и пробел (, ) и выведите в консоль. Имена методов добавляться не должны.

Пример значений переменных:

employees = {
    firstName: "Петя",
    lastName: "Иванов",
    ratePerDay: 2500,
    workingDays: 5,
    getSalary() { console.log(employees.ratePerDay * employees.workingDays )} 
}
Пример результата:

firstName, lastName, ratePerDay, workingDays
*/
// Решение похоже как в задаче 4.4, только здесь нужно вывести только имя свойства
/*
let employees = {
  firstName: "Петя",
  lastName: "Иванов",
  ratePerDay: 2500,
  workingDays: 5,
  getSalary() { console.log(employees.ratePerDay * employees.workingDays )} 
}

function getKeys(){
  let strObj=Object.entries(this).filter(e=> typeof e[1] !== 'function' ).map(e=> e[0].match(/\w+/g)).join(', ');
  console.log(strObj);
} 
getKeys=getKeys.bind(employees)
getKeys()
*/

/*
Практическое задание 5.3.

В программе объявлены переменные firstName и lastName. Создайте объект user со свойствами firstName и lastName и добавьте getter и setter fullName. Сеттер fullName должен принимать имя и фамилию пользователя через пробел, разделять и присваивать свойствам firstName и lastName соответственно. Геттер fullName должен формировать строку, состоящую из имени и фамилии через пробел.

Пример значений переменных:

firstName = "Александр"
lastName = "Петров"

Пример результата:

user.fullName // "Александр Петров"
user.fullName = "Всеволод Старозубов"
user.firstName // "Всеволод"
user.lastName // "Старозубов"
*/


let firstName = "Александр";
let lastName = "Петров";
let user = {
  firstName: '',
  lastName:'',
  get fullName (){
    return `${this.firstName}, ${this.lastName}`
  },
  set fullName1 (fullName){
    fn1= fullName.match(/\w+/);
    fn2=fullName.match(/\w+$/);
    user.firstName=fn1.join();
    user.lastName= fn2.join();
 }
}
user.fullName1 = 'Александр Петров';
console.log(user.fullName);