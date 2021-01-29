# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    setup.sh                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: lejulien <lejulien@student.42.fr>          +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2021/01/25 11:57:54 by lejulien          #+#    #+#              #
#    Updated: 2021/01/27 13:30:54 by lejulien         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

minikube delete 2> /dev/null
sudo -R $USER $HOME/.minikube; chmod -R u+w+r $HOME/.minikube

sudo pkill nginx
sudo pkill mysqld

printf "$USER\n$USER" | sudo -S chmod 666 /var/run/docker.sock
minikube start --vm-driver=docker

minikube addons enable ingress
minikube addons enable dashboard
minikube dashboard &

IP=$(kubectl get node -o=custom-columns='DATA:status.addresses[0].address' | sed -n 2p)
echo "IP = ${IP}"
sudo docker build -t my_nginx ./srcs/nginx
sudo docker build -t my_mysql ./srcs/mysql

kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.9.3/manifests/namespace.yaml > /dev/null
kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.9.3/manifests/metallb.yaml > /dev/null
kubectl apply -f srcs/
