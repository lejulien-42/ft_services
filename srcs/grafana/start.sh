sudo docker system prune;sudo docker rmi -f my_grafana; sudo docker build -t my_grafana . ; sudo docker run -it -p 3000:3000 my_grafana

