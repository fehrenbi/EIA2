/*
Aufgabe 2a
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 30.03.2017
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

/*let i: number = 0;
let n: number = 64;
*/

let div: HTMLDivElement = document.createElement("div");
document.body.appendChild(div);

window.onload = function (): void {
    placeDivs();
    /*let table: HTMLTableElement = document.createElement("table");
    let row: HTMLTableRowElement = document.createElement("tr");
    let column: HTMLTableCellElement = document.createElement("td");
    table.appendChild(row);
    row.appendChild(column);
    document.body.appendChild(table);*/
};

function placeDivs(): void {
    let rice: number = 1;
    for (let i: number = 0; i < 64; i++) {
        let element: HTMLElement = document.createElement("div");

        if (i % 2 == 0) {
            element.className = "board white";
        } else {
            element.className = "board black";
        }

        element.innerText = "" + rice;
        rice *= 2;
        document.body.appendChild(element);
    }
}
