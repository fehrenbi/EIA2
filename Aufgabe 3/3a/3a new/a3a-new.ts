/*
Aufgabe 3a
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 24.04.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace aufgabe3a {
    
    document.addEventListener("DOMContentLoaded", function (): void {
        
        let reis: number = 1;
        
        function placeDivs(): void {
            var zeile: number = 0;
            for (var i: number = 0; i < 64; i++) {
                var element = document.createElement("div");
                if (((i + zeile) % 2) == 0) {
                    element.className = "board white";
                    }
                else {
                    element.className = "board black";
                    }
                if (((i + zeile) % 8) == 0) {
                    zeile++;
                }
                element.innerText = "" + reis;
                reis *= 2;
                document.body.appendChild(element);
        }
    });
}
