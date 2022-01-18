FROM node:14-alpine AS builder

WORKDIR /tmp/app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

FROM nginx:1.21.3-alpine

COPY --from=builder /tmp/app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
