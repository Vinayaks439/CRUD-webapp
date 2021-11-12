FROM httpd:2.4

RUN apt update

COPY . /usr/local/apache2/htdocs/

RUN echo "ServerName localhost" >> /usr/local/apache2/conf/httpd.conf
RUN echo "LoadModule status_module libexec/apache2/mod_status.so" >> /usr/local/apache2/conf/httpd.conf \
    && echo "ExtendedStatus on" >> /usr/local/apache2/conf/httpd.conf \
    && echo "<Location /mod_status>" >> /usr/local/apache2/conf/httpd.conf \
    && echo    "SetHandler server-status" >> /usr/local/apache2/conf/httpd.conf \
    && echo "</Location>" >> /usr/local/apache2/conf/httpd.conf 

EXPOSE 80
