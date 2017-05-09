FROM xqdocker/ubuntu-nginx

COPY dist /data/www/gundmann
EXPOSE 80
RUN service nginx start
