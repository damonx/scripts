// const myName = 'Damon';
// let age = 49;
// const hasHobbies = true;

// const summarizeUser = (userName, userAge, userHasHobbies) => {
//     return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobbies;
// }

// console.log(summarizeUser(myName, age, hasHobbies));

const person = {
    name: 'Damon',
    age: 49,
    greet: () => {
        console.log('Hi, I am ' + person.name + ' and I am ' + person.age + ' years old.');
    }
}

const printName = person => {
    console.log(person.name);
}
printName(person);

const desPrintName = ({ name, age }) => {
    console.log(name, age);
}
desPrintName(person);

// const {name, age, greet} = person;
// console.log(name, age, greet());

// person.greet();

// // Rest operator
// const copiedPerson = { ...person };
// console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];
const [h1, h2] = hobbies;
console.log(h1, h2);
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// for (let hobby of hobbies) {
//     console.log(hobby);
// }

// hobbies.push('Programming');
// console.log(hobbies);
// const copiedArray = hobbies.slice();
// console.log(copiedArray);

// const copiedArray2 = [hobbies];
// console.log(copiedArray2);

// // Spread operator
// const copiedArray3 = [...hobbies];
// console.log(copiedArray3);


// const toArray = (arg1, arg2, arg3) => {
//     return [arg1, arg2, arg3];
// }

// console.log(toArray(1, 2, 3));

// // Rest operator
// const toArray2 = (...args) => {
//     return args;
// }
// console.log(toArray2(1, 2, 3, 4, 5));