FROM node:14.8.0

COPY . /repo
WORKDIR /repo

ENV GITHUB_USER_NAME ""
ENV GITHUB_TOKEN ""
ENV GITHUB_EMAIL ""

RUN yarn global add @vue/cli
CMD ["bash", "init.sh"]
