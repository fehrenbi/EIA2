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
            shark.trashDraw.fillStyle = "#778899";
            shark.trashDraw.strokeStyle = "#76B900";
            shark.trashDraw.arc(this.x, this.y, 7, 0, 2 * Math.PI);
            shark.trashDraw.closePath();
            shark.trashDraw.fill();
            shark.trashDraw.stroke();
            shark.trashDraw.beginPath();
            shark.trashDraw.fillStyle = "#778899";
            shark.trashDraw.strokeStyle = "#76B900";
            shark.trashDraw.arc(this.x - 9, this.y, 7, 0, 2 * Math.PI);
            shark.trashDraw.closePath();
            shark.trashDraw.fill();
            shark.trashDraw.stroke();
            shark.trashDraw.beginPath();
            shark.trashDraw.fillStyle = "#778899";
            shark.trashDraw.arc(this.x - 4.5, this.y - 5, 7, 0, 2 * Math.PI);
            shark.trashDraw.closePath();
            shark.trashDraw.fill();
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