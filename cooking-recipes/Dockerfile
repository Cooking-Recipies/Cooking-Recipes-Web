FROM node:13 as builder
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm install --silent
COPY . .
ENV PATH /app/node_modules/.bin:$PATH
ENV REACT_APP_API_URL=http://localhost

# start app
CMD ["npm", "start"]