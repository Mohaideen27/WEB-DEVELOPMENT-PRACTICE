// let obj = {
//   a: 1,
//   b: "Harry",
// };

// console.log(obj);

// let animal = {
//   eats: true,
// };
// let rabbit = {
//   jumps: true,
// };
// rabbit.__proto__ = animal;

class Animal {
  constructor(name) {
    this.name = name;
    console.log("Object is created...");
  }

  eats() {
    console.log("Yaa I eat");
  }

  jumps() {
    console.log("Yaa I can jump");
  }
}

class Lion extends Animal {
  constructor(name) {
    super()
    this.name = name;
    console.log("Object is created and he is a lion");
  }

  eats(){
    super.eats()
    console.log("I can roar")
  }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera");
console.log(l);