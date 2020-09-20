FROM node:13 as builder
WORKDIR /app

COPY ./package*.json ./
RUN npm ci

COPY ./  ./
RUN npm run build

FROM node:13-alpine as production
WORKDIR /app

# Install Curl for Healthcheck
RUN apk --no-cache add curl

COPY ./package*.json ./
RUN npm ci --only=production && mkdir /app/public && touch /app/public/.gitkeep

COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["npm", "run", "start:prod"]
