/*
Aufgabe 8
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 18.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var aufgabe8;
(function (aufgabe8) {
    window.addEventListener("load", init);
    let allBees = [];
    let xTarget;
    let yTarget;
    aufgabe8.flowers = [];
    let amountBees = 10;
    let imgData;
    aufgabe8.sorts = ["Kleeblatt", "Pink", "Rose"];
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        aufgabe8.crc2 = canvas.getContext("2d");
        drawMeadow();
        drawSky();
        drawMountain(1040, 250, "#7D7D7D");
        drawMountain(740, 250, "#7D7D7D");
        drawMountain(890, 250, "#BEBEBE");
        drawSun();
        //Schleife für Malen der Zufallsblumen
        for (var n = 0; n < 50; n++) {
            var zufallBlume = Math.floor((Math.random() * 3) + 0);
            var x = (Math.random() * (1150 - 150)) + 150;
            var y = (Math.random() * (700 - 250)) + 250;
            //let f: Flower = new Flower(x, y, "");
            switch (zufallBlume) {
                case 0:
                    let r = new aufgabe8.FlowerRose(x, y);
                    r.draw();
                    break;
                case 1:
                    let p = new aufgabe8.FlowerPink(x, y);
                    p.draw();
                    break;
                case 2:
                    let k = new aufgabe8.Kleeblatt(x, y);
                    k.draw();
                    break;
            }
        }
        //noch Baum und Bienenkorb malen, damit Blumen dahinter
        drawTree();
        drawBeehive();
        //drawObject(130, 385);
        //Array
        for (let i = 0; i < 5; i++) {
            var x = (Math.random() * (1150 - 150)) + 150;
            var y = (Math.random() * (700 - 250)) + 250;
            let f = new aufgabe8.FlowerRose(x, y);
            f.draw();
            aufgabe8.flowers.push(f);
        }
        console.log("Blumen-Array: " + aufgabe8.flowers);
        //gemaltes Bild abspeichern
        imgData = aufgabe8.crc2.getImageData(0, 0, 1150, 700);
        //neue Biene erstellen
        for (let i = 0; i < amountBees; i++) {
            let b = new aufgabe8.Bee(130, 385);
            allBees.push(b);
        }
        //honeybees erstellen
        for (let i = 0; i < 5; i++) {
            let h = new aufgabe8.Honeybee(130, 385, "", xTarget, yTarget);
            allBees.push(h);
        }
        console.log("Bienen-Array: " + allBees);
        //setTimeout(animate)
        window.setTimeout(animate, 20);
        //setEventListener
        canvas.addEventListener("click", newBee);
    }
    function animate() {
        //Hintergrundbild aufrufen
        aufgabe8.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < allBees.length; i++) {
            let b = allBees[i];
            b.update();
        }
        window.setTimeout(animate, 20);
    }
    function newBee() {
        let b = new aufgabe8.Bee(130, 385);
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
        aufgabe8.crc2.beginPath();
        aufgabe8.crc2.fillStyle = "#32CD32";
        //crc2.rect(0, 0, canvas.width, canvas.height);
        aufgabe8.crc2.rect(0, 0, 1150, 700);
        aufgabe8.crc2.fill();
        aufgabe8.crc2.closePath();
    }
    function drawSky() {
        aufgabe8.crc2.beginPath();
        aufgabe8.crc2.fillStyle = "#B0E2FF";
        //crc2.rect(0, 0, canvas.width, 250);
        aufgabe8.crc2.rect(0, 0, 1150, 250);
        aufgabe8.crc2.fill();
        aufgabe8.crc2.closePath();
    }
    function drawMountain(_x, _y, _fillColor) {
        aufgabe8.crc2.beginPath();
        aufgabe8.crc2.fillStyle = _fillColor;
        aufgabe8.crc2.moveTo(_x - 100, _y);
        aufgabe8.crc2.lineTo(_x, _y - 200);
        aufgabe8.crc2.lineTo(_x + 100, _y);
        aufgabe8.crc2.closePath();
        aufgabe8.crc2.fill();
    }
    function drawSun() {
        aufgabe8.crc2.beginPath();
        aufgabe8.crc2.fillStyle = "#FFFF00";
        aufgabe8.crc2.arc(500, 250, 120, 0, Math.PI * 3, true);
        aufgabe8.crc2.closePath();
        aufgabe8.crc2.fill();
    }
    function drawTree() {
        aufgabe8.crc2.beginPath();
        aufgabe8.crc2.fillStyle = "#CD6839";
        //crc2.rect(0, 0, 150, canvas.height);
        aufgabe8.crc2.rect(0, 0, 150, 700);
        aufgabe8.crc2.fill();
        aufgabe8.crc2.closePath();
        aufgabe8.crc2.beginPath();
        aufgabe8.crc2.fillStyle = "#228B22";
        aufgabe8.crc2.moveTo(250, 150);
        //arc(..., ..., Radius, startwinkel, endwinkel)
        aufgabe8.crc2.arc(210, 110, 150, 0, 360);
        aufgabe8.crc2.closePath();
        aufgabe8.crc2.fill();
        aufgabe8.crc2.arc(30, 200, 150, 0, 360);
        aufgabe8.crc2.closePath();
        aufgabe8.crc2.fill();
        aufgabe8.crc2.arc(250, 0, 150, 0, 360);
        aufgabe8.crc2.closePath();
        aufgabe8.crc2.fill();
        aufgabe8.crc2.arc(0, 0, 150, 0, 360);
        aufgabe8.crc2.closePath();
        aufgabe8.crc2.fill();
    }
    function drawBeehive() {
        aufgabe8.crc2.beginPath();
        aufgabe8.crc2.fillStyle = "#8B4726";
        aufgabe8.crc2.rect(100, 350, 70, 100);
        aufgabe8.crc2.rect(90, 350, 90, 20);
        aufgabe8.crc2.fill();
        aufgabe8.crc2.closePath();
        aufgabe8.crc2.beginPath();
        aufgabe8.crc2.fillStyle = "#000000";
        aufgabe8.crc2.arc(135, 390, 10, 0, Math.PI * 2);
        aufgabe8.crc2.fill();
        aufgabe8.crc2.closePath();
    }
})(aufgabe8 || (aufgabe8 = {}));
//# sourceMappingURL=aufgabe8.js.map