FROM node:12

# Create app directory
WORKDIR /usr/src/app
# Bundle app source
COPY . .

RUN npm i && cd client && npm i

EXPOSE 3000
EXPOSE 5000

CMD [ "npm", "start" ]