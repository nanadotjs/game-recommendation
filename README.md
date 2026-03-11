# Recomendação de game

O sistema criado pela desenvolvedora é uma plataforma online para computadores, celulares e tablets que que sugere aleatoriamente uma recomendação de jogo digital conforme: gênero, plataforma e/ou RAM informado.

## Descrição do projeto

- O que não é: um aplicativo, um sistema que pode ser acessado sem acesso à internet, um banco de dados, um site hospedado na internet, uma loja virtual.
- O que faz: valida se pelo menos 1 gênero foi informado sendo o único campo obrigatório, valida se o número de memória RAM foi informado, valida se o campo de plataforma foi informado, ao filtrar os resultados retorna um jogo aleatoriamente a partir de uma função, se nenhum jogo for encontrado exibe uma mensagem amigável orientando o usuário a alterar os filtros, se adapta ao tamanho da tela, consume a API Free-To-Play Games Database, exibe na tela nome, desenvolvedor, gênero, descrição, data de lançamento plataforma e link do jogo escolhido. SUGESTÕES: salva localmente uma wishlist de jogos para o usuário poder visualizar os que lhe interessaram e comparar, limita 10 requisições por minuto (rate limit), adiciona e remove os jogos da wishlist, os jogos salvos redirecionam pra seu site para mais informações.
- O que não faz: gera link para pagamento, download. SUGESTÃO: não salva a wishlist num banco de dados.

## Tecnologias

- React
- Vite
- Shadcn
- Tailwind
- Typescript

## Pré requisitos

- Node.js v18+
- npm ou yarn

## Instalação

1. Após clonar o projeto no terminal instale as dependências com npm install ou yarn e inicie o servidor com nrm run dev ou yarn run dev
   * Como o projeto foi criado com Vite, por padrão ele roda na porta :5173
2. Acesse http://localhost:5173
