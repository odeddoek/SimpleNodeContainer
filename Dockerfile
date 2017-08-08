FROM node:latest

# App Directory
WORKDIR /usr/src/App


# Install app dependencies
COPY package.json .
RUN npm install

# Bundle app souce 
COPY . .

# The port the app is running
EXPOSE 8080

# The command that will run with the start
CMD [ "npm", "start"];