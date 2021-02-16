# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Dockerfile                                         :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: lejulien <marvin@42.fr>                    +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2021/01/15 12:33:30 by lejulien          #+#    #+#              #
#    Updated: 2021/02/16 14:02:09 by user42           ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

FROM alpine:latest
RUN apk update && apk upgrade

RUN apk add nginx openssl

RUN mkdir -p /run/nginx
RUN mkdir -p /etc/nginx/ssl
RUN openssl req -x509 -nodes -subj '/CN=localhost' -days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl/nginx-selfsigned.key -out /etc/nginx/ssl/nginx-selfsigned.crt
RUN rm /var/lib/nginx/html/index.html
ADD srcs/default.conf /etc/nginx/conf.d/default.conf

RUN apk add php7 php7-fpm php7-opcache php7-gd php7-mysqli php7-zlib php7-curl php7-mbstring php7-json php7-session

ARG database_ip="mariadb-service"
ARG database_port="3306"

ADD ./srcs/phpmyadmin /var/lib/nginx/html
ADD ./srcs/config.inc.php /var/lib/nginx/html/phpmyadmin/
ADD ./srcs/www.conf /etc/php7/php-fpm.d/

RUN sed -i "s/_DATABASE_IP_LABEL_/${database_ip}/g" /var/lib/nginx/html/phpmyadmin/config.inc.php
RUN sed -i "s/_DATABASE_PORT_LABEL_/${database_port}/g" /var/lib/nginx/html/phpmyadmin/config.inc.php

ENV SERVICE_PORTS="5000"

CMD php-fpm7 -R && nginx -g "daemon off;" && tail -f /dev/null	
