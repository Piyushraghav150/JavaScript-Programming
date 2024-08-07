// JavaScript Programming Language //

// Variables var let const //
// var //
// var a = 5;
// var a = 6;
// console.log(a,a)
// {
//     var a = 20;
//     console.log(a)
// }

// let //
// let a = 4;
// let b = 5;
// {
//     let c = 20;
//     console.log(c)
// }
// console.log(a,b)

// const //
// const error //
// const name1 = "ram"
// console.log(name1)
// let name1 = "ram"
// console.log(name1)
// const run //
// const n2 = "rahul1"
// console.log(n2)
// const n3 = "rahul1"
// console.log(n3)

// Data Types in Js //
// let a = null;
// let b = 5;
// let c = "hi";
// let d = true;
// let e = Symbol("This is datatypes");
// let f = BigInt("9") + BigInt("1");
// let g = undefined;
// console.log(a, b, c, d, e, f, g)

// Objects in Js//
// const itemlist = {
//     "pen": 10,
//     "book": 11,
//     "bag": 12,
//     "shoes": 14,
// }
// console.log(itemlist["pen"])
// console.log(itemlist["book"])
// console.log(itemlist["bag"])
// console.log(itemlist["shoes"])

// Operators in Js //
// Arithmetic Operators //
// let a = 3;
// let b = 4;
// console.log("Sum of a and b is = ", (a + b))
// console.log("Sum of a and b is = ", (a - b))
// console.log("Sum of a and b is = ", (a * b))
// console.log("Sum of a and b is = ", (a ** b))
// console.log("Sum of a and b is = ", (a / b))
// console.log("Sum of a and b is = ", (a % b))
// console.log("Sum of a and b is = ", (a++))
// console.log("Sum of a and b is = ", (a--))

// Assignment Operators //
// let c = 10;
// let d = 11;
// console.log("Sum of c and d is = ", (c += d))
// console.log("Sum of c and d is = ", (c -= d))
// console.log("Sum of c and d is = ", (c *= d))
// console.log("Sum of c and d is = ", (c **= d))
// console.log("Sum of c and d is = ", (c /= d))
// console.log("Sum of c and d is = ", (c %= d))

// Comparison Operators //
// let x = 23;
// let y = 34;
// console.log("Sum of x and y is = ", (x == y))
// console.log("Sum of x and y is = ", (x != y))
// console.log("Sum of x and y is = ", (x === y))
// console.log("Sum of x and y is = ", (x !== y))
// console.log("Sum of x and y is = ", (x > y))
// console.log("Sum of x and y is = ", (x < y))
// console.log("Sum of x and y is = ", (x >= y))
// console.log("Sum of x and y is = ", (x <= y))

// Logical Operators //
// let q = 5;
// let r = 6;
// console.log(q>r && q==6)
// console.log(q<r || r==6)
// console.log(!true)
// console.log(!false)

// Conditional Statements in Js //
// let n = prompt("Hey whats your age?");
// n = Number.parseInt(n)
// if else statements //
// if(n>0) {
//     alert("This is a Valid age?");
// }
// else{
//     alert("This is an Invalid age?");
// }
// console.log(n)

// if, else if, else statements //
// if (n<0) {
//     alert("This is Invalid age?");
// }
// else if (n<10) {
//     alert("you are a kid?");
// }
// else if (n<20 && n>=15) {
//     alert("You can Drive after 20?");
// }
// else{
//     alert("You can Drive?")
// }
// console.log(n)
// console.log("done")

// ternary Operator //
// console.log("you can", n < 20 ? "not drive" : "drive")

// Loops in Js //
// For loop //
// print nums //
// for (let i = 0; i<50; i++) {
//     console.log(i);
// }

// For in loop //
// print in Object value a and obj[a] //
// let obj = {
//     "book": 1,
//     "pen": 2,
//     "shoes": 3,
// }
// for (let a in obj) {
//     console.log("This is my " + a + obj[a])
// }

// For of loop //
// obj is not itrabile //
// for (let a of obj) {
//     console.log("This is my " + a + obj[a])
// }

// While & do While loop //
// let n = prompt("Enter the value of n?");
// n = Number.parseInt(n)
// while loop //
// let i = 0;
// while(i<n) {
//     console.log(i)
//     i++;
// }

// do while loop //
// let i = 5;
// do{
//     console.log(i)
//     i++;
// }while (i<n)

// Function in Js //
// basic function //
// function myFunction() {
//     console.log("Welcome in JS 1");
//     console.log("Welcome in JS 2");
//     console.log("Welcome in JS 3");
//     console.log("Welcome in JS 4");
//     console.log("Welcome in JS 5");
// }
// myFunction();
// Function run //
// function OneNumPrt(x, y) {
//     console.log("Done");
//     return 1 + (x + y) / 2
// }
// let a = 4;
// let b = 5;
// let c = 6;

// console.log("One Number Print b and c is ", OneNumPrt(b, c));
// console.log("One Number Print a and b is ", OneNumPrt(a, b));
// console.log("One Number Print a and c is ", OneNumPrt(a, c));
// Arrow function //
// const hello = () => {
//     console.log("Hey you")
//     return "hi"
// }
// function OneNumPrt(x, y) {
//     console.log("Done");
//     return 1 + (x + y) / 2
// }

