FROM node:10-alpine

LABEL name="Product-list-app" \
    maintainer="BR"

WORKDIR /app

COPY package*.json ./

RUN npm install --save

RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

CMD ["npm", "start"]
