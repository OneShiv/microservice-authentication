FROM node:14.1.0-alpine3.10

WORKDIR /app

COPY . /app

EXPOSE 3000

CMD npm run dev