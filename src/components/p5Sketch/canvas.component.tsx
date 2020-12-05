import React from "react";
import Sketch from "react-p5";
import p5 from "p5";
import { Vector } from "./Vector.class";
import { Particle } from "./particle.class";

function drawVector(p5: p5, origin: Vector, end: Vector, scaleFactor: number) {
  end = Vector.scale(end, scaleFactor);
  const line = Vector.add(origin, end);
  p5.line(origin.x, origin.y, line.x, line.y);
}

export const Canvas = () => {
  const particles: Array<Particle> = [];
  const targets: Array<Particle> = [];
  let font: p5.Font;
  function preload(p5: p5) {
    font = p5.loadFont("./PermanentMarker-Regular.ttf");
  }

  function setup(p5: p5, canvasPerentReference: Element) {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(
      canvasPerentReference
    );

    //Create the points from the text
    let points = font.textToPoints(
      "Hello",
      p5.width / 2 - 250,
      p5.height / 2,
      200,
      {
        sampleFactor: 0.1,
        simplifyThreshold: 0,
      }
    );
    //create the particles
    points.forEach((point) => {
      const position = new Vector(point.x, point.y);
      targets.push(new Particle(position));
      particles.push(
        new Particle(
          new Vector().random(0, p5.width, 0, p5.height),
          new Vector(7, 15)
        )
      );
    });
  }

  function draw(p5: p5) {
    p5.background(0);
    p5.noStroke();
    p5.fill(255);

    particles.forEach((particle, index) => {
      particle.draw(p5);
      particle.seek(targets[index], 10);
      particle.update();
    });
    //particle.draw(p5);
    // p5.circle(particle.position.x, particle.position.y, 50);
    // p5.circle(target.position.x, target.position.y, 60);
    // p5.strokeWeight(5);
    // p5.stroke(0, 255, 0);
    // drawVector(p5, particle.position, particle.velocity, 5);
    // p5.stroke(255, 0, 0);
    // //
    // drawVector(p5, particle.position, particle.desired, 15);
    //target.position.x = p5.mouseX;
    //target.position.y = p5.mouseY;
    // console.log(particle.velocity.x);
  }

  return <Sketch preload={preload} setup={setup} draw={draw} />;
};
