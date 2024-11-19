FROM node:23.2.0-alpine3.19 AS ui-build

# Get the arguments from the command line
ARG NG_APP_TEMPLATE_ID
ARG NG_APP_SERVICE_ID
ARG NG_APP_PUBLIC_KEY
ARG NG_APP_USER_NAME
# Set the environment variables
ENV NG_APP_TEMPLATE_ID=$NG_APP_TEMPLATE_ID
ENV NG_APP_SERVICE_ID=$NG_APP_SERVICE_ID
ENV NG_APP_PUBLIC_KEY=$NG_APP_PUBLIC_KEY
ENV NG_APP_USER_NAME=$NG_APP_USER_NAME

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
