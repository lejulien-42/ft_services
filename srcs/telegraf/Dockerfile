
FROM alpine

RUN apk update
RUN apk upgrade

RUN printf "lejulien\nlejulien" | passwd

ADD ./srcs/telegraf.tar.gz /
ADD ./srcs/telegraf.conf /etc/telegraf/telegraf.conf

CMD telegraf && tail -f /dev/null