// const sum = (p, q) => {
//     return p + q
// }
// let a = 4;
// let b = 5;
// let c = 6;

// console.log("One Number Print b and c is ", OneNumPrt(b, c));
// console.log("One Number Print a and b is ", OneNumPrt(a, b));
// console.log("One Number Print a and c is ", OneNumPrt(a, c));
// console.log(sum(10,5));
// hello();
// let d = hello();
// console.log(d);


// Strings in Js //
// let name1 = "Rahul";
// console.log(name1)
// let name2 = 'Shayam';
// console.log(name2)

// Template Literals //
// let men1 = "Ram";
// let men2 = "Shiv";
// let Sentence = `${men2} is a Friend of ${men1}`
// console.log(Sentence)

// Escape Sequence character //
// let Fruit1 = 'Ap`ple';
// console.log(Fruit1)
// let Fruit2 = 'Bana\'na';
// console.log(Fruit2)
// let Fruit3 = 'Bana\"na';
// console.log(Fruit3)
// let Fruit4 = 'Bana\nna';
// console.log(Fruit4)
// let Fruit5 = 'Bana\tna';
// console.log(Fruit5)
// let Fruit6 = 'Bana\rna';
// console.log(Fruit6)

//  String Properties //
// let name1 = "Rajkumar";
// console.log(name1.length)
// console.log(name1.toUpperCase())
// console.log(name1.toLowerCase())
// console.log(name1.slice(2,6))
// console.log(name1.slice(3))
// console.log(name1.replace("Raj","Paj"))


// Arrays in Js //
// const fruits = ["banana","34",5,null,true];
// console.log(fruits)
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])
// console.log(fruits[2] = 8)
// console.log(typeof fruits)

// Array Methods //
// let num = [1, 2, 3, 44, 5];
// let b = num.toString()
// console.log(b, typeof b)
// let c = num.join("_")
// console.log(c, typeof c)
// num.pop()
// console.log(num)
// num.push(6)
// console.log(num)
// num.shift()
// console.log(num)
// num.unshift(66)
// console.log(num)
// delete num[0]
// console.log(num)

// Array Methods 2 //
// For Each loop //
// let num = [2, 4, 5, 6, 7, 8];   
// num.forEach((Element) => {
//   console.log(Element * Element);
// });

// Array.from //
// let name1 = "Harry";
// let arr = Array.from(name1)
// console.log(arr)

// for...of //
// for (let i of num){
//     console.log(i)
// }

// for...in //
// for (let i in num){
//     console.log(i)
// }

// Map() //
// let arr = [10, 20, 30, 40];
// let ar = arr.map((value, index, Element) => {
//     return (value, index, Element)
// })
// console.log(ar)

// Array filter //
// let arr2 = [11, 22, 33, 44, 55];
// let a2 = arr2.filter((a) => {
//     return a<40
// })
// console.log(a2)

// Reduce //
// let arr3 = [1, 2, 3, 4, 5, 66];
// let newarr3 = arr3.reduce((h1, h2) => {
//     return h1 + h2
// })
// console.log(newarr3)

// JavaScript browser //
// console.log(alert("Hello"));
// Console object Methods //
// console.log(console)
// console.error("Hey error")
// console.assert(10>29)
// console.assert(10<29)
// console.clear()
// obj = {a:1, b:2, c:3}
// console.table(obj)
// console.warn("Hey")
// console.info("This is me")

// alert prompt confirm //
// alert("Hey whats you");
// let a = prompt("Enter the value of a?");
// a = Number.parseInt(a);
// console.log(a)
// confirm //
// alert("Enter you?")
// let a = prompt("Add Num")
// a = Number.parseInt(a)
// alert("Welcome to confirm")
// let write = confirm("Hello Js");
// if (write){
//     document.write(a)
// }
// else{
//     document.write("Please me")
// }

// DOM Propertise //
// console.log(document.body)
// console.log(document.head)
// console.log(document.body.style.background = "green")
// location.href = "https://codewithharry.com"
// console.log(document.documentElement)
// console.log(document.title)

// Childern of an element //
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(document.body.childNodes)

// Siblings and the parent //
// console.log(document.body.firstChild)
// a = document.body.firstChild
// console.log(a.parentNode)
// console.log(a.parentElement)

// Element Only Navigation //
// let b = document.body
// console.log(b.firstChild)
// console.log(b.firstElementChild)
// console.log(b.lastElementChild)

// Table links //
// let t = document.body.firstElementChild.firstElementChild
// console.log(t)
// console.log(t.rows)
// console.log(t.rows[1])
// console.log(t.caption)
// console.log(t.tHead)
// console.log(t.tHead.firstElementChild)
// console.log(t.tBodies)
// console.log(t.tFoot)

// Searching the DOM //
// let ctitle = document.getElementsByClassName("card-title")[0]
// ctitle.style.color = "Pink"
// let ctitle = document.getElementById("firstcardtitle")
// ctitle.style.color = "red"
// let ctitles = document.querySelectorAll(".card-title")
// ctitles[0].style.color = "blue"
// ctitles[1].style.color = "green"
// ctitles[2].style.color = "pink"
// console.log(ctitles)
// document.querySelector(".this").style.color = "red"
// console.log(document.getElementsByTagName("a"))

