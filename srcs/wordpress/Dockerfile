# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Dockerfile                                         :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: lejulien <lejulien@student.42.fr>          +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2021/01/05 15:28:32 by lejulien          #+#    #+#              #
#    Updated: 2021/01/11 13:51:49 by lejulien         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

FROM alpine
MAINTAINER lejulien

RUN apk update && apk upgrade
RUN apk add nginx openrc
RUN apk add php7 php7-fpm php7-opcache
RUN apk add php7-gd php7-mysqli php7-zlib php7-curl
RUN mkdir /run/openrc
RUN apk add mysql mysql-client
ADD ./srcs/wordpress /var/www/localhost/wordpress
RUN openrc boot
RUN sed -i '/skip-networking/d' /etc/my.cnf.d/mariadb-server.cnf
RUN /etc/init.d/mariadb setup
RUN /etc/init.d/mariadb restart
ADD ./srcs/default.conf /etc/nginx/conf.d/default.conf
RUN printf "user42\nuser42\n" | adduser -g 'Nginx www user' -h /home/www user42
ADD ./srcs/script.sh ./script.sh

RUN wget https://github.com/FiloSottile/mkcert/releases/download/v1.4.1/mkcert-v1.4.1-linux-amd64
RUN mv mkcert-v1.4.1-linux-amd64 mkcert
RUN chmod +x mkcert
RUN echo "Setting up mkcert"
RUN ./mkcert -install
RUN ./mkcert localhost

RUN chmod 755 /var/www/localhost

EXPOSE 80

ENTRYPOINT ["/bin/ash", "./script.sh"]
