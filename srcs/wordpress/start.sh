sudo pkill nginx
sudo docker rmi -f my_wordpress; sudo docker build -t my_wordpress . ; sudo docker run -it -p 80:80 -p 443:443 my_wordpress
