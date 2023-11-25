FROM node:18
WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install
RUN yarn global add astro

COPY . .

EXPOSE 4321

CMD ["yarn", "start", "--host"]
