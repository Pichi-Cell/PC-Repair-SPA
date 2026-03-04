# Stage 1: Build base
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Stage 2: Test
FROM base AS test
COPY . .
RUN npm run test -- --run

# Stage 3: Build app
FROM base AS build
COPY . .
RUN npm run build

# Stage 4: Serve with Nginx
FROM nginx:alpine AS serve
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
