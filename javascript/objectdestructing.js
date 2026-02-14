let {name} = {name: "Faraji", age: 23};
console.log(name);
// → Faraji

let [a, b] = [1, 2];
console.log(a); // 1

let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest); // [2, 3, 4]

let {name: personName} = {name: "Faraji", age: 23};
console.log(personName); // Faraji


function handleRequest(req) {
  const {body, params, query} = req;
  console.log("REQ body: ", body); // "Hello"
  console.log("REQ param: ", params); // {id: 1}
  console.log("REQ query: ", query); // {search: "test"}
}

handleRequest({
  body: "Hello",
  params: {id: 1},
  query: {search: "test"}
});
