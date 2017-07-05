/*
Abschlussarbeit:
Objektorientierte Programmierung: Snake
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 5.7.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var snake;
(function (snake) {
    window.addEventListener("load", init);
    let allSpiders = [];
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        snake.crc2 = canvas.getContext("2d");
        drawGround();
        drawSpider(200, 200);
        //zufällige Position Spinnen
        for (var n = 0; n < 15; n++) {
            var x = (Math.random() * (1200 - 0)) + 0;
            var y = (Math.random() * (700 - 0)) + 0;
            drawSpider(x, y);
        }
        drawSnake(300, 300);
        //alert("Use  ◄ ▲ ▼ ► ► ◄ ▲ ▼ ");
    }
    // alle Funktionen für Canvas-Elemente
    function drawGround() {
        snake.crc2.beginPath();
        snake.crc2.fillStyle = "#CDAA7D";
        snake.crc2.rect(0, 0, 1200, 600);
        snake.crc2.fill();
        snake.crc2.closePath();
    }
    function drawSnake(_x, _y) {
        snake.crc2.beginPath();
        snake.crc2.fillStyle = "#BCEE68";
        snake.crc2.rect(_x, _y, 25, 100);
        snake.crc2.fill();
        snake.crc2.closePath();
        //Zunge
        snake.crc2.beginPath();
        snake.crc2.fillStyle = "#CD3700";
        snake.crc2.arc(_x + 12, _y - 22, 5, 0, 2 * Math.PI);
        snake.crc2.fill();
        snake.crc2.closePath();
        //Kopf
        snake.crc2.beginPath();
        snake.crc2.fillStyle = "#BCEE68";
        snake.crc2.arc(_x + 12, _y, 20, 0, 2 * Math.PI);
        snake.crc2.fill();
        snake.crc2.closePath();
    }
    function drawSpider(_x, _y) {
        snake.crc2.beginPath();
        snake.crc2.fillStyle = "#000000";
        snake.crc2.arc(_x + 2, _y - 2, 5, 0, 2 * Math.PI);
        snake.crc2.fill();
        snake.crc2.closePath();
        snake.crc2.beginPath();
        snake.crc2.strokeStyle = "#000000";
        snake.crc2.moveTo(_x, _y);
        snake.crc2.lineTo(_x - 10, _y - 5);
        snake.crc2.moveTo(_x, _y);
        snake.crc2.lineTo(_x - 10, _y + 5);
        snake.crc2.moveTo(_x, _y);
        snake.crc2.lineTo(_x + 14, _y - 5);
        snake.crc2.moveTo(_x, _y);
        snake.crc2.lineTo(_x + 14, _y + 5);
        snake.crc2.closePath();
        snake.crc2.stroke();
        snake.crc2.beginPath();
        snake.crc2.fillStyle = "#FFFFFF";
        snake.crc2.arc(_x, _y - 3, 1, 0, 2 * Math.PI);
        snake.crc2.arc(_x + 4, _y - 3, 1, 0, 2 * Math.PI);
        snake.crc2.fill();
        snake.crc2.closePath();
    }
})(snake || (snake = {}));
//# sourceMappingURL=Abschlussarbeit.js.map