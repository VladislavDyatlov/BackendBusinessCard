FROM node:19

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

EXPOSE 4000

CMD [ "node", "app.js" ]