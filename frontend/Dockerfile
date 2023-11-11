# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Build the app for production
RUN npm run build

# Vite serves the production build on port 5000 by default
EXPOSE 5173

# Serve the app using Vite's preview mode, which is suitable for SPA production apps
CMD ["npm", "run", "dev"]