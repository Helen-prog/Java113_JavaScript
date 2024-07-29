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

// alert(sum1(2, 3));

// function sum1 (a, b){
//     return a + b;
// }



// // Function Expression


// let sum2 = function(a, b){
//     return a + b;
// }

// alert(sum2(12, 13));

// Cамовызывающаяся (анонимная) функция

// (function(){
//     alert("Привет мир!");
// }());

// (function(n){
//     alert(n * n);
// })(4);

// (function(n){
//     alert(n * n);
// })(9)


// function test(a, b, c) {
//     let res = a + b + c;
//     return res;
// }

// alert(test(10,20,30));

// // Arrow Function - стрелочные функции

// let test2 = (a, b, c) => a + b + c;

// alert(test2(1,2,3));

// let test3 = (a, b, c) => {
//         let res = a + b + c;
//         return res;
//     }

// alert(test3(1,2,3));

// let hello = (n) => {
//     if (n) {
//         return "Hello";
//     }
//     return "Привет";
// }

// alert(hello(0));

// let hello = n => alert("Hello, " + n);

// hello("Igor");

// Объект Math

// console.log(Math.floor(7.9));
// console.log(Math.ceil(7.1));
// console.log(Math.round(7.5));

// (function(min, max){
//     document.write(Math.floor(Math.random() * (max - min) + min) + "<br>");
// }(2, 9));

// document.write(Math.random() * 9 + "<br>");
// document.write(Math.floor(Math.random() * 7 + 2) + "<br>");

// let mas = function(words){
//     return words[Math.floor(Math.random() * words.length)];
// }

// let arr = ["Цикл", "Массив", "Условие", "Функция"];
// let char = mas(arr);
// document.write(char);

// let a = 5;

// if (4 > 0) {

//     a++;
//     document.write(a + "<br>");
// }

// document.write("a = " + a);

// let j = 2;

// function ch() {
//     let j = 3;
//     return j;
// }

// let a = ch();
// alert(a);
// alert(j);

// let createColor = () => Math.floor(Math.random() * 256);   

// document.write("<div id='block'></div>");
// let id = document.getElementById("block");

// id.style.width = id.style.height = "100px";
// id.style.background = "rgb(" + createColor() + ", " + createColor() + ", " + createColor() + ")";



// createColor();

// let createColor = () => {
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     id.style.background = "rgb(" + r + ", "+ g +", " + b + ")";
// }

// createColor();

// function hello(name="незнакомец", age=30){
//     // name = name || "незнакомец";
//     document.write("Привет, " + name + "! Мне "+ age +" лет.<br>" );
// }

// hello("Сергей", 25);
// hello(65);
// alert(hello);

// let str = "I\'m a JavaScript \"programmer\"";
// document.write(str + "<br>");
// // document.write(str[2] + "<br>");


// // // str[2] = "y"; // ошибка
// // // str = str[2] + "y"
// // // document.write(str + "<br>");

// // document.write(str.length + "<br>");
// // document.write(str.toUpperCase() + "<br>");
// // document.write(str.toLowerCase() + "<br>");
// // document.write(str.indexOf("m", 3) + "<br>");
// // document.write(str.lastIndexOf("m") + "<br>");
// // document.write(str.split(" ") + "<br>");
// // console.log(str.split(" ", 2));

// // document.write(str.slice(3, 0) + "<br>");
// // document.write(str.substring(3, 0) + "<br>");

// let st = str.split(" ");
// console.log(st);

// let st2 = st.join("_");
// console.log(st2);

// События

// function click1(){
//     alert('Клик');
// }

// let m = document.getElementById("mes");

// function over(){
//     m.style.color = "red";
// }

// function out(){
//     m.style.color = "blue";
// }

// function change(){
//     let id = document.getElementById("id1");
//     id.style.color="orange";
// }

// function randomBg(){
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     document.body.style.background = "rgb(" + r + ", "+ g +", " + b + ")";
// }

// function reset(id){
//     id.innerHTML = "Новый текст";
// }

// function setColor(arg){
//     document.body.style.background = arg.className;
// }


// let newImg = document.getElementById("newimg");

// function on(){
//   newImg.src="night.png";
// }

// function off(){
//     newImg.src="day.png";
//   }

// document.getElementById("but").onclick = function(){
//     alert("Спасибо");
// }

