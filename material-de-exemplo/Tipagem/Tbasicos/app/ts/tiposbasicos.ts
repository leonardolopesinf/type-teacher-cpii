let booleano: boolean = true;
let numero: number = 25;
let texto: string = 'Boa Sorte';
let tuple: [string,number] = ['bom dia', 7];
let n: null = null;
let array: number[] = [1, 2, 3]; // também pode ser (let lista: Array<number> = [1, 2, 3];)
let algo: any = 4;

// Todos passaremos para string para podermos visualizar-los no index.html

document.write('Boolean --> ' + JSON.stringify(booleano) + '<br>');
document.write('Number --> ' + JSON.stringify(numero) + '<br>');
document.write('String --> ' + JSON.stringify(texto) + '<br>');
document.write('Tuple --> ' + JSON.stringify(tuple) + '<br>');
document.write('Null --> ' + JSON.stringify(n) + '<br>');
document.write('Array --> ' + JSON.stringify(array) + '<br>');
document.write('Any --> ' + JSON.stringify(algo) + '<br>');
