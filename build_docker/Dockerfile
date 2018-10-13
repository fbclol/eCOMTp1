FROM php:7.0-apache

RUN apt-get update && apt-get install -y git
RUN git clone https://github.com/fbclol/eCOMTp1 /var/www/html/
RUN cd /var/www/html
RUN git pull
RUN chown -R www-data:root .
EXPOSE 80
CMD echo "ServerName localhost" >> /etc/apache2/apache2.conf
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]