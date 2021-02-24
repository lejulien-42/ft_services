FROM alpine

RUN apk update
RUN apk add influxdb

RUN apk add telegraf --repository http://dl-3.alpinelinux.org/alpine/edge/testing/ --allow-untrusted --no-cache

RUN mkdir -p /etc/telegraf
COPY ./srcs/telegraf.conf /etc/telegrfaf/telegraf.conf

COPY ./srcs/init.sh /init.sh

EXPOSE 8086

RUN ash ./init.sh
