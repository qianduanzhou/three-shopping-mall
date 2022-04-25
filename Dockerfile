FROM nginx
MAINTAINER zhb
COPY build  /usr/share/nginx/html/ 
COPY config/nginx  /etc/nginx/conf.d/