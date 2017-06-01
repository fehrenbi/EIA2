/*
Aufgabe 9
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 23.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace eisdiele {
    window.addEventListener("load", init);
    
    function init(_event: Event): void {
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange); 
        }
        /*Eissorten*/
        for (let i: number = 0; i < eissorten.length; i++) {
            let fieldset: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Eis");
            let descriptionElement: HTMLParagraphElement = document.createElement("p"); 
            descriptionElement.innerText = eissorten[i]; 
            let input: HTMLInputElement = document.createElement("input");
            input.type = "number";
            input.max = "5";
            input.min = "0";
            input.id = eissorten[i];
            input.className = "styleMe";
            fieldset.appendChild(descriptionElement);
            fieldset.appendChild(input);
        }
        /*Behälter*/
        for (let i: number = 0; i < behälter.length; i++) {
            let fieldset: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Eis");
            //let descriptionElement: HTMLParagraphElement = document.createElement("p");
            //descriptionElement.innerText = behälter[i];
            let input: HTMLInputElement = document.createElement("input");
            //input.innerText = behälter[i];
            input.type = "radio";
            input.className = "behälterClass";
            input.id = behälter[i];
            input.name = "Dahrreichungsform";
            input.setAttribute("behaelter", behälter[i]);
            //fieldset.appendChild(descriptionElement);
            fieldset.appendChild(input);
            
            let label: HTMLLabelElement = document.createElement("label");
            label.htmlFor =  behälter[i];
            label.textContent = behälter[i];
            fieldset.appendChild(label);
            
        }
        /*Toppings*/
        for (let i: number = 0; i < toppings.length; i++) {
            let fieldset: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Toppings");
            let descriptionElement: HTMLParagraphElement = document.createElement("p");
            descriptionElement.innerText = toppings[i];
            let input: HTMLInputElement = document.createElement("input");
            input.type = "range";
            input.max = "5";
            input.id = toppings[i];
            input.stepDown(5);
            fieldset.appendChild(descriptionElement);
            fieldset.appendChild(input);
        }
        /*Bestellung anzeigen*/
        document.getElementById("Bestellbutton").addEventListener("click", showBestellung);
        function showBestellung(_event: Event): void {
            alert("hello");
        }
    }
    
    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
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
    

}