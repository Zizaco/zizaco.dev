# Zizaco.dev _Personal website_

> Inspiration: https://tms-outsource.com/

We recommend to look at the [documentation](https://v3.nuxtjs.org).

## Setup

Make sure to install the dependencies

```bash
yarn install
```

## Development

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

### Deployment

```bash
docker build -t zizacodev:latest . && \
docker tag zizacodev:latest zizacozrmhefyjfdxmhybm.azurecr.io/zizacodev:latest && \
docker push zizacozrmhefyjfdxmhybm.azurecr.io/zizacodev
```
