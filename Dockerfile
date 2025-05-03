FROM python:3.11-slim

# Install git and other dependencies
RUN apt-get update && apt-get install -y \
    git \
    bash \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Python packages
RUN pip install --upgrade pip setuptools wheel

# Create a .gitconfig file in the home directory
RUN echo '[user]\n\tname = rishav1305\n\temail = rishav.chatt@gmail.com\n\
[credential]\n\thelper = store' > /root/.gitconfig && \
    chmod 644 /root/.gitconfig && \
    # Verify the git config was set correctly
    git config --list

# Create a directory for git credentials
RUN mkdir -p /root/.git-credentials && \
    # Create a placeholder for git credentials that will be replaced at runtime
    echo 'https://USERNAME:TOKEN@github.com' > /root/.git-credentials/github && \
    chmod 600 /root/.git-credentials/github

# Add a script to initialize git credentials with the actual token - place it in /usr/local/bin instead of /root
RUN echo '#!/bin/bash\n\
if [ -n "$GIT_TOKEN" ] && [ -n "$GIT_USERNAME" ]; then\n\
  echo "Setting up git credentials for $GIT_USERNAME"\n\
  echo "https://$GIT_USERNAME:$GIT_TOKEN@github.com" > /root/.git-credentials\n\
  git config --global credential.helper "store --file=/root/.git-credentials"\n\
fi\n\
exec "$@"' > /usr/local/bin/entrypoint.sh && \
    chmod +x /usr/local/bin/entrypoint.sh && \
    cp /usr/local/bin/entrypoint.sh /root/entrypoint.sh && \
    chmod +x /root/entrypoint.sh

# Set up working directory
WORKDIR /root

# Ensure Python outputs are sent straight to terminal
ENV PYTHONUNBUFFERED=1

# Add an environment variable for git token (to be filled at runtime)
ENV GIT_TOKEN=""

# Create a directory for user files that will be mounted as a volume
RUN mkdir -p /root/workspace
VOLUME [ "/root/workspace" ]

# Use the entrypoint script
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD [ "/bin/bash" ]

