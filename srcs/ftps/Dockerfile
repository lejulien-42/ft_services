# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Dockerfile                                         :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: lejulien <marvin@42.fr>                    +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2021/01/15 12:44:14 by lejulien          #+#    #+#              #
#    Updated: 2021/01/15 12:54:11 by lejulien         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

FROM alpine
RUN apk add vsftpd openssl openrc curl
ADD srcs/vsftpd.conf /etc/vsftpd
ADD srcs /

RUN export FTPS_USER=patate
RUN export FTPS_PASS=123

EXPOSE 20 21 21000-21004

VOLUME [ "/ftp" ]

CMD [ "/bin/ash", "/init.sh" ]
