/*
Aufgabe 8
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 18.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace aufgabe8 {
    export class Flower {
        x: number;
        y: number;
        sorte: string;
        
        constructor (_x: number, _y: number, _sorte: string) {
            this.x = _x;
            this.y = _y;
            this.sorte = _sorte;
        }
        draw(): void {
            //abstract
        }
    }
}
    