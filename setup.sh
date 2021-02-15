#!/bin/bash

mag=$'\e[1;35m'
end=$'\e[0m'

echo ${mag}

printf '  ______     __                                                    __                               '	;echo " "
printf ' /      \   |  \                                                  |  \                              '	;echo " "
printf '|  ######\ _| ##_           _______   ______    ______  __     __  \##  _______   ______    _______ '	;echo " "
printf '| ##_  \##|   ## \         /       \ /      \  /      \|  \   /  \|  \ /       \ /      \  /       \'	;echo " "
printf '| ## \     \######        |  #######|  ######\|  ######\\##\  /  ##| ##|  #######|  ######\|  #######'	;echo " "
printf '| ####      | ## __        \##    \ | ##    ##| ##   \## \##\  ## | ##| ##      | ##    ## \##    \ '	;echo " "
printf '| ##        | ##|  \       _\######\| ########| ##        \## ##  | ##| ##_____ | ######## _\######\'	;echo " "
printf '| ##         \##  ##______|       ## \##     \| ##         \###   | ## \##     \ \##     \|       ##'	;echo " "
printf ' \##          \####|      \\\#######   \####### \##          \#     \##  \#######  \####### \####### '	;echo " "
printf '                    \######                                            by : lejulien                '	;echo " ";echo " "




printf "${mag}cleaning...${end}\n"
docker system prune -f
minikube delete
sudo pkill nginx
sudo pkill mysqld

printf "${mag}giving rights to docker...${end}\n"
printf "${mag}$USER\n$USER" | sudo -S chmod 666 /var/run/docker.sock

printf "${mag}start minikube...${end}\n"
./srcs/minikube start --vm-driver=docker

printf "${mag}setting up ip range...\n${end}"
last=$(minikube ip | sed 's!.*\.!!')
last=$((last+1))
ip=$(minikube ip | sed "s:[^.]*$:$last:")
line="          - $ip-$ip"
sed -i "13s/.*/$line/" ./srcs/metallb/metallb.yaml

printf "${mag}starting eval...${end}\n"
eval $(./srcs/minikube -p minikube docker-env)

printf "${mag}enabling metallb...${end}\n"
minikube addons enable metallb
kubectl apply -f ./srcs/metallb/metallb.yaml

printf "${mag}enabling nginx...${end}\n"
eval $(./srcs/minikube -p minikube docker-env)
docker build -t my_nginx ./srcs/nginx
kubectl apply -f ./srcs/nginx/nginx.yaml

printf "${mag}enabling mysql...${end}\n"
docker build -t my_mysql ./srcs/mariadb

printf "${mag}build finished !!\n\n    - nginx ip : http://$ip:80\n$end"
