#!/bin/bash

mag=$'\e[1;35m'
end=$'\e[0m'

printf "${mag}cleaning...${end}\n"
docker system prune -f
minikube delete
sudo pkill nginx
sudo pkill mysqld

printf "${mag}giving rights to docker...${end}\n"
printf "${mag}$USER\n$USER" | sudo -S chmod 666 /var/run/docker.sock

printf "${mag}start minikube...${end}\n"
./srcs/minikube start --vm-driver=docker

printf "${mag}starting eval...${end}\n"
eval $(./srcs/minikube -p minikube docker-env)

printf "${mag}enabling metallb...${end}\n"
minikube addons enable metallb
kubectl apply -f ./srcs/metallb/metallb.yaml

printf "${mag}enabling nginx...${end}\n"
docker build -t my_mysql ./srcs/nginx
