/*
Aufgabe 9
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 23.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Eisdiele {
    window.addEventListener("load", init);
    
    //Array für Eissorten
    let eissorten: string[] = ["Vanille", "Schokolade", "Erdbeere", "Kaffee", "Haselnuss"];
    let inputEissorten: HTMLInputElement;
    //Array für Toppings
    let toppings: string[] = ["Sahne", "Streusel", "Krokant", "Smarties", "Frische Früchte der Saison", "Schokoladen-Soße", "Erdbeer-Soße", "Sirup"];
    let inputToppings: HTMLInputElement[] = [];
    //Array Waffel/Becher
    let behälter: string[] = ["in der Waffel", "im Becher"];
    let inputBehälter: HTMLInputElement[] = [];

    let fieldset: HTMLFieldSetElement;

/*Init-Funktion*/
    function init(_event: Event): void {
        
        fieldset = <HTMLFieldSetElement>document.getElementById("Eis");
        createEissorten();
        createBehälter();
        fieldset.addEventListener("change", handleChange);
        
        fieldset = <HTMLFieldSetElement>document.getElementById("Toppings");
        createToppings();
        fieldset.addEventListener("change", handleChange);
        
        fieldset = <HTMLFieldSetElement>document.getElementById("Data");
        fieldset.addEventListener("change", handleChange);
    }
    
/*Fieldsets aufbauen*/
    //Eissorten
    function createEissorten(): void {
        for (let i: number = 0; i < eissorten.length; i++) {
            console.log(eissorten[i]);
            createInputEissorten(eissorten[i]);
        }
    }
    function createInputEissorten(_eissorten: string): void {
        let descriptionElement: HTMLParagraphElement = document.createElement("p");
        descriptionElement.innerText = _eissorten;
        let input: HTMLInputElement = document.createElement("input");
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
    function createToppings(): void {
        for (let i: number = 0; i < toppings.length; i++) {
            console.log(toppings[i]);
            createInputToppings(toppings[i]);
        }
    }
    function createInputToppings(_toppings: string): void {
        let descriptionElement: HTMLParagraphElement = document.createElement("p");
        descriptionElement.innerText = _toppings;
        let input: HTMLInputElement = document.createElement("input");
        input.type = "range";
        input.max = "5";
        input.id = _toppings;
        input.stepDown(5);
        fieldset.appendChild(descriptionElement);
        fieldset.appendChild(input);
    }
    //Behälter
    function createBehälter(): void {
        for (let i: number = 0; i < behälter.length; i++) {
            console.log(behälter[i]);
            createInputBehälter(behälter[i]);
        }
    }
    function createInputBehälter(_behälter: string): void {
        let descriptionElement: HTMLParagraphElement = document.createElement("p");
        descriptionElement.innerText = _behälter;
        let input: HTMLInputElement = document.createElement("input");
        input.type = "radio";
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
    document.getElementById("ubersicht").addEventListener("click", showBestellung);
    
    function showBestellung(_event: Event): void {
        
        let sex: HTMLInputElement = <HTMLInputElement>document.getElementById("Sex");
        alert("Bestellübersicht :\n" + sex.value);
    }

    
    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log("Changed " + target.id + " to " + target.value);

        let sum: number = 0;
        for (let i: number = 0; i < eissorten.length; i++) {
            let inputEissorten: NodeListOf<HTMLInputElement> = <NodeListOf<HTMLInputElement>>document.getElementsByClassName("Sorten");
            sum += parseInt(inputEissorten[i].value);
            if (parseInt(inputEissorten[i].value) > 0) {
                document.getElementById("Bestellung").innerText += eissorten[i] + " " + (parseInt(inputEissorten[i].value) * 2) + "€" + "\n";
            }
        }
        for (let i: number = 0; i < inputToppings.length; i++) {
            if (inputToppings[i].checked) {
                sum += 1;
                document.getElementById("Bestellung").innerText += toppings[i] + " 1€" + "\n";
            }
        }
        for (let i: number = 0; i < inputBehälter.length; i++) {
            if (inputBehälter[i].checked) {
                sum += 3;
                document.getElementById("Bestellung").innerText += behälter[i] + " 3€" + "\n";
            }
        }
    }

    
}