/*
Aufgabe 3a
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 27.04.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var chessboard;
(function (chessboard) {
    window.addEventListener("load", init);
    var sum = 0;
    var div;
    function init() {
        placeDivs();
    }
    function placeDivs() {
        var reis = 1;
        for (var i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                console.log("i:" + i + " j: " + j);
                console.log("i % 2: " + i % 2);
                console.log("j % 2: " + j % 2);
                console.log(i % 2 == j % 2);
                console.log("-------------------");
                var element = document.createElement("div");
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
    function selectDiv(_event) {
        var clickedDiv = _event.target;
        if (clickedDiv.classList.toggle("selected")) {
            sum += parseInt(clickedDiv.textContent);
        }
        else {
            sum -= parseInt(clickedDiv.textContent);
        }
    }
    function updateReis(_event) {
        div.style.top = _event.clientY + 10 + "px";
        div.style.left = _event.clientX + 10 + "px";
        div.textContent = "Dezimalsystem: = " + sum + " Hexadezimalsystem: = " + sum.toString(16);
    }
})(chessboard || (chessboard = {}));
//# sourceMappingURL=a3a-new.js.map