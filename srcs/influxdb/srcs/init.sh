#!/bin/sh
influxd && sleep 5 \
	influx -execute "CREATE DATABASE influxdb" && \
	influx -execute "CREATE USER lejulien WITH PASSWORD 'lejulien'" && \
	influx -execute "GRANT ALL ON influxdb TO lejulien"
