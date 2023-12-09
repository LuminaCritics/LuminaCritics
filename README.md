**Documentação do desenvolvimento:**
  - [Documentação de requisitos](requisitos.md)

**Deployments**
  - [Frontend integrado](https://luminacriticss.netlify.app/)
  - [API Rest](https://backend-31dy.onrender.com/luminacritics/)
    - Ver endpoints em [README.md backend](https://github.com/LuminaCritics/LuminaCritics/blob/develop/backend/README.md)
    - NOTA: no readme acima está referenciado para a execução local, basta trocar a base da url, mantendo a rota após o /luminacritics/, para executar na API rest em deploy
   
      
## Instalação do Docker para executar o projeto:

- Instale o Docker: [Instruções ](https://docs.docker.com/desktop/install/ubuntu/)
- Instale o Docker Compose: [Instruções](https://docs.docker.com/compose/install/linux/)

## Comandos do Docker:

- Confira se o Docker Compose está instalado:
  ```shell
  docker-compose -v 
  ```

- Execute o arquivo docker-compose.yml para subir os containers:
  ```shell 
    docker-compose -f docker-compose.yml up
  ```
