sudo pkill nginx
sudo docker system prune;sudo docker rmi -f my_nginx; sudo docker build -t my_nginx . ; sudo docker run -d -p 80:80 -p 443:443 my_nginx

