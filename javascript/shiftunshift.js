let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}

remember("a");
remember("b");
console.log("todo list: ", todoList);
rememberUrgently("c");
console.log("After unshifting todo list: ", todoList);
console.log("shift: ", getTask());
console.log("After shifting: ", todoList);
console.log("now pop: ", todoList.pop());
console.log("After popping: ", todoList);
