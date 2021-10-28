FROM node:12-alpine

LABEL version="1.0.0"

RUN mkdir sad
RUN apk upgrade --update && apk add --no-cache mongodb

RUN mongod

COPY . /sad

WORKDIR /sad

RUN npm install

CMD npm start
