// code and inspiration from:
// https://youtu.be/MfxBfRD0FVU

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xFlag = true;
  }

  // update the size of the element we render
  update() {
    if (this.xFlag) {
      this.x += 3;
      if (this.x > 500) {
        this.x -= 3;
        this.xFlag = false;
      }
    } else {
      this.x -= 3;
      if (this.x < 0) {
        this.x += 3;
        this.xFlag = true;
      }
    }

    this.y += random(-5, 5);
    if (this.y > 500) {
      this.y -= 5;
    } else if (this.y < 0) {
      this.y += 5;
    }
  }

  // render the element on the screen
  // by default the shape will be a point/circle
  show() {
    stroke(0);
    strokeWeight(25);
    point(this.x, this.y);
  }
}

class Box extends Particle {
  constructor(x, y) {
    super(x, y);
    this.bright = color(204, 0, 102);
    this.r = 10;
  }

  update() {
    super.update();
    this.r += random(-5, 5);
    if (this.r > 200) {
      this.r -= 5
    } else if (this.r < 0) {
      this.r += 5
    }
  }

  show() {
    strokeWeight(1);
    stroke(0);
    fill(this.bright);
    square(this.x, this.y, this.r);
  }
}

class Ellipse extends Particle {
  constructor(x, y) {
    super(x, y);
    this.bright = color(0, 102, 255);
    this.w = 10;
    this.h = 5;
    this.yFlag = true;
  }

  update() {
    if (this.xFlag) {
      this.x += 6;
      if (this.x > 500) {
        this.x -= 6;
        this.xFlag = false;
      }
    } else {
      this.x -= 6;
      if (this.x < 0) {
        this.x += 6;
        this.xFlag = true;
      }
    }
    if (this.yFlag) {
      this.y += 2;
      if (this.y > 500) {
        this.y -= 2;
        this.yFlag = false;
      }
    } else {
      this.y -= 2;
      if (this.y < 0) {
        this.y += 2;
        this.yFlag = true;
      }
    }
    this.w += random(-8, 8);
    if (this.w > 200) {
      this.w -= 8;
    } else if (this.w < 0) {
      this.w += 8;
    }
    this.h += random (-5, 5);
    if (this.h > 200) {
      this.h -= 5;
    } else if (this.h < 0) {
      this.h += 5;
    }
  }

  show() {
    strokeWeight(1);
    stroke(0);
    fill(this.bright);
    ellipse(this.x, this.y, this.w, this.h);
  }
}
