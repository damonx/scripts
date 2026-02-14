let jsonStr = JSON.stringify({squirrel: false,
                             events: ["weekend"]});
console.log(jsonStr);
// → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(jsonStr).events);
// → ["weekend"]

let user1 = {
  name: "Damon",
  age: 40,
  isDeveloper: true
};

let jsonString = JSON.stringify(user1);
console.log(jsonString);
// → {"name":"Damon","age":40,"isDeveloper":true}

let parsedObject = JSON.parse(jsonString);
console.log(parsedObject.name);
// → Damon


let order = {
  id: 1001,
  customer: {
    name: "Alice",
    email: "alice@email.com"
  },
  items: ["Laptop", "Mouse"]
};

let orderData = JSON.stringify(order);
console.log(orderData);
// → {"id":1001,"customer":{"name":"Alice","email":"alice@email.com"},"items":["Laptop","Mouse"]}

let parsedOrder = JSON.parse(orderData);
console.log(parsedOrder.customer.name);
// → Alice

let products = [
  { id: 1, name: "Phone", price: 999 },
  { id: 2, name: "Tablet", price: 599 }
];

let productData = JSON.stringify(products);
console.log(productData);
// → [{"id":1,"name":"Phone","price":999},{"id":2,"name":"Tablet","price":599}]

let parsedProductData = JSON.q(productData);
console.log(parsedProductData[0].name);
// → Phone


let settings = {
  darkMode: true,
  language: "en",
  version: 2
};

let pretty = JSON.stringify(settings, null, 2);
console.log(pretty);

let obj = {
  today: new Date()
};

let objJson = JSON.stringify(obj);
console.log(objJson);
// → {"today":"2026-02-14T02:00:00.000Z"}

let parsedObj = JSON.parse(objJson);
console.log(parsedObj.today);
// → string, NOT Date object

let myselfData = {
  name: "Damon",
  password: "123456",
  role: "admin"
};

let myselfJson = JSON.stringify(myselfData, ["name", "role"]);
console.log(myselfJson);
// → {"name":"Damon","role":"admin"}

function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    return null;
  }
}

let result = safeParse('{"valid": true}');
console.log(result); // { valid: true }

let bad = safeParse('invalid json');
console.log(bad); // null
