import * as sass from "sass";
import dir from "$dir/mod.ts";
import "$std/dotenv/load.ts";
import { debounce } from "$std/async/debounce.ts";

const watcher = Deno.watchFs("./assets/css/");
const watcherDebounceMs = 1000;
const encoder = new TextEncoder();
const bulmaDirectory = `${
  dir("cache")
}/deno/npm/registry.npmjs.org/bulma/1.0.2/`;
let compilationInProgress = false;
let exitInProgress = false;

function writeStdout(text: string) {
  Deno.stdout.writeSync(encoder.encode(text));
}

function compileSass() {
  compilationInProgress = true;
  writeStdout("\rCompiling Sass files...  ");

  try {
    const result = sass.compile(
      "./assets/css/main.scss",
      {
        importers: [{
          findFileUrl(_) {
            return new URL(`file://${bulmaDirectory}/sass`);
          },
        }],
        loadPaths: [bulmaDirectory],
        silenceDeprecations: ["color-functions"],
      },
    );

    Deno.writeFile("./static/styles.css", encoder.encode(result.css));

    writeStdout("\rSass compilation complete");
  } catch (e) {
    console.error(e);
  }

  compilationInProgress = false;
  if (exitInProgress) {
    console.log("");
    self.close();
  }
}

compileSass();
const debounceCompileSass = debounce(compileSass, watcherDebounceMs);

self.onmessage = (msg) => {
  if (msg.data === "exit") {
    exitInProgress = true;
    if (!compilationInProgress) {
      console.log("");
      self.close();
    }
  }
};

for await (const _ of watcher) {
  debounceCompileSass();
}

self.close();
