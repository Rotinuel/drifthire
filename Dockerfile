FROM node:24-alpine3.21

WORKDIR /drifthire

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD npm run dev
