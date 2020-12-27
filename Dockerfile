FROM node:14.8.0

COPY . /repo
WORKDIR /repo

ENV GITHUB_USER_NAME ""
ENV GITHUB_TOKEN ""
ENV GITHUB_EMAIL ""

CMD ["bash", "init.sh"]
