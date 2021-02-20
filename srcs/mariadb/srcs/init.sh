# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    init.sh                                            :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: lejulien <marvin@42.fr>                    +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2021/01/15 12:13:44 by lejulien          #+#    #+#              #
#    Updated: 2021/02/20 15:07:40 by user42           ###   ########.fr        #
#                                                                              #
# **************************************************************************** #


openrc boot
touch /run/openrc/softlevel
sed -i 's/skip-networking/# skip-networking/g' /etc/my.cnf.d/mariadb-server.cnf
/etc/init.d/mariadb setup
/etc/init.d/mariadb start

WP_ADMIN_PASS="lejulien"
WP_USER_PASS="lejulien"


mysql -u root << EOF
	CREATE DATABASE wordpress;
	CREATE USER 'wp_user'@'%' IDENTIFIED BY '$WP_ADMIN_PASS';
	GRANT ALL ON wordpress.* TO 'wp_user'@'%' IDENTIFIED BY '$WP_USER_PASS' WITH GRANT OPTION;
	CREATE USER 'admin'@'%' IDENTIFIED BY '$ADMIN_PASS';
	GRANT ALL ON *.* TO 'admin'@'%' IDENTIFIED BY '$ADMIN_PASS' WITH GRANT OPTION;
	FLUSH PRIVILEGES;
EOF

mysql wordpress < /wordpress.sql

tail -f /dev/null
