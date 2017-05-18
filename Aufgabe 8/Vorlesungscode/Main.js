var L8_Inheritance;
(function (L8_Inheritance) {
    let shapes = [];
    let n = 10;
    window.addEventListener("load", init);
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        L8_Inheritance.crc2 = canvas.getContext("2d");
        for (let i = 0; i < n; i++) {
            let s = new L8_Inheritance.Square(300, 150);
            shapes.push(s);
            let c = new L8_Inheritance.Circle(100, 150);
            shapes.push(c);
        }
        console.log(shapes);
        window.setTimeout(animate, 20);
    }
    function animate() {
        L8_Inheritance.crc2.fillStyle = "black";
        L8_Inheritance.crc2.fillRect(0, 0, L8_Inheritance.crc2.canvas.width, L8_Inheritance.crc2.canvas.height);
        for (let i = 0; i < shapes.length; i++) {
            let s = shapes[i];
            s.update();
        }
        window.setTimeout(animate, 20);
    }
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=Main.js.map