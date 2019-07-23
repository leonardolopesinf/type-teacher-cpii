type Cachorro = 
{
    correr();
    latir();
}
//criamos o tipo Cachorro com os métodos 'correr' e 'latir'

type Gato =
{
    correr();
    miar();
}
//criamos o tipo Gato com os métodos 'correr' e 'miar'

function mamifero(animal: Cachorro | Gato) 
{
    if ("latir" in animal) //usamos a estrutura condicional para caso exista o método 'latir' em animal
    {
        return animal.latir();
    }

    else if ("miar" in animal) //usamos novamente a estrutura condicional para caso exista o método 'miar' em animal
    {
        return animal.miar();
    }
}