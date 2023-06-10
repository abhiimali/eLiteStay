# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the entire application to the working directory
COPY . .

# Expose the port your application is listening on
EXPOSE 5000

# Start the application
CMD ["node", "index.js"]
