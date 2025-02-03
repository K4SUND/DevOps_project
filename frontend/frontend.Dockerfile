# Use Node.js image for building
FROM node:18-alpine AS build

# Set working directory
WORKDIR /frontend

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source files and build
COPY . .
RUN npm run build

# Use nginx for serving the frontend
FROM nginx:latest

# Copy built frontend files
COPY --from=build /app/build /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
