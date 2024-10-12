import { FreshContext, Handlers } from "$fresh/server.ts";

/**
 * Cached response in order to avoid unecessary fetching
 */
let cachedResponse: Response | undefined;

export const handler: Handlers = {
  /**
   * Return cached version of last response
   * @param _req
   * @param _ctx
   * @returns
   */
  async GET(_req: Request, _ctx: FreshContext) {
    if (cachedResponse) {
      return cachedResponse.clone();
    }

    const trackingScript = await fetch("https://ackee.lab.zmgsoft.com/trk.js");
    const resp = new Response(trackingScript.body);

    trackingScript.headers.entries()
      .filter(([k]) => k.toLowerCase() !== "date")
      .forEach(([k, v]) => resp.headers.set(k, v));

    resp.headers.set(
      "Cache-control",
      "public, max-age=31536000, immutable",
    );

    // Store a clone of response in cache
    cachedResponse = resp.clone();
    console.info("cached ackee-tracker script");

    return resp;
  },
};
