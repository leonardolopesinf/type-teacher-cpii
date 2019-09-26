# Parametros opcionais
### Podemos obter essa funcionalidade no TypeScript adicionando um ? ao final dos parâmetros que queremos ser opcionais. Por exemplo, digamos que queremos que o parâmetro sobrenome acima seja opcional:
```
function buildName(nome: string, sobrenome?: string) {
    if (sobrenome)
        return nome + " " + sobrenome;
    else
        return nome;
}

let result1 = buildName("Bob");                  // Aceitável
let result2 = buildName("Bob", "Adams", "Sr.");  // ERRO: Parametros a mais
let result3 = buildName("Bob", "Adams");         // Tudo certo
```
### Quaisquer parâmetros opcionais devem seguir os parâmetros necessários. Se quiséssemos tornar o primeiro nome opcional, e não o sobrenome, precisaríamos alterar a ordem dos parâmetros na função, colocando o primeiro nome na lista.
