sudo docker system prune;sudo docker rmi -f my_influx; sudo docker build -t my_influxdb . ; sudo docker run -it -p 8083:8083 -p 8086:8086 -p 8088:8086 -p 8091:8091 -p 4242:4242 my_influxdb

