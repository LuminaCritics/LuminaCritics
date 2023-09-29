FROM node:latest
WORKDIR /app

COPY . .

RUN yarn install
RUN npm install -g astro
CMD ["yarn", "start", "--host"]
