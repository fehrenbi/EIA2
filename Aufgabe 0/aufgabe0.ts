/*
Aufgabe 0
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 20.03.2017   
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


document.addEventListener('DOMContentLoaded', function() {
    var name:string;
    name = prompt ("Gebe hier bitte deinen Namen ein");
    var greet:string = "Guten Tag";
    document.body.innerHTML = greet + " " + name;
    });
