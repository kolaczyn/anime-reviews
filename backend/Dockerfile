FROM node:14.17-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

CMD ["yarn", "develop"]