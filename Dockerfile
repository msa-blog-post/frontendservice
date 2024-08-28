# Stage 1: Build the Next.js application
FROM node:22.1.0 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Create a lightweight production image
FROM node:22.1.0-alpine
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Expose the port the app runs on
EXPOSE 80

# Start the Next.js application on port 80 and bind to 0.0.0.0
CMD ["npm", "run", "start", "--", "-p", "80", "-H", "0.0.0.0"]
