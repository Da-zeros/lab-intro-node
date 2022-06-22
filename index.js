class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
      this.length = this.items.length;
      this.items = this.items.sort( function(a, b) {
        if(a >= b) {
          return 1;
        } else if (a < b) {
          return -1;
        } else {
          return 0;
        }
      });
  }
    
  get(pos) {
    if(this.items[pos]!== undefined)return this.items[pos];
    else throw new Error ("OutOfBounds");
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.items.length -1];
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      return this.items.reduce( function(a, b) {
        return a + b;
      }, 0);
    }
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((a, b) => a + b, 0) / this.items.length;
    }
  }
}

module.exports = SortedList;
