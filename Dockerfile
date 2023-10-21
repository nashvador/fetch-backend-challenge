FROM node:16.13.1-alpine3.14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g ts-node-dev && npm install
COPY . .
CMD ["npm", "run", "dev"]