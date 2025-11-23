# Use official Node image
FROM node:18-alpine

WORKDIR /app

# Copy package files and install
COPY package*.json ./
RUN npm install --production

# Copy app
COPY . .

EXPOSE 3000
CMD ["node", "app.js"]
