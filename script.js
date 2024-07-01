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

// let mas = new Array(5);
// for(let i=0; i<mas.length; i++){
//     mas[i] = prompt("Введите " + (i+1) + " элемент массива:");
// }
// console.log(mas);

// for(let i = mas.length-1; i >= 0; i--){
//     document.write(mas[i] + " ");
// }

// let arr = [2, 5, 7, "Игорь", 1.5, true];
// console.log(arr);
// document.write(arr);

// let arr = [[1,2,3], [4,5,6], [7,8,9]];
// console.log(arr);
// console.table(arr);
// console.log(arr[2][0]);

// let question = ["На ноль делить можно", "Волга впадает в Каспийское море", "Атмосферное давление увеличивается с высотой", "2x2 будет 8", "Дельфины - это рыбы", "Мадонна - это настоящее имя певицы", "Первая мировая война началась 1 сентября 1939 года"];
// let correct = [false, true, false, false, false, false, false];
// let sum = 0;
// let res = new Array();

// for(let i = 0; i < question.length; i++){
//     let answer = confirm(question[i]);
//     if(answer == correct[i]){
//         res[i] = 10;
//         sum += res[i];   
//     }
//     else{
//         res[i] = 0;
//     }     
// }

// document.write("<table border='1' width='500'>");
// document.write("<tr>");
// document.write("<th>Вопрос</th>");
// document.write("<th>Баллы</th>");
// document.write("</tr>");

// for(let i = 0; i < question.length; i++){
//     document.write("<tr>");
//     document.write("<td>" + question[i] + "</td>");
//     document.write("<td>" + res[i] + "</td>");
//     document.write("</tr>");
// }

// document.write("<tr>");
// document.write("<th>Итого</th>");
// document.write("<th>"+ sum +"</th>");
// document.write("</tr>");
// document.write("</table>");


// let text1 = document.getElementById("text_1");
// console.log(text1);
// console.log(text1.textContent);
// text1.textContent = "Новое <b>содержимое</b>";

// let text2 = document.getElementById("text_2");
// console.log(text2);
// console.log(text2.innerHTML);
// text2.innerHTML = "Новое <b>содержимое</b>";

// let res = +prompt("Выберите изображение", "1-собака, 2-кот, 3-птица, 4-рыба");
// document.write("<div id='image'></div>");
// let img = document.getElementById("image");

// switch (res) {
//     case 1:
//         img.innerHTML = "<img src='img/dog.jpg'>";
//         break;
//     case 2:
//         img.innerHTML = "<img src='img/cat.jpg'>";
//         break;
//     case 3:
//         img.innerHTML = "<img src='img/bird.jpeg'>";
//         break;
//     case 4:
//         img.innerHTML = "<img src='img/fish.jpeg'>";
//         break;
//     default:
//         alert("Такого изображения нет");
// }

// let tag = document.getElementsByTagName("p")[2];
// console.log(tag);
// tag.innerHTML = "Hello <u>tag</u>";
// tag.style.color = "blue";
// tag.style.fontWeight = "bold";
// tag.style.background = "silver";
// tag.style.padding = "10px 20px";
// // list-style-type => listStyleType
// tag.id="text";
// tag.className="x";

// let q = document.getElementsByClassName("a");
// console.log(q);
// q[0].style.color = "blue";
// q[1].style.color = "red";

// document.querySelector(css);
// document.querySelectorAll(css);

// let res = document.querySelector("p");
// console.log(res);

// let res2 = document.querySelectorAll("p")[1];
// console.log(res2);

// let el = document.querySelector("h2");
// console.log(el.innerHTML);

// let els = document.querySelectorAll("h2");
// console.log(els[1].innerHTML);

// let lists = document.querySelectorAll("li");

// for(let i=0; i<lists.length; i++){
//     lists[i].innerHTML += "!!!";
// }

// let m = document.querySelectorAll(".purple li")[1];
// m.style.color="orange";

// let m = document.getElementsByClassName("purple")[0].getElementsByTagName("li")[1];
// m.style.color="orange";
// console.log(m);

// let js = ["нужно", "учить", "JavaScript"];
// console.log(js);

// console.log(js.pop());  // удаляет последний элемент из массива
// console.log(js);

// js.push("JavaScript", "!");  // добаляет элемент в конец массива
// console.log(js);

// console.log(js.shift());  // удаляет первый элемент из массива
// console.log(js);

// js.unshift("Почему", "нужно");  // добаляет элемент в начало массива
// console.log(js);

// js.splice(1, 1); // удаление, первый параметр -индекс элемента, второй парамет - количество удаляемых элементов
// console.log(js);

// js.splice(1, 0, "сложный", "язык"); // добавление, если второй парамет "0"
// console.log(js);

// js.splice(-2, 0, "но", "очень", "интересный"); 
// console.log(js);  // работает с отрицательными индексами

// let str = js.join(" ");  // преобразовывает все элементы массива в строку, через заданный символ разделитель
// console.log(str);

// Functions Declaration

// function test(a, b, c) {
//     let res = a + b + c;
//     return [res, a];
// }

// let x1 = 10, x2 = 20, x3 = 30;
// let q = test(x1,x2,x3);  // 60
// // let y1 = 5, y2 = 2, y3 = 3;
// // test(y1,y2,y3);  // 10
// // alert(q);
// console.log(q);

// function showArrayContent(arrayToShow) {
//     if(arrayToShow.length == 1){
//         return arrayToShow;
//     }
//     else{
//         let last = arrayToShow.pop();
//         let str = arrayToShow.join(', ');
//         let all = str + " и " + last;
//         return all;
//     }
// }

// let a = new Array('Текст');
// let b = new Array('день', 'ночь');
// let c = new Array('зима', 'весна', 'лета', 'осень');
// alert(showArrayContent(a)); 
// alert(showArrayContent(b)); 
// alert(showArrayContent(c));

alert(sum1(2, 3));

function sum1 (a, b){
    return a + b;
}



// Function Expression


let sum2 = function(a, b){
    return a + b;
}

alert(sum2(12, 13));