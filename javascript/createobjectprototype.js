/*
 *  The “proto” rabbit acts as a container for the properties shared by all rabbits. An individual rabbit object,
 *  like the black rabbit, contains properties that apply only to itself—in this case its type—and derives shared p
 *  roperties from its prototype.
 */
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};
let blackRabbit = Object.create(protoRabbit);
blackRabbit.type = "black";
blackRabbit.speak("I am fear and darkness");
let whiteRabbit = Object.create(protoRabbit);
whiteRabbit.type = "white"
whiteRabbit.speak("I am white rabbit and happy");

for (let color of ["black", "white", "brown"]) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = color;
  rabbit.speak("Aha, it's me!");
}

let killerProto = {
  speak() {
    console.log(`The ${this.type} rabbit says '${this.line}'`);
  }
};
function makeRabbit(type, line) {
  let rabbit = Object.create(killerProto);
  rabbit.type = type;
  rabbit.line = line;
  return rabbit;
}

let killerRabbit = makeRabbit("killer", "SKREEEE!");
killerRabbit.speak();