// but.onclick = function(){
//     alert("Спасибо");
// }

// function hello() {
//     alert("Спасибо");
// }

// but.onclick = hello;

// let el = document.getElementById("but");

// el.addEventListener("click", function(){
//     el.innerHTML = "Новый текст";
// })
// function setText(){
//     el.innerHTML = "Новый текст";
// }
// el.addEventListener("click", setText);

// el.addEventListener("contextmenu", function(){
//     el.style.color = "green";
//     el.style.background = "yellow";
// })

// document.addEventListener('mousemove', function(e){
//     let c = document.querySelector('#ev');
//     let x = e.clientX;
//     let y = e.clientY;
//     c.textContent = "X = " + x + ", Y = " + y;

//     c.addEventListener('dblclick', function(event){
//         event.target.style.background="red";
//     })
// })

// let input = document.querySelector("#but");
// input.addEventListener("click", handler);

// function handler(){
//     alert("Спасибо");
//     input.removeEventListener("click", handler);
// }

// setTimeout("alert('Текст')", 3000);
// setTimeout(hello, 3000, "Привет", "друг");

// function hello(h, n){
//     alert(h + ", " + n + "!");
// }

// document.write("<div id='dt'>Создание анимированного текста</div>");
// let id = document.querySelector("#dt");
// let text = document.querySelector("#dt").innerHTML;
// let i = 0;
// // console.log(text);

// window.addEventListener('load', animText);

// function animText() {
//     id.innerHTML = text.substring(0, i);
//     i++;
//     if (i > text.length) {
//         i = 0;
//     }
//     setTimeout(animText, 300);
// }


// let d = new Date();
// document.write(d + "<br>");
// document.write(d.toDateString() + "<br>");
// document.write(d.getFullYear() + "<br>");  // 2024
// document.write(d.getMonth() + "<br>");  // 6, месяцы от 0 по 11
// document.write(d.getDate() + "<br>");  // 15
// document.write(d.getDay() + "<br>");  // 1, 0 - воскресенье, 6 - суббота


// Сегодня: 15 июля 2024, Понедельник

// let arr1 = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
// let arr2 = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
// let t = new Date();
// document.write("Сегодня: " + t.getDate() + " " + arr1[t.getMonth()] + " " + t.getFullYear() + ", " + arr2[t.getDay()]);

// document.write("<input type='button' value='Start / Stop'>");
// document.querySelector('input').addEventListener("click", st);

// let run, act;
// function st() {
//     if (!run) {
//         act = setInterval(setColor, 1000);
//         // run = true;
//     }
//     else {
//         clearInterval(act);
//         // run = false;
//     }
//     run = !run;
// }

// function setColor() {
//     let x = document.body;
//     x.style.background = (x.style.background == 'yellow') ? "orange" : "yellow";
// }

// document.write('<div id="text">Здесь будет отображаться текущее время</div>');

// window.addEventListener("load", () => setInterval(time, 1000));
// // window.addEventListener("load", st);

// // function st(){
// //     setInterval(time, 1000);
// // }

// function time(){
//     let d = new Date();
//     let hour = d.getHours();
//     let min = d.getMinutes();
//     let sec = d.getSeconds();
//     if (sec<10){
//         sec = "0" + sec;
//     }
//     let tim = hour + ":" + min + ":" + sec;
//     document.querySelector("#text").innerHTML = tim;
// }

// let a = document.querySelector("#cl");
// a.addEventListener("click", myMove);

// function myMove() {
//     // a.style.visibility = "hidden";
//     let elem = document.getElementById("animate");
//     let pos = 0;
//     let id = setInterval(frame, 5);

//     function frame() {
//         if (pos == 350) {
//             // a.style.visibility = "visible";
//             a.addEventListener("click", myMove);
//             clearInterval(id);
//         }
//         else {
//             a.removeEventListener("click", myMove);
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + "px";
//         }
//     }
// }

// let img = document.image;
// let img = document.getElementsByName("image")[0];

// img.border = "1";
// img.width = 200;
// img.height = 50;
// document.write("<p>Ширина изображения: "+ img.width + "px<br>Высота изображения: " + img.height +"px</p>");

// img.src = "blue_star.png";

// document.image.addEventListener("click", changeImage);

// let flag = 0;

