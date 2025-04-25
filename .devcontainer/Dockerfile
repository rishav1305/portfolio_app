FROM python:3.10-slim

# Install necessary system packages
RUN apt-get update && apt-get install -y \
    git \
    curl \
    gcc \
    g++ \
    make \
    cmake \
    build-essential \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Create workspace directory
WORKDIR /workspace

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Set Python path
ENV PYTHONPATH=${PYTHONPATH}:/workspace

# Set environment to use Matplotlib in headless mode
ENV MPLBACKEND=Agg

# Start JupyterLab when container is run
CMD ["jupyter", "lab", "--ip=0.0.0.0", "--port=8888", "--no-browser", "--allow-root", "--NotebookApp.token=''", "--NotebookApp.password=''"]