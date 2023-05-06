/* Create 2 objects: animal and cat, add move property to animal object, 
cat object must inherit move property from object animal
*/

class Animal {
  constructor(name) {
    this.name = name;
  }
  move() {
    console.log("moved");
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  meow() {
    console.log("meow");
  }
}

const Dewey = new Cat("Dewey");
Dewey.move();
