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
            input.value = "0";
            input.id = eissorten[i];
            input.className = "Sorten";
            //input.setAttribute("eissorten", eissorten[i]);
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
            input.id = "behälter";
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
            let sex: HTMLInputElement = <HTMLInputElement>document.getElementById("Sex");
            let vorname: HTMLInputElement = <HTMLInputElement>document.getElementById("Vorname");
            let nachname: HTMLInputElement = <HTMLInputElement>document.getElementById("Nachname");
            let straße: HTMLInputElement = <HTMLInputElement>document.getElementById("Straße");
            let hausnr: HTMLInputElement = <HTMLInputElement>document.getElementById("Hausnr");
            let plz: HTMLInputElement = <HTMLInputElement>document.getElementById("PLZ");
            let stadt: HTMLInputElement = <HTMLInputElement>document.getElementById("Stadt");
            let zahlungsart: HTMLInputElement = <HTMLInputElement>document.getElementById("Zahlungsart");
            let behälter: HTMLInputElement = <HTMLInputElement>document.getElementById("behälter");
            let eissorten = document.getElementsByClassName("Sorten");
            let toppings: HTMLInputElement = <HTMLInputElement>document.getElementById("toppings");
            alert("Bestellübersicht: \n" + "\n" + "Lieferanschrift: " + sex.value + " " + vorname.value + " " + nachname.value +
                "\n" +  straße.value + " " + hausnr.value + " , " + plz.value + " " + stadt.value + "\n" + "\n" + "Zahlungsart: " +
                zahlungsart.value + "\n" + "\n" + "Bestellung: \n" + /*eissorten[i]*/ + behälter.getAttribute("behaelter") + "mit " +
                toppings.value
                );
        }
    }

    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        //console.log("Changed " + target.name + " to " + target.value);
        console.log("Changed " + target.id + " to " + target.value);
        //console.log("Changed " + target.id + " to " + target.value, "Our Atrribute is " + target.getAttribute("behaelter"));

        let sum: number = 0;
       for (let i: number = 0; i < eissorten.length; i++) {
            sum += parseInt(eissorten[i].value);
            if (parseInt(eissorten[i].value) > 0) {
                document.getElementById("price").innerText += inputEissorten[i] + " " + (parseInt(inputEissorten[i].value) * 2) + "€" + "\n";
            }
        }
        for (let i: number = 0; i < inputToppings.length; i++) {
            if (inputToppings[i].value) {
                sum += 1;
                document.getElementById("price").innerText += toppings[i] + " 1€" + "\n";
            }
        }


    }
}