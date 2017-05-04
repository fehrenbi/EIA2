/*
Aufgabe 5
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 4.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        //let studi: StudentData [] = [];
        let strings = _input.split(",");
        console.log(strings);
        let matrikelTmp = parseInt(strings[0]);
        let nameTmp = strings[1];
        let vornameTmp = strings[2];
        let alterTmp = parseInt(strings[3]);
        let sexTmp;
        if (parseInt(strings[4]) == 1) {
            sexTmp = true;
        }
        else {
            sexTmp = false;
        }
        let commentTmp = strings[5];
        let newStudent = {
            matrikelnr: matrikelTmp,
            name: nameTmp,
            vorname: vornameTmp,
            alter: alterTmp,
            sex: sexTmp,
            comment: commentTmp
        };
        console.log(newStudent);
        students.push(newStudent);
        return "Student " + newStudent.name + " wurde eingetragen";
    }
    function queryData(_matrikel) {
        return "Hier fehlt noch der richtige Code...";
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=aufgabe6b.js.map