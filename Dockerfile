FROM node:8-alpine
WORKDIR /code
COPY package.json ./package.json
RUN npm install --production && npm ls
RUN mv ./node_modules /node_modules

CMD ["npm", "start"]
