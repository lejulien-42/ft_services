# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Dockerfile                                         :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: lejulien <marvin@42.fr>                    +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2021/01/15 11:39:17 by lejulien          #+#    #+#              #
#    Updated: 2021/03/08 10:26:04 by user42           ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

FROM alpine

RUN echo 'http://dl-cdn.alpinelinux.org/alpine/edge/testing' >> /etc/apk/repositories
RUN apk update && apk upgrade
RUN apk add grafana

ADD ./srcs/defaults.ini /usr/share/grafana/conf/grafana.ini
ADD ./srcs/influxdb.yaml /usr/share/grafana/conf/provisioning/datasources/datasources.yaml
ADD ./srcs/dashboards/ /usr/share/grafana/conf/provisioning/dashboards/
CMD grafana-server -homepath="/usr/share/grafana/" -config="/usr/share/grafana/conf/grafana.ini"