// matches, closest, contains //
// let id1 = document.getElementById("id1")
// console.log(id1)
// console.log(id1.matches(".class"))
// console.log(id1.matches(".box"))
// console.log(sp1.closest(".box"))
// console.log(id1.contains(sp1))
// console.log(id2.contains(sp1))
// console.log(id2)

// DOM Propertise //
// Console.dir //
// console.log(document.getElementsByTagName('span')[0]);
// console.dir(document.getElementsByTagName('span')[0]);

// TagName nodeName //
// let x = document.getElementsByTagName('span')[0]
// console.log(x)
// let y = document.getElementsByTagName('span')[0]
// console.dir(y)
// console.log(document.body.firstChild.nodeName)
// console.log(document.body.firstElementChild.nodeName)

// InnerHtml OuterHtml textcontent and hidden //
// console.log(first.innerHTML)
// console.log(first.outerHTML)
// console.log(document.body.textContent)
// console.log(first.hidden = false)

// Attributes Methods //
// let first = document.getElementById("first");
// let a = first.getAttribute("class")
// console.log(a)
// console.log(first.hasAttribute("class"))
// console.log(first.hasAttribute("style"))
// console.log(first.removeAttribute("class"))
// console.log(first.setAttribute("class", "true me"))
// console.log(first.attributes)
// console.log(first.dataset)

// Insertion Methods //
// let a = document.getElementsByTagName('div')[0]
// a.innerHTML = a.innerHTML + '<h1>Hello World!</h1>';
// let div = document.createElement('div');
// div.innerHTML = '<h1>Hello World!</h1>';
// a.append(div);
// a.prepend(div);
// a.before(div);
// a.after(div);
// a.replaceWith(div);

// Insert Adjacent HTML/Text/Element //
// first.insertAdjacentHTML('beforebegin', '<div class="test">beforebegin</div>');
// first.insertAdjacentHTML('beforeend', '<div class="test">beforeend</div>');
// first.insertAdjacentHTML('afterbegin', '<div class="test">afterbegin</div>');
// first.insertAdjacentHTML('afterend', '<div class="test">afterend</div>');
// first.remove()

// Classname and Classlist //
// first.class = "text-black red";
// first.className = "text-black red"
// 'text-black red'
// first.className = "text-black yellow"
// 'text-black yellow'
// first.classList
// ['text-black', 'yellow', value: 'text-black yellow']
// first.classList.remove('yellow')
// undefined
// first.classList.add("red")
// undefined
// first.classList.toggle("red")
// false
// first.classList.toggle("red")
// true
// first.classList.contains("red")
// true
// first.classList.contains("yellow")
// false

// Settimeout and SetInterval //
// settimeout-1//
// alert("Hello")
// setTimeout(function() {
//     alert("I am settimeout")
// }, 4000)

// settimeout-2 //
// document.write("Hello")
// let a = setTimeout(function(){
//         alert("I am inside of settimeout")
//     }, 6000)
// let b = prompt("Do you want to run of settimeout?")
// if("n" == b) {
//     clearTimeout(a)
// }
// console.log(a)

// settimeout-3 //
// document.write("Hello")
// const sum = (a, b) => {
//     console.log("Yes i am running" + (a + b))
//     a + b
//     }
//     setTimeout(sum, 2000, 1, 2, 6)

// setInterval //
// setInterval(function() {
//     alert("run setInterval")
// }, 3000);

// Events in Js //
// Handling in Js //
// let a = document.getElementsByClassName("container")[0]
//  a.onclick = () => {
//     let b = document.getElementsByClassName("container")[0]
//     b.innerHTML = "Hello world!";
//  }

// AddEvent listner and RemoveEvent listner //
// AddEvent listner-1 //
// btn.addEventListener('click', function(e){
//     alert("hello world1!")
// })
// btn.addEventListener('click', function(e){
//     alert("hello world2!")
// })
// btn.addEventListener('click', function(e){
//     alert("hello world3!")
// })

// AddEvent listner-2 //
// let x = function (e) {
//   alert("Hello World1!");
// };
// let y = function (e) {
//   alert("Hello World2!");
// };
// btn.addEventListener("click", x);
// btn.addEventListener("click", y);
// let a = prompt("what is your Good Number?");
// if (a == "2") {
//   btn.removeEventListener("click", x);
// }

// AddEvent listner-3 //
// let x = function (e) {
//     console.log(e.target)
//     alert("Hello World1!");
//   };
//   let y = function (e) {
//     console.log(e)
//     alert("Hello World2!");
//   };
//   btn.addEventListener("click", x);
//   btn.addEventListener("click", y);
//   let a = prompt("what is your Good Number?");
//   if (a == "2") {
//     btn.removeEventListener("click", x);
//   }

// Event Object //
// let x = function (e) {
//         console.log(e.target)
//         console.log(e.type, e.clientX, e.clientY)
// alert("Hello World1!");
//   };
//   let y = function (e) {
//     console.log(e)
//     alert("Hello World2!");
//   };
//   btn.addEventListener("click", x);
//   btn.addEventListener("click", y);
//   let a = prompt("what is your Good Number?");
//   if (a == "2") {
//     btn.removeEventListener("click", x);
//   }

