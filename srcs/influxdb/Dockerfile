FROM alpine

RUN apk update
RUN apk upgrade
RUN apk add influxdb

RUN printf "admin\nadmin" | passwd
COPY ./srcs/init.sh /init.sh
COPY ./srcs/influxdb.conf /etc/influxdb/influxdb

EXPOSE 8086

CMD [ "sh", "/init.sh" ]
