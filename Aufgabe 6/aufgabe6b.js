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
        return "Student" + newStudent.vorname + newStudent.name + " wurde eingetragen";
    }
    function queryData(_matrikel) {
        for (let i = 0; i < students.length; i++) {
            if (students[i].matrikelnr == _matrikel) {
                let geschlecht;
                if (students[i].sex == true) {
                    geschlecht = "w";
                }
                else {
                    geschlecht = "m";
                }
                return "Folgende Daten sind unter dieser Matrikelnr. eingespeichert: \nName: " + students[i].name + "\nVorname: " + students[i].vorname + "\nAlter: " + students[i].alter + "\nGeschlecht: " + students[i].sex + "\nKommentar: " + students[i].comment;
            }
            else {
                return "Die eingegebene Matrikelnr ist nicht eingespeichert";
            }
        }
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=aufgabe6b.js.map