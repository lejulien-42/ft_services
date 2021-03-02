#!/bin/sh
apk add openrc

openrc boot


service influxdb start

sleep 10

influx -execute "CREATE DATABASE influxdb" && \
influx -execute "CREATE USER lejulien WITH PASSWORD 'lejulien'" && \
influx -execute "GRANT ALL ON influxdb TO lejulien"

tail -f /dev/null
