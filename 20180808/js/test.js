// var msg = undefined;
// console.log(msg=== undefined);
// var walk;
// console.log(typeof walk);
// var bus = null;
// console.log(typeof bus);
// console.log(msg == bus);
// var cat = "";
// console.log(typeof cat);
// var dog = {}
// console.log(dog === bus)
// var message = "hello word";
// var a = Boolean(message) ;
// var b = String(message);
// var c = Number(message);
// var e = Object(message);
// if (message) {
//   console.log("Value is true")
// }
// console.log(isNaN(true))
// console.log(e)
// console.log(c)
// console.log(a);
// console.log(b);
// console.log(isNaN(NaN))
// var age = 29;
// // var anotherage = ++age + 2
// var threeage = age-- +2
// console.log(age);
// console.log(threeage);
// var s1 = "2";
// var s2 = "z";
// var b = false;
// var c = 1.1;
// var o = {
//   valueOf: function () {
//     return -1;
//   }
// };
// var g = {naem:1}
// s1++
// console.log(s1);
// s2++
// console.log(s2);
// b++
// console.log(b)
// c++
// console.log(c);
// o++
// console.log(o)
// g++
// console.log(g)
// var value = "1234"
// value = value -- + 1;
// console.log(value);
// var num =  -18 ;
// var num1 = parseInt("-18", 2);
// console.log(num1)
// console.log(num.toString(2))
// var color = "blue";
//  function changecolor() {
//    if (color === "blue") {
//      color = "red"
//    } else {
//      color = "blue"
//    }
//  }
// changecolor()
// console.log("Color is now" + " " + color)
// var color = "blue";
// function changeColor() {
//   var anotherColor = "red";
//   function swap() {
//     var tempColor = anotherColor;
//     anotherColor = color;
//     color = tempColor;
      
//   }
//   swap()
//   console.log(anotherColor)
// }
// changeColor();
// console.log(color);

// function buildUrl () {
//   var qs = "?debug = true";
//   with(location) {
//     var url = href + qs;
//   }
//   return url
// }
// var a = buildUrl()
// console.log(a)
// if (true) {
//   var color = "blue"
// }
// console.log(color)
//为什么位于同一个作用域，因为他们都在同一个全局作用域
// for (var i = 0; i < 10; i++) {
//   i
// }
// alert(i)

// var color = "blue";
// function getColor() {
//   return color;
// }
// var s = getColor()
// console.log(s)


// function createPerson() {
//   var locaperson = new Object();
//   locaperson.name = name;
//   return locaperson
// }
// var globalperson = createPerson("zhangsan");
// globalperson = null;


// var person = new Object();
// person.name = "zhangsan";
// person.age = 29;


// var person = {
//   name: "zhangsan",
//   age: 29
// };

// var person = {
//   "name": "zhangsan",
//   "age": 29,
//   5: true
// }
// var obj = {toString: function() {
//   return "names"
// }}
// person[obj] = 1;
// console.log(person)
// // function displayInfo(args) {
// //   var output = "";
// //   if (typeof args.name == "string") {
// //     output += "Name: " + args.name + "/n";
// //   }
// //   if (typeof args.age == "number") {
// //     output += "Age: " + args.age + "/n";
// //   }
// //   alert(output)
// // }
// // var s = displayInfo({
// //   name:"zhangsan",
// //   age: 29
// // });
// // var a = displayInfo({
// //   name:"lisi"
// // })
// // console.log(s);
// // console.log(a)


// var b = { name: "zhangsan"};
// function deferLink() {
//   with(b){
//     console.log(name)
//   }
// }
// deferLink()

// var d = 2
// function deferLink1() {
//   with(window) {
//     console.log(d)
//     console.log(b)
//     console.log(deferLink())
//     console.log(onfocus)
//     console.log(focus)
//   }
// }
// deferLink1()


// var person = {
//   name : "zhangsan",
//   age:29
// }
// alert(person["name"])
// alert(person.name)
// var propertyName = "name"
// alert(person[propertyName])


// var colors = new Array(20)
// console.log(colors.length)
// var animet = new Array("red", "blue", "green")
// console.log(animet.length);


// var names = new Array("zhangsan", "lisi", "wangwu",)
// console.log(names.length)

// var food = Array("tomotos", "fish","vagetables","")
// var zoo = [,,,,,,,,,];
// console.log(zoo.length);

// var colors = ["red", "blue", "green"];
// console.log(colors[0]);
// var names = colors;
// console.log(names[0])
// var colors = ["red", "blue", "green"];
// console.log(typeof colors.toString());
// console.log( colors.valueOf());
// console.log(colors)

// var personal = {
//   toLocaleString: function () {
//     return "zhangsan"
//   },
//   toString: function() {
//     return "lisi"
//   }
// };
// var personal2 = {
//   toLocaleString: function() {
//     return "wangwu"
//   },
//   toString: function() {
//     return "tangliu"
//   }
// }
// var people = [personal, personal2];
// console.log(people);
// console.log(people.toString());
// console.log(people.toLocaleString());
// var colors = ["red", "blue", "green"];
// var s = colors.join(",")
// var a = colors.toString()
// console.log(s === a)
// console.log(colors.join(","))
// console.log(colors);
// console.log(colors.toString())
// var names = ["zhangsan", "lisi", null,"wangwu"]
// console.log(names.join("||"))
// var colors = new Array();
// var count = colors.push("red", "green")
// console.log(count)
// console.log(colors);
// count = colors.push("black");
// console.log(count)
// console.log(colors);
// var item = colors.pop()
// console.log(item)
// console.log(colors.length)
// var colors = ["red", "blue"];
// colors.push("brown")
// colors[3] = "black"
// colors[5] = "green"
// console.log(colors.length);
// var item = colors.pop();
// console.log(item)
// console.log(colors[4]);
// var item = colors.pop();
// console.log(item)
// console.log(colors.length);

// var value = [1,2,3,4,5];
// value.reverse();
// console.log(value);

// var values = [1,2,4,5,10,15];
// values.sort();
// // console.log(values);

// function compare(value1, value2) {
//   if (value1 > value2) {
//     return -1;
//   } else if (value1 < value2) {
//     return 1;
//   } else {
//     return 0
//   }
// };
// // var values1 = [0,1,5,10,15]
// // values1.sort(compare);
// // console.log(values1)

// var value3 = [-1,2,1,4,3,5,10,15];
// value3.sort(compare)
// console.log(value3)


function than(a, b) {
  return b < a
}

var sum = [0,3,1,4,6,8,3,10,15]
sum.sort(than)
console.log(sum)

// var color = ["red", "blue", "green"];
// var color1= color.concat("yellwo",["wihte","brwon"]);
// console.log(color1)
// var color2 = color1.slice(1);
// var color3 = color1.slice(1,4)
// console.log(color2);
// console.log(color3)
// console.log(color1)

// var colors = ["red", "green", "blue","yellow"];
// var remove = colors.splice(0,2);
// console.log(remove);
// console.log(colors);

// remove = colors.splice(1, 0, "black", "orange");
// console.log(colors);
// console.log(remove)