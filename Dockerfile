FROM node:18-alpine AS build-stage
WORKDIR /app
COPY package.json package-lock.json ./
RUN apk add --no-cache python3 make g++
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
FROM nginx:alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
