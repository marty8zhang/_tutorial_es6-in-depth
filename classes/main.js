'use strict'

// Example class definition.
class Circle {
  constructor (radius) {
    // Some `radius` checking code...
    console.log(`Instantiating a \`${radius}\` radius circle.`)

    this._radius = radius

    Circle.circlesMade++
  }

  static draw (circle, canvas) {
    console.log(`Drawing a \`${circle.radius}\` radius circle on the \`${canvas.id}\` canvas.`)

    // Canvas drawing code...
  }

  static get circlesMade () {
    return !this._count ? 0 : this._count
  }

  static set circlesMade (val) {
    this._count = val
  }

  area () {
    return Math.pow(this.radius, 2) * Math.PI
  }

  get radius () {
    return this._radius
  }

  set radius (radius) {
    // Some `radius` checking code...

    this._radius = radius
  }
}

const testCircle = new Circle(2) // Instantiating a `2` radius circle.

Circle.draw(testCircle, { id: 'test-canvas' }) // Drawing a `2` radius circle on the `test-canvas` canvas.

console.log(Circle.circlesMade) // 1

console.log(testCircle.area()) // 12.566...

testCircle.radius = 1.23

console.log(testCircle.radius) // 1.23

Circle.draw(new Circle(2.13), { id: 'test-canvas-2' })

console.log(Circle.circlesMade) // 2
