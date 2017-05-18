namespace L8_Inheritance {
    export class Square extends MovingShape {

        constructor(_x: number, _y: number) {
            super(_x, _y);
            console.log("Create square");
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x, this.y, this.size, this.size);
        }
    }
}