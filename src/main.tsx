import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <head>
      <title>Sol Devta</title>
      <link rel="shortcut icon" href="/image.png" type="image/x-icon" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@digitalocean" />
      <meta name="twitter:title" content="Sol Devta" />
      <meta
        name="twitter:description"
        content="Solana faucet for the devnet"
      />
      <meta
        name="twitter:image"
        content="https://eb7cw7lpb6.ufs.sh/f/y8KqGYrvxK6gAvttIlZ0RO8TyGqmZWDINApCnd1J6wFe3tSK"
      />
    </head>
    <App />
  </StrictMode>
);
