FROM httpd:2.4

RUN apk upgrade --update

COPY . /usr/local/apache2/htdocs/

EXPOSE 80

RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

CMD ["usr/sbin/apache2ctl","-D","FOREGROUND"]