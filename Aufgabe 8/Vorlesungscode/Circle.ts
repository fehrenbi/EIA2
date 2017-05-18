namespace L8_Inheritance {
    export class Circle extends MovingShape {
        xTarget: number;
        yTarget: number;
        speed: number;

        constructor(_x: number, _y: number) {
            super(_x, _y);
            console.log("Create circle");
            this.speed = 0.1;
            this.setRandomPosition();
            this.setRandomTargetPosition();
        }

        setRandomTargetPosition(): void {
            this.xTarget = Math.random() * crc2.canvas.width;
            this.yTarget = Math.random() * crc2.canvas.height;
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            crc2.fill();
        }

        move(): void {
            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y;
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1)
                this.setRandomTargetPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        }
    }
}