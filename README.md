# upload.ai - Geração de Texto com IA

![GitHub last commit](https://img.shields.io/github/last-commit/seu-usuario/seu-repositorio)
![GitHub stars](https://img.shields.io/github/stars/seu-usuario/seu-repositorio)
![GitHub forks](https://img.shields.io/github/forks/seu-usuario/seu-repositorio)

## Descrição

O upload.ai é uma aplicação web que utiliza a inteligência artificial (IA) para gerar texto a partir de um prompt. Essa aplicação foi desenvolvida com amor durante o Next Level Week (NLW) da Rocketseat pela talentosa [Beatriz Oliveira Ferreira](https://www.linkedin.com/in/beatriz-oliveira-ferreira-720b49288/).

## Funcionalidades Principais

- Inclua um prompt para a IA e obtenha um texto gerado como resultado.
- Personalize a temperatura para controlar a criatividade da IA.
- Escolha entre diferentes modelos de IA, incluindo o GPT 3.5-turbo 16k.
- Adicione o conteúdo da transcrição do vídeo selecionado utilizando a variável `{transcription}`.

## Pré-requisitos

Antes de começar a usar o upload.ai, verifique se você possui os seguintes pré-requisitos instalados:

- Node.js
- npm (ou yarn)

## Como Usar

Siga estas etapas para configurar e usar o upload.ai em sua máquina:

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git

Navegue até o diretório do projeto:

cd seu-repositorio

Instale as dependências:
npm install
# ou
yarn install

# obs: 
eu usei o pnpm, com o pnpm basta instalar o npm e depois o pnpm 
npm install -g pnpm

Inicie o servidor:
npm start
# ou
yarn start

Acesse o aplicativo em seu navegador em http://localhost:3000.

Carregue um vídeo e comece a gerar texto com a IA!

Rota de Criação de Transcrição
Para criar transcrições de áudio a partir de vídeos, você pode usar a rota POST /videos/:videoId/transcription. Certifique-se de que você tenha o Fastify instalado para manipular as solicitações.

Exemplo de uso da rota:
curl -X POST http://localhost:3000/videos/SEU_VIDEO_ID/transcription -H "Content-Type: application/json" -d '{"prompt": "Inclua seu prompt aqui"}'

SEU_VIDEO_ID: Substitua pelo ID do vídeo que deseja transcrever.
"prompt": Substitua pelo prompt que deseja usar para gerar a transcrição.
Observe que a rota utiliza a biblioteca Zod para validar os parâmetros da solicitação.

A transcrição gerada será salva no banco de dados e estará disponível para visualização no aplicativo.

# Requisitos
Antes de usar a rota de criação de transcrição, certifique-se de que todas as dependências do projeto estejam instaladas e o servidor esteja em execução.

# Contribuindo
Se você deseja contribuir para o desenvolvimento do upload.ai, siga as etapas mencionadas na seção "Contribuindo" acima.

# Licença
Este projeto está licenciado sob a Licença MIT.

# Contato
Beatriz Oliveira Ferreira - LinkedIn

# Agradecimentos
Agradecemos à Rocketseat pelo Next Level Week, que inspirou o desenvolvimento deste projeto.

Sinta-se à vontade para personalizar ainda mais esta explicação e adaptá-la às necessidades do seu projeto. Certifique-se de que as informações sejam claras e precisas para os usuários que desejam usar sua aplicação.



