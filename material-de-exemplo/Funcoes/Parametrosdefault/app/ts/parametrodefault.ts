// Primeiro faremos uma função para construir um nome com dois parametros o primeironome e sobrenome
function buildName(firstName: string, lastName = "Smith") { //aqui colocamos o parametro lastname (sobrenome) como um parâmetro padrão ou seja se não colocarem nada já tem um sobrenome determinado , padrão
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // Ta certo 
let result2 = buildName("Bob", undefined);       // Ainda funciona, pois também retorna "Bob Smith"
// let result3 = buildName("Bob", "Adams", "Sr.");  // ERRO: parametro a mais
let result4 = buildName("Bob", "Adams");         // Ta certo