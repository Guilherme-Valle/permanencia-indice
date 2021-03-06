# Índice da Permanência

> ## O que é este projeto?
> 
> A ideia deste projeto é fornecer um índice mais amigável dos artigos do site da   [Permanência](https://permanencia.org.br), organizados de acordo com seus respectivos autores.

> ## O que motivou este projeto?
>
> A motivação para o projeto surgiu de uma dificuldade prática em acessar o índice de autores já existente no website da Permanência, aliada a uma vontade de ajudar outros que passam por semelhantes problemas ao acessar tão excepcional website e à intenção de aprimorar os conhecimentos em webscraping e programação web. Além disso, divulgar o site da Permanência, *um dos melhores do catolicismo brasileiro*.

> ## É um projeto open-source?
>
> Sim, este é um projeto open-source, sem fins lucrativos e que não está formalmente vinculado à editora Permanência ou ao respectivo website. **Não se intimide, pode submeter pull requests!**

# Como rodar o projeto:

> # Primeira etapa: realizar o webscrapping
## Primeiro de tudo, é necessário ter instalado o MongoDB na sua máquina, e no mínimo a versão 3.6 do Python. Após isso, basta ir para a pasta `permanencia-indice-scrapping` e rodar o comando `pip install -r requirements.txt`, e, em seguida, executar `scrapy crawl spider_permanencia`. Isso irá disparar o robô que extrairá os autores e os links dos textos do site da Permanência, salvando tudo isso em collections dentro de um banco do MongoDB.

> # Segunda etapa: preparar a API

## Agora que tem os dados, você precisa disponibilizar esses dados num servidor web, para que eles possam ser consumidos. Para isso, basta ter o NodeJS na versão 16.14, entrar na pasta `permanencia-indice-api` e rodar o comando `npm install`. Após isso, entre na pasta `src` e rode o comando `node indicepermanencia.js`. Se tudo der certo, o servidor estará escutando na porta 3001.

> # Terceira etapa: rodar o front-end

## Com os dados preparados e o servidor aguardando as requisições, agora você pode inicializar a aplicação em NextJS, que é o front-end do site. Para isso, entre na pasta `permanencia-indice-front` e rode o comando `npm install`. Após isso, rode o comando `npm run dev`, e a aplicação estará rodando na porta 3000. Para acessar, acesse no browser `localhost:3000`. Todo feedback é bem-vindo!

# TODO do projeto:

> # Estágio 1

## - ~~Extrair autores e links para artigos do site da Permanência utilizando webscraping.~~
## - ~~Armazenar autores e links num banco de dados NOSQL.~~
## - ~~Disponibilizar os dados numa API Rest.~~
## - ~~Criar um webapp com NextJS para a exibição do índice dos artigos.~~
## - ~~Hospedar website em domínio público~~ -> https://indicepermanencia.dovalle.app.br
## - Criar Dockerfile para o projeto


> # Estágio 2
## - Tornar o site responsivo
## - Adicionar imagens individuais aos autores
## - Indexar Thesauri
## - Indexar índice temático
## - Melhorar design do site
## - Adicionar gráficos interessantes

