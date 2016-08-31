FROM node
RUN mkdir -p /usr/src/proxy
WORKDIR /usr/src/proxy
COPY package.json /usr/src/proxy
RUN npm install
COPY . /usr/src/proxy
EXPOSE 6765
CMD [ "npm", "start:env" ]