var L7_Classes;
(function (L7_Classes) {
    let squares = [];
    let n = 30;
    window.addEventListener("load", init);
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        L7_Classes.crc2 = canvas.getContext("2d");
        for (let i = 0; i < n; i++) {
            let s = new L7_Classes.Square(200, 150);
            squares[i] = s;
        }
        console.log(squares);
        window.setTimeout(animate, 20);
    }
    function animate() {
        L7_Classes.crc2.fillStyle = "#ff0000";
        L7_Classes.crc2.fillRect(0, 0, L7_Classes.crc2.canvas.width, L7_Classes.crc2.canvas.height);
        for (let i = 0; i < n; i++) {
            let s = squares[i];
            s.update();
        }
        window.setTimeout(animate, 20);
    }
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=vorlesung.js.map