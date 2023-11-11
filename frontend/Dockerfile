# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy project files into the container
COPY . .

# Expose the port used by Vite
EXPOSE 5173

# Start the Vite server
CMD ["npm", "run", "dev"]
