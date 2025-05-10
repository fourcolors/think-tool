FROM denoland/deno:alpine-2.3.1

WORKDIR /app

# Set environment variables for extended timeout handling
ENV MCP_SCAN_TIMEOUT=60000 \
    RESPONSE_TIMEOUT=60000 \
    DENO_NO_UPDATE_CHECK=1

# Copy dependency files
COPY deno.json deno.lock ./

# Copy source code
COPY . .

# Build with increased timeout settings  
RUN deno compile --allow-all --allow-env --output think-tool-bin server.ts

# Expose MCP for health check verification
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s \
  CMD ./think-tool-bin --health-check || exit 1

# Set the binary as the entrypoint (CMD will be provided by smithery.yaml)
CMD ["./think-tool-bin"]
