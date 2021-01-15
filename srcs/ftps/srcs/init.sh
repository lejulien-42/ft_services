# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    init.sh                                            :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: lejulien <marvin@42.fr>                    +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2021/01/15 12:47:53 by lejulien          #+#    #+#              #
#    Updated: 2021/01/15 12:50:37 by lejulien         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

openssl req -x509 -nodes -subj '/CN=localhost' -days 365 -newkey rsa:1024 -keyout

/etc/vsftpd/vsftpd.pem -out /etc/vsftpd/vsftpd.pem

if [ ! -d "ftp/$FTPS_USER" ]
then
	mkdir -p /ftp/$FTPS_USER &> /dev/null
fi

echo -e "$FTPS_PASS\n$FTPS_PASS" | adduser -h /ftp/$FTPS_USER $FTPS_USER

chown $FTPS_USER:$FTPS_USER /ftp/$FTPS_USER

exec /usr/sbin/vsftpd -opasv_min_port=21000 -opasv_max_port=21004 -opasv_address=172.17.0.230 /etc/vsftpd/vsftpd.conf &
ash
