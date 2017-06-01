/*
Aufgabe 9
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 23.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var eisdiele;
(function (eisdiele) {
    window.addEventListener("load", init);
    function init(_event) {
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
        /*Eissorten*/
        for (let i = 0; i < eisdiele.eissorten.length; i++) {
            let fieldset = document.getElementById("Eis");
            let descriptionElement = document.createElement("p");
            descriptionElement.innerText = eisdiele.eissorten[i];
            let input = document.createElement("input");
            input.type = "number";
            input.max = "5";
            input.min = "0";
            input.id = eisdiele.eissorten[i];
            input.className = "styleMe";
            fieldset.appendChild(descriptionElement);
            fieldset.appendChild(input);
        }
        /*Behälter*/
        for (let i = 0; i < eisdiele.behälter.length; i++) {
            let fieldset = document.getElementById("Eis");
            //let descriptionElement: HTMLParagraphElement = document.createElement("p");
            //descriptionElement.innerText = behälter[i];
            let input = document.createElement("input");
            //input.innerText = behälter[i];
            input.type = "radio";
            input.className = "behälterClass";
            input.id = eisdiele.behälter[i];
            input.name = "Dahrreichungsform";
            input.setAttribute("behaelter", eisdiele.behälter[i]);
            //fieldset.appendChild(descriptionElement);
            fieldset.appendChild(input);
            let label = document.createElement("label");
            label.htmlFor = eisdiele.behälter[i];
            label.textContent = eisdiele.behälter[i];
            fieldset.appendChild(label);
        }
        /*Toppings*/
        for (let i = 0; i < eisdiele.toppings.length; i++) {
            let fieldset = document.getElementById("Toppings");
            let descriptionElement = document.createElement("p");
            descriptionElement.innerText = eisdiele.toppings[i];
            let input = document.createElement("input");
            input.type = "range";
            input.max = "5";
            input.id = eisdiele.toppings[i];
            input.stepDown(5);
            fieldset.appendChild(descriptionElement);
            fieldset.appendChild(input);
        }
        /*Bestellung anzeigen*/
        document.getElementById("Bestellbutton").addEventListener("click", showBestellung);
        function showBestellung(_event) {
            alert("hello");
        }
    }
    function handleChange(_event) {
        let target = _event.target;
        //console.log("Changed " + target.name + " to " + target.value);
        console.log("Changed " + target.id + " to " + target.value);
        //console.log("Changed " + target.id + " to " + target.value, "Our Atrribute is " + target.getAttribute("behaelter"));
        if (this.id == "checkbox")
            console.log("Changed " + target.name + " to " + target.checked);
        if (this.id == "sex")
            console.log("Changed " + target.name + " to " + target.checked);
        if (this.id == "Vorname")
            console.log("Changed " + target.name + " to " + target.value);
    }
})(eisdiele || (eisdiele = {}));
//# sourceMappingURL=eisdiele.js.map