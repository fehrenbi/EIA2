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
            input.value = "0";
            input.id = eisdiele.eissorten[i];
            input.className = "Sorten";
            //input.setAttribute("eissorten", eissorten[i]);
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
            input.id = "behälter";
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
            let sex = document.getElementById("Sex");
            let vorname = document.getElementById("Vorname");
            let nachname = document.getElementById("Nachname");
            let straße = document.getElementById("Straße");
            let hausnr = document.getElementById("Hausnr");
            let plz = document.getElementById("PLZ");
            let stadt = document.getElementById("Stadt");
            let zahlungsart = document.getElementById("Zahlungsart");
            let behälter = document.getElementById("behälter");
            let eissorten = document.getElementsByClassName("Sorten");
            let toppings = document.getElementById("toppings");
            alert("Bestellübersicht: \n" + "\n" + "Lieferanschrift: " + sex.value + " " + vorname.value + " " + nachname.value +
                "\n" + straße.value + " " + hausnr.value + " , " + plz.value + " " + stadt.value + "\n" + "\n" + "Zahlungsart: " +
                zahlungsart.value + "\n" + "\n" + "Bestellung: \n" + +behälter.getAttribute("behaelter") + "mit " +
                toppings.value);
        }
    }
    function handleChange(_event) {
        let target = _event.target;
        //console.log("Changed " + target.name + " to " + target.value);
        console.log("Changed " + target.id + " to " + target.value);
        //console.log("Changed " + target.id + " to " + target.value, "Our Atrribute is " + target.getAttribute("behaelter"));
        let sum = 0;
        /* for (let i: number = 0; i < eissorten.length; i++) {
             sum += parseInt(eissorten[i].value);
             if (parseInt(eissorten[i].value) > 0) {
                 document.getElementById("price").innerText += inputEissorten[i] + " " + (parseInt(inputEissorten[i].value) * 2) + "€" + "\n";
             }
         }*/
        for (let i = 0; i < eisdiele.inputToppings.length; i++) {
            if (eisdiele.inputToppings[i].value) {
                sum += 1;
                document.getElementById("price").innerText += eisdiele.toppings[i] + " 1€" + "\n";
            }
        }
    }
})(eisdiele || (eisdiele = {}));
//# sourceMappingURL=eisdiele.js.map