// Callbacks in Js //
// Synchronous and Asynchronous programming //

// Synchronous //
// let a = prompt("Whats is your name?");
// let b = prompt("Whats is your age?");
// let c = prompt("Whats is your favrate colour?");
// console.log(a + " is " + b + " years old and has " + c + " favorite colour. ")

// Asynchronous //
// console.log("Start")
// setTimeout(function(){
//     console.log("Hey this is me");
// }, 4000)
// console.log("End")

// Callbacks in Js //
// add Script step-1 //
// function loadScript(src, callback) {
//   var script = document.createElement("script");
//   script.src = src;

// script Loaded step-2//
//   script.onload = function() {
//     console.log("Loaded script with SRC: " + src)
//     callback(src);
//   };
//   document.body.appendChild(script);
// }

// step-3 + SRC add//
// function hello(src) {
//     alert('Hello World!' + src);
// }
// function Good(src) {
//     alert('GoodName!' + src);
// }
// loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js", hello
// );
// function loadScript(src, callback) {
//   var script = document.createElement("script");
//   script.src = src;
//   script.onload = function(){
//     console.log("Loaded script with SRC: " + src)
//     callback(src);
//   }
//   document.body.appendChild(script);
// }
// function hello(src) {
//       alert('Hello World!' + src);
//   }
//   function Good(src) {
//       alert('GoodName!' + src);
//   }
// loadScript(
//     "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js", hello
//   );

