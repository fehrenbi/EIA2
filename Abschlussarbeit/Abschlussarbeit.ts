/*
Abschlussarbeit:
Objektorientierte Programmierung: Snake
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 5.7.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace hai {
    
    window.addEventListener("load", init);
    
    export let crc2: CanvasRenderingContext2D;
    let allSpiders: Fish[] = [];
    
    
    function init (_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        
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
        for (var n: number = 0; n < 10; n++) {
            var x: number = (Math.random() * (1200 - 0)) + 0;
            var y: number = (Math.random() * (700 - 0)) + 0;
            let f: Fish = new Fish(x, y);
            f.draw();
        }
        
        

        //alert("Use  ◄ ▲ ▼ ► ► ◄ ▲ ▼ ");
    }
    
    
// alle Funktionen für Canvas-Elemente
    
    function drawGround(): void {
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
    function drawFish(_x: number, _y: number): void {
        //Körper
        crc2.beginPath();
        crc2.fillStyle = "#FF4040";
        crc2.arc(_x, _y, 10, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        //Auge
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.arc(_x + 2, _y - 1 , 2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        //Flosse
        crc2.beginPath();
        crc2.fillStyle = "#FF4040";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x - 15, _y - 9);
        crc2.lineTo(_x - 15, _y + 9);
        crc2.lineTo(_x, _y);
        crc2.fill();
        crc2.closePath();
    }
    
    function drawSnake(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "#BCEE68";
        crc2.rect(_x, _y, 25, 100);
        crc2.fill();
        crc2.closePath();
        //Zunge
        crc2.beginPath();
        crc2.fillStyle = "#CD3700";
        crc2.arc(_x + 12, _y - 22, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        //Kopf
        crc2.beginPath();
        crc2.fillStyle = "#BCEE68";
        crc2.arc(_x + 12, _y, 20, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }
    
    function drawSpider(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.arc(_x + 2, _y - 2, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x - 10, _y - 5);
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x - 10, _y + 5);
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 14, _y - 5);
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 14, _y + 5);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = "#FFFFFF";
        crc2.arc(_x, _y - 3, 1, 0, 2 * Math.PI);
        crc2.arc(_x + 4, _y - 3, 1, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }
    
}
