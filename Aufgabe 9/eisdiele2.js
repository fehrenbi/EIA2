/*
Aufgabe 9
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 23.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Eisdiele;
(function (Eisdiele) {
    window.addEventListener("load", init);
    //Array für Eissorten
    let eissorten = ["Vanille", "Schokolade", "Erdbeere", "Kaffee", "Haselnuss"];
    let inputEissorten;
    //Array für Toppings
    let toppings = ["Sahne", "Streusel", "Krokant", "Smarties", "Frische Früchte der Saison", "Schokoladen-Soße", "Erdbeer-Soße", "Sirup"];
    let inputToppings = [];
    //Array Waffel/Becher
    let behälter = ["in der Waffel", "im Becher"];
    let inputBehälter = [];
    let fieldset;
    /*Init-Funktion*/
    function init(_event) {
        fieldset = document.getElementById("Eis");
        createEissorten();
        createBehälter();
        fieldset.addEventListener("change", handleChange);
        fieldset.addEventListener("change", showSum);
        fieldset = document.getElementById("Toppings");
        createToppings();
        fieldset.addEventListener("change", handleChange);
        fieldset.addEventListener("change", showSum);
        fieldset = document.getElementById("Data");
        fieldset.addEventListener("change", handleChange);
        fieldset.addEventListener("change", showSum);
    }
    /*Fieldsets aufbauen*/
    //Eissorten
    function createEissorten() {
        for (let i = 0; i < eissorten.length; i++) {
            console.log(eissorten[i]);
            createInputEissorten(eissorten[i]);
        }
    }
    function createInputEissorten(_eissorten) {
        let descriptionElement = document.createElement("p");
        descriptionElement.innerText = _eissorten;
        let input = document.createElement("input");
        input.type = "number";
        input.max = "5";
        input.min = "0";
        input.value = "0";
        input.id = _eissorten;
        input.className = "Sorten";
        fieldset.appendChild(descriptionElement);
        fieldset.appendChild(input);
        //inputEissorten.push(input);
    }
    //Toppings
    function createToppings() {
        for (let i = 0; i < toppings.length; i++) {
            console.log(toppings[i]);
            createInputToppings(toppings[i]);
        }
    }
    function createInputToppings(_toppings) {
        let descriptionElement = document.createElement("p");
        descriptionElement.innerText = _toppings;
        let input = document.createElement("input");
        input.type = "range";
        input.max = "5";
        input.id = _toppings;
        input.stepDown(5);
        fieldset.appendChild(descriptionElement);
        fieldset.appendChild(input);
    }
    //Behälter
    function createBehälter() {
        for (let i = 0; i < behälter.length; i++) {
            console.log(behälter[i]);
            createInputBehälter(behälter[i]);
        }
    }
    function createInputBehälter(_behälter) {
        let descriptionElement = document.createElement("p");
        descriptionElement.innerText = _behälter;
        let input = document.createElement("input");
        input.type = "checkbox";
        input.className = "behälterClass";
        input.id = _behälter;
        input.name = "Dahrreichungsform";
        fieldset.appendChild(descriptionElement);
        fieldset.appendChild(input);
        /*let label: HTMLLabelElement = document.createElement("label");
        label.htmlFor = behälter[i];
        label.textContent = behälter[i];
        fieldset.appendChild(label);*/
    }
    /*Eingaben anzeigen*/
    function handleChange(_event) {
        let target = _event.target;
        console.log("Changed " + target.id + " to " + target.value);
        //console.log(_event);
        let sum = 0;
        let bestellung = document.getElementById("Bestellung");
        bestellung.innerText = "";
        let inputEissorten = document.getElementsByClassName("Sorten");
        for (let i = 0; i < inputEissorten.length; i++) {
            if (parseInt(inputEissorten[i].value) > 0) {
                bestellung.innerText += eissorten[i] + " " + ": " + (parseInt(inputEissorten[i].value) * 1) + "\n";
            }
        }
        for (let i = 0; i < inputToppings.length; i++) {
            if (parseInt(inputToppings[i].value) > 0) {
                bestellung.innerText += toppings[i] + " " + ": " + (parseInt(inputToppings[i].value) * 1) + "\n";
            }
        }
        for (let i = 0; i < inputBehälter.length; i++) {
            if (inputBehälter[i].checked) {
                bestellung.innerText += behälter[i] + " " + "\n";
            }
        }
    }
    function showSum(_event) {
        let sum = 0;
        let inputEissorten = document.getElementsByClassName("Sorten");
        let summe = document.getElementById("Summe");
        summe.innerText = "";
        for (let i = 0; i < inputEissorten.length; i++) {
            sum += parseInt(inputEissorten[i].value);
        }
        for (let i = 0; i < inputToppings.length; i++) {
            sum += parseInt(inputToppings[i].value);
        }
        for (let i = 0; i < inputBehälter.length; i++) {
            if (inputBehälter[i].checked)
                sum += 0.5;
        }
        console.log(sum);
        summe.innerText = sum.toString() + " €";
    }
    /*Bestellübersicht*/
    document.getElementById("ubersicht").addEventListener("click", showBestellung);
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
})(Eisdiele || (Eisdiele = {}));
//# sourceMappingURL=eisdiele2.js.map