
FROM node:18.2.0

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy all application files
COPY . .

# Set environment variable for port
ENV PORT=4000

# Expose the application port
EXPOSE ${PORT}

# Start the React application
CMD ["npm", "start"]
