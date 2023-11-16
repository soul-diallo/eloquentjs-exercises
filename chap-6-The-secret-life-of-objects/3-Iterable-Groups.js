class Group {
    constructor() {
      this.members = [];
    }
  
    add(value) {
      if (!this.has(value)) {
        this.members.push(value);
      }
    }
  
    delete(value) {
      this.members = this.members.filter(v => v !== value);
    }
  
    has(value) {
      return this.members.includes(value);
    }
  
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
      this.index = 0;
    }
  
    next() {
      if (this.index >= this.group.members.length) {
        return { done: true };
      }
  
      const value = this.group.members[this.index];
      this.index++;
      return { value, done: false };
    }
  }
  
  // Example usage:
  let group = new Group();
  group.add(10);
  group.add(20);
  group.add(30);
  
  console.log(group.has(20)); // true
  console.log(group.has(40)); // false
  
  group.delete(10);
  console.log(group.has(10)); // false
  
  group = Group.from([1, 2, 3, 4, 4, 5]);
  console.log([...group]); // [1, 2, 3, 4, 5]
  