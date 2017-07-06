/*
Abschlussarbeit:
Objektorientierte Programmierung: Snake
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 5.7.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var hai;
(function (hai) {
    window.addEventListener("load", init);
    let allSpiders = [];
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        hai.crc2 = canvas.getContext("2d");
        drawGround();
        drawSand();
        drawBubbles(450, 400);
        drawBubbles(1000, 100);
        drawBubbles(883, 494);
        drawBubbles(180, 200);
        //drawFish(300, 300);
        //drawSpider(200, 200);
        //drawSnake(300, 300);
        //zufällige Position Fische
        for (var n = 0; n < 10; n++) {
            var x = (Math.random() * (1200 - 0)) + 0;
            var y = (Math.random() * (700 - 0)) + 0;
            drawFish(x, y);
        }
        //alert("Use  ◄ ▲ ▼ ► ► ◄ ▲ ▼ ");
    }
    // alle Funktionen für Canvas-Elemente
    function drawGround() {
        hai.crc2.beginPath();
        hai.crc2.fillStyle = "#7EC0EE";
        hai.crc2.rect(0, 0, 1200, 600);
        hai.crc2.fill();
        hai.crc2.closePath();
    }
    function drawSand() {
        hai.crc2.beginPath();
        hai.crc2.fillStyle = "#EED8AE";
        hai.crc2.rect(0, 570, 1200, 30);
        hai.crc2.fill();
        hai.crc2.closePath();
    }
    function drawBubbles(_x, _y) {
        hai.crc2.beginPath();
        hai.crc2.fillStyle = "#E0FFFF";
        hai.crc2.strokeStyle = "#104E8B";
        hai.crc2.arc(_x, _y, 5, 0, 2 * Math.PI);
        hai.crc2.fill();
        hai.crc2.stroke();
        hai.crc2.closePath();
        hai.crc2.beginPath();
        hai.crc2.fillStyle = "#E0FFFF";
        hai.crc2.strokeStyle = "#104E8B";
        hai.crc2.arc(_x + 8, _y - 15, 6, 0, 2 * Math.PI);
        hai.crc2.fill();
        hai.crc2.stroke();
        hai.crc2.closePath();
        hai.crc2.beginPath();
        hai.crc2.fillStyle = "#E0FFFF";
        hai.crc2.strokeStyle = "#104E8B";
        hai.crc2.arc(_x - 5, _y - 30, 7, 0, 2 * Math.PI);
        hai.crc2.fill();
        hai.crc2.stroke();
        hai.crc2.closePath();
    }
    function drawFish(_x, _y) {
        //Körper
        hai.crc2.beginPath();
        hai.crc2.fillStyle = "#FF4040";
        hai.crc2.arc(_x, _y, 10, 0, 2 * Math.PI);
        hai.crc2.fill();
        hai.crc2.closePath();
        //Auge
        hai.crc2.beginPath();
        hai.crc2.fillStyle = "#000000";
        hai.crc2.arc(_x + 2, _y - 1, 2, 0, 2 * Math.PI);
        hai.crc2.fill();
        hai.crc2.closePath();
        //Flosse
        hai.crc2.beginPath();
        hai.crc2.fillStyle = "#FF4040";
        hai.crc2.moveTo(_x, _y);
        hai.crc2.lineTo(_x - 15, _y - 9);
        hai.crc2.lineTo(_x - 15, _y + 9);
        hai.crc2.lineTo(_x, _y);
        hai.crc2.fill();
        hai.crc2.closePath();
    }
    function drawSnake(_x, _y) {
        hai.crc2.beginPath();
        hai.crc2.fillStyle = "#BCEE68";
        hai.crc2.rect(_x, _y, 25, 100);
        hai.crc2.fill();
        hai.crc2.closePath();
        //Zunge
        hai.crc2.beginPath();
        hai.crc2.fillStyle = "#CD3700";
        hai.crc2.arc(_x + 12, _y - 22, 5, 0, 2 * Math.PI);
        hai.crc2.fill();
        hai.crc2.closePath();
        //Kopf
        hai.crc2.beginPath();
        hai.crc2.fillStyle = "#BCEE68";
        hai.crc2.arc(_x + 12, _y, 20, 0, 2 * Math.PI);
        hai.crc2.fill();
        hai.crc2.closePath();
    }
    function drawSpider(_x, _y) {
        hai.crc2.beginPath();
        hai.crc2.fillStyle = "#000000";
        hai.crc2.arc(_x + 2, _y - 2, 5, 0, 2 * Math.PI);
        hai.crc2.fill();
        hai.crc2.closePath();
        hai.crc2.beginPath();
        hai.crc2.strokeStyle = "#000000";
        hai.crc2.moveTo(_x, _y);
        hai.crc2.lineTo(_x - 10, _y - 5);
        hai.crc2.moveTo(_x, _y);
        hai.crc2.lineTo(_x - 10, _y + 5);
        hai.crc2.moveTo(_x, _y);
        hai.crc2.lineTo(_x + 14, _y - 5);
        hai.crc2.moveTo(_x, _y);
        hai.crc2.lineTo(_x + 14, _y + 5);
        hai.crc2.closePath();
        hai.crc2.stroke();
        hai.crc2.beginPath();
        hai.crc2.fillStyle = "#FFFFFF";
        hai.crc2.arc(_x, _y - 3, 1, 0, 2 * Math.PI);
        hai.crc2.arc(_x + 4, _y - 3, 1, 0, 2 * Math.PI);
        hai.crc2.fill();
        hai.crc2.closePath();
    }
})(hai || (hai = {}));
//# sourceMappingURL=Abschlussarbeit.js.map