// function changeImage(){
//     if(flag == 0){
//         document.image.src = "blue_star.png";
//         flag = 1;
//     }
//     else{
//         document.image.src = "golden_star.png";
//         flag = 0;
//     }
// }

// let array = new Array("2.jpg", "3.jpg", "4.jpg");
// document.write("<input type='button' name='left' value='<' >");
// document.write("<img id='sl' src='" + array[0] + "'>");
// document.write("<input type='button' name='right' value='>' >");

// let image = document.getElementById("sl");
// let i = 0;

// document.getElementsByName('right')[0].addEventListener("click", rightBtn);
// document.getElementsByName('left')[0].addEventListener("click", leftBtn);

// function rightBtn() {
//     i++;
//     if (i == array.length) {
//         i = 0;
//     }
//     image.src = array[i];
// }

// function leftBtn(){
//     i--;
//     if(i < 0){
//         i = array.length - 1;
//     }
//     image.src = array[i];
// }

// let imgTime = ["c0.gif","c1.gif","c2.gif","c3.gif","c4.gif","c5.gif","c6.gif","c7.gif","c8.gif","c9.gif"];

// let t = document.querySelectorAll("#clock img");

// clock();

// function clock(){
//     let time = new Date();
//     let hour = time.getHours();
//     let min = time.getMinutes();
//     let sec = time.getSeconds();
//     getImg(hour,min,sec);
//     setTimeout(clock, 1000);
// }

// function getImg(h, m, s){  // h = 12 = 1.2
//     t[0].src = imgTime[parseInt(h/10)];
//     t[1].src = imgTime[h%10];

//     t[3].src = imgTime[Math.floor(m/10)];
//     t[4].src = imgTime[m%10];

//     t[6].src = imgTime[Math.floor(s/10)];
//     t[7].src = imgTime[s%10];
// }

// alert(document.documentElement.innerHTML);
// alert(document.head.innerHTML);
// alert(document.body.innerHTML);

// let title = document.querySelector("h1").innerHTML;
// console.log(title);

// let title = document.querySelector("h1").firstChild.nodeValue;
// let title = document.querySelector("h1").nodeName;
// let title = document.querySelector("h1").firstChild.nodeType;
// console.log(title);


// let elem = document.querySelector("#root");

// let tag = document.createElement("p");  // <p></p>
// let node = document.createTextNode("Новый текст!!!"); // Новый текст!!!
// tag.append(node);  // <p>Новый текст!!!</p>

// elem.append(tag);  // добаляет новый элемент последним дочерним элементом внутри родительского
// elem.prepend(tag); // добаляет новый элемент первым дочерним элементом внутри родительского
// elem.before(tag);  // добаляет новый элемент до выбранного id
// elem.after(tag);  // добаляет новый элемент после выбранного id

// elem.replaceWith(tag);

// let list = document.querySelector("ul");

// let newItem = document.createElement("li");  // <li></li>
// newItem.innerHTML = "Новый <i>элемент списка</i>";  // <li>Новый <i>элемент списка</i></li>

// list.append(newItem);

// let i = 1;

// document.querySelector("#func2").addEventListener("click", add);
// document.querySelector("#func1").addEventListener("click", change);
// let list2 = document.querySelector("#list2");

// function add(){
//     let elem = document.createElement("li");
//     elem.innerHTML = "Water_" + i;

//     list2.append(elem);
//     i++;
// }

// function change(){
//     let elem = list2.lastChild;
//     document.querySelector("#list1").append(elem);
// }

// let div = document.querySelector("#root");
// div.insertAdjacentHTML('beforebegin', '<p>До выбранного элемента</p>');
// div.insertAdjacentHTML('afterend', '<p>После выбранного элемента</p>');
// div.insertAdjacentHTML('afterbegin', '<p>Первым внутри выбранного элемента</p>');
// div.insertAdjacentHTML('beforeend', '<p>Последним внутри выбранного элемента</p>');

// let one = document.querySelector("#p1");
// // one.remove();  // удаляет выбранный элемент
// let two = document.querySelector("#p2");

// two.after(one);

// let ul = document.querySelector("ul");
// let li = ul.cloneNode(true);

// li.querySelector('li').innerHTML = "Начало клонируемых элементов";
// ul.after(li);


// let list = document.querySelector("ul.list");
// list.insertAdjacentHTML("beforebegin", "<h2>Список </h2><hr>");
// let list_inner = document.querySelector("h2");
// list_inner.insertAdjacentText("beforeend", "планет");
// list.insertAdjacentHTML("afterend", "<hr>");

