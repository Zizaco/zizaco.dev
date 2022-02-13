# Zizaco.dev _Personal website_

This website is a [Nuxt3](https://v3.nuxtjs.org) project.

> Design inspiration: https://tms-outsource.com/ 😉

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

## Production & deployment

Build the application for production:

```bash
yarn build
```

### Static

Static website rendring via `wget`:

```bash
wget --adjust-extension --mirror --page-requisites --convert-links --directory-prefix .output/static/ --no-host-directories http://127.0.0.1:8080/
cp public/* .output/static/              # Copy static files
echo "zizaco.dev" > .output/static/CNAME # Github CNAME file
touch .output/static/.nojekyll           # Not to ignore '_*' folder names
```

Push to github pages:

```bash
# if remote gh-pages branch exists
git push origin `git subtree split --prefix .output/static/ master`:gh-pages --force

# if remote gh-pages branch doesn't exists
git subtree push --prefix .output/static origin gh-pages

# see: https://gist.github.com/cobyism/4730490
```

### Server with SSR

Build docker image

```bash
docker build -t zizacodev:latest .
```
