/* let message;  // let, const, var

message = "Hello";

console.log(message);
console.log(typeof message);
console.log(typeof(message));

message = 25.456;

console.log(message);
console.log(typeof(message));

message = true;

console.log(message);
console.log(typeof(message));


message = undefined;

console.log(message);
console.log(typeof(message));

message = null;

console.log(message);
console.log(typeof(message)); */

// let a = 10; 
// let b, c;
// b = "Hello";
// console.log(a, b);
// const pi = 3.14;
// // pi = 2;
// console.log(pi);
// var D = 4;
// D = 5;
// console.log(D);

// let camelCase = "";
// let $_snake_case2 = "Hello";
// console.log($_snake_case2);

// let str1 = "Двойные кавычки";
// let str2 = 'Одинарные кавычки';
// let str3 = `Обратные кавычки ${str2} ${3 + 2}`;

// console.log("Текст: " + str1);
// console.log(str2);
// console.log(str3);


// let firstName = "Sergey";
// alert(`Hello, ${firstName}`);

// let res = confirm("Знаете ли вы HTML");
// console.log(res);  // OK => true, Отмена => false

// if (res){
//     alert("Пора учить JavaScript");
// }
// else{
//     alert("Нужно выучить");
// }

// let res = prompt("Ваше имя"); 
// console.log("Hello", res);  // OK => введенное значение, Отмена => null
// alert("Hello, " + res);

// let a = 12;
// let b = 2;

// console.log("+:", a + b);
// console.log("-:", a - b);
// console.log("/:", a / b);
// console.log("*:", a * b);
// console.log("%:", a % b);
// console.log("**:", a ** b);

// let c = "23";
// let d = 6;

// console.log(c + d);  // 236

// console.log(parseInt("21.84"));
// console.log(parseFloat("21.84"));
// console.log(Number("21.84"));
// console.log(+"21.84");

// console.log(parseFloat("21.844654646").toFixed(3));

// let login = prompt("Login", "admin");
// let password = prompt("Password", "123456");
// alert("***Данные для входа***\tВаш логин: " + login + "\nВаши пароль: " + password);
// console.log("***Данные для входа***\rВаш логин: " + login + "\nВаши пароль: " + password)

// let str = "Инструкция:\nДокумент \"script.js\" файлы лежат в папке D:\\\\folder\\file.txt";
// alert(str);

// let a = parseInt(prompt("Введите первое число: ", 5));
// let b = +prompt("Введите второе число: ", 7);

// // a = parseInt(a);
// // b = Number(b);

// alert(a + b);  // 57

// alert(+false);

// let a = 0, b = 0;
// ++a;  // a = a + 1
// console.log(a);  // 1
// b++;
// console.log(b);  // 1

// let a = 0, b = 0;
// let c = a++ + 2;  // 0 + 2
// let d = ++b + 2;  // 1 + 2
// console.log("a:", a);  // 1
// console.log("b:", b);  // 1
// console.log("c:", c);  // 2
// console.log("d:", d);  // 3

// let a = 1;
// let b = a++;  // b = 1, a = 2
// let c = b + 5 + a;  // 1 + 5 + 2
// console.log(c);  // 8

// let a = 1;
// let b = ++a;  // b = 2, a = 2
// let c = b + 5 + a;  // 2 + 5 + 2
// console.log(c);  // 9

// let a = +prompt("Введите 1 число:", 5);
// let b = +prompt("Введите 2 число:", 4);
// let c = +prompt("Введите 3 число:", 6);

// alert("Сумма чисел: " + (a + b + c));

// let sum = +prompt("Введите 1 число:", 5);
// sum += +prompt("Введите 2 число:", 4);
// sum += +prompt("Введите 3 число:", 6);

// alert("Сумма чисел: " + sum);

// console.log(5 > 3);
// console.log(5 < 3);
// console.log(5 >= 5);
// console.log(5 <= "5");
// console.log(5 != 5);
// console.log(5 == "5");
// console.log(5 === "5");
// console.log(5 === 5);
// console.log(5 !== "5");
// console.log(5 !== 5);

// 7 > 3 ? alert("7") : alert("3");

// let ch = prompt("Угадайте число от 1 до 10");
// let num = 7;
// let a = 
// ch == num 
// ? "Угадали!" 
// : ch < num ? "Загаданное число больше" 
// : "Загаданное число меньше";

// alert(a);

// FALSE: 0, 0.0, "", false, undefined, null, NaN

// let variable = NaN;
// if (variable){
//     console.log("TRUE");
// }
// else{
//     console.log("FALSE");
// }

let a = "Hello";
let b = "World";
let c = a / b;
console.log(c);

