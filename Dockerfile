FROM node:18.19.0-bullseye  

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install npm version to match local (if necessary)
RUN npm install -g npm@10.2.3

# Install dependencies
RUN npm install --legacy-peer-deps
# Copy the entire project into the container
COPY . .

# Copy environment file
COPY src/environments/environment.local.ts src/environments/environment.ts

# Expose port (change if your project uses a different port)
EXPOSE 4204

# Command to start the application
CMD ["npm", "start"]