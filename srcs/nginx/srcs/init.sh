# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    init.sh                                            :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: lejulien <marvin@42.fr>                    +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2021/01/15 11:56:02 by lejulien          #+#    #+#              #
#    Updated: 2021/01/15 12:00:15 by lejulien         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

echo "root:$SSH_ROOT_PASSWORD" | chpasswd

openssl req -x509 -nodes -subj '/CN=localhost' -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/server.key -out /etc/ssl/certs/server.crt

adduser -D -g 'www' www
chown -R www:www /var/lib/nginx
chown -R www:www /www

openrc
touch /run/openrc/softlevel
service nginx start
service sshd start

ash
