FROM node:22.13.1-slim

WORKDIR /usr/src/app

COPY ["package.json", "yarn.json*", "./"]

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 8090

CMD ["yarn", "start"]
