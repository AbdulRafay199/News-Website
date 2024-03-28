FROM node:18-alpine3.18 AS build
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install --legacy-peer-deps
CMD ["npm", "start"]