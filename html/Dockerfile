FROM httpd:2.4

RUN apt update

COPY . /usr/local/apache2/htdocs/

RUN echo "ServerName localhost" >> /usr/local/apache2/conf/httpd.conf

EXPOSE 80
