/*
Aufgabe 2a
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 31.03.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
let rice: number = 1;

window.onload = function () {
    placeDivs();
};

function placeDivs(): void {
   // var rice: number = 1;
    var zeile: number = 0;
    for (var i: number = 0; i < 64; i++) {
        var element = document.createElement("div");
        if (((i + zeile) % 2) == 0) {
            element.className = "board white";
        }
        else {
            element.className = "board black";
        }
        if (((i + 1) % 8) == 0) {
            zeile++;
        }
        element.innerText = "" + rice;
        rice *= 2;
        document.body.appendChild(element);
    }
}

    document.getElementsByTagName("div")[0];
    let divList = document.getElementsByTagName("div");
    //Box, die sich mitbewegt
    let box = document.createElement("div");
    document.body.appendChild(box);
    box.innerText = "" + rice;
    box.style.display = "none";
    for (let i = 0; i < 8; i++) {
        divList[i].addEventListener("click", function(){
            selection();
            }
        divList[i].addEventListener("mousemove", function(){
            movingBox();
            }
    }
    function selection {
        let clickedDiv = _event.target;
        console.log("border color = " + clickedDiv.style.border);
        if (clickedDiv.style.border == "solid black") {
            clickedDiv.style.border = "solid red";
            console.log("border color = " + clickedDiv.style.border);
        }
        else {
            clickedDiv.style.border = "solid black";
        }
    }
    function movingBox {
        document.getElementById("box").style.display = "block"; //Box wird sichtbar
    }
