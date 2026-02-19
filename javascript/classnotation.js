class Rabbit {
    constructor(type, line) {
        this.type = type;
        this.line = line;
    }
    speak() {
        console.log(`The ${this.type} rabbit says '${this.line}'`);
    }
}

let killerRabbit = new Rabbit("killer", "SKREEEE!");
killerRabbit.speak();
console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
// → true
console.log(Object.getPrototypeOf(killerRabbit) == Rabbit.prototype);
// → true // → true

console.log("-----------------------------");
Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// → small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// → long, sharp, and bloody
console.log((new Rabbit("basic", "Hello")).teeth);
// → small
console.log(Rabbit.prototype.teeth);
// → small
console.log("-----------------------------");


/**
 * Old school way, before 2015.
 */
function ArchaicRabbit(type) {
  this.type = type;
}
ArchaicRabbit.prototype.speak = function(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};
let oldSchoolRabbit = new ArchaicRabbit("old school");
oldSchoolRabbit.speak("Meow!");

/**
 * Not a good practice..
 */
let object = new class { getWord() { return "hello"; } };
console.log(object.getWord());
// → hello

/**
 * private methods.
 */
class SecretiveObject {
  #getSecret() {
    return "I ate all the plums";
  }
  interrogate() {
    let shallISayIt = this.#getSecret();
    return "never";
  }
}
let secObj = new SecretiveObject();
console.log(secObj.interrogate());

/**
 * private fields.
 */
class RandomSource {
  #max;
  constructor(max) {
    this.#max = max;
  }
  getNumber() {
    return Math.floor(Math.random() * this.#max);
  }
}

console.log(new RandomSource(10).getNumber())

// Overriding toString method.
Rabbit.prototype.toString = function() {
  return `a ${this.type} rabbit`;
};

console.log("Use String() function to call toString(): ", String(killerRabbit));
console.log("Call toString() method directly: ", killerRabbit.toString());
// → a killer rabbit
