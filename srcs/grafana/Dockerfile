# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Dockerfile                                         :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: lejulien <marvin@42.fr>                    +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2021/01/15 11:39:17 by lejulien          #+#    #+#              #
#    Updated: 2021/03/04 15:56:18 by user42           ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

FROM alpine

RUN apk add libc6-compat

RUN wget https://dl.grafana.com/oss/release/grafana-7.4.3.linux-amd64.tar.gz
RUN tar -zxvf grafana-7.4.3.linux-amd64.tar.gz
ADD ./srcs/defaults.ini /grafana-7.4.3/conf/grafana.ini
ADD ./srcs/influxdb.yaml /grafana-7.4.3/conf/provisioning/datasources/influxdb.yaml
WORKDIR /grafana-7.4.3/bin
CMD ./grafana-server -homepath="/grafana-7.4.3/" -config="/grafana-7.4.3/conf/grafana.ini"
