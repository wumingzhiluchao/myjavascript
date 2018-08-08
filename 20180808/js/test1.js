// var i = 0;
// do{
//   i += 2;
// } while(i < 10);
// console.log(i)

// var a = 0;
// while(a < 10) {
//    a += 2
// }
// console.log(a)
// for(var a in window) {
//   console.log(a)
// }

// start: for(var i = 0; i < 10; i ++) {
//  console.log(i)
// }

// var num = 0 ;
// for(var i = 1; i < 10; i++) {
//   if (i%5 == 0) {
 //     continue
//   }
//   num ++;
// }
// console.log(num);

// var num = 0
// outmost:
// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j < 10; j++) {
//     if (i == 5 && j == 5 ) {
//       break outmost
//     }
//     num++
//   }
// }
// console.log(num);

// var i = 15;
// switch(i) {
//   case 25 :
//   console.log(1)
//   break
//   case 10 :
//   console.log(2)
//   break
//   case 15 :
//   console.log(3)
//   break
//   default:
//   console.log(4)
// };
// var a = 30
// switch (a) {
//   case 20:
//   // 合并情况
//   case 30:
//   console.log("20 or 30") 
//     break;
//   case 40:
//   console.log(40)
//   break
//   default:
//   console.log(50)
//     break;
// }

// var num = 15
// switch (false) {
//   case num < 0:
//     console.log("less than 0.")
//     // break;
//   case num >= 100:
//     console.log("more than 0")
//     break;  
//   case num > 10:
//     console.log("more than 10")
//     break;
//   default:
//   console.log("more than 20")
//     break;
// }

// function diff(num1, num2) {
//   if(num1 < num2) {
//     return num2 - num1
//   } else {
//     return num1 - num2
//   }
// }
// // var s = diff(3, 5)
// // console.log(s)
// console.log(diff(3, 5))
// function sayhi() {
//   console.log(arguments.length)
// }
// sayhi(1,2,3);
// function goods() {
//   console.log("hello" +' '+ arguments[0] + ' ' + arguments[1])
// }
// goods("apple" ,"banana");

// var a = 30
// function doadd() {
//   if(arguments.length == 1) {
//     console.log(arguments[0] + 20)
//   } else if (arguments.length == 2) {
//     console.log(arguments[0] + arguments[1] + 20)
//   }
// }
// doadd(a);
// doadd(a, 20)



// var obj = new Object();
// var obj1 = obj;
// obj.name = "name";
// console.log(obj1.name);

// function addTen(num) {
//   num += 10;
//   return num;
// }
// var count = 20 ;
// var result = addTen(count);
// console.log(count);
// console.log(result);


// function setName(obj) {
//   obj.name = "zhangsan"
// }
// var person = new Object();
// setName(person);
// console.log(person);

// function setAge(obj1) {
//   obj1.name = "lisi";
//   obj1 = new Object();
  
//   obj1.name = "xiaoming";
//   console.log(obj1)
// }
// var person1 = new Object();
// setAge(person1);
// console.log(person1);
// var a = function() {}
// console.log(typeof a)
// var ae = RegExp
// console.log(typeof ae);


// var person = {};
// var array = [] 
// console.log(person instanceof Object);
// console.log(array instanceof Array)