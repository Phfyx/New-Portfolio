# Étape 1 — Installation des dépendances
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Étape 2 — Build de l'application
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Étape 3 — Image de production
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copie uniquement ce qui est nécessaire pour tourner
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]