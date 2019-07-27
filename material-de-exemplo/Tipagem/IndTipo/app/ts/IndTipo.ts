//abaixo, temos um exemplo da sintaxe de '<>'
let x1: any = "olá";
let y1 = (<string>x1).substring(0, 3);


//abaixo, temos também um exemplo da sintaxe de "as".
let x2: any = "oi";
let y2 = (x2 as string).substring(0, 3);


//vale ressaltar que as duas sintaxes apresentadas são equivalentes. Usar um ao invés do outro é apenas uma questão de preferência própria