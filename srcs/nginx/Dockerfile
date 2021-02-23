# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Dockerfile                                         :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: lejulien <marvin@42.fr>                    +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2021/01/15 11:39:17 by lejulien          #+#    #+#              #
#    Updated: 2021/02/23 17:50:14 by user42           ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

FROM alpine

RUN mkdir www

RUN apk add openrc nginx openssl openssh

ADD srcs/nginx.conf /etc/nginx/
ADD srcs/sshd_config /etc/ssh/
COPY srcs/index /www
ADD srcs/init.sh /init.sh
ADD srcs/proxy_params $nginx_proxy_params

EXPOSE 80 443 22

CMD [ "/bin/ash", "/init.sh" ]
