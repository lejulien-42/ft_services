#/bin/bash

sudo usermod -aG docker user42; newgrp docker
minikube delete
minikube --driver=docker start --cpus=2

#installing metallb
kubectl apply -f ./srcs/metallb/namespace.yaml
kubectl apply -f ./srcs/metallb/metallb.yaml
kubectl create secret generic -n metallb-system memberlist --from-literal=secretkey="$(openssl rand -base64 128)"
kubectl apply -f ./srcs/metallb/config.yaml


minikube dashboard
