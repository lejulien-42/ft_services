sudo pkill mysqld
sudo docker rmi -f my_mariadb; sudo docker build -t my_mariadb . ; sudo docker run -it -p 3306:3306 my_mariadb

