# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Dockerfile                                         :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: lejulien <marvin@42.fr>                    +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2021/01/15 12:11:28 by lejulien          #+#    #+#              #
#    Updated: 2021/01/15 12:13:19 by lejulien         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

FROM alpine

RUN apk add mysql mysql-client openrc
ADD srcs/* /

EXPOSE 3306

CMD [ "/bin/ash", "/init.sh" ]
