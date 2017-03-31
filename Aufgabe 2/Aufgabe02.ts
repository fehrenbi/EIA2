/*
Aufgabe 02
Name: Elyssia-Sofie D�rr
Matrikel:
Datum: 29.03.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
*/
window.onload = function () {
    placeDivs();
    /*let table: HTMLTableElement = document.createElement("table");
    let row: HTMLTableRowElement = document.createElement("tr");
    let column: HTMLTableCellElement = document.createElement("td");
    table.appendChild(row);
    row.appendChild(column);
    document.body.appendChild(table);*/
};
function placeDivs() {
    var rice = 1;
    var row_counter = 0;
    for (var i = 0; i < 64; i++) {
        var element = document.createElement("div");
        if (((i + row_counter) % 2) == 0) {
            element.className = "board white";
        }
        else {
            element.className = "board black";
        }
        if (((i + 1) % 8) == 0) {
            row_counter++;
        }
        element.innerText = "" + rice;
        rice *= 2;
        document.body.appendChild(element);
    }
}
