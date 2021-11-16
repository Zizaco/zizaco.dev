FROM node:14-alpine as base

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
WORKDIR /home/node/app

RUN apk add --update --no-cache bash curl shadow

ARG NODE_ENV=production
ENV HOST 0.0.0.0
ENV PORT 8080
EXPOSE 8080

USER node

FROM base as build

# Copy output contents
WORKDIR /home/node/app
COPY --chown=node:node . ./
RUN yarn install && yarn build

# Enable write in workdir
RUN chmod 777 ./

FROM build
# Switch user id
USER 1000

CMD ["node", ".output/server/index.mjs"]
