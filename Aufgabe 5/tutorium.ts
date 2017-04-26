namespace transfirmations {
    window.addEventListener("load", init);
    
    let context: CanvasRenderingContext2D;
    
    /*let x: number = 100;
    let y: number = 100; */
    let radius: number = 10;
    
    let snowflakes: Snowflake[]; //Array --> Interface, alle Objekte vom Typ Snowflake müssen Werte x, y und radius haben
       
    function init (): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        context = canvas.getContext("2d");
        
        createSnowflakes(200);
        animate();
        }
    
    function animate(): void {
        drawBackground();
        drawSnowflakes(x, y);
        updateSnowflake(x, y);
        setTimeout(animate, 20); //alle 20 Milisekunden
        }
    
    function drawSnowflakes(): void {
        for (let i: number = 0; i < snowflakes.length; i++); {
            drawSnowflake(snowflakes[1].x, snowflakes[1].y);
    }
    
    function drawSnowflake(_x: number, _y: number): void {
        context.beginPath();
        context.arc(_x, _y, 10, 0, Math.PI * 2);
        context.closePath();
        context.fillStyle = "#ffffff";
        context.fill();
        context.stroke();    
    }
    
    function updateSnowflake(_x: number, _y: number): void { //Variblen nicht mehr nötig
        y++;
        
        if (y > context.canvas.height + radius) {
            y = 0 - radius;
        }
    }
    
    function drawBackground(): void {
        context.fillStyle = "#000000";
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    }
        
    function createSnowflakes(_amount: number): void {
        for (let i: number = 0; i < _amount; i++) {
            let x: number = Math.random() * context.cnavas.width;
            let y: number = Math.random() * context.canvas.height;
            let snowflake: Snowflake = {
                x: x,
                y: y,
                radius: 10
            };
            snowflakes.push(snowflak);
        }
    }
    
    function addSnowflakes(_event: MouseEvent): void {}
    
}