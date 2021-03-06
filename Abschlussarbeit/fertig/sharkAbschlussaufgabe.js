/*
Aufgabe 8
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 18.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var shark;
(function (shark) {
    class Shark extends shark.Fish {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("create Shark");
            this.x = _x;
            this.y = _y;
        }
        draw() {
            //Schwanz
            shark.draw.clearRect(0, 0, 1200, 600);
            shark.draw.beginPath();
            shark.draw.strokeStyle = "#9C9C9C";
            shark.draw.fillStyle = "#CCCCCC";
            shark.draw.moveTo(this.x, this.y);
            shark.draw.lineTo(this.x - 20, this.y - 24);
            shark.draw.lineTo(this.x - 20, this.y + 24);
            shark.draw.closePath();
            shark.draw.stroke();
            shark.draw.fill();
            //Körper
            shark.draw.beginPath();
            shark.draw.fillStyle = "#CCCCC";
            shark.draw.arc(this.x + 7, this.y, 20, 0, 2 * Math.PI);
            shark.draw.closePath();
            shark.draw.stroke();
            shark.draw.fill();
            //Auge
            shark.draw.beginPath();
            shark.draw.fillStyle = "#000000";
            shark.draw.arc(this.x + 11, this.y - 3, 2, 0, 2 * Math.PI);
            shark.draw.closePath();
            shark.draw.fill();
            //Maul
            shark.draw.beginPath();
            shark.draw.strokeStyle = "#000000";
            shark.draw.moveTo(this.x + 10, this.y + 7);
            shark.draw.lineTo(this.x + 20, this.y + 12);
            shark.draw.closePath();
            shark.draw.stroke();
            shark.draw.beginPath();
            shark.draw.strokeStyle = "#000000";
            shark.draw.moveTo(this.x + 10, this.y + 7);
            shark.draw.lineTo(this.x + 22, this.y - 5);
            shark.draw.closePath();
            shark.draw.stroke();
        }
        move(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
    }
    shark.Shark = Shark;
})(shark || (shark = {}));
//# sourceMappingURL=sharkAbschlussaufgabe.js.map