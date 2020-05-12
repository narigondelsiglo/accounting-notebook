FROM node:12

# Create app directory
WORKDIR /usr/src/app
# Bundle app source
COPY . .


EXPOSE 3000
EXPOSE 5000

CMD [ "./launch.sh" ]