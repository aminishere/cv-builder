# ============================================
# BEGINNER-FRIENDLY DOCKERFILE FOR REACT APP
# ============================================
# This Dockerfile is designed to be easy to understand
# Each line has a comment explaining what it does

# Step 1: Choose a base image (like choosing an operating system)
# We use Node.js because our app needs Node.js to run
# Alpine is a lightweight version of Linux (smaller = faster)
FROM node:18-alpine

# Step 2: Set the working directory inside the container
# This is like running 'cd /app' - all commands will run from this folder
WORKDIR /app

# Step 3: Copy package.json and package-lock.json first
# We copy these files separately because Docker can cache them
# If you only change your code (not dependencies), Docker won't reinstall packages
# This makes builds much faster!
COPY package.json package-lock.json ./

# Step 4: Install all the packages your app needs
# npm install reads package.json and downloads all dependencies
# The '--silent' flag makes the output less noisy
RUN npm install --silent

# Step 5: Copy all your source code into the container
# The '.' means "copy everything from current directory"
# This includes your src/ folder, public/ folder, etc.
COPY . .

# Step 6: Build your React app for production
# This creates a 'dist' folder with optimized files ready for the web
# It's like running 'npm run build' on your computer
RUN npm run build

# Step 7: Install a simple web server to serve your built files
# We use 'serve' which is a simple static file server
# This is easier to understand than nginx for beginners
RUN npm install -g serve

# Step 8: Expose port 3000
# This tells Docker "this app will use port 3000"
# It's like opening a door on your computer
EXPOSE 3000

# Step 9: Start the web server
# This command runs when you start the container
# 'serve -s dist' means "serve the files from the dist folder"
# '-l 3000' means "listen on port 3000"
CMD ["serve", "-s", "dist", "-l", "3000"]

# ============================================
# HOW TO USE THIS DOCKERFILE:
# ============================================
# 
# 1. Build the image:
#    docker build -t my-react-app .
#
# 2. Run the container:
#    docker run -p 3000:3000 my-react-app
#
# 3. Open your browser and go to:
#    http://localhost:3000
#
# ============================================
# WHAT EACH STEP DOES:
# ============================================
# FROM: Downloads a base image (like installing an OS)
# WORKDIR: Creates and sets a folder as working directory
# COPY: Copies files from your computer into the container
# RUN: Runs a command (like typing in terminal)
# EXPOSE: Tells Docker which port the app uses
# CMD: The command that runs when you start the container 