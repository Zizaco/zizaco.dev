import { type PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";
import { Navbar } from "../islands/Navbar.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html className="theme-light">
      <head>
        <meta charset="utf-8" />
        <title>zizaco.dev</title>
        <link rel="icon" href={asset("/favicon.ico")} />
        <meta
          name="description"
          content="Zizaco's website"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link rel="stylesheet" href={asset("/styles.css")} />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@mdi/font@6.4.95/css/materialdesignicons.min.css"
        />
      </head>
      <body>
        <header className="menu">
          <Navbar />
        </header>

        <Component />
      </body>
    </html>
  );
}
