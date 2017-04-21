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
    
    drawMountain(1040, 250, "#7D7D7D");
    drawMountain(740, 250, "#7D7D7D" );
    drawMountain(890, 250, "#BEBEBE");
    
    drawSun(400, 250);
    
    drawTree();    
    
//Zufällige Blumen setzen
   for (var n: number = 0; n < 50; n++) {
        var zufallBlume: number = Math.floor((Math.random() * 3) + 0);
        let _x: number = (Math.random() * 1150 - 0) + 0);
        let _y: number = (Math.random() * 700 - 250) + 250);
        switch (zufallBlume) {
            case 0:
                drawKleeblatt(_x, _y);
                break;
            case 1:
                drawFlowerPink(_x, _y);
                break;
            case 2:
                drawFlowerRose(_x, _y);
                break;
            }
       }
}
    
    drawKleeblatt(500, 400);
    
    drawFlowerPink(600, 400);
    
    drawFlowerRose (700, 400);
   
    
 //Funktionen

    function drawMountain (_x: number, _y: number, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.moveTo(_x - 100, _y);
        crc2.lineTo(_x, _y - 200);
        crc2.lineTo(_x + 100, _y);
        crc2.closePath();
        crc2.fill();   
    }
    
    function drawSun (_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "#FFFF00";
        crc2.arc(500, 250, 120, 0, Math.PI * 3, true);
        crc2.closePath();
        crc2.fill();
    }    
    
    function drawTree (): void {
        crc2.beginPath();
        crc2.fillStyle = "#8B5A2B";
        crc2.rect(0, 0, 150, canvas.height);
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
    
    function drawKleeblatt (_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "#228B22";
        crc2.arc(_x, _y, 10, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();   
        crc2.beginPath();
        crc2.fillStyle = "#228B22";
        crc2.arc(_x + 15, _y, 10, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill(); 
        crc2.beginPath();
        crc2.fillStyle = "#228B22";
        crc2.arc(_x + 15, _y + 15, 10, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();    
        crc2.beginPath();
        crc2.fillStyle = "#228B22";
        crc2.arc(_x, _y + 15, 10, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();   
        crc2.beginPath();
        crc2.strokeStyle = "#228B22";
        crc2.fillStyle = "#228B22";
        crc2.moveTo(_x + 5, _y + 5);
        crc2.lineTo(_x + 5, _y + 30);
        crc2.lineTo(_x + 10, _y + 10);
        crc2.lineTo(_x, _y + 15);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();  
    }
    
    function drawFlowerPink (_x: number, _y: number): void {
        //Blüte
        crc2.beginPath();
        crc2.fillStyle = "#FF1493";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 16, _y - 24);
        crc2.lineTo(_x + 8, _y - 16);
        crc2.lineTo(_x, _y - 24);
        crc2.lineTo(_x - 8, _y - 16);
        crc2.lineTo(_x - 16, _y - 24);
        crc2.closePath();
        crc2.fill();
        //Stengel
        crc2.beginPath();
        crc2.strokeStyle = "#228B22";
        crc2.fillStyle = "#228B22";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y + 30);
        crc2.lineTo(_x + 10, _y + 10);
        crc2.lineTo(_x, _y + 15);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();   
    }
    
    function drawFlowerRose (_x: number, _y: number): void {
        //Blütenblätter
        crc2.beginPath();
        crc2.fillStyle = "#FFB5C5";
        crc2.arc(_x + 10, _y + 10, 10, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#FFB5C5";
        crc2.arc(_x + 10, _y - 10, 10, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#FFB5C5";
        crc2.arc(_x - 10, _y + 10, 10, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#FFB5C5";
        crc2.arc(_x - 10, _y - 10, 10, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        //Blüte
        crc2.beginPath();
        crc2.fillStyle = "#FFFF00";
        crc2.arc(_x, _y, 10, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        //Stengel
        crc2.beginPath();
        crc2.strokeStyle = 
        crc2.fillStyle = "#228B22";
        crc2.moveTo(_x, _y + 10);
        crc2.lineTo(_x, _y + 40);
        crc2.lineTo(_x + 10, _y + 20);
        crc2.lineTo(_x, _y + 30);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();   
    }
 
});