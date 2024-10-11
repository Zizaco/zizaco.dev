#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";
import "$std/dotenv/load.ts";

const worker = new Worker(new URL("./compile_scss.ts", import.meta.url), {
  type: "module",
});

await dev(import.meta.url, "./main.ts", config);

worker.postMessage("exit");
