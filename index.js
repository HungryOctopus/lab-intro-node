class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
    /* let number = Math.floor(Math.random() * 10);
    for (let i of this.items) {
      if (i === undefined || number >= i) {
        this.items.push(number);
      } else {
        this.items.unshift(number);
      }
    } */
  }

  get(pos) {
    if (pos >= this.length) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    let lastItem = this.items.length - 1;
    if (lastItem === -1) {
      throw new Error('EmptySortedList');
    }
    return this.items[lastItem];
  }

  min() {
    if (this.items[0] == undefined) {
      throw new Error('EmptySortedList');
    }
    return this.items[0];
  }

  sum() {
    if (this.items[0] == undefined) {
      return 0;
    }
    return this.items.reduce((a, b) => a + b);
  }

  avg() {
    if (this.items[0] == undefined) {
      throw new Error('EmptySortedList');
    }
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i];
    }
    return total / this.items.length;
  }
}

module.exports = SortedList;
