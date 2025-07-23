# Use the latest stable Node.js release (current) with a minimal Debian base
FROM node:current-slim

# Set the working directory inside the container
WORKDIR /workspace

# Install Git (not included in slim images)
RUN apt-get update && apt-get install -y git

# Optional: clean up cache to reduce image size
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Use bash as the default shell for RUN commands
SHELL ["/bin/bash", "-c"]