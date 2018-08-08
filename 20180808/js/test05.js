// var person = {
//   name: "zhangsan",
//   age: 29
// }


// function displayInfo() {
//   var output = "";
//   if (typeof args.name == "string") {
//     output += "Name: " + age.name + "\n";
//   }
//   if (typeof args.name == "nunber") {
//     output += "Age: " + args.age + "\n";
//   }
//   console.log(output)
// }
// displayInfo({
//   name:"zhangsan",
//   age:29
// })
// displayInfo({
//   name:"greg"
// })

// var properName = "name";
// console.log(person[properName]);

// var person1 = {
//   toLocaleString : function() {
//     return "zhangsan"
//   },
//   toString : function() {
//     return "lisi"
//   }
// }
// var person2 = {
//   toLocaleString : function() {
//     return "zhangsan1"
//   },
//   toString : function() {
//     return "lisi1"
//   }
// }
// var people = [person1, person2];
// console.log(people);
// console.log(people.toString);
// console.log(people.toLocaleStrings)

// var colors = new Array();
// var count = colors.push("red", "green", "blue");
// count = colors.push("black");
// console.log(count);
// var item = colors.pop();
// console.log(item);
// console.log(colors.length)

var colors = new Array();
var count = colors.push("red", "green");
console.log(count);
count = colors.push("black");
var item = colors.shift();
console.log(item);
console.log(colors.length)
