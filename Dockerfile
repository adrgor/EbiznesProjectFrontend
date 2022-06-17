FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
copy ./ ./
RUN npm i
EXPOSE 3000
CMD ["npm", "start"]