// let hr = document.querySelectorAll("hr")[1];
// let h4 = document.createElement("h4");  // <h4></h4>
// h4.innerHTML = "Конец списка";  // <h4>Конец списка</h4>
// hr.insertAdjacentElement("afterend", h4);

// let idRemove = setInterval(function(){
//     let li = document.querySelector("ul.list > li");
//     if(li == null){
//         clearInterval(idRemove);
//         // alert("Список удален");
//         list.insertAdjacentHTML("afterbegin", "<li>Список удален</li>")
//     }
//     else {
//         li.remove();
//     }
// }, 500);


// let spans = document.querySelectorAll(".remove-button");

// for(let i=0; i<spans.length; i++){
//     spans[i].addEventListener("click", function(){
//         this.parentNode.remove();
//     })
// }

// let div = document.querySelector("div");
// div.className = 'alert';
// let activeDiv = document.querySelector(".active");
// activeDiv.classList.add('hidden');
// // activeDiv.classList.remove('hidden');

// activeDiv.classList.toggle('hidden');

// activeDiv.classList.replace('active', 'alert');

// let frogImg = document.querySelector("#greenFrog");

// console.log(frogImg.id);
// console.log(frogImg.className);
// console.log(frogImg.src);
// console.log(frogImg.alt);
// console.log(frogImg.title);
// // console.log(frogImg.data-set);

// frogImg.title = "Новый текст подсказки";
// console.log(frogImg.getAttribute('src'));
// console.log(frogImg.getAttribute('data-set'));
// frogImg.setAttribute('src', '4.jpg');
// // frogImg.removeAttribute('src');
// console.log(frogImg.hasAttribute('src'));


// document.form1.style.background = "silver";

// document.forms[0].style.padding = "16px";
// document.forms.form1.style.border = "2px dotted gray";
// document.forms['form1'].style.border = "4px dotted gray";

// document.form1.name1.style.color = "blue";
// document.form1['name1'].style.background = "aqua";

// let txt = document.querySelector("#text1");
// let but = document.querySelector("button");

// but.addEventListener("click", content);

// function content(){
//     alert(txt.value);
// }

// let choose = document.querySelector("input[type='button']");

// choose.addEventListener("click", chooseColor);

// function chooseColor(){
//     document.body.style.background = document.form3.radio2.value;
// }

// let input = document.querySelectorAll("input[type='checkbox']");
// // console.log(input);

// for (let i = 0; i < input.length; i++) {
//     input[i].addEventListener("click", checkAll);
// }

// let numChecked;
// function checkAll(){
//     numChecked = 0;
//     for (let i = 0; i < input.length; i++) {
//         if(input[i].checked ){  //&& input[i].type == "checkbox"
//             numChecked++;
//         }
//     }
//     if(numChecked == 3){
//         for (let i = 0; i < input.length; i++) {
//             if(!input[i].checked ){  // && input[i].type == "checkbox"
//                 input[i].disabled=true;
//             }
//         }
//     } else{
//         for (let i = 0; i < input.length; i++) {
//             input[i].disabled=false;
//         }
//     }
//     console.log(numChecked);
// }

// let city = document.querySelector("#city");

// city.addEventListener("change", setImage);

// function setImage(){
//     let cities = city.selectedIndex;
//     let options = city.options;
//     let code = options[cities].value;

//     let div = document.querySelector("#image");
//     div.innerHTML = "<img src='img/"+ code +".png'>"
// }

// let gas = document.querySelectorAll('.petrol');

// for (let i = 0; i < gas.length; i++){
//     gas[i].addEventListener("click", function(){
//         let gallons = document.querySelector(".gallons").value;
//         let amount = this.getAttribute("data-get");

//         let res = gallons * amount;
//         let sum = document.querySelector(".sum");
//         sum.innerHTML = res;
//     })
// }

// let car = new Object();
// let car1 = {};

// let car = new Object();
// car["type"] = "BMW";
// car.color = "white"
// console.log(car);
// document.write(car.type + " " + car["color"]);


// let menu = {};
// menu["width"] = 300;
// menu.height = 200;
// menu.title = "Menu";
// console.log(menu);
// document.write(menu.title + ": " + menu.width + " x " + menu.height + "<br>");

