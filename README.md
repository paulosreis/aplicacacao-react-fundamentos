# 📝 README

Este repositório contém um projeto em React com TypeScript para exibir um feed de posts.

## 💡 Objetivo do Projeto

O objetivo deste projeto é estudar e aplicar os conceitos importantes do React, como componentização, propriedades, estados, imutabilidade, hooks e TypeScript para construir uma aplicação robusta e escalável.

## 🚀 Executando o Projeto Localmente

Para executar o projeto localmente, você precisará ter o Node.js instalado em sua máquina. Em seguida, siga as instruções abaixo:

1. Clone o repositório para sua máquina local usando o comando abaixo:
``` bash
git clone https://github.com/paulosreis/feed-react-typescript.git
```

2. Acesse a pasta do projeto e instale as dependências utilizando o gerenciador de pacotes `npm`:
``` bash
cd feed-react-typescript
npm install
```

3. Após a instalação das dependências, execute o seguinte comando para iniciar o servidor local:
```bash
npm start
```

4. O aplicativo será aberto automaticamente em seu navegador padrão na porta 3000.

## 🧠 Conceitos Importantes do React Aplicados no Projeto

- **Componentização**: a aplicação foi dividida em componentes menores e mais reutilizáveis, facilitando a manutenção do código e permitindo uma melhor organização das funcionalidades.

- **Propriedades**: os componentes recebem propriedades (ou props) que podem ser passadas pelos seus componentes pais. Dessa forma, é possível criar componentes mais genéricos e flexíveis que se adaptam à diferentes contextos de uso.

- **Estado**: alguns componentes possuem estados que podem ser atualizados em tempo real para refletir as alterações feitas pelo usuário ou pelas respostas da API. O estado é gerenciado com o hook `useState`.

- **Imutabilidade**: em vez de modificar diretamente o estado, o React utiliza a imutabilidade para criar uma nova referência do objeto que está sendo atualizado. Isso evita problemas de inconsistência e ajuda a manter um melhor controle sobre os dados.

- **Hooks**: os hooks são funções especiais do React que permitem utilizar recursos como estado, ciclo de vida e contexto em componentes funcionais. No projeto foram utilizados os hooks `useState`, `useEffect` e `useCallback`.

- **TypeScript**: o TypeScript foi utilizado para adicionar tipagem estática ao código, aumentando a segurança e a confiabilidade do sistema. Além disso, o TypeScript também ajuda na manutenção do código através de ferramentas de autocompletar e validação estática.

## 🤝 Contribuindo

Contribuições são bem-vindas! Se você quiser contribuir com este projeto, siga estas etapas:

1. Crie um fork deste repositório.
2. Crie um branch com suas alterações: `git checkout -b minha-branch`
3. Faça suas alterações e faça commit das mesmas: `git commit -m 'Minhas alterações'`
4. Faça push para o branch criado no seu fork: `git push origin minha-branch`
5. Abra um pull request neste repositório, descrevendo suas alterações.


