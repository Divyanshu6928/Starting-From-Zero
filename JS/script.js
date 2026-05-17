// # 🟢 Level 1 – Basic Function, Array & Object Code Tasks (Easy)

// 1. Write a function `sayHello()` that prints `"Hello JavaScript"`.

// function sayHello(){
//     console.log("Hello JS");
    
// }

// sayHello();

// 2. Create a function `add(a, b)` that returns their sum and log the result.

// function add(a, b){
//     console.log(a+b);
    
// }

// add(4,5);

// 3. Write a function with a default parameter `name = "Guest"` that prints `"Hi <name>"`.

// function greet(name = "guest"){
//     console.log(`Hi ${name}`);
    
// }

// greet();

// 4. Use rest parameters to make a function that adds unlimited numbers.

// function addn(...res){
//     let c =0;
//     res.forEach(element => {
//         c+=element;
//     });    
//     console.log(`Count : ${c}`);
    
// }

// addn(1,2,5353,5,353544,4);

// 5. Create an IIFE that prints `"I run instantly!"`.

// (function(){
//     console.log("I run instantly");
    
// })();

// 6. Make a nested function where the inner one prints a variable from the outer one.

// function nestedone(){
//     let a = 12;
//     function nestedTwo(){
//         console.log(`Value of a in nestedone : ${a}`);
//     }
//     nestedTwo();
// }

// nestedone();

// 7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.

// let arr = ['apple','mango','guavava','kiwi','watermelon'];
// arr.push('pomegranate');
// console.log(arr);
// arr.shift()
// console.log(arr);


// 8. Use a `for` loop to print all elements of an array.

// 9. Create an object `person` with keys `name`, `age`, and `city`, and print each key’s value.

// let obj={
//     name : "dg",
//     age : 23 ,
//     city : "gkp"
// };

// for(let key in obj){
//     console.log(obj[key]);
    
// }
// 10. Use `setTimeout()` to log `"Time’s up!"` after 3 seconds.

// setTimeout(function(){
//     console.log("Time's Up");
    
// },3000);


// # 🟡 Level 2 – Functional Thinking & Logic Tasks (Intermediate)

// 1. Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.

// function runTwice(fn){
//     fn();
//     fn();    
// }

// runTwice(function(){
//     console.log("Hlo");
    
// })

// 2. Create one pure function that always returns the same output for a given input, and one impure function using a global variable.


// 3. Write a function that uses object destructuring inside parameters to extract and print `name` and `age`.

// function objDestruct({name, age}){
//     console.log(name, age );
    
// }

// objDestruct({name:"Dg",age:23});

// 4. Demonstrate the difference between normal function and arrow function when used as object methods (the `this` issue).

// 5. Given an array of numbers, use `map()` to create a new array where each number is squared.

// let arr = [1,2,3,4,5];
// let narr = arr.map(function(val){
//     return val*val;
// });

// console.log(narr);

// 6. Use `filter()` to get only even numbers from an array.

// let arr = [1,2,3,4,5,6];
// let narr = arr.filter(function(val){
//     return val%2==0;
// })

// console.log(narr);


// 7. Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`.

// let salary = [1000,2000,3000];
// let ans = salary.reduce(function(acc,val){
//     return acc + val;
// },0)

// console.log(ans);


// 8. Create an array of names and use `some()` and `every()` to test a condition (e.g., all names longer than 3 chars).
// 9. Create an object `user` and test the behavior of `Object.freeze()` and `Object.seal()` by adding/changing keys.
// 10. Create a nested object (`user → address → city`) and access the city name inside it.

// let user = {
//     name : "divyanshu",
//     address : {
//         firstLine : "Gram - Bhishwa",
//         secondLine : "Post - Skp",
//         city : "Gkp"
//     }
// };

// console.log(user?.address?.city);



