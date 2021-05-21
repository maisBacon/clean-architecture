FROM node:14.16.0-alpine
WORKDIR /testeapiprod
COPY . /testeapiprod
RUN npm i
CMD npm run dev