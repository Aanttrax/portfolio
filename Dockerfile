FROM node:23.2.0-alpine3.19 AS ui-build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . .
RUN npm install -g @angular/cli
RUN ng build

FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=ui-build /app/dist/portfolio/browser /usr/share/nginx/html
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]