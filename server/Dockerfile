# ============================================
# BEGINNER-FRIENDLY DOCKERFILE FOR NODE.JS SERVER
# ============================================
# This Dockerfile is designed to be super simple and easy to understand

# Step 1: Choose a base image (like choosing an operating system)
# We use Node.js because our server needs Node.js to run
FROM node:18-alpine

# Step 2: Set the working directory inside the container
# This is like running 'cd /app' - all commands will run from this folder
WORKDIR /app

# Step 3: Copy package.json and package-lock.json first
# We copy these files separately because Docker can cache them
# If you only change your code (not dependencies), Docker won't reinstall packages
COPY package*.json ./

# Step 4: Install all the packages your server needs
# npm install reads package.json and downloads all dependencies
RUN npm install

# Step 5: Copy all your server code into the container
# The '.' means "copy everything from current directory"
# This includes your src/ folder, etc.
COPY . .

# Step 6: Expose port 5000
# This tells Docker "this server will use port 5000"
# It's like opening a door on your computer
EXPOSE 5000

# Step 7: Start the server
# This command runs when you start the container
# 'node src/index.js' means "run the server file"
CMD ["node", "src/index.js"]

# ============================================
# HOW TO USE THIS DOCKERFILE:
# ============================================
# 
# 1. Build the image:
#    docker build -t my-server .
#
# 2. Run the container:
#    docker run -p 5000:5000 my-server
#
# 3. Your server will be available at:
#    http://localhost:5000
#
# ============================================
# WHAT EACH STEP DOES:
# ============================================
# FROM: Downloads a base image (like installing an OS)
# WORKDIR: Creates and sets a folder as working directory
# COPY: Copies files from your computer into the container
# RUN: Runs a command (like typing in terminal)
# EXPOSE: Tells Docker which port the server uses
# CMD: The command that runs when you start the container 