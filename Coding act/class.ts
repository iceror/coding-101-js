import { type } from "os";

class Car {
    static ClassName = 'Car'; //llamar propiedad static de la clase 

    readonly brand: string; //no se puede modificar
    public doors: number; //se pueden usar/ver las propiedades fuera de la clase 
    fuelTank: number;
    isRunning: boolean;
    type: string;

    private readonly createdAt: number; //sólo se puede acceder a ella desde la clase 

    constructor( brand: string, type: string) {
        this.brand = brand;
        this.doors = 0;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = type;
        this.createdAt = 250718; 
    }

    turnOn () {
        if (this.isRunning) {
            console.log( 'Car is ON');
            return;
        } 
        if (this.fuelTank <= 0) {
            console.log('Car has no gas');
            return;
        }
            this.isRunning = true;
            console.log('Turn On car');
    }

        fillTank( gas: number) {
            if (gas <= 0) {
                console.log('gas has to be positive');
                return;
            }
             this.fuelTank + gas;
            if (this.fuelTank + gas >= 100) {
                this.fuelTank = 100
            } else {
                this.fuelTank = this.fuelTank + gas;
            }
        }
}

let myMazda = new Car ('Mazda', 'Sedan');
// myMazda.brand= 'Honda';
// console.log(myMazda.createdAt);

// console.log(myMazda.fuelTank);
// myMazda.fillTank(50);
// myMazda.fillTank(25);
// console.log(myMazda.fuelTank);

