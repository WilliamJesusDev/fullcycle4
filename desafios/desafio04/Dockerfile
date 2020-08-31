FROM node:12-alpine

WORKDIR /usr/src/app

ENV PATH /app/node_modules/.bin:$PATH

ENV CHOKIDAR_USEPOLLING true

COPY . .

RUN yarn install

EXPOSE 3000

CMD ["npm", "start"]