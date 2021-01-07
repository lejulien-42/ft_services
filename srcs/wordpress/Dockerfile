# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Dockerfile                                         :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: lejulien <lejulien@student.42.fr>          +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2021/01/05 15:28:32 by lejulien          #+#    #+#              #
#    Updated: 2021/01/07 12:15:41 by user42           ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

FROM alpine
MAINTAINER lejulien

RUN apk update && apk upgrade
RUN apk add nginx openrc
RUN apk add php7 php7-fpm php7-opcache
RUN apk add php7-gd php7-mysqli php7-zlib php7-curl
RUN apk add mysql mysql-client 

RUN printf "user42\nuser42\n" | adduser -g 'Nginx www user' -h /home/www user42
ADD ./srcs/script.sh ./script.sh

EXPOSE 80

ENTRYPOINT ["/bin/ash", "./script.sh"]
