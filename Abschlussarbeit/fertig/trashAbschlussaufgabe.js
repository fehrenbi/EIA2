/*
Aufgabe 7
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 12.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var shark;
(function (shark) {
    class Trash {
        constructor(_x, _y) {
            console.log("Ich bin der constructor Trash");
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.draw();
            this.move();
            // this.setRandomColor();
        }
        draw() {
            shark.trashDraw.beginPath();
            shark.trashDraw.fillStyle = "#ADFF2F";
            shark.trashDraw.strokeStyle = "#00000";
            shark.trashDraw.moveTo(this.x, this.y);
            shark.trashDraw.lineTo(this.x + 20, this.y + 10);
            shark.trashDraw.lineTo(this.x + 10, this.y - 10);
            shark.trashDraw.lineTo(this.x, this.y);
            //trashDraw.rect(this.x, this.y, 20, 20);
            shark.trashDraw.fill();
            shark.trashDraw.stroke();
            shark.trashDraw.closePath();
        }
        move() {
            this.x += Math.random() * 0 - 0.5;
            this.y += Math.random() * 4 - 2;
            if (this.y < 0) {
                this.y = 600;
            }
            if (this.y > 600) {
                this.y = 0;
            }
            if (this.x > 1200) {
                this.x = 0;
            }
            if (this.x < 0) {
                this.x = 1200;
            }
        }
        redraw() {
            shark.trashDraw.clearRect(0, 0, 1200, 600);
            shark.trashDraw.beginPath();
            shark.trashDraw.closePath();
        }
    }
    shark.Trash = Trash;
})(shark || (shark = {}));
//# sourceMappingURL=trashAbschlussaufgabe.js.map