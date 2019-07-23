function correr(){
    console.log('correndo!');
}

function latir(){
    console.log('au au!');
}

function miar(){
    console.log('miau');
}

type Cachorro = 
{
    correr: 'correndo!',
    latir: 'au au!';
}
//criamos o tipo Cachorro com os métodos 'correr' e 'latir'

type Gato =
{
    correr: 'correndo!';
    miar: 'miau';
}
//criamos o tipo Gato com os métodos 'correr' e 'miar'

function mamifero(animal: Cachorro | Gato) 
{
    if ("latir" in animal) //usamos a estrutura condicional para caso exista o método 'latir' em animal
    {
        return animal.latir;
    }

    else if ("miar" in animal) //usamos novamente a estrutura condicional para caso exista o método 'miar' em animal
    {
        return animal.miar;
    }

    
}

let animal: Cachorro = {correr: 'correndo!', latir: 'au au!'};

document.write(mamifero(animal));