FROM node:14.16.0-alpine
WORKDIR /src
COPY . /src
EXPOSE 3333
CMD npm run dev