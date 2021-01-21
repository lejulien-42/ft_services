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

RUN apk --no-cache add vsftpd

COPY srcs/init.sh /bin/init.sh
COPY srcs/vsftpd.conf /etc/vsftpd/vsftpd.conf

EXPOSE 21 21000-21010
VOLUME /ftp/ftp

CMD [ "/bin/ash", "/bin/init.sh" ]
