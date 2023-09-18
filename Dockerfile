FROM --platform=linux/amd64 node:18
RUN apt-get update -y && apt-get upgrade -y

RUN apt-get install -y unzip sudo build-essential

WORKDIR /home/app