// // let menu1 = {
// //     "width": 300,
// //     height: 200,
// //     title: "Menu",
// // };
// // console.log(menu1);
// // document.write(menu1.title + ": " + menu1.width + " x " + menu1.height + "<br>");
// // delete menu.width;
// delete(menu.width);

// // document.write(menu.title + ": " + menu.width + " x " + menu.height + "<br>");

// menu.age = 25;
// console.log(menu);

// for(let key in menu){
//     document.write("<br>Ключ = " + key + ", значение = " + menu[key]);
// }
// document.write("<br>Имена ключей: " + Object.keys(menu));
// document.write("<br>Всего свойств: " + Object.keys(menu).length);

// Object.keys(menu).forEach(function(key){
//     document.write("<br>" + menu[key]);
// });

// let obj = {
//     name: "Гомер",
//     colors: {
//         first: "yellow",
//         second: "blue"
//     },
//     color: [
//         "black",
//         "white",
//         "red",
//         "blue"
//     ],
//     hello: function(){
//         document.write("Привет");
//     }
// }

// console.log(obj);
// // document.write(obj.name + " " + obj.colors.second + " " + obj.color[2] + "<br>");
// // obj.hello();

// // let fil = obj.color.filter(function(elem){
// //     return elem.length < 5;
// // });

// // let mas = obj.color.map(function(elem, index, all){
// //     return "color: " + elem  + ", index: " + index + ", весь массив: " + all + "<br>";
// // })
// let mas = Object.keys(obj.colors).map(function(elem){
//     return elem + ": " + obj.colors[elem] + "<br>";
// })

// document.write("<br>" + mas + "<br>");

// let mas1 = obj.color.map(elem => elem.toUpperCase());
// document.write("<br>" + mas1 + "<br>");


// let calc = {
//     num1: 5,
//     num2: 4,
//     calc: function(){
//         this.res = this.num1 * this.num2;
//         // calc.res = calc.num1 * calc.num2;
//     }
// }

// document.write(calc.num1 + "<br>");
// calc.calc();
// document.write(calc.res);

// let x = 15, y = 10;

// let coords = { x, y,
//     calc(){
//         document.write(this.x * this.y);
//     }
// }

// coords.calc();

// let coords = {
//     x: x,
//     y: y,
//     calc: function(){
//         document.write(this.x * this.y);
//     }
// }

// coords.calc();


// Деструктуризация

// let user = {
//     login: {
//         firstName: "Kate",
//         lastName: "Pavlova"
//     },
//     passw: 'qwerty',
//     role: 'guest'
// }

// // let r = user.login.firstName
// // document.write(r);

// // let {login: {firstName: f, lastName: l}, passw, role} = user;
// let {login: {firstName: f, lastName: l}, ...rest} = user;
// document.write(f + " " + l + " " + rest.passw + " " + rest.role);

// let number = [3,5,7];
// document.write(number[1] + "<br>");

// let [, , c] = number;
// document.write(c)

// Функция-конструктор

// function Car(name, year) {
//     this.name = name;
//     this.year = year;
// }

// Car.prototype.getAge = function(){
//     return new Date().getFullYear() - this.year;
// }

// Car.prototype.color = "black";

// let ford = new Car("Ford", 2019);
// console.log(ford);
// console.log(ford.getAge());


// let bmw = new Car("BMW", 2017);
// console.log(bmw);
// console.log(bmw.getAge());

// function Car(name, year) {
//     this.name = name;
//     this.year = year;
//     this.getAge = function(){
//         return new Date().getFullYear() - this.year;
//     }
// }

// Car.color = "black";

// let ford = new Car("Ford", 2019);
// console.log(ford);
// console.log(ford.getAge());


// let bmw = new Car("BMW", 2017);
// console.log(bmw);
// console.log(bmw.getAge());

// let form = document.form1;

// form.addEventListener("submit", event => {
//     event.preventDefault();

//     let title = form.title.value;
//     let text = form.text.value;
//     let description = form.description.value;

//     // console.log(title, text);
//     saveForm({title, text, description});  // {title: title, text: text}
// })

// function saveForm(data){  // {title, text, description}
//     // let {title, text, description} = data;
//     let formData = {
//         date: new Date().toLocaleDateString(),
//         // title, text, description
//         ...data
//     }

