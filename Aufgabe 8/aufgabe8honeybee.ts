/*
Aufgabe 8
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 18.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace aufgabe8 {
    export class Honeybee extends Bee {
        xTarget: number; 
        yTarget: number; 
        speed: number;
        
        //Erstellt neue Biene
        constructor (_x: number, _y: number, color: string, _xTarget: number, _yTarget: number) {
            super(_x, _y);
            this.xTarget = _xTarget;
            this.yTarget = _yTarget;
            this.speed = 0.05;
            this.setRandomTarget();
            //this.status = "fly";
            //this.pausecounter = 0;
            console.log("create honeybee");
            super.draw();
        }
        
        setRandomTarget(): void {
            let i: number = Math.floor(Math.random() * (flowers.length - 1));
            this.xTarget = flowers[i].x;
            this.yTarget = flowers[i].y;
        }

        move(): void {
            let xDiff: number = this.xTarget - this.x; //Strecke x-Achse
            let yDiff: number = this.yTarget - this.y; //Strecke y-Achse
            let d: number = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2)); //direkter Weg (Pythagoras)
            
            if (xDiff > 0 && yDiff > 0) {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
            if (xDiff < 0 && yDiff > 0) {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
            if (xDiff < 0 && yDiff < 0) {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
            if (xDiff > 0 && yDiff < 0) {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
            
            if (d < 1) {
                //
            }
        }

        setRandomColor(): void {
                switch (Math.floor((Math.random() * 4) + 1)) {
                    case 1:
                        this.color = "blue";
                        break;
                    case 2:
                        this.color = "green";
                        break;
                    case 3:
                        this.color = "red";
                        break;
                    case 4:
                        this.color = "yellow";
                        break;
                }

            }
    }
}