// Handling errors //
// Error add step-1//
// function loadScript(src, callback) {
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = function() {
//       console.log("Loaded script SRC: " + src);
//       callback(src);
//     };
//     document.body.appendChild(script);
// }
// script.onerror = function() {
//     console.log("Loaded script with src: " + src)
//     document.body.appendChild(script);
//   }
//   function hello(src) {
//     alert('Hello!' + src);
//   }
//   function Good(src) {
//     alert('good' + src);
//   }
//   loadScript(
//     "https://cdn.jsdeesslivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js", hello)

// Error handling step-2 //
// function loadScript(src, callback) {
//   var script = document.createElement("script");
//   script.src = src;
//   script.onload = function () {
//     console.log("error Loaded script SRC: " + src);
//     callback(null, src);
//   };
//   script.onerror = function () {
//     console.log("Loaded script with src: " + src);
//     callback(new Error("Src got error"))
//   };
//   document.body.appendChild(script);
// }

// function hello(error, src) {
//     if(error){
//         console.log(error)
//         return
//     }
//   alert("Hello!" + src);
// }
// function Good(src) {
//   alert("good" + src);
// }
// loadScript(
//   "https://cdn.jsdeesslivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
//   hello
// );

// Callback Hell //
// function loadScript(src, callback) {
//   var script = document.createElement("script");
//   script.src = src;
//   script.onload = function () {
//     console.log("error Loaded script SRC: " + src);
//     callback(null, src);
//   };
//   script.onerror = function () {
//     console.log("Loaded script with src: " + src);
//     callback(new Error("Src got error"));
//   };
//   document.body.appendChild(script);
// }

// function hello(error, src) {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   alert("Hello!" + src);
// }
// function Good(src) {
//   alert("good" + src);
// }
// loadScript(
//   "https://cdn.jsdeesslivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
//   hello
// );
// Pyramid of Doom //
// loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
//   function hello(error, src) {
//     if (error) {
//       console.log(error);
//       sendEmergencyMessageToCeo();
//       return;
//     }
//     loadScript(
//       "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap2.bundle.min.js",
//       function hello(error, src) {
//         if (error) {
//           console.log(error);
//           sendEmergencyMessageToCeo();
//           return;
//         }
//         loadScript(
//           "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap3.bundle.min.js",
//           function hello(error, src) {
//             if (error) {
//               console.log(error);
//               sendEmergencyMessageToCeo();
//               return;
//             }
//             loadScript(
//               "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap4.bundle.min.js",
//               function hello(error, src) {
//                 if (error) {
//                   console.log(error);
//                   sendEmergencyMessageToCeo();
//                   return;
//                 }
//                 loadScript(
//                   "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap5.bundle.min.js",
//                   function hello(error, src) {
//                     if (error) {
//                       console.log(error);
//                       sendEmergencyMessageToCeo();
//                       return;
//                     }
//                   }
//                 );
//               }
//             );
//           }
//         );
//       }
//     );
//   }
// );

// Promises in Js //
// Method-1 //
// let promise = new Promise(function (resolve, reject) {
//   alert("Hello");
//   resolve(56);
// });
// console.log("Hello you");
// setTimeout(function () {
//   console.log("Hello in 3 Sec");
// }, 5000);

// Method-2 //
// let promise = new Promise(function(resolve,reject){
//       alert("Hello")
//       resolve(56)
//   })
//   console.log("Hello one")
//   setTimeout(function(){
//       console.log("Hello in 2 seconds")
//   }, 2000)
//   console.log("my name is " + "Three")
//   console.log(promise)

// Method-3 //
// let p1 = new Promise((resolve, reject) => {
//   console.log("Promise is pending")
//   setTimeout(() => {
//       console.log("I am promise and resolved")
//       resolve(true)
//       reject(new Error("I am an error"))
//   }, 5000)
//   })

//   let p2 = new Promise((resolve, reject) => {
//   console.log("Promise is pending")
//   setTimeout(() => {
//       console.log("I am promise and rejected")
//       resolve(true)
//       reject(new Error("I am error"))
//   }, 5000)
//   })
//   console.log(p1, p2)t p

// .than and .catch //
// let p1 = new Promise((resolve, reject) => {
//   console.log("Promise is pending");
//   setTimeout(() => {
//     console.log("I am promise and resolved");
//     resolve(true);
//     reject(new Error("I am an error"));
//   }, 5000);
// });

// let p2 = new Promise((resolve, reject) => {
//   console.log("Promise is pending");
//   setTimeout(() => {
// console.log("I am promise and rejected");
// resolve(true);
//     reject(new Error("I am an error"));
//   }, 5000);
// });
// .than //
// p1.then((value) => {
//   console.log(value);
// });
// .catch to catch error //
// p2.catch((error) => {
//     console.log("some error occurred in p2")
// })
// p2.then((value) => {
//       console.log(value)
//   }, (error)=>{
//       console.log(error)
//   })

// Promise Chaining //
// Method-1 //
// let p1 = new Promise((resolve, reject)=>{
//       setTimeout(()=>{
//           console.log("Resoleved after 3 Seconds")
//           resolve(56)
//       }, 3000)
//   })
//   p1.then((value)=>{
//         console.log(value)
//         let p2 = new Promise((reslove, reject)=>{
//            setTimeout(()=>{ reslove("Promise 2")},2000)
//         })
//         return p2
//     }).then((value) =>{
//           console.log("done")
//           return 2
//       }).then((value)=>{
//           console.log("done2")
//       })

// Method-2 //
// const loadScript = (src) => {
//     return new Promise((resolve, reject) => {
//       let script = document.createElement("script")
//       script.type = "text/javascript"
//       script.src = src
//       document.body.appendChild(script)
//       script.onload = () => {
//         resolve("Script has been loaded");
//       };
//       script.onerror = () => {
//         reject(0);
//       };
//     });
//   };
//   let p1 = loadScript(
//       "https://cdne.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
//     );
//     p1.then((value) => {
//       console.log(value);
//     }).catch((error) => {
//       console.log("sorry")
//     })

// Attaching Handlers //
// let p1 = new Promise((resolve, reject)=>{
//       alert("Hey I am resolved")
//       setTimeout(()=>{
//           resolve(1);
//       }, 2000)
//   })
//   p1.then(() =>{
//         console.log("Hurry up")
//         return new Promise((resolve, reject) => {
//             setTimeout(() =>{
//                 resolve (4)
//             }, 4000)
//         })
//     })
//     .then((value) => {console.log(value)})
// p1.then(() =>{
//     console.log("Congratution resolved")
// })

// Promise APIs //

// Method-1 //
// let p1 = new Promise((resolve, reject) => {
//       setTimeout(()=>{
//           resolve("Value 1");
//       }, 1000)
//   })
//   let p2 = new Promise((resolve, reject) => {
//       setTimeout(()=>{
//           resolve("Value 2")
//       }, 2000)
//   })
//   let p3 = new Promise((resolve, reject) => {
//       setTimeout(()=>{
//           resolve("Value 3");
//       }, 1000)
//   })
//   p1.then((value) =>{
//         console.log(value)
//     })
//     p2.then((value) =>{
//         console.log(value)
//     })
//     p3.then((value) =>{
//         console.log(value)
//     })

// Others Method//
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//       resolve("Value 1");
//   }, 1000)
// })
// let p2 = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//       resolve("Value 2")
//   }, 2000)
// })
// let p3 = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//       resolve("Value 3");
//   }, 1000)
// })
// let promise_all = Promise.all([p1, p2, p3])
// let promise_all = Promise.allSettled([p1, p2, p3])
// let promise_all = Promise.race([p1, p2, p3])
// let promise_all = Promise.any([p1, p2, p3])
// let promise_all = Promise.resolve(6)
// let promise_all = Promise.reject(new Error("Hey"))
// promise_all.then((value) =>{
//       console.log(value)
//   })

// Async/Await //
// Method-1 //
// async function piyush() {
//   let DelhiWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("27 Deg");
//     }, 2000);
//   });
//   let BombayWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("28 Deg");
//     }, 3000);
//   });
//   DelhiWeather.then(alert)
//   BombayWeather.then(alert)
// }
// console.log("Welcome to control room")
// piyush()

// Method-2 //
// async function piyush() {
//   let DelhiWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("27 Deg");
//     }, 2000);
//   });

//   let BombayWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("28 Deg");
//     }, 5000);
//   });

// comment-out //
// DelhiWeather.then(alert)
// BombayWeather.then(alert)

//   console.log("Fetching DelhiWeather ...");
//   let DW = await DelhiWeather;
//   console.log("Fetching BombayWeather ...");
//   let BW = await BombayWeather;
//   console.log("Fetched BombayWeather: " + BW);
//   return [DelhiW, BombayW];
// }
// console.log("Welcome control Wheather room")
// let a = piyush()
// a.then((value) => {
//   console.log(value)
// })

// Method-3 //
// add-let cherry //
// async function piyush() {
//   let DelhiWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("27 Deg");
//     }, 2000);
//   });

//   let BombayWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("28 Deg");
//     }, 5000);
//   });

// comment-out //
// DelhiWeather.then(alert)
// BombayWeather.then(alert)

//   console.log("Fetching DelhiWeather Please wait ...");
//   let DelhiW = await DelhiWeather;
//   console.log("Fetched Delhi Weather: " + DelhiW)
//   console.log("Fetching BombayWeather Please wait...");
//   let BombayW = await BombayWeather;
//   console.log("Fetched BombayWeather: " + BombayW);
//   return [DelhiW, BombayW];
// }
// const cherry = async () => {
//   console.log("Hey I am cherry");
// };
// const main = async () => {
//   console.log("Welcome control Wheather room");
//   let a = await piyush();
//   let b = await cherry();
// };
// main();

// Error Handling try catch //
// setTimeout(()=>{
//       console.log("Wifi....")
//   }, 1000)
// try //
//   try{
//       console.log(Rahul)
//   }
// catch //
//   catch(error){
//       console.log(error)
//   }
//   setTimeout(()=>{
//       console.log("Username ....")
//   }, 2000)
//   setTimeout(()=>{
//       console.log("facebook id ....")
//   }, 3000)
//   setTimeout(()=>{
//       console.log("MNo ....")
//   }, 4000)

// The Error object //
// Method-1 //
// try {
//   piyush;
// } catch (error) {
//   console.log(error);
// }

// Method-2 //
// try {
//   piyush;
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

// Method-3 //
// try {
//   let age = prompt("Enter your age?");
//   age = Number.parseInt(age);
//   if (age > 150) {
//     throw new ReferenceError("This is an error");
//   }
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
//   console.log(error.stack);
// }
// console.log("This is running");

// Finally Clause //
// Method-1 //
// try{
//       let a = 0;
//       console.log(program)
//       console.log("program run done")
//   }
//   catch(err) {
//       console.log("This is an error")
//       console.log(p)
//   }
//   finally {
//         console.log("I am a Good man")
//     }

// Method-2 function under //
// const f = () => {
//   try {
//     let a = 0;
//     console.log(program)
//     console.log("program run");
//     return;
//   } catch (err) {
//     console.log("This is error");
//     console.log(p);
//   } finally {
//     console.log("I am a Good man");
//   }
// };
// f();



// Network Request and Storing Data //
// fetch API //
// Method-1 //
// let p = fetch("https://goweather.herokuapp.com/weather/Ny");
// p.then((value1) => {
//   return value1.json();
// }).then((value2) => {
//   console.log(value2);
// });

// Method-2 //
// p.then((value1) => {
//   console.log(value1.status);
//   console.log(value1.ok);
//   return value1.json();
// }).then((value2) => {
//   console.log(value2);
// });

// Method-3 //
// p.then((response) => {
//   console.log(response.status);
//   console.log(response.ok);
//   console.log(response.headers);
//   console.log(response.text());
//   return response.json();
// }).then((value2) => {
//   console.log(value2);
// });

// Post Request //
// let options = {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
// };
// fetch("https://jsonplaceholder.typicode.com/posts", options)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// Cookies in JS //
// Methods //
// alert(document.cookie)
// console.log(document.cookie = "name= piyush888")

// console.log(document.cookie)
// document.cookie = "name=harry1122334400"
// document.cookie = "name2=harry11223344002"
// document.cookie = "name=harryss"
// console.log(document.cookie)
// console.log(document.cookie)
// document.cookie = "name=harry1122334400"
// document.cookie = "name2=harry11223344002"
// document.cookie = "name=harryss"
// let key = prompt("enter your key")
// let value = prompt("enter your value")
// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// console.log(document.cookie)

// Local storage //
// Method-1 add//
// let key = prompt("Enter your colour");
// let value = prompt("Enter your car ");
// localStorage.setItem(key, value);
// console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

// Method-2 remove//
// let key = prompt("Enter key you want to set");
// let value = prompt("Enter value you want to set");
// localStorage.setItem(key, value);
// console.log(`The value at ${key} is ${localStorage.getItem(key)}`);
// if (key == "reds" || key == "blues") {
//   localStorage.removeItem(key);
// }
// if (key == 0) {
//   localStorage.clear();
// }

// Session Storage //
// Methods //
// sessionStorage.setItem("name", "harry")
// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem()
// window.onstorage = (e)=>{
//     alert("change")
//     console.log(e)
// }
// localStorage.setItem("name", "harry")
// localStorage.setItem("name", "harry2")

// OOPS Object Oriented Programming Systems in JS //
// Prototype //
// Method prototype //
// let a = {
//   name2: "rahul",
//   language: "JavaScript",
// };
// console.log(a);
// let p = {
//   run: () => {
//     alert("run");
//   },
// };
// p.__proto__ = {
//   name: "Jackey",
// };
// a.__proto__ = p;
// a.run();
// console.log(a.name);

// Classes and Objects //
// Method-1 //
// class RailwayForm {
//   submit() {
//     alert("form is an  submitted");
//   }
//   cancel() {
//     alert("This form is by cancelled");
//   }
// }
// let harry = new RailwayForm();
// let carry = new RailwayForm();
// harry.submit();
// carry.submit();
// carry.cancel();

// Method-2 //
// class RailwayForm {
//   submit() {
//     alert(
//       this.name + ": Your form is submitted for train number:" + this.trinno
//     );
//   }
//   cancel() {
//     alert(
//       this.name + ": This form is cancelled for train number:" + this.trinno
//     );
//   }
//   fill(givenname, trinno) {
//     this.name = givenname;
//     this.trinno = trinno;
//   }
// }
// let piyushform = new RailwayForm();
// piyushform.fill("piyush", 12345);
// let carryform1 = new RailwayForm();
// let carryform2 = new RailwayForm();
// carryform1.fill("Carry", 22222);
// carryform2.fill("Carry", 2222233);
// piyushform.submit();
// carryform1.submit();
// carryform2.submit();
// carryform1.cancel();

// Constructors in JS //
// Method-1 //
// class RailwayForm {
//   constructor() {
//     console.log("CONSTRUCTOR CALLED...me");
//   }
//   submit() {
//     alert(
//       this.name + ": Your form is submitted for train number1:" + this.trinno
//     );
//   }
//   cancel() {
//     alert(
//       this.name + ": This form is cancelled for train number2:" + this.trinno
//     );
//   }
//   fill(givenname, trinno) {
//     this.name = givenname;
//     this.trinno = trinno;
//   }
// }
// let harryform = new RailwayForm();
// let carryform1 = new RailwayForm();
// let carryform2 = new RailwayForm();
// harryform.submit();
// carryform1.submit();
// carryform2.submit();
// carryform1.cancel();

// Method-2 //
// class RailwayForm {
//   constructor(givenname, trainno, address) {
//     console.log("CONSTRUCTOR CALLED..." + givenname + " " + trainno);
//     this.name = givenname;
//     this.trainno = trainno;
//     this.address = address;
//   }
//   preview() {
//     alert(
//       this.name +
//         ": Your form is for train number: " +
//         this.trainno +
//         " and your address is " +
//         this.trainno
//     );
//   }
//   submit() {
//     alert(
//       this.name + ": Your form is submitted for train number: " + this.trainno
//     );
//   }
//   cancel() {
//     alert(
//       this.name + ": This form is cancelled for train number: " + this.trainno
//     );
//     this.trainno = 0;
//   }
// }
// let harryForm = new RailwayForm(
//   "Harry",
//   13488,
//   "420, hshhsh, sjsj, jsjs-77787"
// );
// harryForm.preview();
// harryForm.submit();
// harryForm.cancel();
// harryForm.preview();

// Inheritance extends Keywords //
// Method-1 //
// class Animal {
//   constructor(name, colour) {
//     this.name = name-1;
//     this.colour = colour-1;
//   }
//   run() {
//     console.log(this.name + " is running!");
//   }
//   shout() {
//     console.log(this.name + " is shouting!");
//   }
// }
// class Monkey {
//   constructor(name, colour) {
//     this.name = name;
//     this.colour = colour;
//   }
//   run() {
//     console.log(this.name + " is running!");
//   }
//   shout() {
//     console.log(this.name + " is shouting!");
//   }
//   eatBanana() {
//     console.log(this.name + " is eating banana");
//   }
// }
// let ani = new Animal("Bruno", "white");
// let m = new Monkey("Chimpu", "orange");
// ani.shout();
// m.eatBanana();

// Method-2 //
// class Animal {
//   constructor(name, colour) {
//     this.name = name;
//     this.colour = colour;
//   }
//   run() {
//     console.log(this.name + " is running!");
//     console.log(this.colour + " is dog!");
//   }
//   shout() {
//     console.log(this.name + " is Shouting!");
//     console.log(this.colour + " is cat!");
//   }
// }
// class Monkey extends Animal {
//   eatBanana() {
//     console.log(this.name + " is eating banana");
//     console.log(this.colour + " is eating apple");
//   }
//   hide() {
//     console.log(`${this.name} is hiding`);
//   }
// }
// let ani = new Animal("Bruno", "white");
// let m = new Monkey("Chimpu", "orange");
// ani.run();
// ani.shout();
// m.eatBanana();
// m.hide();

// Method Overriding //
// Method-1 //
// class Employee {
//   login() {
//     console.log(`Employee has logged in`);
//   }
//   logout() {
//     console.log(`Employee has logged out`);
//   }
//   requestLeaves(leaves) {
//     console.log(`Employee has requested ${leaves} leaves`);
//   }
// }
// class Programmer extends Employee {
//   requestCoffe(x) {
//     console.log(`Employee has requested ${x} coffees`);
//   }
// }
// let e = new Employee();
// e.login();
// e.requestLeaves(3);

// Method-2 //
// class Employee {
//   login() {
//     console.log(`Employee has logged in`);
//   }
//   logout() {
//     console.log(`Employee has logged out`);
//   }
//   requestLeaves(leaves) {
//     console.log(`Employee has requested ${leaves} leaves - Auto approved`);
//   }
// }
// class Programmer extends Employee {
//   requestCoffe(x) {
//     console.log(`Employee has requested ${x} coffees`);
//   }
//   requestLeaves(leaves) {
//     super.requestLeaves(4);
//     console.log("One extra leaves");
//     console.log(`Employee has requested ${leaves + 1} leaves (one extra)`)
//   }
// }
// let e = new Programmer();
// e.login();
// e.requestLeaves(3);

// Overriding Constructors //
// class Employee {
//   constructor(name) {
//     console.log(`${name} - constructor is here`);
//     this.name = name;
//   }
//   login() {
//     console.log(`Employee has logged in`);
//   }
//   logout() {
//     console.log(`Employee has logged out`);
//   }
//   requestLeaves(leaves) {
//     console.log(`Employee has requested ${leaves} leaves - Auto approved`);
//   }
// }
// class Programmer extends Employee {
//   constructor(name) {
//     super(name);
//     console.log(`This is a newly construtor`);
//   }
//   requestCoffe(x) {
//     console.log(`Emp has requested ${x} coffees`);
//   }
//   requestLeaves(leaves) {
//     super.requestLeaves(4);
//     console.log("One extra leaves");
//   }
// }
// let e = new Programmer("Harry");
// e.login();
// e.requestLeaves(3);

// Static Methods //
// class Animal {
//   constructor(name) {
//     this.name = Animal.capitalize(name);
//   }
//   walk() {
//     alert("Animal " + this.name + " is walking");
//   }
//   static capitalize(name) {
//     return name.charAt(0).toUpperCase() + name.substr(1, name.length);
//   }
// }
// j = new Animal("jack");
// j.walk();

// getters and setters and instance of Operator //
// Method-1 //
// class Animal {
//   constructor(name) {
//     this._name = name;
//   }
//   fly() {
//     alert("Mai ud rha hu");
//   }
//   get name() {
//     return this._name;
//   }
//   set name(newName) {
//     this._name = newName;
//   }
// }
// let a = new Animal("Bird")
// a.fly()
// console.log(a.name)
// a.name = "jack"
// console.log(a.name)

// Method-2 //
// instance of Opertor //
// class Animal {
//   constructor(name) {
//     this._name = name;
//   }
//   fly() {
//     alert("Mai ud rha hu");
//   }
//   get name() {
//     return this._name;
//   }
//   set name(newName) {
//     this._name = newName;
//   }
// }
// class Rabbit extends Animal {
//   eatCarrot() {
//     console.log("Eating carrot");
//   }
// }
// let a = new Rabbit("Bird2");
// a.fly();
// console.log(a.name);
// a.name = "jack";
// console.log(a.name);
// let c = 55;
// console.log(a instanceof Animal);
// console.log(a instanceof Rabbit);
// console.log(c instanceof Animal);

// Advanced JavaScript //
// IIFE in JS //
// let a = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(456);
//     }, 2000);
//   });
// };
// let f = async () => {
//     let b = await a();
//     console.log(b);
//     let c = await a();
//     console.log(c);
//     let d = await a();
//     console.log(d);
//     console.log("done");
//   };
// f();
// console.log(d);

// Destructuring //
// Method-1 //
// let arr = [3, 4, 5, 6, 7, 8, 99]
// let {a, b} = { a: 1, b: 5 }
// console.log(a, b)

// Method-2 //
// Spread Opertor //
//  let arr1 = [3, 5, 8]
//  let obj1 = { ...arr1 }
//  console.log(obj1)
//  function sum(v1, v2, v3) {
//     return v1 + v2 + v3
//  }
// console.log(sum(...arr1))
// let obj2 = {
//   name: "Piyush",
//   company: "ABC",
//   address: "XYZ",
// }
// console.log({ name: "Rahul", company: "ABC", ...obj2 })

// local & global Scopes //
// var is run //
// {
//   var a = 1;
// }
// console.log(a);

// let is error //
// {
//   let a = 2;
// }
// console.log(a);

// Not error //
// function ax() {
//   let a = 4;
//   console.log(a);
// }
// ax();
// console.log(a);

// Hoisting in JavaScript //
// console.log(a)
// great()
// function great() {
//     console.log("Good morning")
// }
// var a = 9;
// console.log(a)

// Closures in JavaScript //
// function init() {
//   var name = "Mazilla";
//   function displayName() {
//     console.log(name);
//   }
//   name = "Harry";
//   return displayName;
// }
// let c = init();
// c();
// function returnFunc() {
//   const x = () => {
//     let a = 1;
//     console.log(a);
//     const y = () => {
//       console.log(a);
//       const z = () => {
//         console.log(a);
//       };
//       z();
//     };
//     a = 999;
//     y();
//   };
//   return x;
// }
// let a = returnFunc();
// a();

// Arrow Functions Revisited //
// const sayHello = (n1ame, greeting) => console.log(greeting + " " + name1);
// const x = {
//   name1: "Harry",
//   role: "Js Developer",
//   exp: 10,
//   show: function () {
//     setTimeout(function () {
//       console.log(`The name is ${this.name1}\nThe role is ${this.role}`);
//     }, 2000);
//   },
// };
// x.show();
