#/bin/bash

sudo apt-get install conntrack -y
sudo usermod -aG docker user42; newgrp docker
minikube --driver=docker start --cpus=2
