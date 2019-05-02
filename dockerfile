FROM node:dubnium-alpine

EXPOSE 5555

WORKDIR /usr/src/app

RUN apk update && apk upgrade && apk add git

COPY . .

RUN yarn global add npm@6.4.1 && npm install

CMD ["npm", "run", "watch"]
