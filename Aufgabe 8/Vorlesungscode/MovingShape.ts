
namespace L8_Inheritance {
    export class MovingShape {
        x: number;
        y: number;
        size: number;
        color: string;

        constructor(_x: number, _y: number) {
            console.log("Create shape");
            this.setRandomStyle();
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }

        update(): void {
            this.move();
            this.draw();
        }

        draw(): void {
            // abstract
        }

        move(): void {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
        }

        setRandomPosition(): void {
            this.x = Math.random() * 200;
            this.y = Math.random() * 200;
        }

        // different random style
        setRandomStyle(): void {
            this.size = Math.random() * 10 + 5;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
}