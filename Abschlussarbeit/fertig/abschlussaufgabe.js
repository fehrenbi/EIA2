/*
Aufgabe 8
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 18.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var shark;
(function (shark) {
    window.addEventListener("load", init);
    let allBubbles = [];
    let allTrash = [];
    let allFish = [];
    let imgData;
    var hitBoxWidth = 20;
    var hitBoxHeigh = 20;
    var numBubbles = 6;
    var numTrash = 40;
    var numFish = 10;
    var numHeart = 3;
    var moved = false;
    var gameEnd = false;
    var lastTrash;
    var heart = document.getElementById("heart");
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        shark.crc2 = canvas.getContext("2d");
        let drawCanvas;
        drawCanvas = document.getElementsByTagName("canvas")[2];
        shark.draw = drawCanvas.getContext("2d");
        let fischCanvas;
        fischCanvas = document.getElementsByTagName("canvas")[1];
        shark.fischDraw = fischCanvas.getContext("2d");
        let heartCanvas;
        heartCanvas = document.getElementsByTagName("canvas")[3];
        shark.heartDraw = heartCanvas.getContext("2d");
        let trashCanvas;
        trashCanvas = document.getElementsByTagName("canvas")[4];
        shark.trashDraw = trashCanvas.getContext("2d");
        drawWater();
        drawSand();
        drawHearts();
        //Luftblasen erstellen und fliegen lassen
        for (let i = 0; i < numBubbles; i++) {
            let x = (Math.random() * (1200 - 0)) + 0;
            let y = (Math.random() * (600 - 0)) + 0;
            let b = new shark.Bubble(x, y);
            allBubbles.push(b);
        }
        //Müll erstellen 
        for (let i = 0; i < numTrash; i++) {
            let x = (Math.random() * (1200 - 0)) + 0;
            let y = (Math.random() * (600 - 0)) + 0;
            let t = new shark.Trash(x, y);
            allTrash.push(t);
        }
        //Schleife für Malen der zufällig gesetzten Fische
        for (var n = 0; n < numFish; n++) {
            var zufallBlume = Math.floor((Math.random() * 3) + 0);
            var x = (Math.random() * (1200 - 0)) + 0;
            var y = (Math.random() * (600 - 0)) + 0;
            let f = new shark.SmallFish(x, y);
            f.draw();
            allFish.push(f);
        }
        let s = new shark.Shark(100, 100);
        function updateShark() {
            if (!gameEnd) {
                s.draw();
                setTimeout(updateShark, 10);
            }
        }
        function getMousePos(canvas, evt) {
            var rect = canvas.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top
            };
        }
        drawCanvas.addEventListener('mousemove', function (evt) {
            var mousePos = getMousePos(canvas, evt);
            if (!moved) {
                updateShark();
            }
            moved = true;
            s.move(mousePos.x, mousePos.y);
            checkFischEaten(mousePos.x, mousePos.y);
            checkTrashHit(mousePos.x, mousePos.y);
            console.log(allFish.length);
            if (numHeart == 0) {
                GameEnds("You Lost");
            }
            if (allFish.length == 0) {
                GameEnds("You Won");
            }
        }, true);
        //gemaltes Bild abspeichern
        imgData = shark.crc2.getImageData(0, 0, 1200, 600);
        animate();
    }
    //Hintergrundbild aufrufen
    function animate() {
        shark.crc2.putImageData(imgData, 0, 0);
        shark.trashDraw.clearRect(0, 0, 1200, 600);
        for (let i = 0; i < allBubbles.length; i++) {
            let b = allBubbles[i];
            b.update();
        }
        for (let i = 0; i < allTrash.length; i++) {
            let t = allTrash[i];
            t.update();
        }
        window.setTimeout(animate, 20);
    }
    //alle Funktionen für Elemente
    function drawWater() {
        shark.crc2.beginPath();
        shark.crc2.fillStyle = "#7EC0EE";
        shark.crc2.rect(0, 0, 1200, 600);
        shark.crc2.fill();
        shark.crc2.closePath();
    }
    function drawSand() {
        shark.crc2.beginPath();
        shark.crc2.fillStyle = "#EED8AE";
        shark.crc2.rect(0, 570, 1200, 30);
        shark.crc2.fill();
        shark.crc2.closePath();
    }
    function drawBubbles(_x, _y) {
        shark.crc2.beginPath();
        shark.crc2.fillStyle = "#E0FFFF";
        shark.crc2.strokeStyle = "#104E8B";
        shark.crc2.arc(_x, _y, 5, 0, 2 * Math.PI);
        shark.crc2.fill();
        shark.crc2.stroke();
        shark.crc2.closePath();
        shark.crc2.beginPath();
        shark.crc2.fillStyle = "#E0FFFF";
        shark.crc2.strokeStyle = "#104E8B";
        shark.crc2.arc(_x + 8, _y - 15, 6, 0, 2 * Math.PI);
        shark.crc2.fill();
        shark.crc2.stroke();
        shark.crc2.closePath();
        shark.crc2.beginPath();
        shark.crc2.fillStyle = "#E0FFFF";
        shark.crc2.strokeStyle = "#104E8B";
        shark.crc2.arc(_x - 5, _y - 30, 7, 0, 2 * Math.PI);
        shark.crc2.fill();
        shark.crc2.stroke();
        shark.crc2.closePath();
    }
    function checkFischEaten(_x, _y) {
        for (let i = 0; i < allFish.length; i++) {
            if (Math.abs(allFish[i].x - _x) < 10 && Math.abs(allFish[i].y - _y) < 10) {
                console.log("fisch hit");
                allFish[i].redraw();
                allFish.splice(i, 1);
                for (var j = 0; j < allFish.length; j++) {
                    let newFish = new shark.SmallFish(allFish[j].x, allFish[j].y);
                    newFish.draw();
                }
            }
        }
    }
    function checkTrashHit(_x, _y) {
        for (let i = 0; i < allTrash.length; i++) {
            if (Math.abs(allTrash[i].x - _x) < 10 && Math.abs(allTrash[i].y - _y) < 10) {
                console.log("Trash hit");
                allTrash[i].redraw();
                allTrash.splice(i, 1);
                for (var j; j < allTrash.length; j++) {
                    let newTrash = new shark.Trash(allTrash[j].x, allTrash[j].y);
                    newTrash.draw();
                }
                numHeart--;
                drawHearts();
            }
        }
    }
    function drawHearts() {
        shark.heartDraw.clearRect(0, 0, 1200, 600);
        for (let i = 0; i < numHeart; i++) {
            var img = new Image();
            img.onload = function () {
                shark.heartDraw.drawImage(img, 10, 10 + i * 40, 40, 40);
            };
            img.src = "heart.png";
        }
    }
    function GameEnds(_x) {
        gameEnd = true;
        shark.draw.clearRect(0, 0, 1200, 600);
        shark.draw.font = "250px Comic Sans MS";
        shark.draw.fillStyle = "red";
        shark.draw.textAlign = "center";
        shark.draw.fillText(_x, 600, 300);
    }
})(shark || (shark = {}));
//# sourceMappingURL=abschlussaufgabe.js.map