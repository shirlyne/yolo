# Choice of the base image on which to build each container
1.CREATED A DOCKER FILE
# USED TO GET A BASE IMAGE FOR THE PROJECT
# Dockerfile directives used in the creation and running of each container
# backend
This docker file uses
FROM node:alpine -which will be used to get the base image
WORKDIR /app - makes a directory to the backend
COPY package*.json ./ -this copies the package.json and package-lock json file from the localdirectory
RUN npm install - this command installs all the required dependencies specified in the package .json
COPY . .-  copies the directory to our docker image 
EXPOSE 5000 -it exposes this port on the container
CMD [ "npm", "run","start" ] -commands set to work  when the container starts 

# client
FROM node:alpine-which will be used to get the base image
WORKDIR /app - makes a directory to the client
COPY package.json ./ -this copies the package.json into package-lock json file 
RUN npm install -this command installs all the required dependencies specified in the package .json
COPY . . -copies the directory to our docker image 
EXPOSE 3000 -it exposes this port on the container
CMD [ "npm","start" ]-commands set to work  when the container starts 

 Docker-compose Networking (Application port allocation and a bridge network implementation) where necessary.
In this project i was able to use the yolo default network 

# Docker-compose volume definition and usage (where necessary).
# Git workflow used to achieve the task.
forked the given repository from the provided link which was to yolo repository and cloned the repository
created a dockerfile 
