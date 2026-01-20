# ---------- BUILD STAGE ----------
FROM node:18-alpine AS builder

WORKDIR /app

# Install ALL dependencies (including dev)
COPY package*.json ./
RUN npm ci

# Copy source and config
COPY tsconfig.json ./
COPY src ./src

# Build TypeScript
RUN npm run build


# ---------- RUNTIME STAGE ----------
FROM node:18-alpine

WORKDIR /app

# Copy only compiled output and prod deps
COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/server.js"]
