# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    script.sh                                          :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: lejulien <lejulien@student.42.fr>          +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2021/01/05 16:49:28 by lejulien          #+#    #+#              #
#    Updated: 2021/01/07 11:47:53 by user42           ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

rc-update add nginx default
rc-update add php-fpm7 default

rc-service nginx restart
rc-service php-fpm7 restart

nginx -g "pid /tmp/nginx.pid; daemon off;"
/bin/ash

