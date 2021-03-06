class ComputerArcher {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.collapse = false;

    this.image = loadImage("./assets/computerArcher.png");


    World.add(world, this.body);

    this.life1 = "green"

    this.life2 = "green"  

    this.life3 = "green"

    Matter.Body.setAngle(this.body, PI / 2); // 90 degree
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, -20, this.width, this.height);
    pop();
  }

  life() {
    push();
    textSize(20);  
    fill("white");
    text("Player", 280, 40);

    fill(this.life1);
    rect(180, 50, 70, 30);
    fill(this.life2);
    rect(250, 50, 70, 30);
    fill(this.life3);
    rect(320,50, 70, 30);
    pop();
  }
}
