// var person = new Object();
// person.name = "zhangsan";
// console.log(person.name);

// var name = "lisi";
// name.age = 19;
// console.log(name.age)

// function addTen(num) {
//   num += 10;
//   return num;
// }
// var count = 20;
// var result = addTen(count);
// console.log(count);
// console.log(result);

// function setName(obj) {
//   obj.name = "zhangsan"
// }
// var person = new Object();
// setName(person);
// console.log(person.name);

// function setName(obj) {
//   obj.name = "zhangsan";
//   obj = new Object;
//   obj.name = "greg"
// }
// var person = new Object();
// setName(person);
// console.log(person.name)

// var s = "zhangsan";
// var b = true;
// var i = 22;
// var u;
// var n = null;
// var o = new Object();
// console.log(typeof s);
// console.log(typeof b);
// console.log(typeof i);
// console.log(typeof u);
// console.log(typeof n);
// console.log(typeof o);


// var color = "blue";
// function changcolors() {
//   if (color === "blue") {
//     color = "red"
//   } else {
//     color = "blue"
//   }
// }
// changeColor();
// console("Color is now" + " " +color)


// var color = "blue";
// function changcolors() {
//   var anotherColor = "red";
//   function swapColors() {
//     var tempColors = anotherColor;
//     anotherColor = color;
//     color = tempColors;
//   }
//   swapColors();
// }
// changcolors();
// var b = {e: 1}
// function deferlink() {
//   with(b) {
//     console.log(e)
//   }
// }
// if(true) {
//   var color = "blue";
// };
// console.log(color);

// for (var i = 0; i < 10; i++) {
//   i
// }
// console.log(i);

// function add(num1, num2) {
//   var sum = num1 + num2 ;
//   return sum
// }
// var result = add(10, 20);
// console.log(sum) sum 是局部变量 无法再全局访问到


// function add(num1, num2) {
//   sum = num1 + num2 ;
//   return sum
// }
// var result = add(10, 20);
// console.log(sum);

// var color = "blue";
// function getColors() {
//   return color
// }
// console.log(getColors())

function creatPerson(name) {
  var localPerson = new Object();
  localPerson.name = name;
  return localPerson;
}
var globalPerson = creatPerson("zhangsan");
globalPerson = null;