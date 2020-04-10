---
title: React - Hello, React!
date: 2020-04-010
# cover: ./image.jpg
description: ~background indian song playing~ e aí, bora conhecer um pouco do ecossistema do React?
tags: ['post', 'quarentena', 'react']
draft: true
hide: true
---

- groselhadas
- link da doc

---
## ./requisitos

Basicamente, tudo que você precisa é de uma versão mais recente do [Node](https://nodejs.org/pt-br/) instalada, seu editor de texto favorito e um terminal bem configurado.

> Já falei de terminal e editores de texto em outro post, clica [AQUI](https://pedro-mello.netlify.com/terminal-ide-editor/) pra ver lá.

Eu utilizo uma distro baseada no Ubuntu, então segui o passo a passo de acordo com meu caso. Para outras distros, segue esse [link](https://github.com/nodesource/distributions/blob/master/README.md) que é sucesso.

Eu digitei os seguintes comandos no meu terminal:

```bash
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -

sudo apt install -y nodejs

sudo apt install gcc g++ make
```

Aproveitei para instalar o Yarn, mas esse passo é opcional:

```bash
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -

echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt update && sudo apt install yarn
```

Se tudo tiver dado certo, você deve ser capaz de digitar os comandos para checar as versões instaladas:

```bash
node -v
npm -v
yarn -v
```

Seu resultado provavelmente vai ser algo parecido com o meu aqui:

![versions](./img/versions.jpg)

---
## ./hello-react

A forma mais fácil de iniciar um projeto em React é utilizando o comando com o *package runner* NPX, que vem junto do NPM (nas versões 5.2+)

Vou criar um projeto chamado **hello-react**, portanto o comando fica assim: 

```bash
npx create-react-app hello-react
```

O terminal exibirá um log como esse, de inicio:

![create-react-app](./img/create-react-app.jpg)

Ele utilizou o yarn, nesse caso, pois eu fiz a instalação e é uma preferência minha. Se você estiver usando o npm, não tem problema nenhum e vai dar tudo certo :)

Todas as dependências do projeto serão instaladas automaticamente. Se não houver nenhum erro, o log final será mais ou menos assim:

![create-react-app](./img/log-final.jpg)

O comando **create-react-app** vem com algumas pré-configurações que são legais para quem ta começando, ou para quem não pretende personalizar muito as configurações do projeto. Se você quiser configurar TUDO na mão e utilizar o **create-react-app** apenas para gerar os arquivos e estrutura iniciais, basta rodar o comando ``yarn eject``. Porém, tome cuidado pois é um procedimento irreversível.

Os outros comandos, em ordem, são:
- ``yarn start``
  - Inicia o servidor de desenvolvimento.
- ``yarn build``
  - Builda todos os arquivos para uma versão de produção.
- ``yarn test``
  - Executa o runner de teste (se estiver configurado).

Agora que já temos uma visão geral dos comandos que vem configurados por default, é hora de entrar no diretório e abrir ele com seu editor de texto para verificar os arquivos que foram criados.

Para isso, eu utilizei:

```bash
cd hello-react

code .
```

Utilizo o [Visual Studio Code](https://code.visualstudio.com/), e esse último comando abre o diretório atual em uma nova janela do editor de texto. Se você estiver utilizando outro editor ou uma IDE, verifique se ele possui algum atalho ou abra manualmente pela interface gráfica do programa.

---
## ./estrutura-de-arquivos

![estrutura-1](img/estrutura-1.jpg)

Essa é a estrutura inicial do nosso projeto, os arquivos e diretórios que o **create-react-app** criou para nós.

Vamos entender, nível por nível, o que são cada uma dessas coisas.

----
### Pasta Raiz

Dentro dessa pasta, temos os seguintes arquivos:

- ``.gitignore``
  - Arquivo de texto que podemos listar os arquivos e diretórios que serão ignorados pelo watcher do git (assunto para outro post específico sobre Git)
- ``package.json``
  - Arquivo que contém as informações do projeto e as dependências dele. É esse arquivo que o NPM e o YARN utilizam.
- ``README.md``
  - Arquivo formatado com *markdown*, utilizado normalmente para descrever o projeto e suas dependências. Nos repositórios de Git, é ele que faz a "folha de rosto" do projeto.
- ``yarn.lock``
  - Arquivo de log relacionado ao ``package.json``

É na pasta raiz que temos acesso as demais pastas do nosso projeto.

----
### node_modules

![node_modules](./img/node_modules.jpg)

É a pasta que contém as dependências instaladas do nosso projeto. Pela imagem acima, conseguimos ter uma noção da quantidade de arquivos e do tamanho que ela deve ser.

Justamente por isso que existe o arquivo ``package.json``, que contém as informações de todas essas dependências para serem instaladas em diferentes computadores.

Já imaginou se a gente tivesse que passar o projeto para outra pessoa por pendrive por causa da limitação de espaço em um servidor git?

----
### public

![public](./img/public.jpg)

Nesse diretório estão os arquivos principais que serão lidos pelo navegador. O ``favicon.icon``, por exemplo, é o ícone que fica na aba que o site está aberto.

A estrutura do `index.html` tem a referência que precisamos para nosso código React funcionar: um `id` na tag do body que será lido no React para implantar o que desenvolvermos.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
```

Voltaremos nessa parte mais tarde para explicar mais profundamente como o código em React é passado para nosso browser.

----
### src

![src](./img/src.jpg)

É aqui que mora nosso código React (pelo menos à princípio, rs).

A estrutura inicial do nosso código é bem básica, existem várias ações que podemos adotar visando boas práticas no nosso código. Por hora, não vamos entrar nesse assunto. Vai ficar pra última parte dessa nossa série introdutória.

Tá tudo um pouco confuso nesse diretório, mas vamos focar em fazer algumas alterações em arquivos para ver como reflete no nosso servidor local de desenvolvimento.

Antes de mais nada, roda um `yarn start` ou `npm start` aí. Se o browser não abrir automaticamente, verifica o log no terminal ou acessa http://localhost:3000/ .

![react](img/react.jpg)

Tu deve estar vendo a logo do React girando e esses escritos abaixo. Certo? Vamos fazer algumas alterações e deixar a coisa mais legal.

Primeiro vamos ver de qual arquivo ta vindo isso.

**App.js**
```javascript
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

```

> COMO ASSIM TEM CÓDIGO HTML E JAVASCRIPT JUNTO?
> > Calma, que no próximo tópico eu vou te explicar...

Vamos começar trocando a logo do React por algo mais legal, e trocar os escritos.

Deixa o seu código como o meu aqui:

```javascript
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, from India. Arebaba!
        </p>
      </header>
    </div>
  );
}

export default App;
```

Salva o arquivo e corre no navegador. Mudou, né? Esse é um recurso do **create-react-app** para atualizar o código em tempo real, assim que alguma alteração é efetuada e salva.

Agora vamos trocar esse logo rodando. Vai no arquivo ``App.css`` e deixa ele como o meu:

```css
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}
```

Se tu voltar no navegador, a logo parou de girar.

Agora vamos trocar a logo. Salva essa imagem aqui:

![india-flag](./img/india-flag.png)

Salva ela como ``logo.png`` na pasta src:

![logo-india](img/logo-india.jpg)

---

vlw flw