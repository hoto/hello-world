FROM mhart/alpine-node:5.10.1
MAINTAINER Andrzej Rehmann

WORKDIR /src
ADD package.json .
RUN npm install
ADD . .

EXPOSE 3000
CMD ["node", "app.js"]
