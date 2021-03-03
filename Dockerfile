FROM node:14-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app/node_modules

RUN mkdir -p /home/node/app/src && chown -R node:node /home/node/app/src

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .