function deepEqual(a, b) {
  // 1️⃣ 如果完全相等（包括同一个引用）
  if (a === b) return true;

  // 2️⃣ 如果其中一个是 null 或不是 object，直接 false
  if (
    a === null || b === null ||
    typeof a !== "object" ||
    typeof b !== "object"
  ) {
    return false;
  }

  // 3️⃣ 获取两个对象的 key
  let keysA = Object.keys(a);
  let keysB = Object.keys(b);

  // 4️⃣ 如果属性数量不同，直接 false
  if (keysA.length !== keysB.length) return false;

  // 5️⃣ 递归比较每个属性
  for (let key of keysA) {
    if (!keysB.includes(key)) return false;

    if (!deepEqual(a[key], b[key])) return false;
  }

  return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
