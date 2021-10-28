FROM node:12-alpine

LABEL version="1.0.0"

RUN mkdir sad \
    && apk upgrade --update && apk add --no-cache mongodb

RUN mongod

COPY . /sad

WORKDIR /sad

RUN npm install \
    && npm install @splunk/otel \
    && npm install @opentelemetry/instrumentation-http \
    && export OTEL_SERVICE_NAME="apm-test"
    
CMD npm start
