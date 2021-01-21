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

ADD srcs/nginx.conf /etc/nginx/
ADD srcs/sshd_config /etc/ssh/
ADD srcs/wordpress /www
ADD srcs/init.sh /init.sh

EXPOSE 80 443 22

CMD [ "/bin/ash", "/init.sh" ]
