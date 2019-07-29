 let x: number;
 let y: number | undefined;
 let z: number | null | undefined; 
 x = 1;
//O compilador verifica se as variáveis ​​são definitivamente atribuídas 
// Error y = undefined;
// Error y = null; 
// Error z = null;
// Error x = z;
// Error y = x; 
// Error z = x;
//Os comentários irão sumir devido ao removeComments
