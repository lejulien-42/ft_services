FROM alpine

RUN addgroup -g influxdb -S influxdb
RUN adduser -u influxdb -h /var/lib/influxdb -D influxdb
RUN echo 'hosts: files dns >> /etv/nsswitch.conf
RUN apk add -Uu --purge --no-cache --repository http://dl-cdn.alpinelinux.org/alpine/edge/community ca-certificates influxdb
RUN update-ca-certificates
RUN rm -fr /var/cache/apk/* /tmp/*

COPY root/ /

VOLUME ["/var/lib/influxdb"]

EXPOSE 8083 8086 8088 8091 4242

ENTRYPOINT ["/init"]
