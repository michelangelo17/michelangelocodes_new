# Use a compatible Node.js version
FROM node:20-alpine

# Install build tools
RUN apk add --no-cache make gcc g++ python3

# Set working directory
WORKDIR /srv/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port Strapi runs on
EXPOSE 1337

# Start Strapi
CMD ["npm", "run", "develop"]