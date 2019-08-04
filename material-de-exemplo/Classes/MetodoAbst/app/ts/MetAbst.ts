abstract class Turno
{
    private codigo: number;
    
    MostrarTurno(): void
    {
        document.write('Turno selecionado:' + this.codigo);
    }

    abstract Informacao(): void; //esse método será implementado na classe derivada
}

class Tarde extends Turno
{

    Informacao(): void
    {
        console.log("O turno da tarde inicia ás 12h30 e se encerra ás 18h.")
    }

}