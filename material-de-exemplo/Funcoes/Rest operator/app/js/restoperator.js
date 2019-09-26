// Primeiro faremos uma função saudar com os parametros saudacao e nome (que vc quer saudar) 
function saudar(saudacao, ...nomes) {
    return saudacao + " " + nomes.join(", ");
}
saudar("Olá", "Steve", "Bill"); // returna  "Olá Steve, Bill" , pois o parametro saudacao está preenchido e ainda foi adicionado o parametro nome duas vezes ,que pode ser usado infinitamente. 
saudar("Olá"); // returna "Olá " , tudo certo pois o parametro obrigatório é saudacao o parametro nome não precisa ser preenchido mas se for pode ser usado infinitas vezes
