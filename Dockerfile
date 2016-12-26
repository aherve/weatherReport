FROM armhf/node:6.7-slim
#FROM node
RUN mkdir /app
WORKDIR /app

ADD package.json .
RUN npm install
ADD src /app/src

CMD ["npm", "start"]
