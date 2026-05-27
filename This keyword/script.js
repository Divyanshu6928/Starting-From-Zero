// const obj = {
//     name : "dg",
//     age : 23,
//     getName : () => {
//         function inner(){
//             console.log(this);
//             let inner1 = () => {
//                 console.log(this);
//             }
//             inner1();
//         }
//         inner();
//     }
// }

// obj.getName();


// class Animal{
//     constructor(name = 'Dog', age = 12){
//         this.name = name;
//         this.age = age;
//     }
    
//     talk(){
//         console.log(`${this.name} is talking...`);
//     }
    
//     dance(){
//         console.log(`${this.name} is dancing..`);
        
//     }
// }

// let animal1 = new Animal();
// animal1.dance();

class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(value) {
    this._name = value;
  }
}

const u = new User("anubhav");
console.log(u.name);
u.name = "Jha";
console.log(u.name);