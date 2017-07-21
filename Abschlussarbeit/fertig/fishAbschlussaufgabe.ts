/*
Aufgabe 8
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 18.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace shark { 
    export class Fish {
        x: number;
        y: number;
        
        constructor (_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }
        draw(): void {
            //abstract
        }
    }
}
    