// Primeiros faremos uma função de construir um nome com os parametros nome e sobrenome
function buildName(nome, sobrenome) {
    if (sobrenome)
        return nome + " " + sobrenome;
    else
        return nome;
}
let result1 = buildName("Bob"); // Aceitável , pois não usamos o sobrenome , mas ele é opcional
// let result2 = buildName("Bob", "Adams", "Sr.");  // ERRO: Parametros a mais do que declaramos
let result3 = buildName("Bob", "Adams"); // Tudo certo 
