FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
copy ./ ./
RUN npm i
CMD ["npm", "start"]