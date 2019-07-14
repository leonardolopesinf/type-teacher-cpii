 # Iniciação do ambiente Node

Você precisa ter o [Node.JS]( https://nodejs.org/en/) instalados em sua maquina e é recomendado que seja utilizado o [Visual Studio Code](https://code.visualstudio.com/download) por se integrar bem com o TypeScript.

O primeiro passo é criar a pasta que irá armazenar o seu projeto.

>obs: a pasta não pode ter caracteres especiais no nome, ou se chamar "typescript".

Em seguida, abra o **cmd**. Use o comando cd para mudar o diretório e chegar até sua pasta.

Ex:

```
cd Users            // Troca o repositório de C:\ para Users.
cd fulano             // Troca o repositório de Users para fulano.
cd Desktop        // Troca o repositório para Desktop. 
cd meuprojeto       // Troca o repositório para meuprojeto.
```

## Configuração do Servidor 

No servidor Node, o TypeScript será instalado por meio da ferramenta Node Package Manager (Npm).

```
npm init
```
O node irá pedir as configurações iniciais para o servidor.

```
package name: (projeto)        // Nome do seu servidor; lembrando que não pode conter caracteres especiais.
version: (1.0.0)              // Versão do Node ao qual será usada.
description:                 // Descrição sobre o seu servidor.
entry point: (index.js)     // Arquivo JavaScript que o servidor irá usar como página principal.
test command:              // Comando de Teste.
git repository:           // Repositório Git.
keywords:                // Palavras chaves para o servidor.
author:                 // Autor do servidor.
license: (ISC)         // Licença usada pelo servidor.
```

No final, aperte o "enter" para confirmar todos os dados.


# Instalação do TypeScript

A primeira coisa a ser fazer após o ambiente node ser iniciado, é instalar o TypeScript em modo global. Para fazer isso, iremos usar o seguinte comando:

```
npm install -g typescript
```


Depois disso, você pode  executar ele de qualquer diretório do seu computador.


# Configuração do tsconfig.json

Temos que criar um arquivo tsconfig.json dentro da pasta do projeto para configurarmos o TypeScript

```
 {
     "compilerOptions":{
         "outDir":"./js" //Indica a pasta que será criada para o nosso código traduzido
         "target":"es6" // Indica para qual versão do JavaScript o nosso TypeScript será traduzido

     },

     "include": [ //Indica a lista de pastas nas quais serão compiladas
         "./ts/**/*" //Diretório onde ficará nossos arquivos TypeScript
     ]

 }
```

#  Configuração dos Scripts no package.json

Temos que configurar um script de comando nas configurações do nosso servidor, que estão localizadas no arquivo package.json, para utilizarmos o compilador.


```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "compile": "tsc",        // Inicia o compilador, ao qual se encerra após realizar suas atribuições.
    "start": "tsc -w"       // Também inicia compilador, mas continua rodando em tempo real, observando o código.
  },

```


#  Incompatibilidade do node_modules

Caso você queira mandar o seu código para outro servidor que não tenha o mesmo sistema operacional que o seu, o node_modules não irá funcionar. Ou seja, você deve remover o node_modules antes de enviar o arquivo devido a sua incompatibilidade.
