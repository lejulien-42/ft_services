sudo docker rmi -f my_ftps; sudo docker build -t my_ftps . ; sudo docker run -it -p 20:20 -p 21:21 my_ftps
