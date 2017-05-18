/*
Aufgabe 8
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 18.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var aufgabe8;
(function (aufgabe8) {
    class Flower {
        constructor(_x, _y, _sorte) {
            this.x = _x;
            this.y = _y;
            this.sorte = _sorte;
        }
        draw() {
            //abstract
        }
    }
    aufgabe8.Flower = Flower;
})(aufgabe8 || (aufgabe8 = {}));
//# sourceMappingURL=aufgabe8flower.js.map