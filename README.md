Lord of the Rings App
O Lord of the Rings App é uma aplicação web desenvolvida utilizando React e Axios. Ele utiliza a API disponível em the-one-api.dev para fornecer aos usuários informações abrangentes sobre a série de filmes e livros "O Senhor dos Anéis", com foco especial em dados de personagens. Caso queira testar sem ter que instalar em sua maquina https://lord-of-the-rings-app.surge.sh

Páginas
Personagens A página Personagens serve como a principal do aplicativo. Ela exibe uma lista completa de personagens da série "O Senhor dos Anéis". Os usuários podem aplicar diversos filtros, como por reino, e até mesmo buscar personagens pelo nome.

Filmes
A página Filmes fornece uma lista completa de todos os filmes na série "O Senhor dos Anéis". Os usuários podem acessar detalhes sobre cada filme.

Livros
A página Livros oferece informações sobre todos os livros na série "O Senhor dos Anéis".

Detalhes do Personagem
Ao clicar em um personagem na página Personagens, os usuários são redirecionados para a página de Detalhes do Personagem. Aqui, é possível acessar informações detalhadas sobre o personagem selecionado, incluindo um link para a página correspondente na Wiki.

Navegação
Uma barra de navegação está incluída para alternar facilmente entre as páginas de Personagens, Filmes e Livros. Na página de Detalhes do Personagem, um botão permite que os usuários retornem à página de Personagens.

Aprimorando a Experiência do Usuário
Dada a grande quantidade de personagens na série, foi implementado um recurso de "voltar ao topo" na página de Personagens. Ele aparece automaticamente quando o usuário rola para baixo, permitindo uma navegação fácil de volta ao topo da lista de personagens sem rolagem manual.

Como Usar
Para começar a usar o Lord of the Rings App, siga estas etapas:

Escolha qual pagina deseja.
Caso seja "Mostrar personagens" Escreva e selecione os filtros que deseja.
Pressione no card com o nome do personagem escolhido e va para detalhes.
clique em voltar no topo da pagina caso deje voltar
Instruções de Instalação
Crie um projeto React em sua máquina:

npx create-react-app lord-of-the-rings-app
Navegue até o diretório do projeto:

cd lord-of-the-rings-app
Clone o repositório:

git clone [https://github.com/sergiolfaria/Lord-of-the-rings-app.git]
Instale as dependências necessárias:

npm install
Inicie o projeto:

 npm start

React: Uma biblioteca JavaScript popular para construir interfaces de usuário. Axios: Um cliente HTTP baseado em promessas para fazer solicitações de API. the-one-api.dev: A fonte da API para buscar dados relacionados a "O Senhor dos Anéis".