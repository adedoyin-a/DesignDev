# Set Nginx as base image for my website

FROM nginx:1.17

# Set working directory

WORKDIR /usr/share/nginx/html

# Copy all website files to working directory

COPY . /usr/share/nginx/html/

# Expose Nginx port to requests

EXPOSE 80

# Start running Nginx

CMD ["nginx", "-g", "daemon off;"]