
sudo docker system prune;sudo docker rmi -f my_phpmyadmin; sudo docker build -t my_phpmyadmin . ; sudo docker run -d -p 5000:5000 my_phpmyadmin

