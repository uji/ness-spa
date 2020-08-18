FROM node:14.8.0

COPY . /repo
WORKDIR /repo

RUN yarn global add @vue/cli
