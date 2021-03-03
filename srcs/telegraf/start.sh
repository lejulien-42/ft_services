sudo docker system prune;sudo docker rmi -f my_influxdb; sudo docker build -t my_influxdb . ; sudo docker run -it -p 8086:8086 my_influxdb

