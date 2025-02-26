# Use Node.js image for building
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json .


RUN npm install

# Copy source files and build
COPY . .

RUN npm run build

# Use nginx for serving the frontend
FROM nginx:latest

# Copy built frontend files
COPY --from=build /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
