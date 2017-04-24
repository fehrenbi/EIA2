/*
Aufgabe 3a
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 24.04.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var aufgabe3a;
(function (aufgabe3a) {
    document.addEventListener("DOMContentLoaded", function () {
        let reis = 1;
        function placeDivs() {
            var zeile = 0;
            for (var i = 0; i < 64; i++) {
                var element = document.createElement("div");
                if (((i + zeile) % 2) == 0) {
                    element.className = "board white";
                }
            }
        }
    });
})(aufgabe3a || (aufgabe3a = {}));
//# sourceMappingURL=a3a-new.js.map