/*
Aufgabe 8
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 18.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var shark;
(function (shark) {
    class SmallFish extends shark.Fish {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("create SmallFish");
        }
        draw() {
            //Körper
            shark.fischDraw.beginPath();
            shark.fischDraw.fillStyle = "#FF4040";
            shark.fischDraw.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            shark.fischDraw.fill();
            shark.fischDraw.closePath();
            //Auge
            shark.fischDraw.beginPath();
            shark.fischDraw.fillStyle = "#000000";
            shark.fischDraw.arc(this.x + 2, this.y - 1, 2, 0, 2 * Math.PI);
            shark.fischDraw.fill();
            shark.fischDraw.closePath();
            //Flosse
            shark.fischDraw.beginPath();
            shark.fischDraw.fillStyle = "#FF4040";
            shark.fischDraw.moveTo(this.x, this.y);
            shark.fischDraw.lineTo(this.x - 15, this.y - 9);
            shark.fischDraw.lineTo(this.x - 15, this.y + 9);
            shark.fischDraw.lineTo(this.x, this.y);
            shark.fischDraw.fill();
            shark.fischDraw.closePath();
        }
        redraw() {
            shark.fischDraw.clearRect(0, 0, 1200, 600);
            shark.fischDraw.beginPath();
            shark.fischDraw.closePath();
        }
    }
    shark.SmallFish = SmallFish;
})(shark || (shark = {}));
//# sourceMappingURL=smallFishAbschlussaufgabe.js.map