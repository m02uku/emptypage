# Base: uv minimal + Debian slim
FROM python:3.12-slim-trixie

# The installer requires curl (and certificates) to download the release archive
RUN apt-get update && apt-get install -y --no-install-recommends curl ca-certificates

# Download the latest installer
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

# Use system Python without venv and allow system pip installs
ENV PATH="/root/.local/bin/:$PATH"
ENV UV_SYSTEM_PYTHON=true
ENV UV_BREAK_SYSTEM_PACKAGES=true
ENV UV_PROJECT_ENVIRONMENT=/usr/local
ENV UV_PYTHON=/usr/local/bin/python
ENV UV_NO_SYNC=1

# Install Node.js, npm, pnpm
RUN apt-get update \
    && apt-get install -y nodejs npm\
    && npm install -g pnpm \
    && rm -rf /var/lib/apt/lists/*

# Copy project files and install node deps only during build.
# Python packages are intentionally not installed at build time so the system
# Python interpreter is used interactively inside the container (no venv).
ADD . /workspace
WORKDIR /workspace
RUN CI=true pnpm i && uv sync --frozen
# Don't install Streamlit at build-time; will install inside container interactively

# Start shell
CMD ["bash"]

# (Ports are published by docker-compose or `docker run -p`)
