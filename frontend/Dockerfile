# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install any needed packages
RUN npm install

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run app when the container launches
CMD ["npm", "run", "serve"]
