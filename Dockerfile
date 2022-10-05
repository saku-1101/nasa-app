FROM node:16-alpine

COPY . /usr/share

WORKDIR /usr/share

RUN npm install
RUN npm instal --save axios
RUN npm install --save balm-ui

EXPOSE 8080
CMD [ "npm", "run", "dev" ]
