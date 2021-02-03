#!/bin/zsh
# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    setup.sh                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: lejulien <lejulien@student.42.fr>          +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2021/01/25 11:57:54 by lejulien          #+#    #+#              #
#    Updated: 2021/02/01 12:17:14 by lejulien         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #


docker system prune -f
minikube delete 2> /dev/null
sudo -R $USER $HOME/.minikube; chmod -R u+w+r $HOME/.minikube

sudo pkill nginx
sudo pkill mysqld

printf "$USER\n$USER" | sudo -S chmod 666 /var/run/docker.sock
minikube start --vm-driver=docker

eval $(minikube -p minikube docker-env)
docker build -t my_nginx ./srcs/nginx

kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.9.3/manifests/namespace.yaml > /dev/null
kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.9.3/manifests/metallb.yaml > /dev/null
kubectl apply -f srcs/
