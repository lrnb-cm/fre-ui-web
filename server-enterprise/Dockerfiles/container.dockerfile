FROM node:latest

RUN mkdir container
COPY package.json ./package.json
COPY src/container ./src/container

CMD cd src/container && node index.js