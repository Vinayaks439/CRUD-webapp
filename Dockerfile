FROM node:12-alpine

LABEL version="1.0.0"

RUN mkdir sad \
    && echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/main' >> /etc/apk/repositories \ 
    && echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/community' >> /etc/apk/repositories \
    && apk upgrade --update && apk update && apk add --no-cache mongodb=3.4.4-r0

CMD [ "mongod", "--bind_ip", "0.0.0.0" ]

COPY . /sad

WORKDIR /sad

RUN npm install \
    && npm install @splunk/otel \
    && npm install @opentelemetry/instrumentation-http \
    && export OTEL_SERVICE_NAME="apm-test"
    
CMD npm start
