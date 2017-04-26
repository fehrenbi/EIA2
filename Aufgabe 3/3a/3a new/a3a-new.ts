/*
Aufgabe 3a
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 27.04.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace chessboard {
    
    window.addEventListener("load", init);
    
    var sum: number = 0;
    var div;
    
    function init(): void {
        placeDivs();
    }
    
    function placeDivs(): void {
        var reis: number = 1;
        var zeile: number = 0;
        for (var i: number = 0; i < 64; i++) {
            var element: HTMLElement = document.createElement("div");
            if (i < 8) {
                element.addEventListener("click", selectDiv);
            }
            if (((i + zeile) % 2) == 0) {
                element.className = "board white";
            }
            else {
                element.className = "board black";
            }
            if (((i + zeile) % 8) == 0) {
                zeile++;
            }
            element.innerText = " " + rice;
            rice *= 2;
            document.body.appendChild(element);
        }
        div = document.createElement("div");
        div.id = "move";
        document.addEventListener("mousemove", updateReis);
        document.body.appendChild(div);
    }
    
    function selectDiv(_event: Event): void {
        var clickedDiv: HTMLDivElement = event.target;
        if (clickedDiv.classList.toggle("selected")) {
            sum += parseInt(clickedDiv.textContent);
        }
        else {
            sum -= parseInt(clickedDiv.textContent);
        }
    }
    function updateReis(_event: Event): void {
        div.style.top = event.clientY + 10 + "px";
        div.style.left = event.clientX + 10 + "px";
        div.textContent = "Dezimalsystem: = " + sum + " Hexadezimalsystem: = " + sum.toString(16);
    }
    
}


