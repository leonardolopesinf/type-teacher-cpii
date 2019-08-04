//Os comentários irão sumir devido ao removeComments

let x: number; // x é do tipo number

x = null; //por não ser de um tipo nulo, o "strictNullChecks" não possibilita que x receba um valor nulo

x as null; // por não ser de um tipo nulo, o "strictNullChecks" não possibilita que x seja indicado como nulo

let y: null; // y é do tipo null

y = null; // por y ser do tipo null, o "strictNullChecks" permite que ele receba um valor nulo
