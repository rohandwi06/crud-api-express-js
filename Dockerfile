# Stage 1 (Builder)
FROM node:24.9.0-alpine AS builder

WORKDIR /app

COPY package*.json .

RUN npm ci

# Stage 2 (Final Image)
FROM node:24.9.0-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules

COPY . .

CMD [ "npm", "run", "dev" ]