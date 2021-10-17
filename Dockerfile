# Stage 1
FROM node:10-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . .
RUN npm run build

# Start 2
RUN rm -rf /usr/share/nginx/html/*

# Stage 3
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/build /usr/share/nginx/html