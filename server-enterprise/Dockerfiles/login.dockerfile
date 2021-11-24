FROM node:latest

RUN mkdir login
COPY package.json ./package.json
COPY src/loginContainer ./src/loginContainer

CMD cd src/loginContainer && node index.js