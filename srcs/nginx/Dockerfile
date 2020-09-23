FROM alpine:3.7
MAINTAINER lejulien "lejulien@student.42.fr"

RUN apk update
RUN apk add nginx
RUN adduser -D -g 'www' www
RUN mkdir www
RUN chown -R www:www /var/lib/nginx
RUN chown -R www:www /www
RUN rm /etc/nginx/nginx.conf
ADD ./nginx.conf /etc/nginx/nginx.conf
ADD ./index.html /www/index.html
RUN nginx -t
