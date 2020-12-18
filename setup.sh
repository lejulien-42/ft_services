#/bin/bash


echo "Nettoyage des anciens lancements de minikube si present"
minikube delete 2> /dev/null
sleep 1
sudo chown -R $USER $HOME/.minikube; chmod -R u+wrx $HOME/.minikube

#lancer docker
printf "$USER\n$USER" | sudo -S chmod 666 /var/run/docker.sock
minikube start --vm-driver=docker

#mise en place des addons
minikube addons enable logviewer
minikube addons enable metrics-server

#mise en place de secret
if [ ! -f srcs/secret.yaml ]
then
	cp srcs/secret_model.yaml srcs/secret.yaml
fi
for i in $(seq 1 6)
do
	password=$(openssl rand -base64 32 | tr -dc _A-Z-a-z-0-9 | base64)
	sedpayload=s/\$$i/$password/g
	sedpayload=$sedpayload
	sed -i "$sedpayload" srcs/secret.yaml
done

#mise en place de metallb
kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.9.3/manifests/namespace.yaml > /dev/null
kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.9.3/manifests/metallb.yaml > /dev/null
if ["$(kubectl get secrets --namespace metallb-system | grep memberlist)" = ""]
then
	kubectl create secret generic -n metallb-system memberlist --from-literal=secretkey="$(openssl rand -base64 128)" > /dev/null
fi
kubectl apply -f srcs/metallb-config.yaml



