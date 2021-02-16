sudo pkill nginx
sudo docker rmi -f my_wordpress; sudo docker build -t my_wordpress . ; sudo docker run -it -p 5050:5050 my_wordpress
