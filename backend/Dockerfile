FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --also=dev

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
