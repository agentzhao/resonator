FROM node:lts-alpine
WORKDIR /app

COPY package*.json ./

RUN npm install
# RUN npm ci && npm prune --production --only=production

COPY . ./

RUN chown -R node /app/node_modules && chown -R node /app/dist

USER node
# start app
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
