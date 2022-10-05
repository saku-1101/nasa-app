FROM node:16-alpine

COPY . /usr/share

WORKDIR /usr/share

RUN npm install
RUN npm instal --save axios

EXPOSE 8080
CMD [ "npm", "run", "dev" ]
