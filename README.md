API para realização de um CRUD em uma Livraria -Teste para uma vaga de Desenvolvedor

Para executar esse projeto, faça o download por meio do clone em: git clone https://github.com/lucasfvbo/api-micks.git ou faça o download zip e descompacte. 

Após isso, acessar a pasta na IDE (para esse projeto foi usado o VSCode). Por existir um arquivo dockerfile, faça o seguinte comando em seu terminal: docker build -t app .

Dessa forma será criada uma nova imagem, eu também disponibilizei no dockerhub a imagem já pronta. acesse em: https://hub.docker.com/r/lucasfvbo/app-api-micks, fazendo o clone: docker pull lucasfvbo/app-api-micks.

para rodar a aplicação, digite após criar a imagem (estapa anterior): docker run -dp 3000:3000 app (se você criou a imagem com esse nome) ou: docker run -dp 3000:3000 app-api-micks:v1 (caso tenha baixado do dockerhub)

Ao acessar o http://localhost:3000/ tudo deve estar funcionando
