FROM denoland/deno:alpine-2.3.1

WORKDIR /app

# Copy dependency files
COPY deno.json deno.lock ./

# Copy source code
COPY . .

# Compile the application to a binary
RUN deno compile --allow-all --output think-tool-bin server.ts

# Set the binary as the entrypoint
# CMD will be provided by smithery.yaml
CMD ["./think-tool-bin"]
