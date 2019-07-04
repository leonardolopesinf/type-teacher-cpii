## Never

Funções que nunca retornam valor algum ou variáveis que nunca são verdadeiras.

> O tipo never é um subtipo de todo tipo; no entanto, nenhum tipo é um subtipo de never.

```
function do(): never {
    while (true) {}
}
// você tem um loop infinito sem nenhum retorno.

```
