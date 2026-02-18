function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
hungryRabbit.speak("I could use a carrot right now.");

//  The white rabbit says 'Oh my ears and whiskers, how late it's getting!'
//  The hungry rabbit says 'I could use a carrot right now.'

speak.call(hungryRabbit, "Burp!"); // The hungry rabbit says 'Burp!'
speak.call(whiteRabbit, "Yowza!"); // The white rabbit says 'Yowza!'

let finder = {
  find(array) {
    return array.some(v => v == this.value);
  },
  value: 5
};
console.log(finder.find([4, 5]));
// → true