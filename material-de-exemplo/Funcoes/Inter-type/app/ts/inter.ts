interface Estudante { //Primeiro criamos uma interface que terá duas variáveis com os tipos que vamos usar para combinar um intersection type
    matr: string;
    idade: number;
}

interface Trabalhador { // criamos outra com uma variável pra combinar com a outra que criamos e criar um novo tipo , um intersection type
    IDcompany: string;
}

type A = Estudante & Trabalhador; // Aqui nós juntamos essas interfaces e criamos um novo tipo A que tem propriedades desses tipo que juntamos

let x: A; // declaramos uma variável x para usar esse tipo A que criamos
// a partir daqui mostramos que funciona
x.idade = 15;
x.IDcompany = 'CID5241';
x.matr = 'm03241';