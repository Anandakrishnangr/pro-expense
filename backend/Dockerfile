# Stage 1: Build TypeScript
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY tsconfig.json ./
COPY src ./src
RUN npx tsc

# Stage 2: Run built JS
FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm install --only=production

ENV NODE_ENV=production

CMD ["node", "dist/index.js"]
