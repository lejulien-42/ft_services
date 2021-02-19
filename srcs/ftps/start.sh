sudo docker system prune; sudo docker build -t my_ftps . ; sudo docker run -d -p 20:20 -p 21:21 my_ftps
