# node official Image
FROM node:21-alpine

# install dependencies
RUN apk update

# set work directory
WORKDIR /usr/src/web

# Copy package.json files
COPY package.json package-lock.json .

# Install
RUN npm install

COPY . .
EXPOSE 3000
