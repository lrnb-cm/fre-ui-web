FROM node:latest

RUN mkdir gateway
COPY package.json ./package.json
COPY src/gateway.ts ./src/gateway.ts

CMD cd src/ && node gateway.ts