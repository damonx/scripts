const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 150)
    });
    return promise;
};
setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
        .then(text => {
            console.log(text);
            return fetchData();})
        .then(text2 => {
            console.log(text2);
        });
}, 2000);
console.log('Hello!');
console.log('Hi!');

// Promise example

const name = "Max";
const age = 29;
console.log(`My name is ${name} and I am ${age} years old.`);