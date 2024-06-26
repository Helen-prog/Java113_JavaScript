"use strict";
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

// let a = "Hello";
// let b = "World";
// let c = a / b;
// console.log(c);

// let login = prompt("Введите логин: ", "admin");
// // console.log(login);  // Отмена => null, OK => возвращается введенное занчение
// if (login){
//     if(login == "admin"){
//         let psw = prompt("Введите пароль: ", "password");
//         if(psw){
//             if(psw == "password"){
//                 alert("Добро пожаловать");
//             }
//             else{
//                 alert("Пароль неверен");
//             }
//         }
//         else{
//             alert("Вход отменен");
//         }
//     }
//     else{
//         alert("Я вас не знаю");
//     }
// }
// else{
//     alert("Вход отменен");
// }

// if (5==5 || 1>2){
//     console.log("TRUE");
// }
// else{
//     console.log("FALSE");
// }

// console.log(!255);
// console.log(Boolean(255));
// console.log(!!255);

// let a = prompt("Результат 2 + 2:");
// switch (a) {  // "1" === "1"
//     case "4": {
//         alert("Верно");
//     }break;
//     case "3":
//     case "5":
//         alert("Не верно");
//         break;
//     default:
//         alert("Я таких значений не знаю");
// } 

// let a = 10;
// document.write("<p>Текст выведен <b>в окно браузера</b></p>");
// document.write("<p><img src='1.jpg'> Еще текст</p>");
// document.write("<p>" + a + "</p>");
// document.write(`<p>${a}</p>`);

// let i = 0;
// do{
//     document.write("Это номер: " + i + "<br>");
//     i++;
// }while(i<5);

// let i = 1;
// do{
//     document.write("Квадрат " + i + " равен: " + i ** 2 + "<br>");
//     i++;
// }while(i<=7);

// let i = 0;
// while(i<5){
//     document.write("Это номер: " + i + "<br>");
//     i++;
// }

// let a, res = 1;

// do{
//     a = +prompt("Введите число:", 10);
//     if(a == 0){
//         break;
//     }
//     if(a < 0){
//         continue;
//     }
//     res *= a;
// }while(true);
// alert("Произведение введенных чисел: " + res);

// let i = 0;
// do{    
//     if(i==3){
//         i++;
//         continue;
//     }
//     if(i==6){
//         break;
//     }
//     document.write(i + " ");
//     i++;
// }while(i<10);

// for (let i = 1; i < 12; i++) {
//     if (i == 3) {
//         continue;
//     }
//     if (i == 6) {
//         break;
//     }
//     document.write(i + " ");
// }
// let i = 1;
// for (; ;) {
//     if (i == 12) {
//         break;
//     }
//     document.write(i + " ");
//     i++;
// }

// for (let i = 1; i < 12; i++) {
//     document.write(i + " ");
// }
// document.write("<br>i = " + i)


// for(let i=0; i<4; i++){
//     document.write("+++ <br>");
//     for(let j = 0; j<2; j++){
//         document.write("-- <br>");
//     }
// }
// let tr = prompt("Введите количество строк:");
// let td = prompt("Введите количество столбцов:");
// let symbol = prompt("Введите символ:");
// document.write("<table border='1'>");
// for(let i=0; i<tr; i++){
//     document.write("<tr>");
//     for(let j = 0; j<td; j++){
//         document.write("<td>"+symbol+"</td>");
//     }
//     document.write("</tr>");
// }
// document.write("</table>");

// document.write("<table border='1' width='260'>");
// for (let i = 1; i < 11; i++) {
//     document.write("<tr>");
//     for (let j = 1; j < 11; j++) {
//         if(j % 2 == 0)
//             document.write("<td bgcolor='red'>" + i * j + "</td>");
//         else
//             document.write("<td bgcolor='yellow'>" + i * j + "</td>");
//     }
//     document.write("</tr>");
// }
// document.write("</table>");

// Массивы

// let arr1 = [2, 6, 8];
// let arr2 = new Array(1, 5, 7);

// let arr3 = [5];  // массив на 1 элемент со значением 5
// let arr4 = new Array(5);  // массив на 5 элементов, но пустой

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);
// document.write(arr1);
// alert(arr1);

// let arr1 = [2, 6, 8];
// console.log(arr1);
// arr1[0] += 100;
// console.log(arr1);
// arr1[10] = 200;
// arr1[5] = 7;
// console.log(arr1);
// console.log("length =", arr1.length);

// let f = [1, 2, 3, 4, 5, 6];
// console.log(f);
// f.length = 3;
// console.log(f);
// f.length = 6;
// console.log(f);
// f.length = 0;
// console.log(f);

// Посчитать в массиве сумму всех отрицательных элементов

// let arr = [5, 9, -3, -1, 4, -8, 7, 2, -6];
// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]<0){
//         sum += arr[i];
//     }
// }
// document.write(sum);


// Написать программу, которая позволяет заполнить массив с клавиатуры и вывести его в обратном порядке

let mas = new Array(5);
for(let i=0; i<mas.length; i++){
    mas[i] = prompt("Введите " + (i+1) + " элемент массива:");
}
console.log(mas);

for(let i = mas.length-1; i >= 0; i--){
    document.write(mas[i] + " ");
}