# Use an official Node runtime as a base image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the local server files to the working directory
COPY . .

# Expose port 8080
EXPOSE 8080

# Set environment variables
ENV NODE_ENV=production

# Command to run your application
CMD ["node", "server.js"]
