// class Student{
//     constructor(name, roll_no){
//         name = name;
//         roll_no = roll_no;
//     }

//     introduce(){
//         console.log(this.name);
//         console.log(this.roll_no);
        
//     }
// }

// let st1 = new Student("dg",37);
// st1.introduce();

// Create a User constructor function (do not use class syntax).
// 	11.	Add a login method in two ways:
// First, inside the constructor
// Then, move the method to the prototype

// const User = class{
//     constructor(name){
//         this.name = name;
//     }

//     greet(){
//         console.log(`Hello ${this.name}`);
        
//     }
// }

// User.prototype.wish = function(){
//     console.log(`Happy birthday ${this.name}`);
    
// }

// new User("dg").wish()

// Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.

// let User1 = {
//     name : 'dg',
//     age :23,
//     login : function(){
//         console.log(`${this.name} logged in!!`);
        
//     }
// };

// let user2 ={
//     name: 'rohit',
//     age: 20,
//     login : function(){
//         console.log(`${this.name} logged in..`);
        
//     }
// }

// console.log(User1.login === user2.login);


// Create a function that prints this.name.
// Create an object that contains a name property.

// Use call to run the function using the object
// Use apply to run the function using the object
// Use bind to create a new function and then call it

// let obj = {
//     name : "dg",
// }

// function prName(a,b,c){
//     console.log(this.name,a,b,c);
    
// }

// prName.call(obj);
// prName.apply(obj, [1,2,3,4])

// SECTION 3: Constructor and Initialization
// 	7.	Create a class named BankAccount.
// Its constructor should accept accountHolderName and balance.
// 	8.	Inside the constructor, store both values using this.
// 	9.	Add a method deposit(amount) that increases the balance.
// 	10.	Create two bank accounts and deposit money into only one.
// Observe and explain why the second account is not affected.


// class BankAccount{
//     constructor(accountHolder,balance){
//         this.accountHolder = accountHolder;
//         this.balance = balance;
//     }

//     deposit(amount){
//         this.balance+=amount;
//         console.log(`Updated balance : ${this.balance}`);
//     }


// }

// let SBI = new BankAccount("dg",1203);
// let PNB = new BankAccount("rohit",123);

// SBI.deposit(1000);
// PNB.deposit(345);

// SECTION 4: Understanding this (Very Important)
// 	11.	Create an object named profile with a property username and a method printName that logs this.username.
// 	12.	Call the method normally and observe the output.
// 	13.	Store the method in a separate variable and call it.
// Observe what happens to this and explain why.
// 	14.	Modify the code so that this works correctly again.

// let profile = {
//     username : "dg",
//     printName : function(){
//         console.log(this.username);
        
//     }
// }

// let m1 = profile.printName;   // undefined
// m1();

// this is determined by how a function is called, not where it is defined.

// Correct

// m1.call(profile);

//  call Method Practice
// 	19.	Create a function showBrand that prints this.brand.
// 	20.	Create two different objects with brand values.
// 	21.	Use call to execute showBrand for both objects.
// 	22.	Explain what problem call is solving here.


// function showBrand(){
//     console.log(this.brand);

    
// }

// let obj1 = {
//     brand : 'PUMA',
//     value : 23000
// }
// let obj2 = {
//     brand : 'NIKE',
//     value : 7000
// }


// showBrand.call(obj2);