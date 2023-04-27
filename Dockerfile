FROM node:18

WORKDIR /app-api-micks

COPY package.json .

RUN npm install

COPY . .


CMD ["npm", "start", "server.js"]

EXPOSE 3000