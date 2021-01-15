# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Dockerfile                                         :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: lejulien <marvin@42.fr>                    +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2021/01/15 12:33:30 by lejulien          #+#    #+#              #
#    Updated: 2021/01/15 12:35:56 by lejulien         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

FROM alpine

ADD srcs /
RUN apk add wget php7 php7-fpm php7-opcache php7-gd php7-mysqli php7-zlib php7-curl php7-mbstring php7-json php7-session
RUN mkdir -p /srv/www/
RUN wget http://files.directadmin.com/services/all/phpMyAdmin/phpMyAdmin-5.0.2-all-languages.tar.gz -P /tmp
RUN tar zxf /tmp/phpMyAdmin-5.0.2-all-languages.tar.gz -C /tmp
RUN mv /tmp/phpMyAdmin-5.0.2-all-languages /srv/www/
RUN mv /srv/www/phpMyAdmin-5.0.2-all-languages /srv/www/phpmyadmin
RUN mv /root/config.inc.php /srv/www/phpmyadmin

EXPOSE 5000

CMD [ "/bin/ash", "/init.sh" ]
