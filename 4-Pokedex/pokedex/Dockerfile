FROM node:18-alpine

WORKDIR /usr/src/app

COPY . .
EXPOSE 3000
RUN npm install --production && npm run build
CMD ["npm", "start"]
