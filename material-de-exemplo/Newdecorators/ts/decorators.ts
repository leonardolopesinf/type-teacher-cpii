function SelfDriving (constructorFunction: Function) { //SelfDriving = auto-condução
    console.log ('- a função decoradora é invocada -');
    constructorFunction.prototype.selfDrivable = true;
}

@SelfDriving
class Carro {
    private _make: string;
    constructor (make: string) {
        console.log ('- este construtor invocou -');
        this._make = make;
    }
}
console.log ('- criando uma instância -');
let carro: Carro = new Carro ("Nissan");
console.log (carro);
console.log (`selfDriving: $ {carro ['selfDrivable']}}`);//selfdrivable = auto-dirigível

console.log ('- criando mais uma instância -');
carro = new Carro ("Toyota");
console.log (carro);
console.log (`selfDriving: $ {car ['selfDrivable']}}`);//selfdrivable = auto-dirigível