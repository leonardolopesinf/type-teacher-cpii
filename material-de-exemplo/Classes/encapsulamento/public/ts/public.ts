class Animal {
    public _nome: string;
    
    constructor(nome: string) {
        this._nome = nome;
    }
    
    public move(distancia: number) {
        console.log(`${this._nome} se moveu ${distancia}m.`);
    }
}

let tartaruga = new Animal('tartaruga');
console.log(tartaruga._nome);
tartaruga.move(3);

// Tanto a "_nome" quanto "move()" podem ser acessados fora da classe, pois são públicas