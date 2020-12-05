export class Vector {
  public x: number;
  public y: number;
  public z: number;
  constructor(x: number = 0, y: number = 0, z: number = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  seCoorsTo(num: number) {
    this.x = num;
    this.y = num;
    this.z = num;
    return this;
  }
  equal(other: Vector, epsilon: number) {
    return (
      Math.abs(this.x - other.x) < epsilon &&
      Math.abs(this.y - other.y) < epsilon &&
      Math.abs(this.z - other.z) < epsilon
    );
  }

  random(x: number, x2: number, y: number, y2: number) {
    this.x = Math.floor((x2 - x) * Math.random()) + x;
    this.y = Math.floor((y2 - y) * Math.random()) + y;
    this.z = 0;
    return this;
  }

  mag() {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
  }
  normalize() {
    this.x = this.x / this.mag();
    this.y = this.y / this.mag();
    this.z = this.z / this.mag();
    return this;
  }
  mult(num: number) {
    this.x *= num;
    this.y *= num;
    this.z *= num;
    return this;
  }
  static scale(self: Vector, num: number) {
    return new Vector(self.x * num, self.y * num, self.z * num);
  }
  sub(other: Vector) {
    this.x -= other.x;
    this.y -= other.y;
    this.z -= other.z;
    return this;
  }
  static sub(self: Vector, other: Vector) {
    return new Vector(self.x - other.x, self.y - other.y, self.z - other.z);
  }
  add(other: Vector) {
    this.x += other.x;
    this.y += other.y;
    this.z += other.z;
    return this;
  }
  static add(self: Vector, other: Vector) {
    return new Vector(self.x + other.x, self.y + other.y, self.z + other.z);
  }

  limit(num: number) {
    if (this.mag() > num) {
      this.setMag(num);
    }
    return this;
  }

  between(num: number) {
    this.x /= num;
    this.y /= num;
    this.z /= num;
    return this;
  }
  setMag(num: number) {
    this.normalize();
    this.mult(num);
  }
}
