let booleano = true;
let numero = 25;
let texto = 'Boa Sorte';
let tuple = ['bom dia', 7];
let n = null;
let array = [1, 2, 3]; // também pode ser (let lista: Array<number> = [1, 2, 3];)
let algo = 4;
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
    Enum[Enum["B"] = 1] = "B";
    Enum[Enum["C"] = 2] = "C";
})(Enum || (Enum = {}));
// Todos passaremos para string para podermos visualizar-los no index.html
document.write('Boolean --> ' + JSON.stringify(booleano) + '<br>');
document.write('Number --> ' + JSON.stringify(numero) + '<br>');
document.write('String --> ' + JSON.stringify(texto) + '<br>');
document.write('Tuple --> ' + JSON.stringify(tuple) + '<br>');
document.write('Null --> ' + JSON.stringify(n) + '<br>');
document.write('Array --> ' + JSON.stringify(array) + '<br>');
document.write('Any --> ' + JSON.stringify(algo) + '<br><br>');
document.write('Enum --> ' + JSON.stringify(Enum) + '<br>');
document.write('Enum.A --> ' + JSON.stringify(Enum.A) + '<br>');
document.write('Enum.B --> ' + JSON.stringify(Enum.B) + '<br>');
document.write('Enum.C --> ' + JSON.stringify(Enum.C) + '<br>');
document.write('Enum[0] --> ' + JSON.stringify(Enum[0]) + '<br>');
document.write('Enum[1] --> ' + JSON.stringify(Enum[1]) + '<br>');
document.write('Enum[2] --> ' + JSON.stringify(Enum[2]) + '<br>');
