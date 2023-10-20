**Documentação do desenvolvimento:**
  - [Documentação de requisitos](requisitos.md)


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