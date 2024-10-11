FROM denoland/deno:2.0.0

# The port that your application listens to.
EXPOSE 80
ENV PORT=80
WORKDIR /app
RUN chown deno:deno /app
RUN chown deno:deno /deno-dir
RUN mkdir /home/deno && chown deno:deno /home/deno

# Prefer not to run as root.
USER deno

# Cache the dependencies as a layer (the following two steps are re-run only when deno.json is modified).
COPY deno.json .
RUN deno install

# These steps will be re-run upon each file change in your working directory:
COPY --chown=deno:deno . .

# Cache dependencies and build fresh
RUN deno cache main.ts
RUN deno task build

# Run
CMD ["run", "--allow-all", "--cached-only", "main.ts"]
