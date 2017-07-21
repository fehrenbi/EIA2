/*
Aufgabe 8
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 18.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var shark;
(function (shark) {
    class Fish {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        draw() {
            //abstract
        }
    }
    shark.Fish = Fish;
})(shark || (shark = {}));
//# sourceMappingURL=aufgabeNewFlower.js.map