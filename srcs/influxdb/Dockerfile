FROM alpine

RUN apk update
RUN apk upgrade
RUN apk add influxdb openrc

RUN printf "admin\nadmin" | passwd
ADD ./srcs/telegraf.tar.gz /
COPY ./srcs/telegraf.conf /etc/telegraf/telegraf.conf
COPY ./srcs/init.sh /init.sh
COPY ./srcs/influxdb.conf /etc/influxdb/influxdb

EXPOSE 8086

CMD [ "influxd" ]
