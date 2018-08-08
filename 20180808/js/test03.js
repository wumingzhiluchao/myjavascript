//数据类型 Undefind, Null, Boolean, Number, String, Object;
// var message = "zhangsan" ;
// console.log(typeof message)
// var message1 =  function () {};
// console.log(typeof message1);
// var message2 = true;
// console.log(typeof message2);
// var message3 = undefined;
// console.log(typeof message3);
// var message4 = {};
// console.log(typeof message4);
// var message5 = null;
// console.log(typeof message5);
// console.log(typeof message4 === typeof message5)
// var message6 = 11;
// console.log(typeof message6);


// var name;
// console.log(name == undefined);
// var names = undefined;
// console.log(names == undefined);

// var message
// var age 
// console.log(typeof message)
// console.log(typeof age)

// console.log(null == undefined);

// var car = null;
// console.log(typeof car);


// var found = 1;
// var foundBoolean = Boolean(found);
// console.log(foundBoolean);


// var value = "hello world";
// if (value) {
//   console.log(1)
// };
// var sum = 070;
// var hexNum1 = 0xa;
// console.log(hexNum1);
// console.log(sum)

// var num1 = parseInt("1234adas");
// var num2 = parseInt("");
// var num3 = parseInt("0xA");
// var num4 = parseInt(22.5);
// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4)

// var num = parseInt("1010", 2);
// console.log(num)

// var firstname = "zhang";
// var lastName = "san"

// var age = 11;
// var ageAsString = age.toString();
// var found = true;
// var foundAsString = found.toString();
// console.log(typeof ageAsString);
// console.log(typeof foundAsString);

// var value = 10;
// var value1 = true;
// var value2 = null;
// var value3;

// console.log(String(value));
// console.log(String(value1));
// console.log(String(value2));
// console.log(String(value3));

// var age = 29;
// // var age1 = --age + 2;
// var age1 = age-- + 2
// console.log(age);
// console.log(age1);

// var num1 = 2;
// var num2 = 20;
// // var num3 = --num1 + num2;
// // var num3 = num1++ + num2;
// var num3 = ++num1 + num2;
// var num4 = num1 + num2;
// console.log(num3);
// console.log(num4);

// var s1 = "2";
// var s2 = "z";
// var s3 = "false";
// var s4 = 1.1;
// var o = {
//   valueof: function() {
//     return -1;
//   }
// }
// s1++;
// console.log(s1);

// var num1 = 25;
// var num2 = ~num1;
// console.log(num2);

// var num3 = 25;
// var num4 = -num3 - 1;
// console.log(num4);

// console.log(!false)
// console.log(!NaN);
// console.log(!!"")
// console.log(!"")

// var sum = 5 - true;
// var sum1 = NaN - 1;
// console.log(sum)
// console.log(sum1)

// var result = 5 > 3;
// console.log(result);
// var result = "23" < "3";
// console.log(result)

// if(i > 25) {
//   console.log("greater than 25")
// } else {
//   console.log("less than or equal to 25")
// }
// var i = 15;

// if (i > 25) {
//   console.log("greater than 25.")
// } else if(i < 0) {
//   console.log("less than 0")
// } else {
//   console.log("between 0 and 25, inclusive.")
// }
// var i = 0;
// do{
//   i += 2
// } while(i < 10)

// console.log(i);

// var i = 0;
// while(i < 10) {
//   i += 2
// }
// console.log(i)
// var count = 10;
// for (var i = 0; i < count; i++) {
//   console.log(i)
// }
// for (var i = 0; i < count; i++) {
//   i
// }
// console.log(i);

// for(var propName in window) {
//   console.log(propName)
// }

// start: for(var i = 0; i < count; i++) {
//   console.log(i)
// };

// var num = 0;
// for (var i = 1; i < 10; i++) {
//   if(i % 5 == 0) {
//     break;
//   }
//   num++;
// }
// console.log(num)
// var num1 = 0;
// for (var i = 0; i < 10; i++) {
//   if (i % 5 == 0) {
//     continue;
//   }
//   num1++
// }
// console.log(num1)
// var num = 0;
// outermost:
// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j < 10; j++) {
//     if (i == 5 && j == 5 ) {
//       // break outermost
//       continue outermost
//     }
//     num++
//   } 
// }
// console.log(num)

// var a = {b:"1"};
// with(a) {
//   console.log(b)
// }
// var i = 25;
// switch (i) {
//   case 25:
//     console.log("25")
//     break;
//   case 35:
//     console.log("35")
//     break;
//   case 15:
//     console.log("15")
//     break;
//   case 10:
//     console.log("10")
//     break;        
//   default:
//   console.log("other")
//     break;
// }
// var i = 35;
// switch (i) {
//   case 25:

//   case 35:
//     console.log("35 or 25")
//     break;
//   case 15:
//     console.log("15")
//     break;
//   case 10:
//     console.log("10")
//     break;        
//   default:
//   console.log("other")
//     break;
// } 
// var num = 25;
// switch (true) {
//   case num < 0:
//     console.log("5")
//     break;
//   case num >= 0 && num <= 25:
//     console.log("25")
//     break;
//   case num < 25:
//     console.log("15")
//     break;
//   case num = 10:
//     console.log("10")
//     break;        
//   default:
//   console.log("other")
//     break;
// }

// function sayHi(name, message) {
//   alert("Hello" + name + "," + message)
// }
// var a = sayHi("zhangsan", "how are you today?")
// console.log(a);

// function sum(num1, num2) {
//   if (num1 < num2) {
//     return num2 - num1;
//   } else{
//     return num1 - num2;
//   }
// }

// function howManyArgs() {
//   console.log(arguments.length)
// }
// howManyArgs("string", 45);
// howManyArgs();
// howManyArgs(12);

// function doadd() {
//   if (arguments.length == 1) {
//     console.log(arguments[0] + 10)
//   } else if(arguments.length == 2) {
//     console.log(arguments[0] + arguments[1])
//   }
// }
// doadd(10);
// doadd(30, 20)

// function addSomeNumber(num) {
//   return num + 100
// }
// function addSomeNumber(num) {
//   return num + 200
// }
// var result = addSomeNumber(100);
// console.log(result)


var person = new Object();
person.name = "zhangsan";
console.log(person.name);

var name = "lisi";
name.age = 19;
console.log(name.age)