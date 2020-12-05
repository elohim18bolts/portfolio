import { Vector } from "./Vector.class";
import p5 from "p5";

export class Particle {
  position: Vector;
  velocity: Vector;
  acceleration: Vector;
  private desired: Vector;
  private maxForce: number;
  private maxVelocity: number;
  private fill: Vector;
  constructor(pos: Vector, vel: Vector = new Vector()) {
    this.position = pos;
    this.velocity = vel;
    this.acceleration = new Vector(0, 0);
    this.desired = new Vector(0, 0);
    this.maxForce = 20;
    this.maxVelocity = 30;

    //Random fill
    this.fill = new Vector(
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255)
    );
  }
  applyForce(force: Vector) {
    this.acceleration.add(force);
  }

  update() {
    // this.maxForce < 30 ? (this.maxForce += 1) : (this.maxForce = 30);

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxVelocity);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  seek(target: Particle, desireVelocity: number) {
    this.desired = Vector.sub(target.position, this.position);
    this.desired.setMag(this.maxVelocity);
    if (Vector.sub(target.position, this.position).mag() < 20) {
      this.maxForce = 5;
      this.maxVelocity = 5;
      // this.velocity = target.velocity;
      // this.position = target.position;
      // return;
    }
    const steer = Vector.sub(this.desired, this.velocity);
    steer.limit(this.maxForce);
    this.applyForce(steer);

    //console.log(this.desireVelocity.mag());

    //console.log("velocity", this.velocity);

    // const targetPointer: p5.Vector = p5.Vector.sub(
    //   target.position,
    //   this.position
    // ).normalize();
    // this.acceleration = p5.Vector.sub(
    //   targetPointer.mult(desireVelocity),
    //   this.velocity
    // );
    // this.velocity = p5.Vector.add(this.velocity, this.acceleration);
    // this.position = p5.Vector.add(this.position, this.velocity);
  }
  move(speedx: number, speedy: number) {
    this.position.add(new Vector(speedx, speedy));
  }

  draw(p5: p5) {
    p5.stroke(this.fill.x, this.fill.y, this.fill.z);
    p5.strokeWeight(5);
    p5.point(this.position.x, this.position.y);
  }
}
