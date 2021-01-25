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

RUN apk --no-cache add vsftpd openssl

COPY srcs/init.sh /bin/init.sh
COPY srcs/vsftpd.conf /etc/vsftpd/vsftpd.conf
RUN openssl req -x509 -nodes -days 365 \
    -subj  "/C=CA/ST=QC/O=Company Inc/CN=example.com" \
     -newkey rsa:2048 -keyout /etc/ssl/private/ftps-selfsigned.key \
     -out /etc/ssl/certs/ftps-selfsigned.crt;

EXPOSE 21 21000-21010
VOLUME /ftp/ftp

CMD [ "/bin/ash", "/bin/init.sh" ]
