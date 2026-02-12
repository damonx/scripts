let descriptions = {
  work: "Went to work",
  "touched tree": "Touched a tree"
};
console.log(descriptions.work);
console.log(descriptions["touched tree"]);
console.log("touched tree" in descriptions);
console.log(Object.keys(descriptions));
