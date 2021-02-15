#!/bin/bash

gre=$'\e[92m'
mag=$'\e[1;35m'
end=$'\e[0m'

echo ${mag}

printf '  ______     __                                                    __                               '	;echo " "
printf ' /      \   |  \                                                  |  \                              '	;echo " "
printf '|  ######\ _| ##_           _______   ______    ______  __     __  \##  _______   ______    _______ '	;echo " "
printf '| ##_  \##|   ## \         /       \ /      \  /      \|  \   /  \|  \ /       \ /      \  /       \'	;echo " "
printf '| ## \     \######        |  #######|  ######\|  ######\\\##\ /  ##| ##|  #######|  ######\|  #######'	;echo " "
printf '| ####      | ## __        \##    \ | ##    ##| ##   \## \##\  ## | ##| ##      | ##    ## \##    \ '	;echo " "
printf '| ##        | ##|  \       _\######\| ########| ##        \## ##  | ##| ##_____ | ######## _\######\'	;echo " "
printf '| ##         \##  ##______|       ## \##     \| ##         \###   | ## \##     \ \##     \|       ##'	;echo " "
printf ' \##          \####|      \\\#######   \####### \##          \#     \##  \#######  \####### \####### '	;echo " "
printf '                    \######                                            by : lejulien                '	;echo " ";echo " "




printf "${gre}➥ ${mag}cleaning...${end}\n\n"
docker system prune -f
minikube delete
sudo pkill nginx
sudo pkill mysqld

printf "\n${gre}➥ ${mag}giving rights to docker...${end}\n\n"
printf "\n${gre}➥ ${mag}$USER\n$USER" | sudo -S chmod 666 /var/run/docker.sock

printf "\n${gre}➥ ${mag}start minikube...${end}\n\n"
./srcs/minikube start --vm-driver=docker

printf "\n${gre}➥ ${mag}setting up ip range...\n${end}\n"
last=$(minikube ip | sed 's!.*\.!!')
last=$((last+1))
ip=$(minikube ip | sed "s:[^.]*$:$last:")
line="          - $ip-$ip"
sed -i "13s/.*/$line/" ./srcs/metallb/metallb.yaml

printf "\n${gre}➥ ${mag}starting eval...${end}\n\n"
eval $(./srcs/minikube -p minikube docker-env)

printf "\n${gre}➥ ${mag}enabling metallb...${end}\n\n"
minikube addons enable metallb
kubectl apply -f ./srcs/metallb/metallb.yaml

printf "\n${gre}➥ ${mag}enabling nginx...${end}\n\n"
eval $(./srcs/minikube -p minikube docker-env)
docker build -t my_nginx ./srcs/nginx
kubectl apply -f ./srcs/nginx/nginx.yaml

printf "\n${gre}➥ ${mag}enabling mysql...${end}\n\n"
docker build -t my_mysql ./srcs/mariadb
kubectl apply -f ./srcs/mariadb/mariadb.yaml

printf "\n${gre}➥ ${mag}build finished !!\n\n    ➥${mag} nginx ip : http://$ip:80\n$end\n"
