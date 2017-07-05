/*
Abschlussarbeit:
Objektorientierte Programmierung: Snake
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 5.7.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace abschlussarbeit {
    
    export let crc2: CanvasRenderingContext2D;
    
    function init (_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        
        drawGround();
    }
    
    
// alle Funktionen für Canvas-Elemente
    
    function drawGround(): void {
        crc2.beginPath();
        crc2.fillStyle = "#CDAA7D";
        crc2.rect(0, 0, 1150, 700);
        crc2.fill();
        crc2.closePath();
    }
}
