import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { tokens } from "./tokens";
import { semanticTokens } from "./semantic-tokens";

export const config = defineConfig({
  globalCss: {
    "html, body": {
      bg: "surface.page",
      color: "text.primary",
      fontFamily: "body",
      overflowX: "hidden",
      minHeight: "100dvh",
    },
    body: {
      display: "flex",
      flexDirection: "column",
    },
  },
  theme: {
    semanticTokens,
    tokens,
  },
});

export const system = createSystem(defaultConfig, config);
