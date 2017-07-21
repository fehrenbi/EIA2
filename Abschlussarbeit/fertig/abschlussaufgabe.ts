/*
Aufgabe 8
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 18.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace shark {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    export let draw: CanvasRenderingContext2D;
    export let fischDraw: CanvasRenderingContext2D;
    export let heartDraw: CanvasRenderingContext2D;
    export let trashDraw: CanvasRenderingContext2D;

    let allBubbles: Bubble[] = [];
    let allTrash: Trash[] = [];
    let allFish: SmallFish[] = [];
    let imgData: ImageData;

    var hitBoxWidth: number = 20;
    var hitBoxHeigh: number = 20;

    var numBubbles: number = 6;
    var numTrash: number = 30;
    var numFish: number = 10;
    var numHeart: number = 3;

    var moved = false;
    var gameEnd = false;
    var lastTrash: Trash;

    var heart = document.getElementById("heart");

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        let drawCanvas: HTMLCanvasElement;
        drawCanvas = document.getElementsByTagName("canvas")[2];
        draw = drawCanvas.getContext("2d");

        let fischCanvas: HTMLCanvasElement;
        fischCanvas = document.getElementsByTagName("canvas")[1];
        fischDraw = fischCanvas.getContext("2d");

        let heartCanvas: HTMLCanvasElement;
        heartCanvas = document.getElementsByTagName("canvas")[3];
        heartDraw = heartCanvas.getContext("2d");

        let trashCanvas: HTMLCanvasElement;
        trashCanvas = document.getElementsByTagName("canvas")[4];
        trashDraw = trashCanvas.getContext("2d");



        drawWater();
        drawSand();
        drawHearts();

        //Luftblasen erstellen und fliegen lassen
        for (let i: number = 0; i < numBubbles; i++) {
            let x: number = (Math.random() * (1200 - 0)) + 0;
            let y: number = (Math.random() * (600 - 0)) + 0;
            let b: Bubble = new Bubble(x, y);
            allBubbles.push(b);
        }

        //Müll erstellen 
        for (let i: number = 0; i < numTrash; i++) {
            let x: number = (Math.random() * (1200 - 0)) + 0;
            let y: number = (Math.random() * (600 - 0)) + 0;
            let t: Trash = new Trash(x, y);
            allTrash.push(t);
        }

        //Schleife für Malen der zufällig gesetzten Fische
        for (var n: number = 0; n < numFish; n++) {
            var zufallBlume: number = Math.floor((Math.random() * 3) + 0);
            var x: number = (Math.random() * (1200 - 0)) + 0;
            var y: number = (Math.random() * (600 - 0)) + 0;
            let f: SmallFish = new SmallFish(x, y);
            f.draw();
            allFish.push(f);
        }


        let s: Shark = new Shark(100, 100);
        function updateShark(): void {
            if (!gameEnd) {
                s.draw();
                setTimeout(updateShark, 10);
            }
        }

        function getMousePos(canvas: any, evt: any) {
            var rect = canvas.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top
            };
        }

        drawCanvas.addEventListener('mousemove', function(evt) {
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
        imgData = crc2.getImageData(0, 0, 1200, 600);
        animate();
    }


    //Hintergrundbild aufrufen
    function animate(): void {
        crc2.putImageData(imgData, 0, 0);
        trashDraw.clearRect(0, 0, 1200, 600);
        for (let i: number = 0; i < allBubbles.length; i++) {
            let b: Bubble = allBubbles[i];
            b.update();
        }
        for (let i: number = 0; i < allTrash.length; i++) {
            let t: Trash = allTrash[i];
            t.update();
        }
        window.setTimeout(animate, 20);
    }


    //alle Funktionen für Elemente
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

    function checkFischEaten(_x: number, _y: number): void {
        for (let i: number = 0; i < allFish.length; i++) {
            if (Math.abs(allFish[i].x - _x) < 10 && Math.abs(allFish[i].y - _y) < 10) {
                console.log("fisch hit");
                allFish[i].redraw();
                allFish.splice(i, 1);

                for (var j: number = 0; j < allFish.length; j++) {
                    let newFish: SmallFish = new SmallFish(allFish[j].x, allFish[j].y);
                    newFish.draw();
                }
            }
        }
    }

    function checkTrashHit(_x: number, _y: number): void {
        for (let i: number = 0; i < allTrash.length; i++) {
            if (Math.abs(allTrash[i].x - _x) < 10 && Math.abs(allTrash[i].y - _y) < 10) {
                console.log("Trash hit");
                allTrash[i].redraw();
                allTrash.splice(i, 1);
                for (var j: number; j < allTrash.length; j++) {
                    let newTrash: Trash = new Trash(allTrash[j].x, allTrash[j].y);
                    newTrash.draw();
                }
                numHeart--;
                drawHearts();
            }
        }

    }

    function drawHearts(): void {
        heartDraw.clearRect(0, 0, 1200, 600);
        for (let i: number = 0; i < numHeart; i++) {
            var img = new Image();
            img.onload = function() {
                heartDraw.drawImage(img, 10, 10 + i * 40, 40, 40);
            }
            img.src = "heart.png";
        }
    }

    function GameEnds(_x: string) {
        gameEnd = true;
        draw.clearRect(0, 0, 1200, 600);
        draw.font = "250px Comic Sans MS";
        draw.fillStyle = "red";
        draw.textAlign = "center";
        draw.fillText(_x, 600, 300);
    }
}