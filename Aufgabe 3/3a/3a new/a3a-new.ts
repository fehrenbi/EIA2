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
    var div: HTMLDivElement;

    function init(): void {
        placeDivs();
    }

    function placeDivs(): void {
        var reis: number = 1;
        for (var i: number = 0; i < 8; i++) {
            for (let j: number = 0; j < 8; j++) {
                
                console.log("i:" + i + " j: " + j);
                console.log("i % 2: " + i % 2);
                console.log("j % 2: " + j % 2);   
                console.log(i % 2 == j % 2); 
                console.log("-------------------");
                
                var element: HTMLElement = document.createElement("div");
                if (i < 8) {
                    element.addEventListener("click", selectDiv);
                }
                if (i % 2 == j % 2) {
                    element.className = "board white";
                }
                else {
                    element.className = "board black";
                }

                element.innerText = " " + reis;
                reis *= 2;
                document.body.appendChild(element);
            }
            
            div = document.createElement("div");
            div.id = "move";
            document.addEventListener("mousemove", updateReis);
            document.body.appendChild(div);
        }
    }

    function selectDiv(_event: Event): void {
        var clickedDiv: HTMLDivElement = <HTMLDivElement>_event.target;
        if (clickedDiv.classList.toggle("selected")) {
            sum += parseInt(clickedDiv.textContent);
        }
        else {
            sum -= parseInt(clickedDiv.textContent);
        }
    }
    function updateReis(_event: MouseEvent): void {

        div.style.top = _event.clientY + 10 + "px";
        div.style.left = _event.clientX + 10 + "px";
        div.textContent = "Dezimalsystem: = " + sum + " Hexadezimalsystem: = " + sum.toString(16);
    }

}


