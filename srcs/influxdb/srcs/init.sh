#!/bin/sh

touch /run/openrc/softlevel
openrc boot
influxd 2>$HOME/my_log_file
influx -execute "CREATE DATABASE influxdb"
influx -execute "CREATE USER lejulien WITH PASSWORD 'lejulien'"
influx -execute "GRANT ALL ON influxdb TO lejulien"
telegraf
tail -f /dev/null
