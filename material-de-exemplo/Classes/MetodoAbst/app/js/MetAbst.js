class Turno {
    MostrarTurno() {
        document.write('Turno selecionado:' + this.codigo);
    }
}
class Tarde extends Turno {
    Informacao() {
        console.log("O turno da tarde inicia ás 12h30 e se encerra ás 18h.");
    }
}
