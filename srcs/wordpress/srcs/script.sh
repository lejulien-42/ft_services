# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    script.sh                                          :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: lejulien <lejulien@student.42.fr>          +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2021/01/05 16:49:28 by lejulien          #+#    #+#              #
#    Updated: 2021/01/08 17:16:24 by lejulien         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

rc-update add nginx default
rc-update add php-fpm7 default
rc-update add mariadb default

rc-service nginx stop
rc-service php-fpm7 stop
rc-service php-fpm7 start
rc-service mariadb restart

mysql -u root -bse "
CREATE DATABASE IF NOT EXISTS wordpress_db;
GRANT ALL ON wordpress_db.* TO 'wordpress_user'@'localhost' IDENTIFIED BY 'password';
CREATE USER 'admin'@'localhost' IDENTIFIED BY 'toor';
GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost';
FLUSH PRIVILEGES;"


nginx -g "pid /tmp/nginx.pid; daemon off;"
