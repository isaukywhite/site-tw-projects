FROM node:alpine AS build-stage
WORKDIR /app
COPY package.json ./
COPY bun.lockb ./
RUN npm install -g bun && bun install
COPY . .
RUN bun run build

FROM nginx:alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
