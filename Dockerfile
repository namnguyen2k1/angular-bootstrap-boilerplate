# Stage 1: Build app
FROM node:24 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build -- --configuration production

# Stage 2: Nginx serve static files
FROM nginx:stable-alpine

COPY --from=build /app/dist/angular-bb/browser /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
