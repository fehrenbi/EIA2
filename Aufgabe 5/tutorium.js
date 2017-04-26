var transfirmations;
(function (transfirmations) {
    window.addEventListener("load", init);
    let context;
    let x = 100;
    let y = 100;
    let radius = 10;
    let snowflake = {
        x: x,
        y: y,
        radius: 10
    };
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        context = canvas.getContext("2d");
        animate();
    }
    function animate() {
        drawBackground();
        drawSnowflake(x, y);
        updateSnowflake(x, y);
        setTimeout(animate, 20); //alle 20 Milisekunden
    }
    function drawSnowflake(_x, _y) {
        context.beginPath();
        context.arc(_x, _y, 10, 0, Math.PI * 2);
        context.closePath();
        context.fillStyle = "#ffffff";
        context.fill();
        context.stroke();
    }
    function updateSnowflake(_x, _y) {
        y++;
    }
    function drawBackground() {
        context.fillStyle = "#000000";
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    }
})(transfirmations || (transfirmations = {}));
//# sourceMappingURL=tutorium.js.map