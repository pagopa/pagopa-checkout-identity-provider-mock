FROM node:22.13.1-slim@sha256:83fdfa2a4de32d7f8d79829ea259bd6a4821f8b2d123204ac467fbe3966450fc

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "./"]

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 8090

CMD ["yarn", "start"]
