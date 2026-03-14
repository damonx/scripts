const myName = 'Damon';
let age = 49;
const hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobbies) => {
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobbies;
}

console.log(summarizeUser(myName, age, hasHobbies));

const person = {
    name: 'Damon',
    age: 49,
    greet: () => {
        console.log('Hi, I am ' + person.name + ' and I am ' + person.age + ' years old.');
    }
}

person.greet();

const hobbies = ['Sports', 'Cooking'];
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
for (let hobby of hobbies) {
    console.log(hobby);
}