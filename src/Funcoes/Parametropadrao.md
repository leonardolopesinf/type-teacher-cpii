# Parametro Default
### No TypeScript, também podemos definir um valor que um parâmetro será atribuído se o usuário não fornecer um ou se o usuário passar undefinedem seu lugar. Esses são chamados parâmetros inicializados por padrão.Por exemplo, vamos usar "Smith" como padrão:
```
function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // Ta certo 
let result2 = buildName("Bob", undefined);       // Ainda funciona, pois também retorna "Bob Smith"
let result3 = buildName("Bob", "Adams", "Sr.");  // ERRO: parametro a mais
let result4 = buildName("Bob", "Adams");         // Ta certo
```
