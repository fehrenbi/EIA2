/*
Aufgabe 5
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 28.4.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var aufgabe7;
(function (aufgabe7) {
    window.addEventListener("load", init);
    let allBees = [];
    let amountBees = 10;
    let imgData;
    aufgabe7.sorts = ["Kleeblatt", "Pink", "Rose"];
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        aufgabe7.crc2 = canvas.getContext("2d");
        drawMeadow();
        drawSky();
        drawMountain(1040, 250, "#7D7D7D");
        drawMountain(740, 250, "#7D7D7D");
        drawMountain(890, 250, "#BEBEBE");
        drawSun();
        //Schleife für Malen der Zufallsblumen
        for (var n = 0; n < 50; n++) {
            var zufallBlume = Math.round(Math.random() * (aufgabe7.sorts.length - 1));
            let x = (Math.random() * (1150 - 150)) + 150;
            let y = (Math.random() * (700 - 250)) + 250;
            let flower = new aufgabe7.Flower(x, y, aufgabe7.sorts[zufallBlume]);
            flower.draw();
        }
        //noch Baum und Bienenkorb malen, damit Blumen dahinter
        drawTree();
        drawBeehive();
        //drawObject(130, 385);
        //gemaltes Bild abspeichern
        imgData = aufgabe7.crc2.getImageData(0, 0, 1150, 700);
        //neue Biene erstellen
        for (let i; i < amountBees; i++) {
            let b = new aufgabe7.Bee(130, 385);
            allBees[i] = b;
        }
        //For-Schleife, Startposition für Bienen in Array abspeichern
        /*for (let i: number = 0; i < amountBees; i++) {
            let b: Bee = {x: 0, y: 0, color: "yellow", size: true };
            b.x = 130;
            b.y = 385;
            allBees.push(b);
        }*/
        //setTimeout(animate)
        window.setTimeout(animate, 20);
        //setEventListener
        canvas.addEventListener("click", newBee);
    }
    function animate() {
        //Hintergrundbild aufrufen
        aufgabe7.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < allBees.length; i++) {
            let b = allBees[i];
            b.update();
        }
        window.setTimeout(animate, 20);
    }
    function newBee() {
        let b = new aufgabe7.Bee(130, 385);
        switch (Math.floor((Math.random() * 4) + 1)) {
            case 1:
                b.color = "blue";
                break;
            case 2:
                b.color = "green";
                break;
            case 3:
                b.color = "red";
                break;
            case 4:
                b.color = "yellow";
                break;
        }
    }
    //b.size = Math.round(Math.random()) == 1;*/
    //    allBees.push(b);
    //alle Funktionen für Elemente
    /* function drawBee(_x: number, _y: number, _color: string): void {
         crc2.beginPath();
         crc2.fillStyle = "#C6E2FF";
         crc2.arc(_x - 4, _y - 7, 10, 0, 2 * Math.PI);
         crc2.fill();
         crc2.closePath();
         crc2.beginPath();
         crc2.fillStyle = "#000000";
         crc2.rect(_x - 10, _y, 10, 10);
         crc2.fill();
         crc2.closePath();
         crc2.beginPath();
         crc2.fillStyle = _color; //"#ffff00";
         crc2.arc(_x, _y, 10, 0, 2 * Math.PI);
         crc2.fill();
         crc2.closePath();
         crc2.beginPath();
         crc2.fillStyle = "#000000";
         crc2.arc(_x + 2, _y - 2, 2, 0, 2 * Math.PI);
         crc2.fill();
         crc2.closePath();
     }*/
    function drawMeadow() {
        aufgabe7.crc2.beginPath();
        aufgabe7.crc2.fillStyle = "#32CD32";
        //crc2.rect(0, 0, canvas.width, canvas.height);
        aufgabe7.crc2.rect(0, 0, 1150, 700);
        aufgabe7.crc2.fill();
        aufgabe7.crc2.closePath();
    }
    function drawSky() {
        aufgabe7.crc2.beginPath();
        aufgabe7.crc2.fillStyle = "#B0E2FF";
        //crc2.rect(0, 0, canvas.width, 250);
        aufgabe7.crc2.rect(0, 0, 1150, 250);
        aufgabe7.crc2.fill();
        aufgabe7.crc2.closePath();
    }
    function drawMountain(_x, _y, _fillColor) {
        aufgabe7.crc2.beginPath();
        aufgabe7.crc2.fillStyle = _fillColor;
        aufgabe7.crc2.moveTo(_x - 100, _y);
        aufgabe7.crc2.lineTo(_x, _y - 200);
        aufgabe7.crc2.lineTo(_x + 100, _y);
        aufgabe7.crc2.closePath();
        aufgabe7.crc2.fill();
    }
    function drawSun() {
        aufgabe7.crc2.beginPath();
        aufgabe7.crc2.fillStyle = "#FFFF00";
        aufgabe7.crc2.arc(500, 250, 120, 0, Math.PI * 3, true);
        aufgabe7.crc2.closePath();
        aufgabe7.crc2.fill();
    }
    function drawTree() {
        aufgabe7.crc2.beginPath();
        aufgabe7.crc2.fillStyle = "#CD6839";
        //crc2.rect(0, 0, 150, canvas.height);
        aufgabe7.crc2.rect(0, 0, 150, 700);
        aufgabe7.crc2.fill();
        aufgabe7.crc2.closePath();
        aufgabe7.crc2.beginPath();
        aufgabe7.crc2.fillStyle = "#228B22";
        aufgabe7.crc2.moveTo(250, 150);
        //arc(..., ..., Radius, startwinkel, endwinkel)
        aufgabe7.crc2.arc(210, 110, 150, 0, 360);
        aufgabe7.crc2.closePath();
        aufgabe7.crc2.fill();
        aufgabe7.crc2.arc(30, 200, 150, 0, 360);
        aufgabe7.crc2.closePath();
        aufgabe7.crc2.fill();
        aufgabe7.crc2.arc(250, 0, 150, 0, 360);
        aufgabe7.crc2.closePath();
        aufgabe7.crc2.fill();
        aufgabe7.crc2.arc(0, 0, 150, 0, 360);
        aufgabe7.crc2.closePath();
        aufgabe7.crc2.fill();
    }
    function drawBeehive() {
        aufgabe7.crc2.beginPath();
        aufgabe7.crc2.fillStyle = "#8B4726";
        aufgabe7.crc2.rect(100, 350, 70, 100);
        aufgabe7.crc2.rect(90, 350, 90, 20);
        aufgabe7.crc2.fill();
        aufgabe7.crc2.closePath();
        aufgabe7.crc2.beginPath();
        aufgabe7.crc2.fillStyle = "#000000";
        aufgabe7.crc2.arc(135, 390, 10, 0, Math.PI * 2);
        aufgabe7.crc2.fill();
        aufgabe7.crc2.closePath();
    }
})(aufgabe7 || (aufgabe7 = {}));
//# sourceMappingURL=blumenwiese7.js.map