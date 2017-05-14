/*
Aufgabe 7
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 12.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var new7;
(function (new7) {
    window.addEventListener("load", init);
    let allBees = [];
    let flowers = [];
    let amountBees = 10;
    let imgData;
    new7.sorts = ["Kleeblatt", "Pink", "Rose"];
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        new7.crc2 = canvas.getContext("2d");
        drawMeadow();
        drawSky();
        drawMountain(1040, 250, "#7D7D7D");
        drawMountain(740, 250, "#7D7D7D");
        drawMountain(890, 250, "#BEBEBE");
        drawSun();
        //Schleife für Malen der Zufallsblumen
        for (var n = 0; n < 50; n++) {
            var zufallBlume = Math.round(Math.random() * (new7.sorts.length - 1));
            var x = (Math.random() * (1150 - 150)) + 150;
            var y = (Math.random() * (700 - 250)) + 250;
            var flower = new new7.Flower(x, y, new7.sorts[zufallBlume]);
            flower.draw();
        }
        //noch Baum und Bienenkorb malen, damit Blumen dahinter
        drawTree();
        drawBeehive();
        //drawObject(130, 385);
        for (let i = 0; i < 5; i++) {
            flower.drawFlowerRose();
            flowers.push(flower);
        }
        console.log("Blumen-Array: " + flower);
        //gemaltes Bild abspeichern
        imgData = new7.crc2.getImageData(0, 0, 1150, 700);
        //neue Biene erstellen
        for (let i = 0; i < amountBees; i++) {
            let b = new new7.Bee(130, 385);
            allBees[i] = b;
        }
        //setTimeout(animate)
        window.setTimeout(animate, 20);
        //setEventListener
        canvas.addEventListener("click", newBee);
    }
    function animate() {
        //Hintergrundbild aufrufen
        new7.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < allBees.length; i++) {
            let b = allBees[i];
            b.update();
        }
        window.setTimeout(animate, 20);
    }
    function newBee() {
        let b = new new7.Bee(130, 385);
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
        b.update(); //Biene wird erstellt
        allBees.push(b); //Biene wird array hinzugefügt
    }
    //alle Funktionen für Elemente
    function drawMeadow() {
        new7.crc2.beginPath();
        new7.crc2.fillStyle = "#32CD32";
        //crc2.rect(0, 0, canvas.width, canvas.height);
        new7.crc2.rect(0, 0, 1150, 700);
        new7.crc2.fill();
        new7.crc2.closePath();
    }
    function drawSky() {
        new7.crc2.beginPath();
        new7.crc2.fillStyle = "#B0E2FF";
        //crc2.rect(0, 0, canvas.width, 250);
        new7.crc2.rect(0, 0, 1150, 250);
        new7.crc2.fill();
        new7.crc2.closePath();
    }
    function drawMountain(_x, _y, _fillColor) {
        new7.crc2.beginPath();
        new7.crc2.fillStyle = _fillColor;
        new7.crc2.moveTo(_x - 100, _y);
        new7.crc2.lineTo(_x, _y - 200);
        new7.crc2.lineTo(_x + 100, _y);
        new7.crc2.closePath();
        new7.crc2.fill();
    }
    function drawSun() {
        new7.crc2.beginPath();
        new7.crc2.fillStyle = "#FFFF00";
        new7.crc2.arc(500, 250, 120, 0, Math.PI * 3, true);
        new7.crc2.closePath();
        new7.crc2.fill();
    }
    function drawTree() {
        new7.crc2.beginPath();
        new7.crc2.fillStyle = "#CD6839";
        //crc2.rect(0, 0, 150, canvas.height);
        new7.crc2.rect(0, 0, 150, 700);
        new7.crc2.fill();
        new7.crc2.closePath();
        new7.crc2.beginPath();
        new7.crc2.fillStyle = "#228B22";
        new7.crc2.moveTo(250, 150);
        //arc(..., ..., Radius, startwinkel, endwinkel)
        new7.crc2.arc(210, 110, 150, 0, 360);
        new7.crc2.closePath();
        new7.crc2.fill();
        new7.crc2.arc(30, 200, 150, 0, 360);
        new7.crc2.closePath();
        new7.crc2.fill();
        new7.crc2.arc(250, 0, 150, 0, 360);
        new7.crc2.closePath();
        new7.crc2.fill();
        new7.crc2.arc(0, 0, 150, 0, 360);
        new7.crc2.closePath();
        new7.crc2.fill();
    }
    function drawBeehive() {
        new7.crc2.beginPath();
        new7.crc2.fillStyle = "#8B4726";
        new7.crc2.rect(100, 350, 70, 100);
        new7.crc2.rect(90, 350, 90, 20);
        new7.crc2.fill();
        new7.crc2.closePath();
        new7.crc2.beginPath();
        new7.crc2.fillStyle = "#000000";
        new7.crc2.arc(135, 390, 10, 0, Math.PI * 2);
        new7.crc2.fill();
        new7.crc2.closePath();
    }
})(new7 || (new7 = {}));
//# sourceMappingURL=aufgabe7.js.map