/*
Aufgabe 3a
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 27.04.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
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
    var rowCounter = 0;
    for (var i = 0; i < 64; i++) {
        var element = document.createElement("div");
        if (((i + rowCounter) % 2) == 0) {
            element.className = "board white";
        }
        else {
            element.className = "board black";
        }
        if (((i + 1) % 8) == 0) {
            rowCounter++;
        }
        element.innerText = "" + rice;
        rice *= 2;
        document.body.appendChild(element);
    }
}
//# sourceMappingURL=a3a-new.js.map