//     console.log("Form data: ", formData);
// }

// class User{
//     constructor(name){
//         this.name = name;
//     }

//     get name(){
//         return this._name;
//     }

//     set name(value){
//         if (value.length < 6){
//             alert("Имя слишком короткое.");
//             return;
//         }
//         this._name = value;
//     }

//     sayHi(){
//         document.write("Hello, " + this.name + "!");
//     }
// }

// let user = new User("Александр");
// alert(user.name);
// user.name = "Петр";

// user.sayHi();


// alert(typeof User);

// let user1 = new User("Петя");
// user1.sayHi();

// class Animal{
//     constructor(name){
//         this.speed = 0;
//         this.name = name;
//     }
//     run(speed){
//         this.speed = speed;
//         document.write(`${this.name} бежит со скоростью ${this.speed} км/ч.<br>`);
//     }
//     stop(){
//         this.speed = 0;
//         document.write(`${this.name} стоит.<br>`);
//     }
// }

// class Rabbit extends Animal{
//     constructor(name, earLength){
//         super(name);
//         this.earLength = earLength;
//     }
//     hide() {
//         document.write(`${this.name} прячется!<br>`);
//     }
//     stop(){
//         super.stop();
//         this.hide();
//         console.log("Rabbit");
//     }
// }

// let animal = new Animal("Мой питомец");
// animal.run(80);
// animal.stop();

// let rabbit = new Rabbit("Белый кролик", 10);
// rabbit.run(5);
// rabbit.hide();
// rabbit.stop();
// document.write(rabbit.earLength);

// class Header{
//     constructor(img, h1, h2){
//         this.src = img;
//         this.h1 = h1;
//         this.h2 = h2;
//         this.out = "";
//     }
//     render(id){
//         this.out = `
//             <img src="${this.src}" alt="">
//             <h1>${this.h1}</h1>
//             <h2>${this.h2}</h2>
//         `;
//         document.querySelector(`#${id}`).innerHTML = this.out;
//     }
// }

// class HeaderExt extends Header{
//     constructor(img, h1, h2, tel){
//         super(img, h1, h2);
//         this.tel = tel;
//     }
//     get tel(){
//         return this._tel;
//     }
//     set tel(t){
//         let reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
//         if(reg.test(t)){
//             this._tel = t;
//         }
//         else{
//             alert("Некорректный номер телефона");
//             return;
//         }
//     }
//     render(id){
//         super.render(id);       
//         this.out += `
//             <h2>${this.tel}</h2>
//         `;
//         document.querySelector(`#${id}`).innerHTML = this.out;
//     }
// }

// let img3 = "https://cdn1.iconfinder.com/data/icons/application-file-formats/128/javascript-64.png";
// let header3 = new HeaderExt(img3, "Класс-наследние", "Описание наследника", "+7 999 555-55-55");
// header3.tel = "Hello";
// // header3.tel = "+7 333 987-65-43";
// header3.render("header-ext");

// let img = "https://cdn4.iconfinder.com/data/icons/file-extension-names-vol-5-1/512/48-64.png";
// let header = new Header(img, "Заголовок", "Описание");
// header.render("header");

// let img2 = "https://cdn4.iconfinder.com/data/icons/file-extension-names-vol-8/512/27-64.png";
// let header2 = new Header(img2, "Второй заголовок", "Другое описание");
// header2.render("header2");

// JSON

// let info = '{"first_name":"Ivan","age":36,"mother":{"name":"Olga","age":58},"children":["Kate","Igor","Misha"],"married":true,"dog":null}';

// console.log(info);

// let person = JSON.parse(info);  // JSON => JS

// console.log(person);

// person.first_name = "Petr";
// delete person.age;
// person.work = "programmer";

// for(let i in person){
//     document.write(i + ": " + person[i] + "<br>");
// }

// let personString = JSON.stringify(person);  // JS -> JSON
// console.log(personString);

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())  // JSON => JS
//     .then(json => console.log(json));


document.querySelector("#load").addEventListener("click", load);

function load(){
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            let ul = document.querySelector("#list");
            let html = data.map(function(item){
                return "<li>" + item.id + " " + item.name + " " + item.email + "</li>";
            })
            ul.insertAdjacentHTML("afterbegin", html.join(" "));
        })
}

// let box = document.querySelector("div");
// console.log(box.getBoundingClientRect().right);