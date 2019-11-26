# base image 
FROM node:12.2.0-alpine

# set working directory 
WORKDIR /app

# install nodemon
RUN npm i -g nodemon


EXPOSE 3000

# start app 
ENTRYPOINT ["nodemon", "server.js"]