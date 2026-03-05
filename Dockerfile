# Use nginx:alpine as base image for a lightweight static server
FROM nginx:alpine

# Copy static website files into nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
