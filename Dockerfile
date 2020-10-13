From node:12.18.3-alpine

RUN mkdir -p src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 3007

CMD ["npm", "start"]