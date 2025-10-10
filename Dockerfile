FROM node:24.9.0-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]