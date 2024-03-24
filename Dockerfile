FROM node:18-alpine AS base
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s CMD curl --fail http://0.0.0.0:3000 || exit 1
CMD npm start 
