# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Dockerfile                                         :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: lejulien <marvin@42.fr>                    +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2021/01/15 11:39:17 by lejulien          #+#    #+#              #
#    Updated: 2021/01/15 11:55:31 by lejulien         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

FROM alpine

RUN mkdir www

RUN apk add openrc nginx openssl openssh

RUN apk --update add php7 php7-bcmath php7-ctype php7-curl php7-fpm php7-gd php7-iconv php7-intl php7-json php7-mbstring php7-mcrypt php7-mysqlnd php7-opcache php7-openssl php7-pdo php7-pdo_mysql php7-pdo_pgsql php7-pdo_sqlite php7-phar php7-posix php7-session php7-soap php7-xml php7-zip

ADD srcs/nginx.conf /etc/nginx/
ADD srcs/sshd_config /etc/ssh/
ADD srcs/wordpress /www
ADD srcs/init.sh /init.sh

EXPOSE 80 443 22

CMD [ "/bin/ash", "/init.sh" ]
