FROM node:lts-alpine

# set the working direction
WORKDIR /app

COPY package*.json ./

# USER node
# RUN npm --global config set user node \
#   && npm --global --quiet --no-progress install \
#   && npm cache clean --force
RUN npm install

COPY . ./

RUN chown -R node /app/node_modules

USER node
# start app
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
