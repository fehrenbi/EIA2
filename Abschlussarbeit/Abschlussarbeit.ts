/*
Abschlussarbeit:
Objektorientierte Programmierung: Snake
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 5.7.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace abschlussarbeit {
    
    window.addEventListener("load", init);
    
    export let crc2: CanvasRenderingContext2D;
    
    
    function init (_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        
        drawGround();
        drawSpider(200, 200);
    }
    
    
// alle Funktionen für Canvas-Elemente
    
    function drawGround(): void {
        crc2.beginPath();
        crc2.fillStyle = "#CDAA7D";
        crc2.rect(0, 0, 1200, 600);
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
