#!/bin/bash

gre=$'\e[92m'
mag=$'\e[1;35m'
end=$'\e[0m'

echo #{mag}

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
line2="pasv_address=$ip"
sed -i "13s/.*/$line/" ./srcs/metallb/metallb.yaml
sed -i "109s/.*/$line2/" ./srcs/ftps/srcs/vsftpd.conf

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

printf "\n${gre}➥ ${mag}enabling pma...${end}\n\n"
docker build -t my_phpmyadmin ./srcs/phpmyadmin
kubectl apply -f ./srcs/phpmyadmin/phpmyadmin.yaml

printf "\n${gre}➥ ${mag}enabling wordpress...${end}\n\n"
docker build -t my_wordpress ./srcs/wordpress
kubectl apply -f ./srcs/wordpress/wordpress.yaml

printf "\n${gre}➥ ${mag}enabling ftps...${end}\n\n"
docker build -t my_ftps ./srcs/ftps
kubectl apply -f ./srcs/ftps/ftps.yaml

printf "\n${gre}➥ ${mag}build finished !!\n\n"
printf "${gre}➥${mag} nginx ip : http://$ip:80\n$end\n"
printf "${gre}➥${mag} phpmyadmin ip : http://$ip:5000\n$end\n"
printf "    ${gre}➥${mag} phpmyadmin user : admin\n$end\n"
printf "${gre}➥${mag} wordpress ip : http://$ip:5050\n$end\n"
printf "    ${gre}➥${mag} wordpress user : lejulien\n$end\n"
printf "    ${gre}➥${mag} wordpress pass : lejulien\n$end\n"
printf "${gre}➥${mag} ftps host : $ip:21\n$end\n"
printf "    ${gre}➥${mag} ftps user : ftps\n$end\n"
printf "    ${gre}➥${mag} ftps pass : toor\n$end\n"

