FROM node:18-alpine AS build-stage
WORKDIR /app
COPY package.json ./
RUN npm install --legacy-peer-deps
COPY . .
ARG VITE_TWITCH_REDIRECT_URL
ARG VITE_TWITCH_CLIENT_ID
RUN echo "VITE_TWITCH_REDIRECT_URL=$VITE_TWITCH_REDIRECT_URL" > .env && \
    echo "VITE_TWITCH_CLIENT_ID=$VITE_TWITCH_CLIENT_ID" >> .env
RUN npm install @tsconfig/node22 --save-dev
RUN npm run build-only
FROM nginx:alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
