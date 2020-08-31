FROM node:12-alpine

WORKDIR /app

COPY package.json ./

RUN npm -g i @nestjs/cli

RUN yarn install

COPY . .

RUN yarn build

CMD ["node", "dist/main"]

EXPOSE 3000