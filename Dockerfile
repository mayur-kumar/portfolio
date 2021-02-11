# pull official base image
FROM node:13.12.0 as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
RUN npm run build

# Final production image
FROM nginx:stable-alpine
COPY --from=build /app/build /var/www

# Copy the nginx conf 
COPY nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
