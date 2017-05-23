/*
Aufgabe 8
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 18.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var aufgabe8;
(function (aufgabe8) {
    class Honeybee extends aufgabe8.Bee {
        //Erstellt neue Biene
        constructor(_x, _y, color, _xTarget, _yTarget) {
            super(_x, _y);
            this.xTarget = _xTarget;
            this.yTarget = _yTarget;
            this.speed = 0.05;
            this.setRandomTarget();
            //this.status = "fly";
            //this.pausecounter = 0;
            console.log("create honeybee");
            super.draw();
        }
        setRandomTarget() {
            let i = Math.floor(Math.random() * (aufgabe8.flowers.length - 1));
            this.xTarget = aufgabe8.flowers[i].x;
            this.yTarget = aufgabe8.flowers[i].y;
        }
        move() {
            let xDiff = this.xTarget - this.x; //Strecke x-Achse
            let yDiff = this.yTarget - this.y; //Strecke y-Achse
            let d = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2)); //direkter Weg (Pythagoras)
            if (xDiff > 0 && yDiff > 0) {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
            if (xDiff < 0 && yDiff > 0) {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
            if (xDiff < 0 && yDiff < 0) {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
            if (xDiff > 0 && yDiff < 0) {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
            if (d < 1) {
                this.setRandomTarget();
            }
        }
        setRandomColor() {
            switch (Math.floor((Math.random() * 4) + 1)) {
                case 1:
                    this.color = "blue";
                    break;
                case 2:
                    this.color = "green";
                    break;
                case 3:
                    this.color = "red";
                    break;
                case 4:
                    this.color = "yellow";
                    break;
            }
        }
    }
    aufgabe8.Honeybee = Honeybee;
})(aufgabe8 || (aufgabe8 = {}));
//# sourceMappingURL=aufgabe8honeybee.js.map