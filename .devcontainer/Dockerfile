FROM node:20.10.0

# Install basic development tools
RUN apt update && apt install -y less man-db sudo

# Ensure default `node` user has access to `sudo`
ARG USERNAME=node
RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Install the Gatsby CLI
RUN npm install -g gatsby-cli --unsafe-perm=true --allow-root

# Set `DEVCONTAINER` environment variable to help with orientation
ENV DEVCONTAINER=true
# Use this to enable polling when Docker is used
ENV CHOKIDAR_USEPOLLING=true
# This is also used for Hot Module Reloading with Gatsby
ENV INTERNAL_STATUS_PORT=5001