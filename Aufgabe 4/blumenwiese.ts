/*
Aufgabe 4
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 13.4.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

document.addEventListener("DOMContentLoaded", function(): void {
    
    let canvas: HTMLCanvasElement;
    canvas = document.getElementsByTagName("canvas")[0];
    console.log(canvas);
    
    let crc2: CanvasRenderingContext2D;
    crc2 = canvas.getContext("2d");
    
    //Blumenwiese
    crc2.beginPath();
    crc2.fillStyle = "#32CD32";
    crc2.rect(0, 0, canvas.width, canvas.height);
    crc2.fill();
    crc2.closePath();
    
    //Himmel
    crc2.beginPath();
    crc2.fillStyle = "#B0E2FF";
    crc2.rect(0, 0, canvas.width, 250);
    crc2.fill();
    crc2.closePath();
    
    drawMountain(1000, 250);
    drawMountain(700, 250);
    drawMountain(850, 250);
    
    //Funktionen
    
    function drawMountain (_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "#BEBEBE";
        crc2.strokeStyle = "#6E6E6E";
        crc2.moveTo(_x - 100, _y);
        crc2.lineTo(_x, _y - 200);
        crc2.lineTo(_x + 100, _y);
        crc2.closePath();
        crc2.fill();     
        crc2.stroke();       
    }
    
    
    
    
    
    
});