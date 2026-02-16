import SCRIPTS from "./scripts.js";

function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

console.log(SCRIPTS.filter(s => s.living).map);
console.log(SCRIPTS.filter(s => s.direction == "rtl").map(s => s.name));

//console.log(filter(SCRIPTS, script => script.living));
// → [{name: "Adlam", …}, …]

// Count the number of scripts in a given direction
console.log(SCRIPTS.filter(s => s.direction == "rtl").length);

function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
  return characterCount(a) < characterCount(b) ? b : a;
}));
// → {name: "Han", …}

function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(average(
  SCRIPTS.filter(s => s.living).map(s => s.year))));
// → 1165
console.log(Math.round(average(
  SCRIPTS.filter(s => !s.living).map(s => s.year))));
// → 204


// More functional way:
function averageYear(living) {
  const result = SCRIPTS.reduce(
    (acc, script) => {
      if (script.living === living) {
        acc.sum += script.year;
        acc.count++;
      }
      return acc;
    },
    { sum: 0, count: 0 }
  );

  return result.count === 0 ? 0 : result.sum / result.count;
}

console.log(Math.round(averageYear(true)));
console.log(Math.round(averageYear(false)));

function characterScript(code) {
  return SCRIPTS.find(script =>
    script.ranges.some(([from, to]) =>
      code >= from && code < to
    )
  ) || null;
}

console.log(characterScript(121));
// → {name: "Latin", …}

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.find(c => c.name == name);
        if (!known) {
            counts.push({name, count: 1});
        } else {
            known.count++;
        }
    }
    return counts;
}

function textScripts(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name != "none");

    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";
    
    return scripts.map(({name, count}) => {
        return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// → 61% Latin, 22% Cyrillic, 17% Han