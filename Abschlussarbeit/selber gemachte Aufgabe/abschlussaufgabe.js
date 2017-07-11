/*
Aufgabe 8
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 18.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var abschlussaufgabe;
(function (abschlussaufgabe) {
    window.addEventListener("load", init);
    let allBubbles = [];
    let allTrash = [];
    abschlussaufgabe.fische = [];
    let amountBees = 10;
    let imgData;
    //export var mouseX: number = event.clientX;
    //export var mouseY: number = event.clientY;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        abschlussaufgabe.crc2 = canvas.getContext("2d");
        drawWater();
        drawSand();
        //Luftblasen erstellen und fliegen lassen
        for (let i = 0; i < 6; i++) {
            let x = (Math.random() * (1200 - 0)) + 0;
            let y = (Math.random() * (600 - 0)) + 0;
            let b = new abschlussaufgabe.Bubble(x, y);
            allBubbles.push(b);
        }
        //Müll erstellen 
        for (let i = 0; i < 30; i++) {
            let x = (Math.random() * (1200 - 0)) + 0;
            let y = (Math.random() * (600 - 0)) + 0;
            let t = new abschlussaufgabe.Trash(x, y);
            allBubbles.push(t);
        }
        //Schleife für Malen der zufällig gesetzten Fische
        for (var n = 0; n < 10; n++) {
            var zufallBlume = Math.floor((Math.random() * 3) + 0);
            var x = (Math.random() * (1200 - 0)) + 0;
            var y = (Math.random() * (600 - 0)) + 0;
            let f = new abschlussaufgabe.SmallFish(x, y);
            f.draw();
        }
        let s = new abschlussaufgabe.Shark(100, 100);
        s.draw();
        canvas.addEventListener("mousedown", moveShark);
        function moveShark(_eventObject) {
            let s = new abschlussaufgabe.Shark(220, 220);
            s.move();
        }
        //gemaltes Bild abspeichern
        imgData = abschlussaufgabe.crc2.getImageData(0, 0, 1200, 600);
        //setTimeout(animate)
        window.setTimeout(animate, 20);
        //setEventListener
        //canvas.addEventListener("click", newBee);
    }
    //Hintergrundbild aufrufen
    function animate() {
        abschlussaufgabe.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < allBubbles.length; i++) {
            let b = allBubbles[i];
            b.update();
        }
        window.setTimeout(animate, 20);
    }
    //alle Funktionen für Elemente
    function drawWater() {
        abschlussaufgabe.crc2.beginPath();
        abschlussaufgabe.crc2.fillStyle = "#7EC0EE";
        abschlussaufgabe.crc2.rect(0, 0, 1200, 600);
        abschlussaufgabe.crc2.fill();
        abschlussaufgabe.crc2.closePath();
    }
    function drawSand() {
        abschlussaufgabe.crc2.beginPath();
        abschlussaufgabe.crc2.fillStyle = "#EED8AE";
        abschlussaufgabe.crc2.rect(0, 570, 1200, 30);
        abschlussaufgabe.crc2.fill();
        abschlussaufgabe.crc2.closePath();
    }
    function drawBubbles(_x, _y) {
        abschlussaufgabe.crc2.beginPath();
        abschlussaufgabe.crc2.fillStyle = "#E0FFFF";
        abschlussaufgabe.crc2.strokeStyle = "#104E8B";
        abschlussaufgabe.crc2.arc(_x, _y, 5, 0, 2 * Math.PI);
        abschlussaufgabe.crc2.fill();
        abschlussaufgabe.crc2.stroke();
        abschlussaufgabe.crc2.closePath();
        abschlussaufgabe.crc2.beginPath();
        abschlussaufgabe.crc2.fillStyle = "#E0FFFF";
        abschlussaufgabe.crc2.strokeStyle = "#104E8B";
        abschlussaufgabe.crc2.arc(_x + 8, _y - 15, 6, 0, 2 * Math.PI);
        abschlussaufgabe.crc2.fill();
        abschlussaufgabe.crc2.stroke();
        abschlussaufgabe.crc2.closePath();
        abschlussaufgabe.crc2.beginPath();
        abschlussaufgabe.crc2.fillStyle = "#E0FFFF";
        abschlussaufgabe.crc2.strokeStyle = "#104E8B";
        abschlussaufgabe.crc2.arc(_x - 5, _y - 30, 7, 0, 2 * Math.PI);
        abschlussaufgabe.crc2.fill();
        abschlussaufgabe.crc2.stroke();
        abschlussaufgabe.crc2.closePath();
    }
})(abschlussaufgabe || (abschlussaufgabe = {}));
//# sourceMappingURL=abschlussaufgabe.js.map