class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    plus(other) {
      return new Vec(this.x + other.x, this.y + other.y);
    }
  
    minus(other) {
      return new Vec(this.x - other.x, this.y - other.y);
    }
  
    get length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

let v1 = new Vec(1, 2);
let v2 = new Vec(2, 3);
let v3 = v1.plus(v2);
let v4 = v1.minus(v2);
console.log(v3, v4, v1.length);