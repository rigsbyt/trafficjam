(function() {
 
var Car = function(x, y) {
  this.initialize(x, y);
}
var p = Car.prototype = new createjs.Shape();
 
p.Shape_initialize = p.initialize;

p.initialize = function(x, y) {
    this.Shape_initialize();
    
    this.graphics.beginFill("red").drawCircle(0, 0, 50);
    this.x = x;
    this.y = y;

    this.addEventListener("tick", this.cicleTick);
}

p.cicleTick = function(event) {
    event.currentTarget.x += event.params[0].delta / 10;
    if (event.currentTarget.x > 800)
        event.currentTarget.x = 0;

}

window.Car = Car;
}());