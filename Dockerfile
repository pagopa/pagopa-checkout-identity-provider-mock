FROM node:14.16.0

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "./"]

RUN yarn install

COPY . .

RUN yarn build

CMD ["yarn", "start"]
