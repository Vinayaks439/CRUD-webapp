FROM httpd:2.4

RUN apt update

COPY . /usr/local/apache2/htdocs/

EXPOSE 80

CMD ["usr/sbin/apache2ctl","-D","FOREGROUND"]
