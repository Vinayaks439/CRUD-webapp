FROM httpd:2.4

RUN apt update

COPY . /usr/local/apache2/htdocs/

RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

EXPOSE 80

CMD ["/usr/sbin/apache2ctl","-D","FOREGROUND"]
