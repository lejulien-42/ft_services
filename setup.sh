# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    setup.sh                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: lejulien <lejulien@student.42.fr>          +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2021/01/25 11:57:54 by lejulien          #+#    #+#              #
#    Updated: 2021/01/25 23:47:09 by user42           ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

minikube delete 2> /dev/null
sudo -R $USER $HOME/.minikube; chmod -R u+w+r $HOME/.minikube

printf "$USER\n$USER" | sudo -S chmod 666 /var/run/docker.sock
minikube start --vm-driver=docker

minikube addons enable logviewer
minikube addons enable metric-server

kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.9.3/manifests/namespace.yaml > /dev/null
kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.9.3/manifests/metallb.yaml > /dev/null
kubectl apply -f srcs/metallb-config.yaml
