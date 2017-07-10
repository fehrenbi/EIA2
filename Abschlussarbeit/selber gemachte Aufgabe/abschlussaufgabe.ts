/*
Aufgabe 8
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 18.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace abschlussaufgabe {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    let allBubbles: Bubble[] = [];
    let allTrash: Trash[] = [];
    //let xTarget: number;
    //let yTarget: number;
    export let fische: Fish[] = [];
    let amountBees: number = 10;
    let imgData: ImageData;
    //export let sorts: string[] = ["Kleeblatt", "Pink", "Rose"];

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        
        drawWater();
        drawSand();
        
        //Luftblasen erstellen und fliegen lassen
        for (let i: number = 0; i < 6; i++) {
            let x: number = (Math.random() * (1200 - 0)) + 0;
            let y: number = (Math.random() * (600 - 0)) + 0;
            let b: Bubble = new Bubble(x, y);
            allBubbles.push(b);
        }

        //Müll erstellen 
        for (let i: number = 0; i < 30; i++) {
            let x: number = (Math.random() * (1200 - 0)) + 0;
            let y: number = (Math.random() * (600 - 0)) + 0;
            let t: Trash = new Trash(x, y);
            allBubbles.push(t);
        }
        
        //Schleife für Malen der zufällig gesetzten Fische
        for (var n: number = 0; n < 10; n++) {
            var zufallBlume: number = Math.floor((Math.random() * 3) + 0);
            var x: number = (Math.random() * (1200 - 0)) + 0;
            var y: number = (Math.random() * (600 - 0)) + 0;
            let f: SmallFish = new SmallFish(x, y);
            f.draw();
        }
        
        let s: Shark = new Shark(100, 100);
        s.draw();
        
        //Array
        /*for (let i: number = 0; i < 20; i++) {
            var x: number = (Math.random() * (1150 - 150)) + 150;
            var y: number = (Math.random() * (700 - 250)) + 250;
            let f: SmallFish = new SmallFish(x, y);
            f.draw();
            flowers.push(f);
        }
        console.log("Blumen-Array: " + flowers);*/
           
        //gemaltes Bild abspeichern
        imgData = crc2.getImageData(0, 0, 1200, 600);       
         
       /* //honeybees erstellen
        for (let i: number = 0; i < 5; i++) {
            let h: Honeybee = new Honeybee(130, 385, "", xTarget, yTarget);
            allBees.push(h);
        }
        console.log("Bienen-Array: " + allBees);*/

        //setTimeout(animate)
        window.setTimeout(animate, 20);
        //setEventListener
        //canvas.addEventListener("click", newBee);
    }

    function animate(): void {
        //Hintergrundbild aufrufen
        crc2.putImageData(imgData, 0, 0);
        for (let i: number = 0; i < allBubbles.length; i++) {
            let b: Bubble = allBubbles[i];
            b.update();
        }
        window.setTimeout(animate, 20);
    }
    
    /*function newBee(): void {
        let b: Bubble = new Bubble(130, 385);
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
        allBubbles.push(b); //Biene wird array hinzugefügt
    }*/


    //alle Funktionen für Elemente
    
    //NEUE ELEMENTE!!
    function drawWater(): void {
        crc2.beginPath();
        crc2.fillStyle = "#7EC0EE";
        crc2.rect(0, 0, 1200, 600);
        crc2.fill();
        crc2.closePath();
    }
    function drawSand(): void {
        crc2.beginPath();
        crc2.fillStyle = "#EED8AE";
        crc2.rect(0, 570, 1200, 30);
        crc2.fill();
        crc2.closePath();
    }
    function drawBubbles(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "#E0FFFF";
        crc2.strokeStyle = "#104E8B";
        crc2.arc(_x, _y, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = "#E0FFFF";
        crc2.strokeStyle = "#104E8B";
        crc2.arc(_x + 8, _y - 15, 6, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = "#E0FFFF";
        crc2.strokeStyle = "#104E8B";
        crc2.arc(_x - 5, _y - 30, 7, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
    }
    
}