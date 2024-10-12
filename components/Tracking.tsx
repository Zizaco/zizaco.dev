import { asset } from "$fresh/runtime.ts";

export function Tracking() {
  return (
    <script
      async
      src={asset("/trk.js")}
      data-ackee-server="https://ackee.lab.zmgsoft.com"
      data-ackee-domain-id="d6807e96-ab3e-405a-ac17-dbf2af1895af"
    >
    </script>
  );
}
