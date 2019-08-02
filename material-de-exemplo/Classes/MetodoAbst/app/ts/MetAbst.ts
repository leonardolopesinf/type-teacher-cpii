abstract class Turno
{
    codigo: number;

    constructor(codigo: number)
    {
        this.codigo = codigo;
    }
    
    MostrarTurno(): void
    {
        document.write('Turno selecionado:' + this.codigo);
    }

    abstract Informacao(): void; //esse método será implementado na classe derivada
}

class Tarde extends Turno
{
    constructor()
    {
        super(1234);
    }

    Informacao(): void
    {
        console.log("O turno da tarde inicia ás 12h30 e se encerra ás 18h.")
    }
}