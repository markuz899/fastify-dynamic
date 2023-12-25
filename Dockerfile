# Dockerfile

# Use the official Node.js 14 Alpine base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# build app
RUN npm run build

# Start the Node.js server
CMD ["npm", "run", "prod"]