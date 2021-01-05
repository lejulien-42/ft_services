# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Dockerfile                                         :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: lejulien <lejulien@student.42.fr>          +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2021/01/05 15:28:32 by lejulien          #+#    #+#              #
#    Updated: 2021/01/05 17:37:11 by lejulien         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

FROM alpine
MAINTAINER lejulien

RUN apk add nginx
RUN printf "user42\nuser42\n" | adduser -g 'Nginx www user' -h /home/www user42

ADD ./srcs/script.sh ./script.sh

EXPOSE 80

ENTRYPOINT ["/bin/ash", "./script.sh"]
