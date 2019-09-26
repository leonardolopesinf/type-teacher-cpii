# Intersection types
### Um intersection type combina vários tipos em um. Isso permite que você adicione tipos existentes para obter um único tipo com todos os recursos necessários.No TypeScript, se um tipo é interseção de dois outros tipos, consequentemente, esse tipo terá todas as propriedades de dois tipos cruzados:
```
interface Estudante {
    matr: string;
    idade: number;
}

interface Trabalhador {
    IDCompany: string;
}

type A = Estutante & Trabalhador;

let x: A;

x.idade = 15;
x.IDcompany = 'CID5241';
x.matr = 'm03241';
```
#### Neste exemplo foi criado um tipo A que combinou os tipos do matr e idade do Estudante e IDcompany do Trabalhador , Depois foi adicionado um valor para eles.
### OBS : Cuidado ao combinar tipos com o mesmo nome de propriedade que nao tem o mesmo tipo , como no exemplo a abaixo:
```
interface X {
  c: string;
  d: string;
}

interface Y {
  c: number;
  e: string
}

type XY = X & Y;

let p: XY;

p.c = 4; // Error:o tipo '4' não pode ser atribuído ao tipo 'string e number'
p.c = 'texto'; // Error: o tipo 'texto' não pode ser atribuído ao tipo 'string e number'
```
#### Você notará que os tipos X e Y  têm a propriedade c . No entanto, o tipo da propriedade não é o mesmo (No X, c é string e no Y , c é number) e uma vez que tentamos atribuir valor a ela, obtemos um erro do compilador.
### Podemos combinar tipos de propriedades não primitivas com o mesmo nome de propriedade:
```
interface D { d: boolean; }
interface E { e: string; }
interface F { f: number; }

interface A { x: D; }
interface B { x: E; }
interface C { x: F; }

type ABC = A & B & C;

let abc: ABC = {
    x: {
        d: true,
        e: 'codingblast',
        f: 3
    }
};

console.log('abc:', abc);
```
#### Como você pode ver, temos as interfaces A , B , C e todas têm o mesmo nome de propriedade - x . No entanto, o tipo da propriedade x é diferente para essas interfaces (A, B, C).Como resultado, podemos combinar esses tipos para formar um novo tipo e usá-lo.
