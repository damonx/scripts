class Group {
  constructor() {
    this.members = [];
  }

  /**
   * 添加元素（如果不存在）
   * @param {*} value
   */
  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  /**
   * 删除元素（如果存在）
   * @param {*} value
   */
  delete(value) {
    this.members = this.members.filter(v => v !== value);
  }

  /**
   * 判断是否包含
   * @param {*} value
   * @returns {boolean}
   */
  has(value) {
    return this.members.indexOf(value) !== -1;
  }

  /**
   * 从 iterable 创建 Group
   * @param {Iterable} iterable
   * @returns {Group}
   */
  static from(iterable) {
    const group = new Group();
    for (const value of iterable) {
      group.add(value);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.members.length) {
      return { done: true };
    }

    const value = this.group.members[this.position];
    this.position++;

    return { value, done: false };
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c