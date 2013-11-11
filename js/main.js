
function init() {
    var stage = new createjs.Stage("canvas");

    var car1 = new Car(100, 100);
    var car2 = new Car(300, 100);
    stage.addChild(car1);
    stage.addChild(car2);

    createjs.Ticker.addEventListener("tick", tick);
    createjs.Ticker.setInterval(25);
    createjs.Ticker.setFPS(40);
    createjs.Ticker.useRAF = true


    function tick(event) { 
        stage.update(event);
    }

    
}

