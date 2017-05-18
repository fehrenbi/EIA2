/*
Aufgabe 8
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 18.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace aufgabe8 {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    let allBees: Bee[] = [];
    let flowers: Flower[] = [];
    let amountBees: number = 10;
    let imgData: ImageData;
    export let sorts: string[] = ["Kleeblatt", "Pink", "Rose"];

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        
        drawMeadow();
        drawSky();
        drawMountain(1040, 250, "#7D7D7D");
        drawMountain(740, 250, "#7D7D7D");
        drawMountain(890, 250, "#BEBEBE");
        drawSun();   
             
        //Schleife für Malen der Zufallsblumen
        for (var n: number = 0; n < 50; n++) {
            var zufallBlume: number = Math.floor((Math.random() * 3) + 0);
            var x: number = (Math.random() * (1150 - 150)) + 150;
            var y: number = (Math.random() * (700 - 250)) + 250;
            //let f: Flower = new Flower(x, y, "");
            switch (zufallBlume) {
                case 0:
                    let r: FlowerRose = new FlowerRose(x, y);
                    r.draw();
                    break;
                case 1:
                    let p: FlowerPink = new FlowerPink(x, y);
                    p.draw();
                    break;
                case 2:
                    let k: Kleeblatt = new Kleeblatt(x, y);
                    k.draw();
                    break;
            }
        }

        //noch Baum und Bienenkorb malen, damit Blumen dahinter
        drawTree();
        drawBeehive();
        //drawObject(130, 385);
        
        //Array
        /*for (let i: number = 0; i < 5; i++) {
            flower.drawFlowerRose();
            flowers.push(flower);
        }
        console.log("Blumen-Array: " + flower);*/
           
        //gemaltes Bild abspeichern
        imgData = crc2.getImageData(0, 0, 1150, 700);       
         
        //neue Biene erstellen
        for (let i: number = 0; i < amountBees; i++) {
            let b: Bee = new Bee(130, 385);
            allBees[i] = b;
        }


        //setTimeout(animate)
        window.setTimeout(animate, 20);
        //setEventListener
        canvas.addEventListener("click", newBee);
    }

    function animate(): void {
        //Hintergrundbild aufrufen
        crc2.putImageData(imgData, 0, 0);
        for (let i: number = 0; i < allBees.length; i++) {
            let b: Bee = allBees[i];
            b.update();
        }
        window.setTimeout(animate, 20);
    }
    
    function newBee(): void {
        let b: Bee = new Bee(130, 385);
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

    function drawMeadow(): void {
        crc2.beginPath();
        crc2.fillStyle = "#32CD32";
        //crc2.rect(0, 0, canvas.width, canvas.height);
        crc2.rect(0, 0, 1150, 700);
        crc2.fill();
        crc2.closePath();
    }
    function drawSky(): void {
        crc2.beginPath();
        crc2.fillStyle = "#B0E2FF";
        //crc2.rect(0, 0, canvas.width, 250);
        crc2.rect(0, 0, 1150, 250);
        crc2.fill();
        crc2.closePath();
    }
    function drawMountain(_x: number, _y: number, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.moveTo(_x - 100, _y);
        crc2.lineTo(_x, _y - 200);
        crc2.lineTo(_x + 100, _y);
        crc2.closePath();
        crc2.fill();
    }
    function drawSun(): void {
        crc2.beginPath();
        crc2.fillStyle = "#FFFF00";
        crc2.arc(500, 250, 120, 0, Math.PI * 3, true);
        crc2.closePath();
        crc2.fill();
    }
    function drawTree(): void {
        crc2.beginPath();
        crc2.fillStyle = "#CD6839";
        //crc2.rect(0, 0, 150, canvas.height);
        crc2.rect(0, 0, 150, 700);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.fillStyle = "#228B22";
        crc2.moveTo(250, 150);
        //arc(..., ..., Radius, startwinkel, endwinkel)
        crc2.arc(210, 110, 150, 0, 360);
        crc2.closePath();
        crc2.fill();
        crc2.arc(30, 200, 150, 0, 360);
        crc2.closePath();
        crc2.fill();
        crc2.arc(250, 0, 150, 0, 360);
        crc2.closePath();
        crc2.fill();
        crc2.arc(0, 0, 150, 0, 360);
        crc2.closePath();
        crc2.fill();
    }
    function drawBeehive(): void {
        crc2.beginPath();
        crc2.fillStyle = "#8B4726";
        crc2.rect(100, 350, 70, 100);
        crc2.rect(90, 350, 90, 20);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.arc(135, 390, 10, 0, Math.PI * 2);
        crc2.fill();
        crc2.closePath();
    }
}